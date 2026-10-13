"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AVAILABLE_SPACES } from "@/lib/plaza-data";
import { useLang, t } from "@/lib/i18n";

function sqftLabel(areaSqft: number | null, lang: "en" | "mr") {
  if (areaSqft) return `${areaSqft} sq.ft`;
  return t(lang, "Sqft on request", "क्षेत्रफळ विचारावे");
}

export default function FeaturedSpaces() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {t(lang, "Featured", "ठळक")} <span className="font-serif-it font-normal">{t(lang, "Spaces", "जागा")}</span>
        </h2>
        <div className="text-right">
          <p className="hidden md:block text-sm text-neutral-600 max-w-xs">
            {t(lang, "Anchor tenants in place. Rent is on enquiry — direct from owner.", "अँकर भाडेकरू हजर. भाडे चौकशीवर — थेट मालकांकडून.")}
          </p>
          <Link href="/spaces" className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#eac39e] px-4 py-2 text-sm font-semibold">
            {t(lang, "View All", "सर्व पाहा")} <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AVAILABLE_SPACES.map((s) => (
          <Link key={s.id} href={`/contact?interest=${s.id}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm border">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{lang === "mr" ? s.nameMr : s.name}</p>
                <span className="text-xs rounded-full bg-green-100 text-green-800 px-2 py-1">{t(lang, "Available", "उपलब्ध")}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{s.floor} · {sqftLabel(s.areaSqft, lang)} · {s.type}</p>
              <p className="mt-1 text-sm font-semibold">{t(lang, "Rent: On Enquiry", "भाडे: चौकशीवर")}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
