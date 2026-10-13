import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").slice(0, 100);
  const phone = String(body?.phone ?? "").slice(0, 30);
  const interest = String(body?.interest ?? "").slice(0, 60);
  const message = String(body?.message ?? "").slice(0, 1000);

  if (!name || !phone) {
    return Response.json({ error: "name and phone required" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Dev fallback: if env not configured, log and pretend success
  // so the UI works locally without a bot.
  if (!token || !chatId) {
    console.log("[enquire]", { name, phone, interest, message });
    return Response.json({ ok: true, delivered: false });
  }

  const text =
    `🏢 New Plaza enquiry\n` +
    `Name: ${name}\nPhone: ${phone}\nInterest: ${interest || "-"}\nMessage: ${message || "-"}`;

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!tg.ok) {
    return Response.json({ error: "telegram failed" }, { status: 502 });
  }
  return Response.json({ ok: true, delivered: true });
}
