import bekuLogo from "@/assets/beku-logo.jpeg";

const tags = ["🌿 Vegan Options", "📚 Curated Books", "🎨 Event Space", "✋ Handmade Goods", "🌳 Bungalow Setting"];

const About = () => (
  <section id="about" className="bg-parchment py-24 px-6 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      {/* Left text */}
      <div className="scroll-reveal space-y-6">
        <span className="font-mono text-[11px] tracking-[0.3em] text-teal">THE STORY</span>
        <h2 className="font-headline leading-[0.88]">
          <span className="block text-[45px] md:text-[70px] text-ink">A BUNGALOW</span>
          <span className="block text-[45px] md:text-[70px] text-ink">THAT BECAME</span>
          <span className="block text-[45px] md:text-[70px] text-teal">EVERYTHING</span>
        </h2>
        <div className="font-body text-ink/65 text-base md:text-lg leading-[1.9] space-y-4 max-w-lg">
          <p>
            In a tree-lined street in JP Nagar, there's an old bungalow that Prarthana turned into
            something Bangalore didn't know it needed.
          </p>
          <p>
            Part cafe. Part bakery. Part bookstore. Part community hub. All heart.
          </p>
          <p className="text-ink/80 italic">
            Beku (ಬೇಕು) means <em>I want</em> in Kannada. Once you visit, you'll understand why.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[11px] text-teal border border-teal/25 px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="scroll-reveal flex justify-center">
        <div className="relative">
          {/* Main circle with logo */}
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-[3px] border-dashed border-sage shadow-xl">
            <img src={bekuLogo} alt="Beku Logo" className="w-full h-full object-cover" />
          </div>

          {/* Stamp badge */}
          <div className="stamp-badge absolute -bottom-4 -right-4 md:-right-8 bg-cream/90 backdrop-blur shadow-md">
            <span className="font-mono text-[8px] text-teal tracking-wider text-center leading-relaxed">
              JP NAGAR<br />BLR<br />SINCE 2023
            </span>
          </div>

          {/* Floating stats */}
          <div className="absolute -top-4 -left-4 md:-left-12 bg-cream px-4 py-3 rounded-lg shadow-md">
            <span className="font-headline text-2xl text-teal">4.6★</span>
            <span className="font-mono text-[10px] text-ink/50 block">445+ Reviews</span>
          </div>
          <div className="absolute bottom-8 -left-4 md:-left-16 bg-cream px-4 py-3 rounded-lg shadow-md">
            <span className="font-headline text-2xl text-teal">12H</span>
            <span className="font-mono text-[10px] text-ink/50 block">Open Daily</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
