const Visit = () => (
  <section id="visit" className="bg-sage/30 py-20 px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="scroll-reveal text-center mb-14">
        <h2 className="font-headline text-[50px] md:text-[80px] text-ink leading-[0.9]">COME FIND US</h2>
        <p className="font-body text-ink/60 text-lg mt-2">We're always open. Always warm.</p>
      </div>

      <div className="scroll-reveal bg-teal rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left info */}
        <div className="space-y-5">
          <div className="flex gap-3 items-start">
            <span className="text-xl">📍</span>
            <p className="font-body text-cream/80 text-sm">
              543, 9th Cross Road, 3rd Phase,<br />J.P. Nagar, Bengaluru 560078
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xl">🕐</span>
            <p className="font-body text-cream/80 text-sm">Every day · 11:00 AM – 11:00 PM</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xl">📞</span>
            <a href="tel:9008798842" className="font-body text-sage text-sm hover:underline">+91 90087 98842</a>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xl">📸</span>
            <a href="https://instagram.com/beku.blr" target="_blank" rel="noopener noreferrer" className="font-body text-sage text-sm hover:underline">
              @beku.blr on Instagram
            </a>
          </div>
        </div>

        {/* Right map placeholder */}
        <div className="bg-deep-green/40 rounded-lg flex flex-col items-center justify-center p-8 min-h-[200px]">
          <span className="text-5xl mb-4">📍</span>
          <p className="font-mono text-[11px] text-cream/50 mb-4 text-center">Beku Cafe · JP Nagar</p>
          <a
            href="https://maps.google.com?q=Beku+Cafe+JP+Nagar+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline text-sm tracking-wider bg-sage text-ink px-6 py-3 rounded-sm hover:bg-sage/80 transition-all hover:scale-105"
          >
            OPEN IN MAPS
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Visit;
