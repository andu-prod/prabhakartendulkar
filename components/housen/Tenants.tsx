"use client";
import { useLang, t } from "@/lib/i18n";
import { OCCUPIED } from "@/lib/plaza-data";

export default function Tenants() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <h2 className="text-3xl md:text-4xl font-semibold">{t(lang, "Occupied by", "येथे कार्यरत")} <span className="font-serif-it font-normal">{t(lang, "Trusted Brands", "विश्वासार्ह ब्रँड")}</span></h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {OCCUPIED.map((s) => (
          <div key={s.id} className="rounded-2xl overflow-hidden bg-white border">
            <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="p-3">
              <p className="text-sm font-semibold">{lang === "mr" ? s.nameMr : s.name}</p>
              <p className="text-xs text-neutral-500">{s.floor} · {s.type}</p>
              <span className="mt-1 inline-block text-[11px] rounded-full bg-neutral-100 px-2 py-0.5">{t(lang, "Occupied", "कार्यरत")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
