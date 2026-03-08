import bekuLogo from "@/assets/beku-logo.jpeg";

const Footer = () => (
  <footer className="bg-teal py-16 px-6 md:px-16 relative overflow-hidden">
    {/* Giant watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="font-headline text-[180px] md:text-[350px] text-cream/[0.03] leading-none">BEKU</span>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
        <div className="flex items-center gap-4">
          <img src={bekuLogo} alt="Beku" className="w-12 h-12 rounded-full object-cover border border-sage/30" />
          <div>
            <span className="font-headline text-3xl text-cream">BEKU</span>
            <span className="font-body italic text-sage text-lg ml-2">ಬೇಕು</span>
            <p className="font-mono text-[11px] text-cream/40 mt-1 tracking-wider">
              Cafe · Bakery · Bookstore · JP Nagar, Bangalore
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="https://instagram.com/beku.blr" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-cream/50 hover:text-sage transition-colors">
            Instagram @beku.blr
          </a>
          <a href="https://lnk.bio/beku.blr" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-cream/50 hover:text-sage transition-colors">
            Linktree
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] text-cream/25">© 2025 Beku. All rights reserved.</p>
        <p className="font-mono text-[10px] text-cream/35">Made with love in Bangalore 🧡</p>
      </div>
    </div>
  </footer>
);

export default Footer;
