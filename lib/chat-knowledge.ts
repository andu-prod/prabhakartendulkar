export interface ChatRule {
  match: string[];
  en: string;
  mr: string;
}

export const QUICK_REPLIES = [
  { en: "Available spaces?", mr: "रिकाम्या जागा?" },
  { en: "ATM godown?", mr: "ATM गोडाऊन?" },
  { en: "Contact owner", mr: "मालकांशी संपर्क" },
  { en: "Address / Timings", mr: "पत्ता / वेळ" },
] as const;

export const CHAT_RULES: ChatRule[] = [
  {
    match: ["avail", "vacant", "rent", "रिकाम", "भाड"],
    en: "Vacant now: Full Floor, Office, Small Office, and an ATM-size shutter godown. Rent is on enquiry — tap Enquire or call 070204 44829.",
    mr: "सध्या रिकामे: पूर्ण मजला, ऑफिस, छोटे ऑफिस आणि ATM योग्य शटर गोडाऊन. भाडे चौकशीवर — Enquire दाबा किंवा 070204 44829 वर कॉल करा.",
  },
  {
    match: ["atm", "godown", "shutter", "गोडाऊन"],
    en: "Yes — one street-facing shutter godown (ATM size) is vacant. One ATM is already running in the plaza, so footfall is proven.",
    mr: "हो — रस्त्यालगत ATM योग्य एक शटर गोडाऊन रिकामे आहे. एक ATM आधीच सुरू आहे, त्यामुळे वर्दळ सिद्ध आहे.",
  },
  {
    match: ["jio", "reliance", "जिओ"],
    en: "Reliance Jio rents a full floor, and the owner runs a Jio products retail shop in the building.",
    mr: "रिलायन्स जिओने पूर्ण मजला भाड्याने घेतला आहे, आणि मालकांचे जिओ उत्पादनांचे रिटेल दुकान इमारतीत आहे.",
  },
  {
    match: ["bank", "equitas", "बँक"],
    en: "Equitas Small Finance Bank occupies the ground floor — daily customer footfall.",
    mr: "इक्विटास स्मॉल फायनान्स बँक तळमजल्यावर आहे — रोज ग्राहकांची वर्दळ.",
  },
  {
    match: ["gym", "basement", "जिम"],
    en: "The basement is a running gym.",
    mr: "तळघरात जिम सुरू आहे.",
  },
  {
    match: ["insurance", "star", "nippon", "विमा"],
    en: "Reliance Nippon Life + Star Health insurance services are available in the plaza.",
    mr: "प्लाझामध्ये रिलायन्स निप्पॉन लाईफ + स्टार हेल्थ विमा सेवा उपलब्ध आहेत.",
  },
  {
    match: ["address", "location", "reach", "map", "पत्ता", "कुठे"],
    en: "4256/a2, Nave Peth, Pandharpur 413304. Tap Directions on the site for Google Maps.",
    mr: "४२५६/अ२, नवी पेठ, पंढरपूर ४१३३०४. गुगल मॅपसाठी साइटवर Directions दाबा.",
  },
  {
    match: ["time", "hour", "open", "वेळ", "उघड"],
    en: "Shops generally 9am–9pm. Bank/gym have their own hours. Call 070204 44829 to confirm.",
    mr: "दुकाने साधारण सकाळी ९–रात्री ९. बँक/जिमच्या वेळा वेगळ्या. खात्रीसाठी 070204 44829 वर कॉल करा.",
  },
  {
    match: ["contact", "owner", "phone", "call", "संपर्क", "मालक", "फोन"],
    en: "Call 070204 44829 or fill the Enquire form — the owner gets an instant Telegram message.",
    mr: "070204 44829 वर कॉल करा किंवा Enquire फॉर्म भरा — मालकांना लगेच Telegram संदेश जातो.",
  },
  {
    match: ["marathi", "मराठी"],
    en: "हो, मी मराठीत बोलतो. विचारा — जागा, भाडे, पत्ता.",
    mr: "हो, मी मराठीत बोलतो. विचारा — जागा, भाडे, पत्ता.",
  },
];

export const FALLBACK = {
  en: "I can help with spaces, ATM godown, address, or contacting the owner. Or call 070204 44829.",
  mr: "मी जागा, ATM गोडाऊन, पत्ता किंवा मालकांशी संपर्क याबद्दल मदत करू शकतो. किंवा 070204 44829 वर कॉल करा.",
};

export function answerFor(input: string, lang: "en" | "mr"): string {
  const q = input.toLowerCase();
  for (const r of CHAT_RULES) {
    if (r.match.some((k) => q.includes(k.toLowerCase()))) {
      return lang === "mr" ? r.mr : r.en;
    }
  }
  return lang === "mr" ? FALLBACK.mr : FALLBACK.en;
}
