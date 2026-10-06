import Image from "next/image";

type PhotoProps = {
  src?: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/** Fills its (positioned, sized) container. Shows a labelled placeholder when no photo exists yet. */
export function Photo({ src, alt, sizes, className = "", priority }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-[#e7e0d5] ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,#e7e0d5_0_12px,#ece6dc_12px_24px)] p-4 text-center text-sm text-muted">
          Foto: {alt}
        </div>
      )}
    </div>
  );
}
