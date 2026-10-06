import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Logo } from "../_components/Logo";
import { contact } from "../_data/site";

export const metadata: Metadata = {
  title: "Impressum — akm Fenster",
  description: "Impressum von AKM Fenster & Türen, Wuppertal. Angaben gemäß § 5 DDG.",
};

const h2 = "m-0 mb-3 text-[0.8125rem] font-semibold tracking-[0.14em] text-kicker uppercase";
const section = "border-t border-line py-8";
const prose = "m-0 max-w-[65ch] leading-[1.65] text-body";

export default function Impressum() {
  return (
    <>
      <header className="on-dark bg-slate text-cream">
        <div className="gutter mx-auto flex max-w-[82.5rem] items-center gap-8 py-3.5">
          <Logo href="/" />
          <Link href="/" className="text-[0.9375rem] no-underline">
            <span aria-hidden="true">←</span> Zur Startseite
          </Link>
        </div>
      </header>

      <main className="gutter mx-auto max-w-[82.5rem] py-[clamp(3rem,7vw,6rem)]">
        <h1 className="m-0 font-serif text-[clamp(2.75rem,6vw,5rem)] leading-none font-normal tracking-[-0.02em]">
          Impressum
        </h1>
        <p className="mt-4 mb-12 text-muted">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

        <div className="grid gap-x-12 md:grid-cols-2">
          <section className={section}>
            <h2 className={h2}>Anbieter</h2>
            <address className={`${prose} not-italic`}>
              AKM Fenster &amp; Türen
              <br />
              Inhaber: Andre Kuliber
              <br />
              Am Kohlenmeiler 121
              <br />
              42389 Wuppertal
              <br />
              Deutschland
            </address>
          </section>

          <section className={section}>
            <h2 className={h2}>Kontakt</h2>
            <p className={prose}>
              Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </section>

          <section className={section}>
            <h2 className={h2}>Gewerbeanmeldung</h2>
            <p className={prose}>
              Gewerbeanmeldung bei der Stadt Wuppertal
              <br />
              Reg.-Nr.: 2023-02939
            </p>
          </section>

          <section className={section}>
            <h2 className={h2}>Steuerliche Angaben</h2>
            <p className={prose}>
              Steuernummer: 131/5146/4052
              <br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE431197790
            </p>
          </section>

          <section className={section}>
            <h2 className={h2}>Unternehmensgegenstand</h2>
            <p className={prose}>Fenstermontage, Fensterein- und Ausbau, Verputzen, Verkleiden usw.</p>
          </section>

          {/* TODO: add the chamber's full name once confirmed. No Handelsregister entry (GewA 1, field 1 empty), so no "Registereintrag" section. */}
          <section className={section}>
            <h2 className={h2}>IHK</h2>
            <p className={prose}>Identnummer: 1878947</p>
          </section>
        </div>

        <section className={section}>
          <h2 className={h2}>Haftung für Inhalte</h2>
          <div className="flex flex-col gap-4">
            <p className={prose}>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className={prose}>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
              Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        <section className={section}>
          <h2 className={h2}>Haftung für Links</h2>
          <div className="flex flex-col gap-4">
            <p className={prose}>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
            <p className={prose}>
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </section>

        <section className={`${section} border-b`}>
          <h2 className={h2}>Urheberrecht</h2>
          <div className="flex flex-col gap-4">
            <p className={prose}>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht.
            </p>
            <p className={prose}>
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className={prose}>
              Soweit Inhalte auf dieser Website nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
