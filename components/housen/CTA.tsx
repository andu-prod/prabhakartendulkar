"use client";
import { useLang, t } from "@/lib/i18n";
import { PLAZA } from "@/lib/plaza-data";

export default function CTA() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="relative overflow-hidden rounded-3xl text-white text-center px-6 py-16 bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1400&q=80)" }} />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-semibold">{t(lang, "Start Your Business at the Plaza", "प्लाझामध्ये व्यवसाय सुरू करा")}</h2>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <a href="/spaces" className="rounded-full bg-[#eac39e] px-6 py-3 font-semibold text-black">{t(lang, "Explore Spaces", "जागा पाहा")}</a>
            <a href={PLAZA.phoneHref} className="rounded-full bg-white px-6 py-3 font-semibold text-black">{t(lang, "Call Owner", "मालकांना कॉल करा")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
