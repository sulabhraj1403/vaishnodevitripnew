-- Run this once in Supabase SQL Editor.
ALTER TABLE public.expenses ADD COLUMN IF NOT EXISTS item TEXT;
NOTIFY pgrst, 'reload schema';
