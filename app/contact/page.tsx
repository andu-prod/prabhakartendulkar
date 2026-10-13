"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { useLang, t } from "@/lib/i18n";
import { PLAZA } from "@/lib/plaza-data";

function ContactInner() {
  const { lang } = useLang();
  const params = useSearchParams();
  const interest = params.get("interest") ?? "";
  return (
    <div className="pt-24 mx-auto max-w-7xl px-4 pb-16 grid md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-4xl font-semibold">{t(lang, "Contact", "संपर्क")} <span className="font-serif-it font-normal">{t(lang, "Owner", "मालक")}</span></h1>
        <p className="mt-3 text-neutral-600">{lang === "mr" ? PLAZA.addressMr : PLAZA.address}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={PLAZA.phoneHref} className="rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold">📞 {PLAZA.phoneDisplay}</a>
          <a href={PLAZA.mapsUrl} target="_blank" className="rounded-full bg-white border px-5 py-2.5 text-sm font-semibold">Directions →</a>
          <a href={PLAZA.whatsapp} target="_blank" className="rounded-full bg-green-200 px-5 py-2.5 text-sm font-semibold">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm text-neutral-500">{t(lang, "Form sends an instant Telegram message to the owner's phone.", "फॉर्म भरताच मालकांच्या फोनवर Telegram संदेश जातो.")}</p>
      </div>
      <ContactForm defaultInterest={interest} />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactInner />
    </Suspense>
  );
}
