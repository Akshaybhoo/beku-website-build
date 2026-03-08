const Footer = () => (
  <footer className="bg-near-black text-cream py-16 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 mb-12">
        <div>
          <span className="font-logo text-4xl italic text-gold">Beku</span>
          <p className="font-mono text-xs text-sage mt-2 tracking-wider">Cafe · Bakery · Bookstore · JP Nagar</p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-3">
            <p className="font-mono text-[10px] small-caps tracking-widest text-cream/40">Visit</p>
            <div className="flex flex-col gap-2">
              {["Menu", "About", "Events", "Location"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="font-mono text-xs text-cream/60 hover:text-cream transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[10px] small-caps tracking-widest text-cream/40">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/beku.blr" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cream/60 hover:text-cream transition-colors">Instagram</a>
              <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cream/60 hover:text-cream transition-colors">Zomato</a>
              <a href="tel:9008798842" className="font-mono text-xs text-cream/60 hover:text-cream transition-colors">Call Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] text-cream/30">© 2025 Beku. All rights reserved.</p>
        <a href="https://instagram.com/beku.blr" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-gold hover:text-gold/80 transition-colors">
          @beku.blr
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
