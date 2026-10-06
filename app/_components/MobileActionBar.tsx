"use client";

import { useEffect, useState } from "react";
import { contact } from "../_data/site";

/**
 * Mobile-only action bar. Hidden while the hero (which has its own CTAs) is on screen,
 * and again once the contact section is reached, so it never duplicates or covers the form.
 * Slides in and out along the same path from the bottom edge.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contactSection = document.getElementById("anfrage");
    if (!hero || !contactSection) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const pastHero = hero.getBoundingClientRect().bottom < 0;
      const atContact = contactSection.getBoundingClientRect().top < window.innerHeight;
      setVisible(pastHero && !atContact);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      inert={!visible}
      className={`on-dark fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.4fr] gap-2 border-t border-cream/12 bg-ink-deep/90 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 ease-settle md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <a
        href={contact.phoneHref}
        className="press flex min-h-12 items-center justify-center rounded-full border border-cream/35 text-[0.9375rem] font-semibold text-cream no-underline active:bg-cream/10"
      >
        Anrufen
      </a>
      <a
        href="#anfrage"
        className="press flex min-h-12 items-center justify-center rounded-full bg-accent text-[0.9375rem] font-semibold text-ink-deep no-underline hover:text-ink-deep active:brightness-95"
      >
        Beratung anfragen
      </a>
    </div>
  );
}
