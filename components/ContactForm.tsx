"use client";

import { useState } from "react";
import { useLang, t } from "@/lib/i18n";
import { AVAILABLE_SPACES, PLAZA } from "@/lib/plaza-data";

export default function ContactForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", interest: defaultInterest, message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const tgDeepLink = `https://t.me/${PLAZA.telegramUsername}?text=${encodeURIComponent(
    `Plaza enquiry: ${form.name} ${form.phone} — ${form.interest}: ${form.message}`
  )}`;

  return (
    <div className="rounded-3xl bg-white border p-6 md:p-8">
      {state === "sent" ? (
        <p className="text-lg font-semibold">✓ {t(lang, "Sent! Owner notified on Telegram.", "पाठवले! मालकांना Telegram वर कळवले.")}</p>
      ) : (
        <form onSubmit={submit} className="grid gap-3">
          <input required placeholder={t(lang, "Your name", "तुमचे नाव")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl border px-4 py-3" />
          <input required placeholder={t(lang, "Phone number", "फोन नंबर")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl border px-4 py-3" />
          <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="rounded-xl border px-4 py-3">
            <option value="">{t(lang, "Interested in…", "कशात रस आहे…")}</option>
            {AVAILABLE_SPACES.map((s) => (
              <option key={s.id} value={s.id}>{lang === "mr" ? s.nameMr : s.name}</option>
            ))}
            <option value="other">{t(lang, "Other", "इतर")}</option>
          </select>
          <textarea placeholder={t(lang, "Message", "संदेश")} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-xl border px-4 py-3" />
          <button disabled={state === "sending"} className="rounded-full bg-black text-white py-3 font-semibold disabled:opacity-50">
            {state === "sending" ? "…" : t(lang, "Send → Notify owner on Telegram", "पाठवा → मालकांना Telegram वर")}
          </button>
          {state === "error" && (
            <div className="text-sm rounded-xl bg-amber-50 border p-3">
              <p>{t(lang, "Auto-send failed. Send manually:", "ऑटो-सेंड अयशस्वी. स्वतः पाठवा:")}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                <a className="rounded-full bg-[#eac39e] px-4 py-2 font-semibold" target="_blank" href={tgDeepLink}>Telegram</a>
                <a className="rounded-full bg-green-200 px-4 py-2 font-semibold" target="_blank" href={PLAZA.whatsapp}>WhatsApp</a>
                <a className="rounded-full bg-black text-white px-4 py-2" href={PLAZA.phoneHref}>{t(lang, "Call", "कॉल")}</a>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
