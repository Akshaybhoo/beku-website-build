const Hero = () => (
  <section className="min-h-screen pt-24 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
    {/* Left */}
    <div className="flex flex-col gap-6 max-w-xl py-12">
      <span className="hero-stagger hero-stagger-1 font-mono text-xs small-caps tracking-widest text-muted-foreground">
        JP Nagar, Bangalore · Est. 2023
      </span>
      <h1 className="hero-stagger hero-stagger-2">
        <span className="block font-display text-7xl md:text-8xl lg:text-9xl font-light text-espresso leading-none">Beku</span>
        <span className="block font-display text-6xl md:text-7xl lg:text-8xl italic text-terracotta leading-none mt-2">ಬೇಕು</span>
      </h1>
      <div className="hero-stagger hero-stagger-3 space-y-3">
        <p className="font-mono text-xs text-muted-foreground tracking-wide">/beːku/ · Kannada · verb</p>
        <p className="font-display text-lg md:text-xl text-espresso/80 leading-relaxed">
          <em>I want</em> — a place for everything you didn't know you needed. Coffee, croissants, books, and the quiet luxury of slow time.
        </p>
      </div>
      <div className="hero-stagger hero-stagger-4 flex items-center gap-6 mt-2">
        <a href="#menu" className="inline-block bg-espresso text-cream px-7 py-3 font-mono text-xs small-caps tracking-wider hover:bg-espresso/90 transition-colors">
          Explore Menu
        </a>
        <a href="#visit" className="font-mono text-xs small-caps tracking-wider text-espresso nav-link">
          Find Us →
        </a>
      </div>
    </div>

    {/* Right */}
    <div className="hidden md:flex flex-col items-center justify-center relative">
      <div className="hero-stagger hero-stagger-3 w-full max-w-md aspect-square bg-parchment rounded-sm relative flex items-center justify-center overflow-hidden">
        {/* Gold circle */}
        <div className="absolute w-64 h-64 rounded-full" style={{ background: "var(--gradient-gold)" }} />
        {/* SVG illustration */}
        <svg viewBox="0 0 200 200" className="relative w-48 h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Coffee cup */}
          <rect x="70" y="90" width="40" height="35" rx="3" stroke="hsl(20,52%,12%)" strokeWidth="1.5" />
          <path d="M110 100 C120 100, 120 115, 110 115" stroke="hsl(20,52%,12%)" strokeWidth="1.5" fill="none" />
          <rect x="65" y="125" width="50" height="4" rx="2" stroke="hsl(20,52%,12%)" strokeWidth="1" />
          {/* Steam */}
          <path d="M82 85 Q85 75, 82 65" stroke="hsl(36,40%,60%)" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M90 87 Q93 77, 90 67" stroke="hsl(36,40%,60%)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M98 85 Q101 75, 98 65" stroke="hsl(36,40%,60%)" strokeWidth="1" fill="none" opacity="0.7" />
          {/* Open book */}
          <path d="M30 110 L30 145 Q50 138, 65 145 L65 110 Q50 103, 30 110Z" stroke="hsl(20,52%,12%)" strokeWidth="1.2" fill="none" />
          <path d="M65 110 L65 145 Q80 138, 100 145 L100 110 Q80 103, 65 110Z" stroke="hsl(20,52%,12%)" strokeWidth="1.2" fill="none" />
          <line x1="40" y1="118" x2="58" y2="115" stroke="hsl(36,40%,60%)" strokeWidth="0.6" opacity="0.5" />
          <line x1="40" y1="124" x2="58" y2="121" stroke="hsl(36,40%,60%)" strokeWidth="0.6" opacity="0.5" />
          <line x1="40" y1="130" x2="58" y2="127" stroke="hsl(36,40%,60%)" strokeWidth="0.6" opacity="0.5" />
          {/* Croissant */}
          <path d="M140 130 Q145 115, 160 110 Q170 115, 175 130 Q160 128, 140 130Z" stroke="hsl(36,40%,60%)" strokeWidth="1.5" fill="none" />
          <path d="M148 125 Q155 118, 165 125" stroke="hsl(36,40%,60%)" strokeWidth="0.8" fill="none" />
          {/* Plant */}
          <line x1="155" y1="95" x2="155" y2="75" stroke="hsl(104,12%,49%)" strokeWidth="1.2" />
          <ellipse cx="148" cy="72" rx="8" ry="5" stroke="hsl(104,12%,49%)" strokeWidth="1" fill="none" transform="rotate(-20, 148, 72)" />
          <ellipse cx="162" cy="68" rx="7" ry="4" stroke="hsl(104,12%,49%)" strokeWidth="1" fill="none" transform="rotate(15, 162, 68)" />
          <ellipse cx="155" cy="62" rx="6" ry="4" stroke="hsl(104,12%,49%)" strokeWidth="1" fill="none" />
          <rect x="149" y="95" width="12" height="14" rx="2" stroke="hsl(20,52%,12%)" strokeWidth="1" fill="none" />
        </svg>
        {/* Stats */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
          <div className="hero-stagger hero-stagger-5 bg-cream/80 backdrop-blur-sm px-4 py-2 rounded-sm">
            <span className="font-display text-lg text-terracotta font-semibold">4.6★</span>
            <span className="font-mono text-[10px] text-muted-foreground ml-2">445+ Reviews</span>
          </div>
          <div className="hero-stagger hero-stagger-6 bg-cream/80 backdrop-blur-sm px-4 py-2 rounded-sm">
            <span className="font-display text-lg text-terracotta font-semibold">11–11</span>
            <span className="font-mono text-[10px] text-muted-foreground ml-2">Open All Days</span>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3 hero-stagger hero-stagger-6">
      <div className="w-8 h-[1px] bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-terracotta scroll-line-anim" />
      </div>
      <span className="font-mono text-[10px] small-caps tracking-widest text-muted-foreground">Scroll to explore</span>
    </div>
  </section>
);

export default Hero;
