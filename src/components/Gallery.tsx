import { useState } from "react";
import bollywoodTrivia from "@/assets/gallery/bollywood-trivia.jpeg";
import onceUponReflection from "@/assets/gallery/once-upon-reflection.jpeg";
import lettersLivingWorld from "@/assets/gallery/letters-living-world.jpeg";
import queerHobbyHour from "@/assets/gallery/queer-hobby-hour.jpeg";
import hornOkQuiz from "@/assets/gallery/horn-ok-quiz.jpeg";
import poetryOpenMic from "@/assets/gallery/poetry-open-mic.jpeg";
import bekuMemories1 from "@/assets/gallery/beku-memories-1.jpeg";
import bekuMemories2 from "@/assets/gallery/beku-memories-2.jpeg";
import bekuMemories3 from "@/assets/gallery/beku-memories-3.jpeg";

const galleryItems = [
  { src: hornOkQuiz, alt: "Horn OK Quiz at Beku", label: "Horn OK Quiz", type: "image" as const },
  { src: bollywoodTrivia, alt: "Bollywood Trivia Night", label: "Bollywood Trivia", type: "image" as const },
  { src: "/gallery/beku-video.mp4", alt: "Beku Video", label: "Beku Vibes", type: "video" as const },
  { src: poetryOpenMic, alt: "Poetry Open Mic", label: "Poetry Open Mic", type: "image" as const },
  { src: onceUponReflection, alt: "Once Upon a Reflection", label: "Once Upon a Reflection", type: "image" as const },
  { src: queerHobbyHour, alt: "Queer Hobby Hour", label: "Queer Hobby Hour", type: "image" as const },
  { src: lettersLivingWorld, alt: "Letters to the Living World", label: "Letters to the Living World", type: "image" as const },
  { src: bekuMemories1, alt: "Beku Memories", label: "Beku Memories", type: "image" as const },
  { src: bekuMemories2, alt: "Birthday at Beku", label: "Community Love", type: "image" as const },
  { src: bekuMemories3, alt: "Pet friendly Beku", label: "Pet Friendly", type: "image" as const },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-parchment relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-12">
        <span className="font-ui text-xs tracking-[0.2em] text-teal uppercase block mb-3 scroll-reveal">
          Gallery
        </span>
        <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.9] scroll-reveal">
          LIFE AT BEKU
        </h2>
        <p className="font-body italic text-sage-dark text-lg mt-3 scroll-reveal">
          Events, memories & moments from the bungalow
        </p>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid scroll-reveal cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setLightbox(i)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {/* Overlay label */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <span className="font-ui text-xs text-cream tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[10000] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream font-headline text-3xl hover:text-sage transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          {/* Nav arrows */}
          <button
            className="absolute left-4 md:left-8 text-cream/70 hover:text-cream text-4xl font-headline transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length);
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 md:right-8 text-cream/70 hover:text-cream text-4xl font-headline transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryItems.length);
            }}
          >
            ›
          </button>

          <div className="max-w-3xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {galleryItems[lightbox].type === "video" ? (
              <video
                src={galleryItems[lightbox].src}
                controls
                autoPlay
                className="max-h-[85vh] rounded-lg"
              />
            ) : (
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                className="max-h-[85vh] rounded-lg object-contain"
              />
            )}
            <p className="text-center font-ui text-xs text-cream/60 mt-3 tracking-wider uppercase">
              {galleryItems[lightbox].label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
