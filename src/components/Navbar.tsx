import { useEffect, useState } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 bg-ink border-b-2 border-mustard ${scrolled ? "nav-scrolled" : ""}`}
    >
      <a href="#" className="font-headline text-3xl md:text-4xl text-cream tracking-wide">
        BEKU
      </a>
      <span className="hidden md:block font-body italic text-terracotta text-lg">
        ಬೇಕು
      </span>
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-xs text-cream/80 tracking-wider hover:text-mustard transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
