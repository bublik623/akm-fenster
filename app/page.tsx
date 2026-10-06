import { ContactForm } from "./_components/ContactForm";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { MobileActionBar } from "./_components/MobileActionBar";
import { Photo } from "./_components/Photo";
import { Products } from "./_components/Products";
import { Reviews } from "./_components/Reviews";
import { contact, displayedReviews, images, reviewsAreSamples } from "./_data/site";

const container = "gutter mx-auto max-w-[82.5rem]";
const sectionPad = "py-[clamp(4.5rem,9vw,8rem)]";
const h2 = "m-0 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-normal tracking-[-0.02em]";
const anchor = "scroll-mt-[4.5rem]";

const usps = ["Beratung vor Ort", "Herstellerunabhängig", "Fester Angebotspreis", "Montage durch eigenes Team"];

const stats = [
  { value: "2023", label: "Gegründet in Wuppertal" },
  { value: "100+", label: "Abgeschlossene Objekte" },
  { value: "20+", label: "Echte Kundenbewertungen" },
  { value: "8", label: "Produktbereiche aus einer Hand" },
  { value: "0 €", label: "Kostenlose Erstberatung" },
];

const brands = [
  { name: "FORCA", note: "Sonnenschutz-Systeme" },
  { name: "GEALAN", note: "PVC-Fensterprofile" },
  { name: "Reynaers", note: "Aluminium-Systeme" },
  { name: "Somfy", note: "Antriebe & Smart-Home-Steuerung" },
];

const steps = [
  { title: "Beraten", text: "Wir kommen zu Ihnen, hören zu, zeigen Muster und klären Material, Optik und Budget." },
  { title: "Aufmessen & anbieten", text: "Exaktes Aufmaß vor Ort und ein klares Angebot mit Festpreis — ohne versteckte Posten." },
  { title: "Bestellen", text: "Wir bestellen beim passenden Markenhersteller nach Maß und koordinieren den Liefertermin verbindlich." },
  { title: "Montieren", text: "Fachgerechter Einbau durch unser Team — sauber hinterlassen, mit Einweisung übergeben." },
];

const reasons = [
  { title: "Eigene Montageteams", text: "Feste Ansprechpartner — von der Beratung bis zur Montage." },
  { title: "Das Beste aus mehreren Herstellern", text: "Wir vergleichen Profile, Gläser und Beschläge und wählen für jede Öffnung die passende Lösung." },
  { title: "Service in ganz NRW", text: "Für private und gewerbliche Kunden — inklusive Reparatur & Austausch." },
];

