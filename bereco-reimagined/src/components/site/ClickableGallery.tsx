import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage { src: string; alt: string }
interface Props {
  images: GalleryImage[];
  showArrows?: boolean;
  aspectRatio?: string;
  className?: string;
}

export function ClickableGallery({ images, showArrows = false, aspectRatio = "aspect-[4/3]", className = "" }: Props) {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + images.length) % images.length);
  const next = () => setActive(i => (i + 1) % images.length);

  return (
    <div className={className}>
      <div className={`relative overflow-hidden rounded-2xl bg-muted ${aspectRatio}`}>
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
        {showArrows && (
          <>
            <button onClick={prev} aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2.5 shadow-md transition hover:bg-white">
              <ChevronLeft className="h-5 w-5 text-secondary" />
            </button>
            <button onClick={next} aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2.5 shadow-md transition hover:bg-white">
              <ChevronRight className="h-5 w-5 text-secondary" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {!showArrows && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-16 w-[72px] flex-none overflow-hidden rounded-lg border-2 transition ${
                i === active ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-80"
              }`}>
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
