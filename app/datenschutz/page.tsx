import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, legal } from "../_components/LegalPage";
import { contact } from "../_data/site";

export const metadata: Metadata = {
  title: "Datenschutz — akm Fenster",
  description: "Datenschutzerklärung von AKM Fenster & Türen, Wuppertal.",
};

const { h2, section, prose, stack, list } = legal;

/*
 * Written against what the site actually does — update this page when that changes
 * (new hosting, an e-mail service for the contact form, analytics, embedded maps, …):
 * - hosted on Vercel; browsers only ever talk to Vercel
 * - fonts are bundled at build time by next/font (no request to Google)
 * - remote photos are fetched server-side by the Next.js image optimizer (no request from the visitor)
 * - no cookies, no browser storage, no analytics or tracking
 */
export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutz" intro="Datenschutzerklärung nach der Datenschutz-Grundverordnung (DSGVO)">
      <section className={section}>
        <h2 className={h2}>Verantwortlicher</h2>
        <address className={`${prose} not-italic`}>
          AKM Fenster &amp; Türen
          <br />
          Inhaber: Andre Kuliber
          <br />
          Am Kohlenmeiler 121
          <br />
          42389 Wuppertal
          <br />
          Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </address>
      </section>

      <section className={section}>
        <h2 className={h2}>Überblick</h2>
        <p className={prose}>
          Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website und die Bearbeitung
          Ihrer Anfragen erforderlich ist. Diese Website setzt keine Cookies, verwendet keine Analyse- oder
          Tracking-Dienste und bindet keine Inhalte von Drittanbietern ein, die beim Aufruf Daten an Dritte übertragen.
          Schriftarten und Bilder werden über unseren eigenen Server ausgeliefert.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>Hosting</h2>
        <div className={stack}>
          <p className={prose}>
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf
            der Website verarbeitet Vercel automatisch Daten, die Ihr Browser übermittelt (Server-Logfiles):
          </p>
          <ul className={list}>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seite bzw. Datei</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
            <li>Browsertyp, Betriebssystem und Gerätetyp</li>
          </ul>
          <p className={prose}>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
            der sicheren und stabilen Bereitstellung der Website. Die Logdaten werden nur kurzfristig gespeichert und
            anschließend gelöscht.
          </p>
          <p className={prose}>
            Dabei können Daten in die USA übertragen werden. Vercel ist nach dem EU-US Data Privacy Framework
            zertifiziert; die Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO)
            sowie ergänzend auf Standardvertragsklauseln. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung gemäß
            Art. 28 DSGVO.
          </p>
        </div>
      </section>

      <section className={section}>
        <h2 className={h2}>Kontaktformular (Rückruf-Anfrage)</h2>
        <div className={stack}>
          <p className={prose}>
            Wenn Sie über das Formular einen Rückruf anfordern, verarbeiten wir die von Ihnen angegebenen Daten: Name und
            Telefonnummer (Pflichtangaben) sowie freiwillig E-Mail-Adresse und Nachricht. Wir nutzen diese Daten
            ausschließlich, um Ihre Anfrage zu bearbeiten und Sie zurückzurufen.
          </p>
          <p className={prose}>
            Sie sind weder gesetzlich noch vertraglich verpflichtet, uns diese Daten bereitzustellen. Ohne Name und
            Telefonnummer können wir Sie jedoch nicht zurückrufen; die Anfrage lässt sich dann nicht absenden.
          </p>
          <p className={prose}>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, da Ihre Anfrage auf die Durchführung vorvertraglicher
            Maßnahmen bzw. den Abschluss eines Vertrags gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (unser
            berechtigtes Interesse an der Beantwortung von Anfragen).
          </p>
          <p className={prose}>Wie lange wir Ihre Angaben speichern, hängt davon ab, ob ein Auftrag zustande kommt:</p>
          <ul className={list}>
            <li>
              Kommt kein Auftrag zustande, löschen wir Ihre Anfrage spätestens sechs Monate nach der letzten
              Kontaktaufnahme.
            </li>
            <li>
              Kommt ein Auftrag zustande, bewahren wir die zugehörigen Unterlagen auf, solange gesetzliche
              Aufbewahrungspflichten bestehen — für Rechnungen und Buchungsbelege acht Jahre, für Geschäftsbriefe
              sechs Jahre (§ 147 AO, § 14b UStG), jeweils ab Ende des Kalenderjahres. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. c DSGVO.
            </li>
            <li>
              Darüber hinaus speichern wir Auftragsunterlagen, solange Ansprüche aus dem Vertrag geltend gemacht werden
              können, insbesondere bis zum Ablauf der Gewährleistungsfrist für Bauleistungen von fünf Jahren nach
              Abnahme (§ 634a BGB). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt
              in der Geltendmachung, Ausübung und Verteidigung von Rechtsansprüchen.
            </li>
          </ul>
          <p className={prose}>Maßgeblich ist jeweils die längste Frist; danach löschen wir die Daten.</p>
        </div>
      </section>

      <section className={section}>
        <h2 className={h2}>Kontakt per Telefon oder E-Mail</h2>
        <p className={prose}>
          Wenn Sie uns anrufen oder eine E-Mail schreiben, verarbeiten wir Ihre Angaben (z. B. Name, Telefonnummer,
          E-Mail-Adresse und Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage und Speicherdauer
          entsprechen denen beim Kontaktformular. Für unser E-Mail-Postfach nutzen wir den Dienst GMX (1&amp;1 Mail
          &amp; Media GmbH, Elgendorfer Straße 57, 56410 Montabaur).
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>SSL-/TLS-Verschlüsselung</h2>
        <p className={prose}>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
          erkennen Sie an „https://“ in der Adresszeile Ihres Browsers. Daten, die Sie an uns übermitteln, können so
          nicht von Dritten mitgelesen werden.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>Ihre Rechte</h2>
        <div className={stack}>
          <p className={prose}>Sie haben im Rahmen der gesetzlichen Vorgaben jederzeit das Recht auf:</p>
          <ul className={list}>
            <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>
          <p className={prose}>Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten.</p>
        </div>
      </section>

      {/* Art. 21 (4) DSGVO: the right to object must be presented clearly and separately from other information. */}
      <section className={section}>
        <h2 className={h2}>Widerspruchsrecht (Art. 21 DSGVO)</h2>
        <p className={prose}>
          Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) verarbeiten,
          haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch
          gegen diese Verarbeitung einzulegen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können
          zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          Ein formloser Hinweis an die oben genannten Kontaktdaten genügt.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>Keine automatisierte Entscheidungsfindung</h2>
        <p className={prose}>
          Wir nutzen keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p className={prose}>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist die
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213
          Düsseldorf.
        </p>
      </section>

      <section className={`${section} border-b`}>
        <h2 className={h2}>Aktualität</h2>
        <p className={prose}>
          Stand: Oktober 2026. Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die rechtlichen
          Vorgaben ändern. Angaben zum Anbieter finden Sie im <Link href="/impressum">Impressum</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
