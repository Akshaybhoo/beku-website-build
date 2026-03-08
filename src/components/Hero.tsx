const tags = [
  { emoji: "☕", label: "Cafe" },
  { emoji: "🥐", label: "Bakery" },
  { emoji: "📚", label: "Books" },
  { emoji: "🎭", label: "Events" },
];

const eventCards = [
  { title: "HORN OK QUIZ", bg: "bg-mustard", text: "text-ink", rotate: "-3deg", delay: "card-stagger-1" },
  { title: "POETRY OPEN MIC", bg: "bg-blush", text: "text-ink", rotate: "2deg", delay: "card-stagger-2" },
  { title: "BOOK CLUB", bg: "bg-sage", text: "text-cream", rotate: "-1deg", delay: "card-stagger-3" },
];

const Hero = () => (
  <section className="min-h-screen bg-deep-green relative overflow-hidden pt-24">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] min-h-[calc(100vh-6rem)]">
      {/* Left */}
      <div className="relative flex flex-col justify-center px-8 md:px-16 py-16">
        {/* Rotated sidebar */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2">
          <span
            className="font-mono text-[10px] tracking-[0.3em] text-mustard whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            CAFE · BAKERY · BOOKS · EVENTS
          </span>
        </div>

        <div className="lg:pl-12">
          <h1 className="hero-stagger hero-stagger-1">
            <span className="block font-headline text-[80px] md:text-[140px] lg:text-[180px] text-cream leading-[0.85] tracking-tight">
              WHERE
            </span>
            <span className="block font-headline text-[80px] md:text-[140px] lg:text-[180px] text-terracotta leading-[0.85] tracking-tight">
              BEKU
            </span>
            <span className="block font-headline text-[80px] md:text-[140px] lg:text-[180px] text-cream leading-[0.85] tracking-tight">
              BEGINS
            </span>
          </h1>

          <p className="hero-stagger hero-stagger-2 font-body italic text-cream/80 text-base md:text-lg mt-6 max-w-md leading-relaxed">
            A bungalow cafe, artisan bakery, curated bookstore and Bangalore's most interesting cultural space.
          </p>

          <div className="hero-stagger hero-stagger-3 flex flex-wrap gap-2 mt-5">
            {tags.map((t) => (
              <span
                key={t.label}
                className="font-mono text-[11px] text-cream border border-cream/40 px-3 py-1.5 rounded-full"
              >
                {t.emoji} {t.label}
              </span>
            ))}
          </div>

          <div className="hero-stagger hero-stagger-4 flex flex-wrap gap-4 mt-8">
            <a
              href="#events"
              className="font-headline text-sm tracking-wider bg-terracotta text-cream px-7 py-3.5 hover:bg-terracotta/90 transition-all hover:scale-105"
            >
              EXPLORE EVENTS
            </a>
            <a
              href="#menu"
              className="font-headline text-sm tracking-wider border-2 border-cream text-cream px-7 py-3.5 hover:bg-cream hover:text-ink transition-all hover:scale-105"
            >
              SEE MENU →
            </a>
          </div>
        </div>
      </div>

      {/* Right — Event cards */}
      <div className="hidden lg:flex items-center justify-center relative pr-12">
        <div className="relative w-80 h-96">
          {eventCards.map((card, i) => (
            <div
              key={card.title}
              className={`card-stagger ${card.delay} absolute ${card.bg} ${card.text} p-6 w-64 shadow-2xl`}
              style={{
                ["--card-rotate" as string]: card.rotate,
                top: `${i * 80}px`,
                left: `${i * 20}px`,
                zIndex: 3 - i,
              }}
            >
              <span className="font-headline text-4xl leading-none block mb-2">{card.title}</span>
              <span className="font-mono text-[10px] tracking-wider opacity-70">AT BEKU · JP NAGAR</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Marquee bar */}
    <div className="w-full bg-mustard py-3 overflow-hidden torn-divider">
      <div className="animate-marquee whitespace-nowrap flex">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="font-mono text-xs tracking-wider text-ink inline-block">
            OPEN ALL DAYS · 11AM TO 11PM · JP NAGAR BLR · 4.6★ RATED · EGGLESS BAKERY · VEGAN FRIENDLY · QUIZ NIGHTS · POETRY MICS · BOOK CLUBS · ✦ ·{" "}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
