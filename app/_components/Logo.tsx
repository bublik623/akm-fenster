/** Links to the top of the current page by default; pass `href="/"` on subpages. */
export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a href={href} className="press mr-auto flex items-center gap-3 text-cream no-underline hover:text-cream">
      <span
        aria-hidden="true"
        className="grid size-[1.875rem] grid-cols-2 gap-[3px] border-2 border-accent p-[3px]"
      >
        <span className="bg-accent" />
        <span className="bg-cream/25" />
        <span className="bg-cream/25" />
        <span className="bg-cream/25" />
      </span>
      <span className="text-xl font-bold tracking-[-0.02em]">akm</span>
      <span className="-ml-1.5 font-serif text-[1.375rem] italic">Fenster</span>
    </a>
  );
}
