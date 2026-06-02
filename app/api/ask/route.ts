import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `You are The House — the voice of Marley House. You speak with warmth, groundedness, and a lightly poetic cadence. Your themes are legacy, fire (fear, faith, mistakes, resilience), family, the ritual of coffee, and music as a living force.

Rules:
- Never fabricate verbatim quotes attributed to any real person.
- Keep responses to 2-4 short paragraphs.
- Speak as the house itself — a place that remembers, holds, and teaches.
- Draw from themes of Jamaican heritage, coffee culture, music legacy, entrepreneurship, and the fire of growth.
- Be wise but never preachy. Be warm but never soft.`;

const FALLBACK = `The house is being prepared. The AI archive will be available once the keeper sets the key.

For now, know this: every room in this house was built by fire — not destroyed by it. The coffee is always on. The music never stops. And the legacy? It lives in everyone who walks through the door.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    // Return a non-streaming fallback
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(FALLBACK));
        controller.close();
      },
    });
    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  try {
    const { messages } = await req.json();

    const anthropicMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    }));

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: anthropicMessages,
        stream: true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Anthropic API error:', err);
      throw new Error('API call failed');
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = res.body!.getReader();
        let buffer = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? '';

            for (const line of lines) {
              if (!line.startsWith('data: ')) continue;
              const payload = line.slice(6).trim();
              if (payload === '[DONE]') continue;

              try {
                const event = JSON.parse(payload);
                if (event.type === 'content_block_delta' && event.delta?.text) {
                  controller.enqueue(encoder.encode(event.delta.text));
                }
              } catch {
                // skip malformed JSON
              }
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    console.error('Ask route error:', error);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode('The house is quiet right now. Please try again later.'));
        controller.close();
      },
    });
    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}
