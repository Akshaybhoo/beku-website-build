const menuItems = [
  { emoji: "🥐", name: "Mysore Pak Croissant", desc: "Bangalore in a bite. Our signature eggless creation.", tag: "⭐ Bestseller", category: "Bakery" },
  { emoji: "🌹", name: "White Choc & Rose Latte", desc: "Floral. Warming. Unforgettable.", tag: "☕ Must Try", category: "Coffee" },
  { emoji: "🥧", name: "Pecan Pie", desc: "Shortbread base, perfect filling. Vegan.", tag: "🌿 Vegan", category: "Bakery" },
  { emoji: "🍵", name: "Strawberry Matcha", desc: "Earthy meets sweet. Layered and vibrant.", tag: "🌿 Vegan", category: "Drinks" },
  { emoji: "🍋", name: "Lemon Tea Cake", desc: "A glossy curd. Afternoon perfection.", tag: "", category: "Bakery" },
  { emoji: "🍛", name: "Thai Green Curry", desc: "Rich, fragrant, customizable vegan.", tag: "🌿 Vegan", category: "Food" },
];

const MenuSection = () => (
  <section id="menu" className="bg-deep-green py-20 px-6 md:px-16 relative">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="scroll-reveal text-center mb-14">
        <span className="font-mono text-[11px] tracking-[0.3em] text-sage/60">WHAT WE SERVE</span>
        <h2 className="font-headline text-[50px] md:text-[80px] text-cream/90 leading-[0.9] mt-2">
          THE GOOD STUFF
        </h2>
        <p className="font-body italic text-sage text-lg mt-3">
          Eggless. Mostly vegan. Always delicious.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="scroll-reveal group relative bg-teal/40 backdrop-blur-sm rounded-xl p-6 border border-sage/10 hover:border-sage/30 hover:bg-teal/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            {item.tag && (
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-wider text-sage/80 bg-sage/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
            )}
            <div className="text-4xl mb-4">{item.emoji}</div>
            <span className="font-mono text-[9px] tracking-wider text-sage/50 uppercase">{item.category}</span>
            <h3 className="font-headline text-xl md:text-2xl text-cream/90 mt-1 mb-2 leading-tight">
              {item.name}
            </h3>
            <p className="font-mono text-[11px] text-cream/45 leading-relaxed">{item.desc}</p>
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-sage/0 group-hover:bg-sage/40 transition-all duration-500 rounded-full" />
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="scroll-reveal font-mono text-[11px] text-sage/35 text-center mt-10">
        Avg spend ₹750 for two · Full menu available in-store
      </p>
    </div>
  </section>
);

export default MenuSection;
