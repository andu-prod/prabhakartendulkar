"use client";
import { useLang, t } from "@/lib/i18n";

export default function StatsDark() {
  const { lang } = useLang();
  const stats = [
    { big: "Jio + Equitas", small: t(lang, "Anchor tenants occupied", "अँकर भाडेकरू") },
    { big: "Nave Peth", small: t(lang, "Prime Pandharpur address", "पंढरपूर मुख्य पत्ता") },
    { big: "4.5★", small: t(lang, "Google rating", "गुगल रेटिंग") },
    { big: "ATM ✓", small: t(lang, "One ATM running, one ATM-size space vacant", "एक ATM सुरू, एक जागा रिकामी") },
  ];
  return (
    <section className="bg-[#0e0e12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-md">
          {t(lang, "Building Spaces", "इमारतीतील जागा")} <span className="font-serif-it font-normal">{t(lang, "That Tell Stories.", "ज्या बोलतात.")}</span>
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.big} className="rounded-2xl border border-white/15 p-6 bg-white/[0.03]">
              <p className="text-3xl font-bold">{s.big}</p>
              <p className="mt-2 text-sm text-white/60">{s.small}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
