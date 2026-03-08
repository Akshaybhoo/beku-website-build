const stats = [
  { number: "4.6★", label: "Rated by Guests", desc: "445+ reviews. Guests return for the ambiance, the food, and the quiet." },
  { number: "12h", label: "Open Every Day", desc: "11am to 11pm, seven days a week." },
  { number: "∞", label: "Books to Browse", desc: "A curated bookshelf plus handmade stationery and bookmarks." },
  { number: "∅", label: "Compromise-Free", desc: "Eggless, vegan-friendly, and joyful." },
];

const Experience = () => (
  <section className="py-24 px-6 md:px-16 bg-parchment">
    <div className="max-w-6xl mx-auto">
      <div className="scroll-reveal mb-16">
        <span className="font-mono text-xs small-caps tracking-widest text-muted-foreground">The Beku Experience</span>
        <h2 className="font-display text-4xl md:text-5xl font-light mt-3">More than a cafe</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="scroll-reveal border-t-2 border-gold pt-6 space-y-3">
            <span className="font-display text-4xl md:text-5xl text-terracotta">{s.number}</span>
            <p className="font-mono text-xs small-caps tracking-wider text-espresso">{s.label}</p>
            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
