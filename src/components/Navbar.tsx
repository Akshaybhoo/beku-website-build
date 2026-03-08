import { useEffect, useState } from "react";
import bekuLogo from "@/assets/beku-logo.jpeg";

const navLinks = [
  { label: "MENU", href: "#menu" },
  { label: "EVENTS", href: "#events" },
  { label: "VISIT", href: "#visit" },
  { label: "BOOK A TABLE", href: "tel:9008798842" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 transition-all duration-500 ${
        scrolled ? "bg-teal/95 nav-scrolled" : "bg-teal"
      }`}
    >
      <a href="#" className="flex items-center gap-3">
        <img src={bekuLogo} alt="Beku Logo" className="w-10 h-10 rounded-full object-cover" />
        <span className="font-headline text-2xl md:text-3xl text-sage tracking-wide">BEKU</span>
      </a>
      <span className="hidden md:block font-body italic text-sage/80 text-base">
        ಬೇಕು
      </span>
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[11px] text-cream/70 tracking-wider hover:text-sage transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
