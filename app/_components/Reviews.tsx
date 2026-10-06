"use client";

import { useEffect, useRef, useState } from "react";
import type { Review } from "../_data/site";

function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${rating} von 5 Sternen`} className="shrink-0 tracking-[2px]">
      <span className="text-bronze">{"★".repeat(rating)}</span>
      <span className="text-line">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

function ArrowButton({ dir, disabled, onClick }: { dir: -1 | 1; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir < 0 ? "Vorherige Bewertungen" : "Nächste Bewertungen"}
      disabled={disabled}
      onClick={onClick}
      className="press grid size-11 cursor-pointer place-items-center rounded-full border border-chip-line text-lg text-ink hover:border-ink active:bg-ink/5 disabled:cursor-default disabled:opacity-35 disabled:active:scale-100"
    >
      <span aria-hidden="true">{dir < 0 ? "←" : "→"}</span>
    </button>
  );
}

/**
 * Horizontally scrolling, snap-aligned row. Swiping uses the browser's native momentum;
 * on desktop, arrow buttons page through one card at a time.
 */
export function Reviews({ items }: { items: Review[] }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const page = (dir: -1 | 1) => {
    const el = scroller.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: reduce ? "instant" : "smooth" });
  };

  return (
    <div className="flex flex-col gap-6">
      <ul
        ref={scroller}
        aria-label="Kundenbewertungen"
        tabIndex={0}
        className="gutter m-0 flex list-none snap-x snap-mandatory scroll-px-[clamp(1.25rem,4vw,3.5rem)] gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((r, i) => (
          <li
            key={i}
            className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-5 border border-card-line bg-paper p-6 sm:w-[calc((100%-1rem)/2)] md:p-7 lg:w-[calc((100%-2rem)/3)]"
          >
            <figure className="m-0 flex h-full flex-col justify-between gap-5">
              <blockquote className="m-0 font-serif text-[1.375rem] leading-[1.3] md:text-2xl">„{r.quote}“</blockquote>
              <figcaption className="flex items-center justify-between gap-3 text-sm">
                <span>
                  <strong className="font-semibold">{r.name}</strong> · {r.place}
                </span>
                <Stars rating={r.rating} />
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="gutter hidden justify-end gap-2 md:flex">
        <ArrowButton dir={-1} disabled={atStart} onClick={() => page(-1)} />
        <ArrowButton dir={1} disabled={atEnd} onClick={() => page(1)} />
      </div>
    </div>
  );
}
