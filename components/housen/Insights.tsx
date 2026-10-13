"use client";
import { useState } from "react";
import { useLang, t } from "@/lib/i18n";

const SLIDES = [
  { en: "Bank + telecom anchors mean your shop opens with footfall on day one.", mr: "बँक + टेलिकॉम अँकरमुळे पहिल्याच दिवसापासून गर्दी." },
  { en: "One ATM already runs here — the second ATM-size shutter is vacant.", mr: "एक ATM आधीच सुरू — दुसरी ATM योग्य शटर जागा रिकामी." },
  { en: "Nave Peth, Pandharpur — market road with pilgrim-season surge.", mr: "नवी पेठ, पंढरपूर — यात्राकाळात प्रचंड वर्दळ." },
];

export default function Insights() {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="relative overflow-hidden rounded-3xl bg-black text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80)" }} />
        <div className="relative p-8 md:p-12 max-w-xl">
          <p className="font-serif-it text-2xl">{t(lang, "Smart Plaza Insights", "स्मार्ट प्लाझा माहिती")}</p>
          <p className="mt-4 text-lg min-h-16">{lang === "mr" ? SLIDES[i].mr : SLIDES[i].en}</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm">{i + 1}/{SLIDES.length}</span>
            <button onClick={() => setI((i + 1) % SLIDES.length)} className="rounded-full bg-[#eac39e] px-4 py-2 text-sm font-semibold text-black">→</button>
            <button onClick={() => setI((i - 1 + SLIDES.length) % SLIDES.length)} className="rounded-full bg-white/20 px-4 py-2 text-sm">←</button>
          </div>
        </div>
      </div>
    </section>
  );
}
