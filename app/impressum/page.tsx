import type { Metadata } from "next";
import { LegalPage, legal } from "../_components/LegalPage";
import { contact } from "../_data/site";

export const metadata: Metadata = {
  title: "Impressum — akm Fenster",
  description: "Impressum von AKM Fenster & Türen, Wuppertal. Angaben gemäß § 5 DDG.",
};

const { h2, section, prose, stack } = legal;

export default function Impressum() {
  return (
    <LegalPage title="Impressum" intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)">
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
        <div className={stack}>
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
        <div className={stack}>
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
        <div className={stack}>
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
    </LegalPage>
  );
}
