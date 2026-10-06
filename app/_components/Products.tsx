"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCT_REQUEST_EVENT, products, type Product } from "../_data/site";
import { Photo } from "./Photo";

const ACCORDION_MS = 350;

function requestProduct(name: string) {
  window.dispatchEvent(new CustomEvent(PRODUCT_REQUEST_EVENT, { detail: name }));
}

/**
 * Keeps `el` at the same viewport position while panels above it collapse,
 * so the row the user tapped never slides away from their finger.
 * Stops as soon as the user scrolls themselves.
 */
function anchorWhileAnimating(el: HTMLElement) {
  const startTop = el.getBoundingClientRect().top;
  const end = performance.now() + ACCORDION_MS + 50;
  let cancelled = false;
  const cancel = () => (cancelled = true);
  window.addEventListener("wheel", cancel, { once: true, passive: true });
  window.addEventListener("touchstart", cancel, { once: true, passive: true });

  const tick = () => {
    if (cancelled) return;
    const drift = el.getBoundingClientRect().top - startTop;
    if (Math.abs(drift) >= 1) window.scrollBy({ top: drift, behavior: "instant" });
    if (performance.now() < end) requestAnimationFrame(tick);
    else {
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    }
  };
  requestAnimationFrame(tick);
}

function Features({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((f) => (
        <span key={f} className="rounded-full border border-chip-line px-3.5 py-[0.4375rem] text-sm text-[#3a3f44]">
          {f}
        </span>
      ))}
    </div>
  );
}

function RequestLink({ product }: { product: Product }) {
  return (
    <a
      href="#anfrage"
      onClick={() => requestProduct(product.name)}
      className="press self-start border-b-2 border-accent pt-2 pb-1 text-[0.9375rem] font-semibold text-ink no-underline"
    >
      {product.name} anfragen →
    </a>
  );
}

/**
 * Mobile: accordion — tapping a row unfolds its details inline.
 * Desktop (md+): list on the left, sticky preview of the active product on the right.
 */
export function Products() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0);
  const rows = useRef<(HTMLButtonElement | null)[]>([]);
  const list = useRef<HTMLOListElement>(null);
  const current = products[active];

  // Mobile: fetch every panel photo before the section scrolls into view. Lazily loaded,
  // a photo would only start downloading/decoding when its panel first opens — mid-animation —
  // and the dropped frames make the accordion jump on the first open of each panel.
  const [warm, setWarm] = useState(false);
  useEffect(() => {
    const el = list.current;
    if (!el || !window.matchMedia("(max-width: 47.49rem)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setWarm(true);
        io.disconnect();
      },
      { rootMargin: "1000px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = (i: number) => {
    const row = rows.current[i];
    if (row && window.matchMedia("(max-width: 47.49rem)").matches) anchorWhileAnimating(row);
    setActive(i);
    setOpen((o) => (o === i ? -1 : i));
  };

  return (
    <div className="grid items-start gap-12 md:grid-cols-2 md:gap-x-[clamp(2rem,5vw,5rem)]">
      <ol ref={list} className="m-0 list-none border-t border-line p-0">
        {products.map((p, i) => {
          const isActive = i === active;
          const isOpen = i === open;
          return (
            <li key={p.key} className="border-b border-line">
              <button
                ref={(el) => {
                  rows.current[i] = el;
                }}
                type="button"
                onClick={() => select(i)}
                aria-expanded={isOpen}
                aria-controls={`product-panel-${p.key}`}
                data-active={isActive || undefined}
                className="group grid w-full cursor-pointer scroll-mt-24 grid-cols-[2.75rem_1fr_auto] items-baseline gap-4 px-1 py-5 text-left text-ink transition-colors duration-150 active:bg-ink/5 md:text-gray md:hover:text-ink md:data-active:text-ink"
              >
                <span className="text-[0.8125rem] font-semibold tracking-[0.06em] text-gray group-data-active:text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05]">{p.name}</span>
                <span
                  aria-hidden="true"
                  className={`text-xl transition-[transform,opacity] duration-300 ease-settle md:rotate-0 md:opacity-0 md:group-data-active:opacity-100 ${isOpen ? "rotate-90" : ""}`}
                >
                  →
                </span>
              </button>

              {/* Mobile panel: animates its height between 0 and auto. */}
              <div
                id={`product-panel-${p.key}`}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows] ease-settle md:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                style={{ transitionDuration: `${ACCORDION_MS}ms` }}
              >
                <div
                  className={`flex min-h-0 flex-col gap-3.5 overflow-hidden transition-opacity duration-300 ease-settle ${isOpen ? "opacity-100" : "opacity-0"}`}
                >
                  <Photo src={p.img} alt={p.name} sizes="100vw" eager={warm} className="aspect-[4/3] w-full shrink-0" />
                  <h3 className="mt-1 font-serif text-[1.625rem] leading-[1.15] font-normal">{p.tagline}</h3>
                  <p className="m-0 text-base leading-relaxed text-body">{p.desc}</p>
                  <Features items={p.features} />
                  <div className="flex pb-6">
                    <RequestLink product={p} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="sticky top-24 hidden flex-col gap-7 md:flex">
        <div className="relative aspect-[4/3] bg-[#e7e0d5]">
          {products.map((p, i) => (
            <Photo
              key={p.key}
              src={p.img}
              alt={i === active ? p.name : ""}
              sizes="(min-width: 47.5rem) 50vw, 100vw"
              className={`absolute! inset-0 transition-opacity duration-300 ease-settle ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div key={current.key} className="flex animate-[fade-in_300ms_var(--ease-settle)] flex-col gap-4">
          <h3 className="m-0 font-serif text-[2.125rem] leading-[1.1] font-normal">{current.tagline}</h3>
          <p className="m-0 max-w-[56ch] text-[1.03125rem] leading-[1.65] text-body">{current.desc}</p>
          <div className="mt-1">
            <Features items={current.features} />
          </div>
          <RequestLink product={current} />
        </div>
      </div>
    </div>
  );
}
