const menuItems = [
  { name: "MYSORE PAK CROISSANT", desc: "Bangalore in a bite. Our signature eggless creation.", tag: "Bakery" },
  { name: "WHITE CHOC & ROSE LATTE", desc: "Floral. Warming. Unforgettable.", tag: "Coffee" },
  { name: "PECAN PIE", desc: "Shortbread base, perfect filling. Vegan.", tag: "Bakery" },
  { name: "STRAWBERRY MATCHA", desc: "Earthy meets sweet. Layered and vibrant.", tag: "Drinks" },
  { name: "LEMON TEA CAKE", desc: "A glossy curd. Afternoon perfection.", tag: "Bakery" },
  { name: "THAI GREEN CURRY", desc: "Rich, fragrant, customizable vegan.", tag: "Food" },
];

const MenuSection = () => (
  <section id="menu" className="bg-deep-green py-20 px-6 md:px-16 relative">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12 items-start">
      {/* Left decorative */}
      <div className="scroll-reveal relative">
        <h2 className="font-headline text-[50px] md:text-[70px] text-cream/90 leading-[0.9] mb-4">
          THE GOOD STUFF
        </h2>
        <p className="font-body italic text-sage text-lg">
          Eggless. Mostly vegan. Always delicious.
        </p>
        <div className="hidden lg:block mt-12">
          <span className="font-headline text-[180px] text-sage/[0.06] leading-none block select-none">
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
                <h3 className="font-headline text-2xl md:text-3xl text-cream/90 leading-none">
                  {item.name}
                </h3>
                <span className="font-mono text-[10px] tracking-wider text-sage/60 border border-sage/20 px-2 py-0.5 rounded self-start">
                  {item.tag}
                </span>
              </div>
              <p className="font-mono text-[11px] text-cream/50 mt-2">{item.desc}</p>
            </div>
            {i < menuItems.length - 1 && (
              <div className="h-[1px] bg-sage/20" />
            )}
          </div>
        ))}
        <p className="font-mono text-[11px] text-sage/40 mt-8 pt-4 border-t border-sage/15">
          Avg spend ₹750 for two
        </p>
      </div>
    </div>
  </section>
);

export default MenuSection;