function Kicker({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[0.8125rem] tracking-[0.14em] uppercase ${dark ? "text-fog" : "text-kicker"}`}
    >
      <span className={`h-px w-7 ${dark ? "bg-accent" : "bg-bronze"}`} />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-clip">
      {/* Top bar — desktop only */}
      <div className="on-dark hidden bg-ink-deep text-[0.8125rem] tracking-[0.02em] text-fog md:block">
        <div className={`${container} flex flex-wrap justify-between gap-x-7 gap-y-2 py-2.5`}>
          <span>Beratung · Auswahl · Lieferung · Montage — alles aus einer Hand</span>
          <div className="flex flex-wrap gap-6">
            <a href={contact.phoneHref} className="no-underline">
              {contact.phone}
            </a>
            <span>{contact.address}</span>
          </div>
        </div>
      </div>

      <Header />

      <main>
        {/* Hero */}
        <section id="top" className="on-dark bg-slate text-cream">
          <div
            className={`${container} grid items-center gap-14 pt-[clamp(2.5rem,7vw,6rem)] pb-[clamp(3.5rem,8vw,6.875rem)] lg:grid-cols-2 lg:gap-x-[clamp(2rem,5vw,5.5rem)]`}
          >
            <div>
              <div className="mb-6 md:mb-7">
                <Kicker dark>Fenster &amp; Türen in NRW</Kicker>
              </div>
              <h1 className="m-0 font-serif text-[clamp(3.25rem,7.4vw,6.75rem)] leading-[0.95] font-normal tracking-[-0.02em]">
                Mehr Licht.
                <br />
                Mehr Ruhe.
                <br />
                <em className="text-accent">Mehr Zuhause.</em>
              </h1>
              {/* Short intro on mobile keeps the CTAs within the first screen. */}
              <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-soft md:hidden">
                Fenster, Türen, Sonnenschutz und Überdachungen — herstellerunabhängig beraten, nach Maß bestellt und
                von unserem eigenen Team eingebaut.
              </p>
              <p className="mt-8 hidden max-w-[46ch] text-lg leading-relaxed text-soft md:block">
                Fenster, Türen, Rollläden, Markisen, Garagentore, Terrassenüberdachungen und Wintergärten — wir
                beraten herstellerunabhängig, bestellen bei ausgewählten europäischen Markenherstellern und bauen
                fachgerecht ein. Ein Ansprechpartner von der ersten Idee bis zum letzten Handgriff.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-3.5">
                <a
                  href="#anfrage"
                  className="press inline-flex items-center gap-3.5 rounded-full bg-accent px-[1.625rem] py-4 font-semibold text-ink-deep no-underline hover:text-ink-deep hover:brightness-108 active:brightness-95"
                >
                  Kostenlose Beratung <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#produkte"
                  className="press inline-flex items-center rounded-full border border-cream/35 px-[1.625rem] py-4 font-medium text-cream no-underline hover:border-cream hover:text-cream active:bg-cream/10"
                >
                  Produkte entdecken
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid aspect-[5/6] grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] grid-rows-2 gap-3 bg-ink-deep p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <Photo src={images.hero} alt="Fenster von innen, Licht" sizes="(min-width: 1024px) 30vw, 55vw" eager className="row-span-2" />
                <Photo src={images.terrace} alt="Terrassenüberdachung" sizes="(min-width: 1024px) 25vw, 45vw" />
                <Photo src={images.door} alt="Haustür" sizes="(min-width: 1024px) 25vw, 45vw" />
              </div>
              <div className="absolute bottom-9 left-3 flex max-w-60 flex-col gap-1 bg-cream px-[1.375rem] py-[1.125rem] text-ink shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-3xl leading-none">Nach Maß</span>
                <span className="text-sm leading-[1.45] text-muted">
                  Vom Markenhersteller exakt für Ihre Öffnung gefertigt — von uns eingebaut.
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-cream/12">
            <ul className={`${container} m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(11.25rem,1fr))]`}>
              {usps.map((u, i) => (
                <li key={u} className="flex items-baseline gap-3 py-6">
                  <span className="font-serif text-[1.375rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.9375rem] font-medium">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Trust */}
        <section className="border-b border-line">
          <div className={`${container} flex flex-col gap-12 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(2.5rem,5vw,4rem)]`}>
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,8.125rem),1fr))] gap-7">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-2 border-l-2 border-accent pl-5">
                  <dt className="text-[0.9375rem] text-muted">{s.label}</dt>
                  <dd className="m-0 font-serif text-[clamp(3rem,5vw,4.25rem)] leading-[0.95]">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-5">
              <span className="text-[0.8125rem] tracking-[0.14em] text-kicker uppercase">
                Ausgewählte Markenhersteller — wir sind an keinen gebunden
              </span>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,12.5rem),1fr))] gap-3">
                {brands.map((b) => (
                  <div
                    key={b.name}
                    className="flex min-h-30 min-w-0 flex-col justify-between gap-3.5 border border-card-line bg-paper p-5"
                  >
                    <span className="text-[1.625rem] font-bold tracking-[-0.02em]">{b.name}</span>
                    <span className="text-[0.8125rem] text-muted">{b.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="produkte" className={anchor}>
          <div className={`${container} ${sectionPad}`}>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
              <h2 className={`${h2} max-w-[14ch]`}>
                Acht Bereiche. <em className="text-bronze">Ein Team.</em>
              </h2>
              <p className="m-0 max-w-[42ch] text-[1.0625rem] leading-relaxed text-muted">
                Wählen Sie einen Bereich — wir zeigen, was möglich ist. Alles wird aufeinander abgestimmt geplant und
                montiert.
              </p>
            </div>
            <Products />
          </div>
        </section>

        {/* Process */}
        <section id="ablauf" className={`${anchor} bg-sand`}>
          <div className={`${container} ${sectionPad}`}>
            <div className="mb-5">
              <Kicker>Aus einer Hand</Kicker>
            </div>
            <h2 className={`${h2} mb-16 max-w-[18ch]`}>Vier Schritte — ein Ansprechpartner.</h2>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-x-8 gap-y-10 p-0">
              {steps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-3.5 border-t-2 border-ink pt-6">
                  <span className="font-serif text-[4rem] leading-[0.9] text-bronze">{i + 1}</span>
                  <h3 className="m-0 text-xl font-semibold">{s.title}</h3>
                  <p className="m-0 text-[0.96875rem] leading-relaxed text-body">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why */}
        <section id="warum" className={anchor}>
          <div
            className={`${container} ${sectionPad} grid items-center gap-12 lg:grid-cols-2 lg:gap-x-[clamp(2rem,6vw,7rem)]`}
          >
            <div className="grid grid-cols-2 gap-3">
              <Photo src={images.team} alt="Monteure bei der Arbeit" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4]" />
              <Photo src={images.installation} alt="Montage einer Schiebetür vor Ort" sizes="(min-width: 1024px) 25vw, 50vw" className="mt-16 aspect-[3/4]" />
            </div>
            <div>
              <h2 className="m-0 font-serif text-[clamp(2.5rem,4.6vw,4rem)] leading-none font-normal tracking-[-0.02em]">
                Unabhängig beraten. <em className="text-bronze">Sauber eingebaut.</em>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[1.0625rem] leading-[1.65] text-body">
                Wir sind an keinen Hersteller gebunden. Deshalb empfehlen wir, was zu Ihrem Haus und Budget passt —
                nicht, was zufällig aus der eigenen Produktion kommt. Bestellung, Lieferung und Einbau koordinieren wir
                für Sie: ein Ansprechpartner, volle Verantwortung.
              </p>
              <ul className="m-0 mt-9 flex list-none flex-col border-b border-line p-0">
                {reasons.map((r) => (
                  <li key={r.title} className="grid grid-cols-[1.75rem_1fr] gap-4 border-t border-line py-[1.125rem]">
                    <span aria-hidden="true" className="text-lg text-bronze">
                      ✓
                    </span>
                    <div>
                      <div className="text-[1.03125rem] font-semibold">{r.title}</div>
                      <div className="mt-1 text-[0.9375rem] text-muted">{r.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews — real reviews from _data/site.ts; labelled sample data in development only */}
        {displayedReviews.length > 0 && (
          <section id="bewertungen" className={`${anchor} bg-sand`}>
            <div className={`${container} flex flex-col gap-6 pt-[clamp(4.5rem,9vw,7.5rem)] pb-10 md:pb-12`}>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <h2 className={h2}>
                  Was Kunden <em className="text-bronze">sagen.</em>
                </h2>
                <span className="text-[0.9375rem] text-body">Über 20 Bewertungen von Kunden aus Wuppertal und NRW</span>
              </div>
              {reviewsAreSamples && (
                <p className="m-0 border border-dashed border-danger px-4 py-3 text-sm text-danger">
                  <strong>Beispieldaten</strong> — erfundene Bewertungen, nur in der Entwicklung sichtbar und im
                  Production-Build ausgeblendet. Echte Bewertungen in <code>app/_data/site.ts</code> eintragen.
                </p>
              )}
            </div>
            <div className="mx-auto max-w-[82.5rem] pb-[clamp(4.5rem,9vw,7.5rem)]">
              <Reviews items={displayedReviews} />
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="anfrage" className={`${anchor} on-dark bg-slate text-cream`}>
          <div
            className={`${container} ${sectionPad} grid items-start gap-14 lg:grid-cols-2 lg:gap-x-[clamp(2rem,6vw,7rem)]`}
          >
            <div>
              <h2 className="m-0 font-serif text-[clamp(2.75rem,5.4vw,5rem)] leading-[0.98] font-normal tracking-[-0.02em]">
                Ihr Projekt.
                <br />
                <em className="text-accent">Ein Rückruf genügt.</em>
              </h2>
              <p className="mt-7 max-w-[40ch] text-[1.0625rem] leading-[1.65] text-soft">
                Beratung und Aufmaß sind kostenlos und unverbindlich. Wir melden uns innerhalb eines Werktags.
              </p>
              <address className="mt-10 flex flex-col gap-1.5 text-base not-italic">
                <a href={contact.phoneHref} className="font-serif text-3xl no-underline">
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="text-soft no-underline">
                  {contact.email}
                </a>
                <span className="mt-2.5 text-soft">{contact.address.replace(" · ", ", ")}</span>
              </address>
            </div>
            {/* Light card on a dark section: reset the focus ring to bronze */}
            <div className="flex flex-col gap-7 bg-cream p-[clamp(1.5rem,3.5vw,2.75rem)] text-ink [--focus:var(--color-bronze)]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <MobileActionBar />
    </div>
  );
}
