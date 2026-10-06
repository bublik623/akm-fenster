import Link from "next/link";
import { Footer } from "./Footer";
import { Logo } from "./Logo";

/** Shared class names for the sections of a legal page. */
export const legal = {
  h2: "m-0 mb-3 text-[0.8125rem] font-semibold tracking-[0.14em] text-kicker uppercase",
  section: "border-t border-line py-8",
  prose: "m-0 max-w-[65ch] leading-[1.65] text-body",
  /** Several paragraphs within one section. */
  stack: "flex flex-col gap-4",
  list: "m-0 flex max-w-[65ch] list-disc flex-col gap-1.5 pl-5 leading-[1.65] text-body",
};

/** Frame for Impressum, Datenschutz & co.: slim header with a way home, page title, footer. */
export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
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
          {title}
        </h1>
        <p className="mt-4 mb-12 text-muted">{intro}</p>
        {children}
      </main>

      <Footer />
    </>
  );
}
