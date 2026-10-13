"use client";
import { useLang, t } from "@/lib/i18n";
import { PLAZA } from "@/lib/plaza-data";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-[#0e0e12] text-white rounded-t-[2rem]">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-bold">Tendulkar Plaza</p>
            <p className="mt-2 text-white/60">{lang === "mr" ? PLAZA.addressMr : PLAZA.address}</p>
            <p className="mt-2 text-white/60">{PLAZA.phoneDisplay}</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/">Home</a><a href="/spaces">Spaces</a><a href="/contact">Contact</a>
          </div>
          <div className="flex flex-col gap-2 text-white/70">
            <span>Jio Retail · Reliance Jio</span><span>Equitas Bank</span><span>Gym · ATM · Insurance</span>
          </div>
          <div>
            <p>{t(lang, "Quick enquiry", "त्वरित चौकशी")}</p>
            <a href="/contact" className="mt-2 inline-block rounded-full bg-[#eac39e] px-4 py-2 font-semibold text-black">{t(lang, "Enquire →", "चौकशी →")}</a>
          </div>
        </div>
        <p className="font-giant uppercase text-[18vw] md:text-[10rem] text-white/10 leading-none text-center select-none">PLAZA</p>
        <p className="text-center text-xs text-white/40">© 2026 {PLAZA.name}</p>
      </div>
    </footer>
  );
}
