'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, Send, Loader2, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { askSubmit } from '@/lib/tracking';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedPrompts = [
  'What did your father teach you about business?',
  'How did Marley Coffee start?',
  'What is Lion Order really about?',
  'Tell me about playing football at Miami.',
  'What does the ritual of coffee mean to you?',
  'How do you think about legacy with your children?',
];

export default function AskRohanPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [email, setEmail] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || streaming) return;

    const newCount = questionCount + 1;
    setQuestionCount(newCount);

    // After 3 questions, show email capture (once)
    if (newCount >= 3 && !emailCaptured && !showEmailCapture) {
      setShowEmailCapture(true);
    }

    const userMsg: Message = { role: 'user', content: text.trim() };
    const allMessages = [...messages, userMsg];
    setMessages([...allMessages, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);
    askSubmit();

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!res.ok || !res.body) throw new Error('Failed');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });
        setMessages([...allMessages, { role: 'assistant', content: fullText }]);
      }
    } catch {
      setMessages([
        ...allMessages,
        { role: 'assistant', content: 'Rohan is unavailable right now. Please try again later.' },
      ]);
    } finally {
      setStreaming(false);
    }
  }, [messages, streaming, questionCount, emailCaptured, showEmailCapture]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'ask-rohan' }),
      });
    } catch {
      // Silent fail — don't block the experience
    }
    setEmailCaptured(true);
    setShowEmailCapture(false);
  };

  const showWelcome = messages.length === 0;

  return (
    <div className="relative flex flex-col h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--gold)] blur-[100px] opacity-[0.05] pointer-events-none" />

      {/* Header */}
      <div className="relative px-6 pt-14 pb-4 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={16} className="text-[var(--gold)]" strokeWidth={1.5} />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] font-medium">
            AI Concierge
          </p>
        </div>
        <h1 className="font-display text-2xl text-[var(--cream)] font-light">
          Ask Rohan
        </h1>
        <p className="text-[var(--dim)] text-[11px] mt-1 leading-relaxed max-w-[280px]">
          Powered by The Archive — answers from real interviews, podcasts, and philosophy
        </p>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-4">
        <AnimatePresence mode="popLayout">
          {showWelcome && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="py-6"
            >
              <p className="text-[var(--dim)] text-sm font-light mb-6 leading-relaxed">
                Ask about coffee, business, family, football, Rastafari, or anything
                Rohan has spoken about publicly.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="text-left rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3 text-[12px] text-[var(--cream)] font-light hover:border-[var(--gold)]/30 transition-colors leading-snug"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-3 ${msg.role === 'user' ? 'flex justify-end' : ''}`}
            >
              <div
                className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                  msg.role === 'user'
                    ? 'bg-[var(--gold)]/10 border border-[var(--gold)]/20'
                    : 'bg-[var(--panel)] border border-[var(--line)]'
                }`}
              >
                {msg.role === 'assistant' && msg.content === '' ? (
                  <div className="flex items-center gap-2">
                    <Loader2 size={14} className="text-[var(--gold)] animate-spin" />
                    <span className="text-[var(--dim)] text-sm font-light">Rohan is thinking...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-light leading-relaxed whitespace-pre-wrap text-[var(--cream)]">
                      {msg.content}
                      {streaming && i === messages.length - 1 && msg.role === 'assistant' && (
                        <span className="inline-block w-0.5 h-4 bg-[var(--gold)] ml-0.5 animate-pulse align-middle" />
                      )}
                    </p>
                    {/* Sources placeholder — shown after assistant finishes */}
                    {msg.role === 'assistant' && msg.content !== '' && !(streaming && i === messages.length - 1) && (
                      <div className="mt-2 pt-2 border-t border-[var(--line)]">
                        <div className="flex items-center gap-1.5">
                          <BookOpen size={10} className="text-[var(--dim)]" />
                          <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--dim)] font-medium">
                            Sources: The Archive
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Email capture interstitial */}
      <AnimatePresence>
        {showEmailCapture && !emailCaptured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-x-0 bottom-16 mx-4 z-20"
          >
            <div className="rounded-2xl border border-[var(--gold)]/20 bg-[var(--bg)]/95 backdrop-blur-md p-5 shadow-lg shadow-black/40">
              <button
                onClick={() => setShowEmailCapture(false)}
                className="absolute top-3 right-3 text-[var(--dim)] hover:text-[var(--cream)] transition-colors"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
              <p className="text-[var(--cream)] text-sm font-display mb-1">
                Enjoying the conversation?
              </p>
              <p className="text-[var(--dim)] text-[11px] mb-3 leading-relaxed">
                Join the Inner Circle for unlimited access to Ask Rohan and The Archive.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-[var(--panel)] border border-[var(--line)] rounded-lg px-3 py-2 text-xs text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[var(--gold)] text-[var(--bg)] font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="shrink-0 px-4 pb-3 pt-2 border-t border-[var(--line)]">
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
          className="flex items-center gap-2 rounded-xl bg-[var(--panel)] border border-[var(--line)] px-3 py-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Rohan anything..."
            className="flex-1 bg-transparent text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none font-light"
          />
          <button
            type="submit"
            disabled={!input.trim() || streaming}
            className="p-1.5 rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] disabled:opacity-30 transition-opacity"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
