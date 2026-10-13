export type SpaceStatus = "available" | "occupied";

export interface PlazaSpace {
  id: string;
  name: string;
  nameMr: string;
  floor: string;
  // Fill in sqft yourself — null renders as "Sqft: on request"
  areaSqft: number | null;
  type: string;
  status: SpaceStatus;
  image: string;
  blurb: string;
  blurbMr: string;
}

export const PLAZA = {
  name: "Prabhakar Tendulkar Plaza",
  shortName: "Tendulkar Plaza",
  address: "4256/a2, Nave Peth, Pandharpur, Maharashtra 413304",
  addressMr: "४२५६/अ२, नवी पेठ, पंढरपूर, महाराष्ट्र ४१३३०४",
  phoneDisplay: "070204 44829",
  phoneHref: "tel:+917020444829",
  rating: "4.5",
  reviewsLabel: "Google reviews",
  telegramUsername: "PrabhakarPlaza", // <-- change to owner's username/channel
  whatsapp: "https://wa.me/917020444829",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Prabhakar+Tendulkar+Plaza+Nave+Peth+Pandharpur+413304",
};

export const AVAILABLE_SPACES: PlazaSpace[] = [
  {
    id: "full-floor",
    name: "Full Floor for Rent",
    nameMr: "पूर्ण मजला भाड्याने",
    floor: "Floor 2",
    areaSqft: null, // <-- you fill sqft here
    type: "Office / Commercial",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    blurb: "Open floor, ideal for office, coaching, or clinic.",
    blurbMr: "ऑफिस, क्लासेस किंवा क्लिनिकसाठी मोकळा मजला.",
  },
  {
    id: "office",
    name: "Office Space",
    nameMr: "ऑफिस जागा",
    floor: "Floor 1",
    areaSqft: null,
    type: "Office",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    blurb: "Ready office with plaza footfall.",
    blurbMr: "प्लाझाच्या वर्दळीसह तयार ऑफिस.",
  },
  {
    id: "small-office",
    name: "Small Office",
    nameMr: "छोटे ऑफिस",
    floor: "Floor 1",
    areaSqft: null,
    type: "Office / Cabin",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    blurb: "Compact cabin for agent, CA, consultant.",
    blurbMr: "एजंट, सीए, सल्लागारासाठी कॉम्पॅक्ट केबिन.",
  },
  {
    id: "atm-godown",
    name: "Shutter Godown — ATM Size",
    nameMr: "शटर गोडाऊन — ATM योग्य",
    floor: "Ground",
    areaSqft: null,
    type: "ATM / Retail kiosk",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    blurb: "Street-facing shutter, big enough for ATM. One ATM already running here.",
    blurbMr: "रस्त्यालगत शटर, ATM एवढी जागा. एक ATM आधीच सुरू आहे.",
  },
];

export const OCCUPIED: PlazaSpace[] = [
  {
    id: "jio-store",
    name: "Jio Retail Store",
    nameMr: "जिओ रिटेल स्टोअर",
    floor: "Shop",
    areaSqft: null,
    type: "Retail",
    status: "occupied",
    image:
      "https://images.unsplash.com/photo-1580913428023-02c695666520?w=800&q=80",
    blurb: "Owner-run Jio products retail shop.",
    blurbMr: "जिओ उत्पादनांचे रिटेल दुकान.",
  },
  {
    id: "reliance-jio",
    name: "Reliance Jio (Rented Floor)",
    nameMr: "रिलायन्स जिओ",
    floor: "Floor",
    areaSqft: null,
    type: "Telecom office",
    status: "occupied",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    blurb: "Entire floor rented to Reliance Jio.",
    blurbMr: "पूर्ण मजला रिलायन्स जिओला भाड्याने.",
  },
  {
    id: "equitas",
    name: "Equitas Small Finance Bank",
    nameMr: "इक्विटास स्मॉल फायनान्स बँक",
    floor: "Ground",
    areaSqft: null,
    type: "Bank",
    status: "occupied",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80",
    blurb: "Ground floor bank branch — daily footfall.",
    blurbMr: "तळमजल्यावर बँक शाखा — रोजची वर्दळ.",
  },
  {
    id: "gym",
    name: "Gym (Basement)",
    nameMr: "जिम (तळघर)",
    floor: "Basement",
    areaSqft: null,
    type: "Fitness",
    status: "occupied",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    blurb: "Basement fitness centre.",
    blurbMr: "तळघरात फिटनेस सेंटर.",
  },
  {
    id: "insurance",
    name: "Reliance Nippon + Star Health",
    nameMr: "रिलायन्स निप्पॉन + स्टार हेल्थ",
    floor: "Office",
    areaSqft: null,
    type: "Insurance agents",
    status: "occupied",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    blurb: "Insurance services available in plaza.",
    blurbMr: "प्लाझामध्ये विमा सेवा उपलब्ध.",
  },
];
