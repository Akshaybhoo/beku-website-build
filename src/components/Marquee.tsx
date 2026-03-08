const text = "Cafe ✦ Bakery ✦ Bookstore ✦ Event Space ✦ JP Nagar Bangalore ✦ Open All Days 11am–11pm ✦ Vegan Friendly ✦ Eggless Bakery ✦ ";

const Marquee = () => (
  <div className="w-full bg-gold py-3 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap flex">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="font-mono text-xs small-caps tracking-widest text-espresso mx-0 inline-block">
          {text}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
