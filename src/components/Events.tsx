const Events = () => (
  <section id="events" className="bg-terracotta py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
      <div className="scroll-reveal space-y-4">
        <span className="font-mono text-xs small-caps tracking-widest text-cream/70">Host With Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-light text-cream leading-tight">
          Your next gathering deserves Beku
        </h2>
        <p className="font-display text-lg text-cream/80 leading-relaxed max-w-lg">
          Book readings · Art shows · Pop-ups · Workshops · Birthday celebrations. Our bungalow space is designed for community and conversation.
        </p>
      </div>
      <div className="scroll-reveal">
        <a
          href="tel:9008798842"
          className="inline-block bg-cream text-terracotta px-8 py-4 font-mono text-xs small-caps tracking-wider hover:bg-cream/90 transition-colors"
        >
          Enquire Now
        </a>
      </div>
    </div>
  </section>
);

export default Events;
