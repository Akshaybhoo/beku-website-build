const navLinks = ["Menu", "About", "Visit", "Events"];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 mix-blend-multiply">
    <a href="#" className="font-logo text-3xl italic text-espresso">Beku</a>
    <div className="hidden md:flex gap-8">
      {navLinks.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="nav-link font-mono text-xs small-caps text-espresso tracking-widest"
        >
          {link}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;
