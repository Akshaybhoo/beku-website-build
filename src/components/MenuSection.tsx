const menuItems = [
  { name: "MYSORE PAK CROISSANT", desc: "Bangalore in a bite. Our signature eggless creation.", tag: "Bakery" },
  { name: "WHITE CHOC & ROSE LATTE", desc: "Floral. Warming. Unforgettable.", tag: "Coffee" },
  { name: "PECAN PIE", desc: "Shortbread base, perfect filling. Vegan.", tag: "Bakery" },
  { name: "STRAWBERRY MATCHA", desc: "Earthy meets sweet. Layered and vibrant.", tag: "Drinks" },
  { name: "LEMON TEA CAKE", desc: "A glossy curd. Afternoon perfection.", tag: "Bakery" },
  { name: "THAI GREEN CURRY", desc: "Rich, fragrant, customizable vegan.", tag: "Food" },
];

const MenuSection = () => (
  <section id="menu" className="bg-terracotta py-20 px-6 md:px-16 relative torn-divider">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12 items-start">
      {/* Left decorative */}
      <div className="scroll-reveal relative">
        <h2 className="font-headline text-[60px] md:text-[80px] text-cream leading-[0.9] mb-4">
          THE GOOD STUFF
        </h2>
        <p className="font-body italic text-cream/80 text-lg">
          Eggless. Mostly vegan. Always delicious.
        </p>
        {/* Large decorative MENU text */}
        <div className="hidden lg:block mt-12">
          <span className="font-headline text-[200px] text-cream/[0.06] leading-none block select-none">
            MENU
          </span>
        </div>
      </div>

      {/* Right — menu items */}
      <div className="scroll-reveal space-y-0">
        {menuItems.map((item, i) => (
          <div key={item.name}>
            <div className="menu-item py-6 px-4 group">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <h3 className="font-headline text-2xl md:text-4xl text-cream leading-none">
                  {item.name}
                </h3>
                <span className="font-mono text-[10px] tracking-wider text-cream/50 border border-cream/20 px-2 py-0.5 self-start">
                  {item.tag}
                </span>
              </div>
              <p className="font-mono text-xs text-cream/60 mt-2">{item.desc}</p>
            </div>
            {i < menuItems.length - 1 && (
              <div className="h-[1px] bg-mustard/40" />
            )}
          </div>
        ))}
        <p className="font-mono text-xs text-cream/50 mt-8 pt-4 border-t border-cream/20">
          Avg spend ₹750 for two
        </p>
      </div>
    </div>
  </section>
);

export default MenuSection;
