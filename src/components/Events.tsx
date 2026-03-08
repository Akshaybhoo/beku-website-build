const events = [
  { name: "HORN OK QUIZ", desc: "Bangalore's favourite pub quiz night", color: "bg-mustard", textColor: "text-ink", time: "Fridays · 7 PM" },
  { name: "LETTERS TO THE LIVING WORLD", desc: "A creative writing evening", color: "bg-sage", textColor: "text-cream", time: "Monthly · Sat" },
  { name: "POETRY OPEN MIC", desc: "Read. Listen. Feel.", color: "bg-blush", textColor: "text-ink", time: "Bi-weekly · Sun" },
  { name: "QUEER HOBBY HOUR", desc: "A safe, joyful creative space", color: "bg-terracotta", textColor: "text-cream", time: "Monthly · Sat" },
  { name: "ONCE UPON A REFLECTION", desc: "Storytelling and reflection", color: "bg-deep-green", textColor: "text-cream", time: "Monthly · Sun" },
  { name: "BOLLYWOOD TRIVIA NIGHT", desc: "80s to 2000s — test your filmy IQ", color: "bg-mustard", textColor: "text-ink", time: "Monthly · Fri" },
  { name: "BEKU BOOK CLUB", desc: "Read together, talk forever", color: "bg-sage", textColor: "text-cream", time: "Monthly · Sat" },
];

const Events = () => (
  <section id="events" className="bg-cream py-20 px-6 md:px-16 relative">
    <div className="max-w-7xl mx-auto relative">
      {/* Rotated label */}
      <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2">
        <span
          className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          EVENTS
        </span>
      </div>

      <div className="scroll-reveal mb-14">
        <h2 className="font-headline text-[60px] md:text-[100px] text-ink leading-[0.9]">WHAT'S ON</h2>
        <p className="font-body italic text-terracotta text-xl md:text-2xl mt-2">at Beku this month</p>
      </div>

      {/* Event cards — masonry-like staggered grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((ev, i) => (
          <div
            key={ev.name}
            className={`scroll-reveal group border-2 border-ink/10 hover:border-ink/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${i === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className={`${ev.color} h-3 transition-all duration-300 group-hover:h-5`} />
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-headline text-2xl md:text-3xl text-ink leading-none">{ev.name}</h3>
                <span
                  className="font-mono text-[9px] tracking-wider text-ink/60 border border-ink/20 px-2 py-1 whitespace-nowrap"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  {ev.time}
                </span>
              </div>
              <p className="font-mono text-xs text-ink/60">{ev.desc}</p>
              <a
                href="https://lnk.bio/beku.blr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-headline text-sm tracking-wider text-terracotta hover:text-ink transition-colors"
              >
                BOOK TICKETS →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Host CTA */}
      <div className="mt-16 bg-ink p-8 md:p-12 scroll-reveal">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-3xl md:text-5xl text-cream">WANT TO HOST YOUR OWN EVENT?</h3>
            <p className="font-body text-cream/70 mt-2 max-w-lg">
              Beku's bungalow space is yours — for pop-ups, workshops, art shows, screenings, and more.
            </p>
          </div>
          <a
            href="tel:9008798842"
            className="font-headline text-sm tracking-wider bg-terracotta text-cream px-8 py-4 hover:bg-terracotta/90 transition-all hover:scale-105 whitespace-nowrap"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
