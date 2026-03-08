const Footer = () => (
  <footer className="bg-ink py-16 px-6 md:px-16 relative overflow-hidden">
    {/* Giant watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="font-headline text-[200px] md:text-[400px] text-cream/[0.03] leading-none">BEKU</span>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
        <div>
          <span className="font-headline text-5xl text-cream">BEKU</span>
          <span className="font-body italic text-sage text-xl ml-3">ಬೇಕು</span>
          <p className="font-mono text-xs text-cream/40 mt-2 tracking-wider">
            Cafe · Bakery · Bookstore · JP Nagar, Bangalore
          </p>
        </div>
        <div className="flex gap-8">
          <a href="https://instagram.com/beku.blr" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cream/60 hover:text-cream transition-colors">
            Instagram @beku.blr
          </a>
          <a href="https://lnk.bio/beku.blr" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cream/60 hover:text-cream transition-colors">
            Linktree
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] text-cream/30">© 2025 Beku. All rights reserved.</p>
        <p className="font-mono text-[10px] text-cream/40">Made with love in Bangalore 🧡</p>
      </div>
    </div>
  </footer>
);

export default Footer;
