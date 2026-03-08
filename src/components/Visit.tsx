const infoRows = [
  { icon: "📍", label: "Address", value: "543, 9th Cross Road, 3rd Phase, J.P. Nagar, Bengaluru – 560078" },
  { icon: "🕐", label: "Hours", value: "Open all days · 11:00 AM – 11:00 PM" },
  { icon: "📞", label: "Phone", value: "+91 90087 98842", href: "tel:9008798842" },
  { icon: "📸", label: "Instagram", value: "@beku.blr", href: "https://instagram.com/beku.blr" },
];

const Visit = () => (
  <section id="visit" className="py-24 px-6 md:px-16 bg-background">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="scroll-reveal space-y-8">
        <div>
          <span className="font-mono text-xs small-caps tracking-widest text-muted-foreground">Plan Your Visit</span>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-3">
            Come say <em className="text-terracotta">beku</em>
          </h2>
        </div>
        <div className="space-y-0">
          {infoRows.map((row, i) => (
            <div key={row.label} className={`flex gap-4 py-5 ${i < infoRows.length - 1 ? "border-b border-parchment" : ""}`}>
              <span className="text-xl">{row.icon}</span>
              <div>
                <p className="font-mono text-[10px] small-caps tracking-wider text-muted-foreground mb-1">{row.label}</p>
                {row.href ? (
                  <a href={row.href} className="font-display text-base text-terracotta hover:underline" target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {row.value}
                  </a>
                ) : (
                  <p className="font-display text-base text-espresso">{row.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-reveal flex items-center justify-center">
        <div className="bg-parchment p-10 rounded-sm w-full max-w-sm text-center space-y-4" style={{ background: "radial-gradient(circle at center, hsl(38,33%,90%), hsl(38,33%,86%))" }}>
          <span className="text-5xl block">📍</span>
          <p className="font-mono text-xs small-caps tracking-wider text-muted-foreground">Beku Cafe · JP Nagar</p>
          <p className="font-display text-sm italic text-espresso/70">543, 9th Cross Road, 3rd Phase,<br />J.P. Nagar, Bengaluru – 560078</p>
          <a
            href="https://www.google.com/maps/search/Beku+Cafe+JP+Nagar+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-espresso text-cream px-6 py-3 font-mono text-xs small-caps tracking-wider hover:bg-espresso/90 transition-colors mt-2"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Visit;
