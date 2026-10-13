"use client";

import { ArrowUpRight, MapPin, Star, Phone } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { PLAZA } from "@/lib/plaza-data";

export default function Hero() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-10">
        <h1 className="font-giant text-[17vw] md:text-[9rem] uppercase text-white/95">
          {t(lang, "PLAZA", "प्लाझा")}
        </h1>
        <p className="font-serif-it text-2xl md:text-3xl -mt-2 text-[#eac39e]">
          {t(lang, "Prabhakar Tendulkar, Pandharpur", "प्रभाकर तेंडुलकर, पंढरपूर")}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <a href="/spaces" className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 font-semibold text-black">
            {t(lang, "Explore Spaces", "जागा पाहा")} <ArrowUpRight size={16} />
          </a>
          <a href={PLAZA.mapsUrl} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur px-4 py-2 text-white">
            <MapPin size={15} /> Nave Peth, Pandharpur
          </a>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-2">
            <Star size={14} className="fill-yellow-400 text-yellow-400" /> {PLAZA.rating} Google
          </span>
          <a href={PLAZA.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-[#eac39e] px-4 py-2 font-semibold text-black">
            <Phone size={15} /> {PLAZA.phoneDisplay}
          </a>
        </div>

        {/* dot callouts like Housen */}
        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-[12px]">
          {[
            t(lang, "Jio Store + Jio office — anchor telecom", "जिओ स्टोअर + जिओ ऑफिस"),
            t(lang, "Equitas Bank ground floor — daily footfall", "इक्विटास बँक तळमजला"),
            t(lang, "Gym + ATM + Insurance in-house", "जिम + ATM + विमा"),
          ].map((s) => (
            <div key={s} className="rounded-xl bg-white/10 backdrop-blur p-3 border border-white/15">
              <span className="inline-block h-2 w-2 rounded-full bg-[#eac39e] mr-2" />
              {s}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] opacity-60">
          {t(lang, "Replace hero photo with your building photo: put plaza-hero.jpg in /public.", "हीरो फोटो बदला: /public मध्ये plaza-hero.jpg टाका.")}
        </p>
      </div>
    </section>
  );
}
