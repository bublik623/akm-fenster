import Link from "next/link";
import { contact } from "../_data/site";

export function Footer() {
  return (
    <footer className="on-dark bg-ink-deep text-sm text-[#a9a397]">
      <div className="gutter mx-auto flex max-w-[82.5rem] flex-wrap justify-between gap-x-10 gap-y-5 py-10">
        <span>
          <span className="font-bold text-cream">akm</span>{" "}
          <span className="font-serif text-[1.0625rem] text-cream italic">Fenster</span> —{" "}
          {contact.address.replace(" · ", ", ")}
        </span>
        <div className="flex flex-wrap gap-6">
          <Link href={contact.impressum} className="no-underline">
            Impressum
          </Link>
          <a href={contact.datenschutz} className="no-underline">
            Datenschutz
          </a>
          <span>© 2026 AKM Fenster &amp; Türen</span>
        </div>
      </div>
    </footer>
  );
}
