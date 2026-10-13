"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { PLAZA } from "@/lib/plaza-data";

export default function Navbar() {
  const { lang, setLang } = useLang();
  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 pt-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur text-lg font-black">
            P
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">Tendulkar Plaza</span>
            <span className="block text-[11px] opacity-70">Pandharpur</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-black/40 backdrop-blur px-2 py-1.5 text-[13px] text-white">
          <Link href="/" className="px-4 py-1.5 rounded-full bg-white/15">{t(lang, "Home", "मुख्य")}</Link>
          <Link href="/spaces" className="px-4 py-1.5 rounded-full hover:bg-white/10">{t(lang, "Spaces", "जागा")}</Link>
          <Link href="/#tenants" className="px-4 py-1.5 rounded-full hover:bg-white/10">{t(lang, "Tenants", "भाडेकरू")}</Link>
          <Link href="/contact" className="px-4 py-1.5 rounded-full hover:bg-white/10">{t(lang, "Contact", "संपर्क")}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="rounded-full bg-black/40 backdrop-blur p-1 text-xs text-white flex">
            <button onClick={() => setLang("en")} className={`px-3 py-1 rounded-full ${lang === "en" ? "bg-white text-black" : ""}`}>EN</button>
            <button onClick={() => setLang("mr")} className={`px-3 py-1 rounded-full ${lang === "mr" ? "bg-white text-black" : ""}`}>मराठी</button>
          </div>
          <a href={PLAZA.phoneHref} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#eac39e] px-4 py-2 text-sm font-semibold text-black">
            <Phone size={15} /> {t(lang, "Book Visit", "भेट बुक करा")}
          </a>
        </div>
      </div>
    </header>
  );
}
