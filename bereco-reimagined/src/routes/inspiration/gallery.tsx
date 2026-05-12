import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import installImg from "@/assets/install.jpg";

export const Route = createFileRoute("/inspiration/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Vacuum Glazed Windows & Doors | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Browse our project photography — vacuum glazed timber windows and doors installed across the UK, from listed townhouses to period cottages." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: heroImg, caption: "Period townhouses, London — vacuum glazed sash windows" },
  { src: case1, caption: "Victorian terrace, Notting Hill — sash window upgrade" },
  { src: case2, caption: "Edwardian villa, Holland Park — bay window restoration" },
  { src: case3, caption: "Georgian townhouse, Chelsea — whole-house programme" },
  { src: installImg, caption: "Sliding sash installation — timber frame restoration" },
  { src: case1, caption: "Flush casement windows — conservation area, W8" },
  { src: case2, caption: "French doors — garden connection, Richmond" },
  { src: case3, caption: "Listed building — Grade II sash windows, Islington" },
  { src: heroImg, caption: "Stucco terrace elevation — 18 vacuum glazed sashes" },
  { src: installImg, caption: "Factory-finished timber frame — before dispatch" },
  { src: case1, caption: "Sliding patio doors — rear extension, Chelsea" },
  { src: case2, caption: "Tilt & turn windows — contemporary extension" },
];

function GalleryPage() {
  return (
    <PageLayout>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Inspiration</p>
          <h1 className="font-display text-4xl text-secondary md:text-5xl">Project gallery</h1>
          <p className="mt-5 text-lg text-secondary/80">Vacuum glazed timber windows and doors installed across the UK — from Grade I listed townhouses to period cottages.</p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {IMAGES.map((img, i) => (
              <figure key={i} className="group mb-4 overflow-hidden rounded-2xl bg-muted break-inside-avoid">
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="px-4 py-3 text-xs text-muted-foreground">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
