-- =====================================================================
-- BIALGRUZ — Bezpieczne, tymczasowe linki do umów do podpisu elektronicznego
-- =====================================================================
-- Uruchom ten skrypt w edytorze SQL w Supabase (Dashboard → SQL Editor).
--
-- Co robi:
--   • link_token        — unikalny, losowy "klucz" dostępu do umowy (zamiast surowego ID).
--   • link_expires_at   — data ważności linku (po tym czasie umowa nie jest już dostępna
--                         publicznie, ale pozostaje w pełni dostępna w panelu admina).
--
-- Kolumny nie są wymagane i można je dodać, nawet jeśli są już rekordy w tabelach.
-- =====================================================================

-- Tabela zamówień kontenerowych ("Zamówienia" z polskim ó)
ALTER TABLE "Zamówienia"
  ADD COLUMN IF NOT EXISTS link_token text,
  ADD COLUMN IF NOT EXISTS link_expires_at timestamptz;

CREATE UNIQUE INDEX IF NOT EXISTS "Zamówienia_link_token_key"
  ON "Zamówienia" (link_token)
  WHERE link_token IS NOT NULL;

-- Tabela zamówień toalet
ALTER TABLE "ToaletyZamowienia"
  ADD COLUMN IF NOT EXISTS link_token text,
  ADD COLUMN IF NOT EXISTS link_expires_at timestamptz;

CREATE UNIQUE INDEX IF NOT EXISTS "ToaletyZamowienia_link_token_key"
  ON "ToaletyZamowienia" (link_token)
  WHERE link_token IS NOT NULL;

-- =====================================================================
-- (OPCJONALNIE) Nadaj tokeny istniejącym rekordom, aby stare umowy też
-- miały bezpieczne linki. Nie uruchamiaj ponownie po nadaniu tokenów —
-- UNIQUE INDEX zablokuje duplikaty. Odkomentuj poniższe bloki, aby użyć.
-- =====================================================================

-- UPDATE "Zamówienia"
-- SET link_expires_at = now() + interval '1 hour'
-- WHERE link_token IS NULL;

-- UPDATE "ToaletyZamowienia"
-- SET link_expires_at = now() + interval '1 hour'
-- WHERE link_token IS NULL;
