const tags = ["🌿 Vegan Options", "📚 Curated Books", "🎨 Event Space", "✋ Handmade Goods", "🌳 Bungalow Setting"];

const About = () => (
  <section id="about" className="bg-ink py-24 px-6 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      {/* Left text */}
      <div className="scroll-reveal space-y-6">
        <span className="font-mono text-xs tracking-[0.3em] text-mustard">THE STORY</span>
        <h2 className="font-headline text-cream leading-[0.85]">
          <span className="block text-[50px] md:text-[80px]">A BUNGALOW</span>
          <span className="block text-[50px] md:text-[80px]">THAT BECAME</span>
          <span className="block text-[50px] md:text-[80px] text-terracotta">EVERYTHING</span>
        </h2>
        <div className="font-body text-cream/70 text-base md:text-lg leading-[1.9] space-y-4 max-w-lg">
          <p>
            In a tree-lined street in JP Nagar, there's an old bungalow that Prarthana turned into
            something Bangalore didn't know it needed.
          </p>
          <p>
            Part cafe. Part bakery. Part bookstore. Part community hub. All heart.
          </p>
          <p className="text-cream/90 italic">
            Beku (ಬೇಕು) means <em>I want</em> in Kannada. Once you visit, you'll understand why.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[11px] text-cream/80 border border-cream/30 px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="scroll-reveal flex justify-center">
        <div className="relative">
          {/* Main circle */}
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-deep-green border-[3px] border-dashed border-mustard flex flex-col items-center justify-center">
            <span className="font-headline text-mustard text-sm tracking-[0.4em]">BAKERY</span>
            {/* House icon */}
            <div className="my-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 8 L52 26 L52 52 L8 52 L8 26 Z" stroke="hsl(38,38%,90%)" strokeWidth="1.5" fill="none" />
                <rect x="22" y="34" width="16" height="18" stroke="hsl(38,38%,90%)" strokeWidth="1.5" fill="none" />
                <path d="M4 26 L30 4 L56 26" stroke="hsl(43,78%,46%)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <span className="font-headline text-mustard text-sm tracking-[0.4em]">CAFE</span>
          </div>

          {/* Stamp badge */}
          <div className="stamp-badge absolute -bottom-4 -right-4 md:-right-8 bg-ink/80 backdrop-blur">
            <span className="font-mono text-[8px] text-cream/80 tracking-wider text-center leading-relaxed">
              JP NAGAR<br />BLR<br />SINCE 2023
            </span>
          </div>

          {/* Floating stats */}
          <div className="absolute -top-4 -left-4 md:-left-12 bg-cream px-4 py-3 shadow-lg">
            <span className="font-headline text-2xl text-terracotta">4.6★</span>
            <span className="font-mono text-[10px] text-ink/60 block">445+ Reviews</span>
          </div>
          <div className="absolute bottom-8 -left-4 md:-left-16 bg-cream px-4 py-3 shadow-lg">
            <span className="font-headline text-2xl text-terracotta">12H</span>
            <span className="font-mono text-[10px] text-ink/60 block">Open Daily</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
