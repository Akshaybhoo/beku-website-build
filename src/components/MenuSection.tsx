const menuItems = [
  { emoji: "🥐", name: "Mysore Pak Croissant", desc: "A uniquely Bangalore creation — eggless croissant meets iconic South Indian sweet.", badge: "⭐ Bestseller" },
  { emoji: "🌹", name: "White Chocolate & Rose Latte", desc: "Delicate, floral, and warming. Our most-photographed drink.", badge: "☕ Must Try" },
  { emoji: "🥧", name: "Pecan Pie", desc: "Shortbread crust with perfectly balanced filling. Vegan-friendly and utterly indulgent.", badge: "🌿 Vegan" },
  { emoji: "🍵", name: "Strawberry Matcha", desc: "Vibrant, layered, refreshing — earthy matcha meets sweet strawberry.", badge: "🌿 Vegan" },
  { emoji: "🍋", name: "Lemon Tea Cake", desc: "Bright lemon cake with a glossy curd. Light enough for afternoon, indulgent enough for a treat.", badge: "" },
  { emoji: "🍛", name: "Thai Green Curry", desc: "Rich, fragrant, customizable for vegan preferences. Most-loved savoury dish.", badge: "🌿 Vegan" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 px-6 md:px-16 bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="scroll-reveal mb-16">
        <span className="font-mono text-xs small-caps tracking-widest text-muted-foreground">What We Serve</span>
        <h2 className="font-display text-4xl md:text-5xl font-light mt-3">
          Our <em className="text-terracotta">Favourites</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="scroll-reveal group relative bg-parchment p-8 transition-colors duration-500 hover:bg-espresso overflow-hidden"
          >
            {item.badge && (
              <span className="absolute top-4 right-4 font-mono text-[10px] tracking-wider text-terracotta group-hover:text-gold transition-colors duration-500">
                {item.badge}
              </span>
            )}
            <span className="text-3xl block mb-4">{item.emoji}</span>
            <h3 className="font-display text-xl text-espresso group-hover:text-cream transition-colors duration-500 mb-2">
              {item.name}
            </h3>
            <p className="font-mono text-xs text-muted-foreground group-hover:text-cream/60 transition-colors duration-500 leading-relaxed">
              {item.desc}
            </p>
            <div className="menu-card-line" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
