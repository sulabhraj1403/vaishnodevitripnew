-- Mata Vaishno Devi Group Trip
-- Run this whole file in Supabase SQL Editor.

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  time time,
  place text not null,
  category text not null check (category in ('Other','Ticket','Hotel')),
  amount numeric(12,2) not null check (amount >= 0),
  paid_by text,
  families text[] not null,
  created_at timestamptz not null default now()
);

alter table public.expenses enable row level security;

-- Everyone can see trip expenses.
drop policy if exists "Public can read expenses" on public.expenses;
create policy "Public can read expenses"
on public.expenses for select
to anon, authenticated
using (true);

-- Only signed-in users can create/delete expenses.
-- Keep only the admin account(s) you create in Supabase Authentication.
drop policy if exists "Admins can insert expenses" on public.expenses;
create policy "Admins can insert expenses"
on public.expenses for insert
to authenticated
with check (true);

drop policy if exists "Admins can delete expenses" on public.expenses;
create policy "Admins can delete expenses"
on public.expenses for delete
to authenticated
using (true);

-- Helpful index for sorting.
create index if not exists expenses_created_at_idx on public.expenses (created_at desc);
