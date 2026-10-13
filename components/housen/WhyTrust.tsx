"use client";
import { useLang, t } from "@/lib/i18n";

const IMGS = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
];

export default function WhyTrust() {
  const { lang } = useLang();
  const cards = [
    { img: IMGS[0], title: t(lang, "Direct from Owner", "थेट मालकांकडून"), desc: t(lang, "No brokerage. Talk to the owner directly.", "दलाली नाही. थेट मालकांशी बोला.") },
    { img: IMGS[1], title: t(lang, "Bank & ATM Ready", "बँक व ATM योग्य"), desc: t(lang, "Compliant commercial space, proven footfall.", "अधिकृत व्यावसायिक जागा, सिद्ध वर्दळ.") },
    { img: IMGS[2], title: t(lang, "Pilgrim-town Footfall", "यात्रानगरी वर्दळ"), desc: t(lang, "Pandharpur's Nave Peth market location.", "पंढरपूर नवी पेठ बाजारपेठ.") },
  ];
  return (
    <section id="tenants" className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-3xl md:text-4xl font-semibold">{t(lang, "Why Clients", "ग्राहक का")} <span className="font-serif-it font-normal">{t(lang, "Trust Us", "विश्वास ठेवतात")}</span></h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div key={c.title} className="rounded-2xl overflow-hidden bg-white border">
            <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url(${c.img})` }} />
            <div className="p-4 flex justify-between gap-3">
              <div><p className="font-semibold">{c.title}</p><p className="text-sm text-neutral-600">{c.desc}</p></div>
              <span className="text-xs text-neutral-400">/0{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
