"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/components/supabaseClient";
import { UMOWA_TYPES, buildUmowaHtml, downloadUmowaPdf } from "@/components/umowaPdf";

export default function UmowaSignPage() {
  const { typ, id } = useParams();
  const cfg = UMOWA_TYPES[typ] || UMOWA_TYPES.toaleta;
  const table = cfg.table;

  const [order, setOrder] = useState(null);
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error: err } = await supabase.from(table).select("*").eq("id", id).single();
      if (err || !data) {
        setError("Nie znaleziono zamówienia.");
        setLoading(false);
        return;
      }
      setOrder(data);
      try {
        setHtml(await buildUmowaHtml(cfg.map(data), cfg.template));
      } catch {
        setError("Nie udało się wczytać treści umowy.");
      }
      setLoading(false);
    })();
  }, [table, id]);

  const data = useMemo(() => (order ? cfg.map(order) : null), [order, cfg]);

  async function handleSubmit() {
    if (!name.trim()) return setError("Wpisz imię i nazwisko osoby podpisującej.");
    if (!accepted) return setError("Zaznacz akceptację warunków umowy.");
    setError("");
    setSubmitting(true);
    try {
      const signedAt = new Date().toLocaleString("pl-PL");
      await downloadUmowaPdf(
        { ...data, _signature: name.trim(), _signedAt: signedAt },
        `umowa_${order.numerZlecenia || id}.pdf`,
        cfg.template
      );
      // Zapis podpisu (imię + data/godzina) do zamówienia
      const message = `${order.message ? order.message + "\n" : ""}Podpisano elektronicznie przez: ${name.trim()} — ${signedAt}`;
      await supabase.from(table).update({ message }).eq("id", id);
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Nie udało się wygenerować / zapisać umowy. Spróbuj ponownie.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-[#e9edf1] text-[#34495e]">Wczytywanie umowy…</div>;
  }

  if (error && !order) {
    return <div className="flex min-h-screen items-center justify-center bg-[#e9edf1] text-[#c0392b]">{error}</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#e9edf1]">
      <div className="mx-auto w-full max-w-[1000px] flex-1 px-3 py-6">
        {/* Podgląd umowy (A4) */}
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg">
          <iframe title="Umowa" srcDoc={html} className="h-[70vh] w-full border-0" />
        </div>

        {done ? (
          <div className="mt-6 rounded-lg border border-green-600/40 bg-white p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-green-700">Umowa podpisana!</h2>
            <p className="text-[#34495e]">Dziękujemy. PDF został pobrany, a umowa zapisana w systemie BIALGRUZ.</p>
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-black/10 bg-white p-5 sm:p-7">
            <label className="mb-1.5 block text-sm font-semibold text-[#1a252f]">
              Imię i nazwisko osoby podpisującej <span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              placeholder="Wpisz imię i nazwisko"
              className="w-full rounded-md border border-black/20 px-4 py-3 text-[#1a252f] outline-none focus:border-[#eab308] focus:ring-2 focus:ring-[#eab308]/30"
            />

            <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-[#34495e]">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => { setAccepted(e.target.checked); setError(""); }}
                className="mt-0.5 h-5 w-5 accent-[#eab308]"
              />
              <span className="font-medium">
                Akceptuję warunki umowy i deklaruję, że zaznaczenie tego pola jest równoznaczne z podpisem własnoręcznym.
              </span>
            </label>

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="mt-6 w-full rounded-md bg-[#eab308] py-4 text-center font-bold uppercase tracking-wide text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Przetwarzanie…" : "Akceptuję i pobierz umowę (PDF)"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
