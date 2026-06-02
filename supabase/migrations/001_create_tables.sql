-- Marley House — Part II: Lead capture tables
-- Run via Supabase dashboard or `supabase db push`

create table if not exists house_signups (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  source text not null,  -- 'hero' | 'footer' | 'exit_intent' | 'family'
  created_at timestamptz default now()
);

create table if not exists blend_quiz_results (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  name text,
  answers jsonb not null,
  blend text not null,
  created_at timestamptz default now()
);

create table if not exists wholesale_inquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  company text,
  type text not null,  -- 'wholesale' | 'press' | 'partnership'
  volume text,
  message text,
  created_at timestamptz default now()
);

-- RLS: allow anonymous INSERT only
alter table house_signups enable row level security;
alter table blend_quiz_results enable row level security;
alter table wholesale_inquiries enable row level security;

create policy "Allow anonymous insert" on house_signups
  for insert with check (true);

create policy "Allow anonymous insert" on blend_quiz_results
  for insert with check (true);

create policy "Allow anonymous insert" on wholesale_inquiries
  for insert with check (true);
