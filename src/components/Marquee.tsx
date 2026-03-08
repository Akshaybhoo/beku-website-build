const text = "OPEN ALL DAYS · 11AM TO 11PM · JP NAGAR BLR · 4.6★ RATED · EGGLESS BAKERY · VEGAN FRIENDLY · QUIZ NIGHTS · POETRY MICS · BOOK CLUBS · ✦ · ";

const Marquee = () => (
  <div className="w-full bg-mustard py-3 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap flex">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="font-mono text-xs tracking-wider text-ink inline-block">
          {text}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
