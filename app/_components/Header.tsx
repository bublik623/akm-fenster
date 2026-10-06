"use client";

import { useEffect, useState } from "react";
import { contact, navItems } from "../_data/site";
import { Logo } from "./Logo";
import { useActiveSection } from "./useActiveSection";

const sectionIds = [...navItems.map((n) => n.id), "anfrage"];

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const close = () => setOpen(false);

  // Lock page scroll and allow Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="on-dark sticky top-0 z-20 bg-slate/92 text-cream backdrop-blur-md">
        <div className="gutter mx-auto flex max-w-[1320px] items-center gap-8 py-3.5">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden flex-wrap gap-7 text-[0.9375rem] md:flex">
            {navItems.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className="border-b border-transparent py-1 no-underline transition-colors aria-[current]:border-accent aria-[current]:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#anfrage"
            aria-current={active === "anfrage" ? "location" : undefined}
            className="press hidden rounded-full bg-accent px-5 py-[0.6875rem] text-[0.9375rem] font-semibold whitespace-nowrap text-ink-deep no-underline hover:text-ink-deep hover:brightness-108 md:inline-block"
          >
            Beratung anfragen
          </a>

          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="press grid size-11 cursor-pointer place-items-center rounded-full border border-cream/35 active:bg-cream/10 md:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-[1.125rem]">
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ease-settle ${open ? "top-[5px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ease-settle ${open ? "top-[5px] -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu: unfolds down out of the header and folds back the same way. */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-settle md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <nav
            id="mobile-menu"
            aria-label="Hauptnavigation"
            inert={!open}
            className={`flex min-h-0 flex-col overflow-hidden px-5 transition-opacity duration-300 ease-settle ${open ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col border-t border-cream/12 pt-2 pb-6">
              {navItems.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={close}
                  aria-current={active === l.id ? "location" : undefined}
                  className="border-b border-cream/12 py-3 font-serif text-[1.875rem] no-underline active:text-accent aria-[current]:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#anfrage"
                onClick={close}
                className="press mt-5 rounded-full bg-accent px-5 py-[0.9375rem] text-center font-semibold text-ink-deep no-underline hover:text-ink-deep"
              >
                Kostenlose Beratung anfragen
              </a>
              <a href={contact.phoneHref} onClick={close} className="mt-4 font-serif text-2xl no-underline">
                {contact.phone}
              </a>
              <span className="mt-1 text-sm text-fog">{contact.address}</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Scrim: dims the page behind the open menu; tap to close. */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-10 bg-ink-deep/55 transition-opacity duration-300 ease-settle md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
    </>
  );
}
