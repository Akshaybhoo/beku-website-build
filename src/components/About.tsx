const tags = ["Cafe", "Artisan Bakery", "Curated Books", "Events", "Vegan Options"];

const About = () => (
  <section id="about" className="bg-espresso text-cream py-24 px-6 md:px-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="scroll-reveal space-y-8">
        <span className="font-mono text-xs small-caps tracking-widest text-gold">Our Story</span>
        <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
          A bungalow that <em className="text-dusty-rose">became a haven</em>
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[10px] small-caps tracking-wider border border-gold/40 text-gold px-3 py-1 rounded-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="scroll-reveal space-y-6 font-display text-lg text-cream/70 leading-relaxed">
        <p>Tucked in an old bungalow shaded by beautiful trees in JP Nagar, Beku is the kind of place you find and never want to leave. Founded by Prarthana, it's a living room for the neighbourhood.</p>
        <p>We serve eggless croissants, lovingly brewed coffee, and desserts that prove indulgence needs no compromise. Browse our curated bookshelf, pick up handmade bookmarks, stickers, and stationery.</p>
        <p className="text-cream/90 italic">Beku means <em>I want</em> in Kannada. Come find out why.</p>
      </div>
    </div>
  </section>
);

export default About;
