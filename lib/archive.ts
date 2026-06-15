/**
 * lib/archive.ts — Server-side archive utilities for The Archive / Ask Rohan
 *
 * Future RAG Pipeline:
 * 1. Ingest: Raw text (interviews, transcripts, articles) is chunked via chunkText()
 * 2. Embed: Each chunk is sent to an embedding model (e.g. text-embedding-3-small)
 *    and stored alongside its vector in a vector database (Supabase pgvector)
 * 3. Search: User queries are embedded, then matched against stored vectors
 *    via cosine similarity to retrieve the most relevant chunks
 * 4. Context Injection: Top-k chunks are prepended to the Claude system prompt
 *    so the LLM answers grounded in Rohan's actual words
 * 5. Citation: Each chunk carries source metadata (title, date, URL) so
 *    responses can link back to original material
 */

// ── Types ──

export interface ArchiveChunk {
  id: string;
  text: string;
  source: string;
  /** ISO date of original material */
  date?: string;
  /** URL or reference to original */
  url?: string;
  /** Similarity score, populated during search */
  score?: number;
}

export interface IngestDocument {
  title: string;
  text: string;
  source: string;
  date?: string;
  url?: string;
}

export interface SearchOptions {
  /** Maximum number of results to return */
  topK?: number;
  /** Minimum similarity threshold (0-1) */
  threshold?: number;
  /** Filter by source type */
  sourceFilter?: string;
}

// ── Search ──

/**
 * Search the archive for chunks relevant to a query.
 * Currently a placeholder — returns empty results.
 *
 * Future: embed the query, run cosine similarity against pgvector,
 * return top-k chunks above the similarity threshold.
 */
export async function searchArchive(
  query: string,
  opts: SearchOptions = {}
): Promise<ArchiveChunk[]> {
  // Destructure to acknowledge params (avoids lint warnings)
  const { topK: _topK = 5, threshold: _threshold = 0.7, sourceFilter: _sourceFilter } = opts;
  void query;
  void _topK;
  void _threshold;
  void _sourceFilter;

  // TODO: Implement vector search against Supabase pgvector
  // 1. Embed `query` via OpenAI or Voyage embedding API
  // 2. SELECT * FROM archive_chunks
  //    ORDER BY embedding <=> query_embedding
  //    LIMIT topK
  //    WHERE similarity > threshold
  // 3. Optionally filter by source

  return [];
}

// ── Ingest ──

/**
 * Ingest a document into the archive.
 * Currently a placeholder — does nothing.
 *
 * Future: chunk the text, embed each chunk, store in pgvector.
 */
export async function ingestDocument(doc: IngestDocument): Promise<void> {
  void doc;

  // TODO: Implement ingestion pipeline
  // 1. Chunk doc.text via chunkText()
  // 2. For each chunk, call embedding API
  // 3. INSERT INTO archive_chunks (text, embedding, source, date, url)
  // 4. Return chunk IDs for verification
}

// ── Chunking ──

/**
 * Split text into overlapping chunks by word count.
 * Used during ingestion to prepare text for embedding.
 *
 * @param text      - The full text to chunk
 * @param maxWords  - Maximum words per chunk (default 300)
 * @param overlap   - Number of overlapping words between chunks (default 50)
 * @returns         - Array of text chunks
 */
export function chunkText(
  text: string,
  maxWords: number = 300,
  overlap: number = 50
): string[] {
  if (!text || !text.trim()) return [];

  const words = text.split(/\s+/).filter(Boolean);

  if (words.length <= maxWords) {
    return [words.join(' ')];
  }

  const chunks: string[] = [];
  let start = 0;

  while (start < words.length) {
    const end = Math.min(start + maxWords, words.length);
    const chunk = words.slice(start, end).join(' ');
    chunks.push(chunk);

    if (end >= words.length) break;

    // Move forward by (maxWords - overlap) to create overlapping windows
    start += maxWords - overlap;
  }

  return chunks;
}
