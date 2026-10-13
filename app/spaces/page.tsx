"use client";

import { AVAILABLE_SPACES, OCCUPIED } from "@/lib/plaza-data";
import { useLang, t } from "@/lib/i18n";
import Link from "next/link";

export default function SpacesPage() {
  const { lang } = useLang();
  return (
    <div className="pt-24 mx-auto max-w-7xl px-4 pb-16">
      <h1 className="text-4xl font-semibold">
        {t(lang, "All", "सर्व")} <span className="font-serif-it font-normal">{t(lang, "Spaces", "जागा")}</span>
      </h1>
      <p className="mt-2 text-neutral-600">{t(lang, "Rent: on enquiry. Tap a card to enquire.", "भाडे: चौकशीवर. चौकशीसाठी कार्ड दाबा.")}</p>

      <h2 className="mt-8 font-semibold text-green-800">● {t(lang, "Available", "उपलब्ध")}</h2>
      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AVAILABLE_SPACES.map((s) => (
          <Link key={s.id} href={`/contact?interest=${s.id}`} className="rounded-2xl overflow-hidden bg-white border">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="p-4">
              <p className="font-semibold">{lang === "mr" ? s.nameMr : s.name}</p>
              <p className="text-sm text-neutral-600">{s.floor} · {s.areaSqft ? `${s.areaSqft} sq.ft` : t(lang, "Sqft on request (you fill)", "क्षेत्रफळ (तुम्ही भरा)")} · {s.type}</p>
              <p className="text-sm font-semibold mt-1">{t(lang, "Rent: On Enquiry", "भाडे: चौकशीवर")}</p>
              <p className="text-sm text-neutral-600 mt-1">{lang === "mr" ? s.blurbMr : s.blurb}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-10 font-semibold text-neutral-600">● {t(lang, "Occupied — proof of footfall", "कार्यरत — वर्दळीचा पुरावा")}</h2>
      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {OCCUPIED.map((s) => (
          <div key={s.id} className="rounded-2xl overflow-hidden bg-white border opacity-90">
            <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="p-3">
              <p className="text-sm font-semibold">{lang === "mr" ? s.nameMr : s.name}</p>
              <p className="text-xs text-neutral-500">{s.floor} · {s.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
