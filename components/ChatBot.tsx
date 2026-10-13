"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { answerFor, QUICK_REPLIES } from "@/lib/chat-knowledge";
import { useLang } from "@/lib/i18n";

interface Msg { from: "bot" | "user"; text: string }

export default function ChatBot() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: lang === "mr" ? "नमस्कार! प्लाझाबद्दल विचारा — जागा, ATM, पत्ता." : "Hi! Ask about spaces, ATM godown, address." },
  ]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { from: "user", text: q }, { from: "bot", text: answerFor(q, lang) }]);
    setInput("");
  }

  if (!open)
    return (
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-black text-white shadow-xl" aria-label="Chat">
        <MessageCircle />
      </button>
    );

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[320px] overflow-hidden rounded-3xl border bg-white shadow-2xl">
      <div className="flex items-center justify-between bg-black px-4 py-3 text-white">
        <p className="text-sm font-semibold">Plaza Assistant · {lang === "mr" ? "मराठी/EN" : "EN/मराठी"}</p>
        <button onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
      </div>
      <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
        {msgs.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 ${m.from === "bot" ? "bg-neutral-100" : "bg-black text-white ml-auto"}`}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar px-3 pb-2">
        {QUICK_REPLIES.map((q) => (
          <button key={q.en} onClick={() => send(lang === "mr" ? q.mr : q.en)} className="whitespace-nowrap rounded-full bg-[#f4f0e9] border px-3 py-1 text-xs">
            {lang === "mr" ? q.mr : q.en}
          </button>
        ))}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 p-3 border-t">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="…" className="flex-1 rounded-full border px-3 py-2 text-sm" />
        <button className="rounded-full bg-black text-white px-4 text-sm">→</button>
      </form>
    </div>
  );
}
