import { sampleReviews } from "./sampleReviews";

const IMG = "https://jovial-horse-6e378a.netlify.app/assets/images";
const LOCAL = "/images/products";

export const contact = {
  phone: "+49 176 22983100",
  phoneHref: "tel:+4917622983100",
  email: "akm-fenster@gmx.net",
  address: "Am Kohlenmeiler 121 · 42389 Wuppertal",
  impressum: "/impressum",
  datenschutz: "/datenschutz",
};

export const images = {
  hero: `${IMG}/hero/hero-main.jpg`,
  door: `${LOCAL}/tueren.jpg`,
  terrace: `${LOCAL}/terrassendach.jpg`,
  team: `${IMG}/service/service-main.jpg`,
  installation: `${LOCAL}/installation.jpg`,
};

export type Product = {
  key: string;
  name: string;
  img?: string;
  tagline: string;
  desc: string;
  features: string[];
};

export const products: Product[] = [
  {
    key: "fenster",
    img: `${LOCAL}/fenster.jpg`,
    name: "Fenster",
    tagline: "Licht rein, Wärme drin.",
    desc: "Moderne Fensterlösungen für Wärmeschutz, Wohnkomfort und eine zeitgemäße Optik — für Neubau, Modernisierung und Austausch.",
    features: ["Kunststofffenster", "Aluminiumfenster", "Balkon- & Terrassentüren", "Schiebeelemente"],
  },
  {
    key: "tueren",
    img: `${LOCAL}/tueren.jpg`,
    name: "Türen",
    tagline: "Der erste Eindruck zählt.",
    desc: "Haustüren und weitere Türlösungen passend zu Gebäude, Anforderungen und persönlichem Stil.",
    features: ["Haustüren", "Nebeneingangstüren", "Terrassentüren", "Balkontüren"],
  },
  {
    key: "rolllaeden",
    img: `${LOCAL}/rolllaeden.jpg`,
    name: "Rollläden & Raffstores",
    tagline: "Ruhe, Dunkel, Sicherheit.",
    desc: "Sicht-, Sonnen- und Wetterschutz für mehr Komfort und Kontrolle im Alltag — manuell oder elektrisch.",
    features: ["Rollläden", "Raffstores", "Elektrische Antriebe"],
  },
  {
    key: "markisen",
    img: `${LOCAL}/markisen.jpg`,
    name: "Markisen & Sonnenschutz",
    tagline: "Schatten, wann Sie wollen.",
    desc: "Flexible Sonnenschutzlösungen für Terrasse, Balkon, Fenster und Außenbereiche.",
    features: ["Terrassenmarkisen", "Balkonmarkisen", "Fenstermarkisen"],
  },
  {
    key: "garagentore",
    img: `${LOCAL}/garagentore.jpg`,
    name: "Garagentore",
    tagline: "Leise auf, sicher zu.",
    desc: "Sektional-, Schwing- und Rolltore mit Antrieb — wärmegedämmt, wartungsarm und passend zur Haustür.",
    features: ["Sektionaltore", "Schwing- & Rolltore", "Torantriebe"],
  },
  {
    key: "terrassendach",
    img: `${LOCAL}/terrassendach.jpg`,
    name: "Terrassenüberdachungen",
    tagline: "Draußen, bei jedem Wetter.",
    desc: "Terrassendächer aus Aluminium mit Glas oder Stegplatten — optional mit Beschattung, Licht und Seitenwänden.",
    features: ["Glas oder Stegplatten", "Beschattung", "Seiten- & Schiebewände"],
  },
  {
    key: "wintergarten",
    img: `${LOCAL}/wintergarten.jpg`,
    name: "Wintergärten",
    tagline: "Ein Zimmer mehr — aus Licht.",
    desc: "Kalt- und Warmwintergärten, individuell geplant und ganzjährig nutzbar.",
    features: ["Kaltwintergarten", "Warmwintergarten", "Individuelle Planung"],
  },
  {
    key: "insektenschutz",
    img: `${LOCAL}/insektenschutz.jpg`,
    name: "Insektenschutz & Zubehör",
    tagline: "Frische Luft, ohne Gäste.",
    desc: "Praktische Ergänzungen für Fenster und Türen, individuell passend zu Ihrem Zuhause.",
    features: ["Spannrahmen", "Plissees", "Zubehör"],
  },
];

export type Review = { quote: string; name: string; place: string; rating: 1 | 2 | 3 | 4 | 5 };

/**
 * Real customer reviews. In production the "Bewertungen" section and its nav link stay hidden
 * until at least one review is added here — never ship placeholder quotes.
 */
export const reviews: Review[] = [];

/** True while the section shows invented sample reviews (dev only). */
export const reviewsAreSamples = reviews.length === 0 && process.env.NODE_ENV !== "production";

export const displayedReviews: Review[] = reviews.length
  ? reviews
  : reviewsAreSamples
    ? sampleReviews
    : [];

/** Same sections, same order, on mobile and desktop. */
export const navItems = [
  { id: "produkte", label: "Produkte" },
  { id: "ablauf", label: "Ablauf" },
  { id: "warum", label: "Warum akm" },
  ...(displayedReviews.length ? [{ id: "bewertungen", label: "Bewertungen" }] : []),
];

/** Fired when a product CTA is clicked so the contact form can prefill its message. */
export const PRODUCT_REQUEST_EVENT = "akm:product-request";
