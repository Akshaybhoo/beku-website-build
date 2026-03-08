const text = "OPEN ALL DAYS · 11AM TO 11PM · JP NAGAR BLR · 4.6★ RATED · EGGLESS BAKERY · VEGAN FRIENDLY · QUIZ NIGHTS · POETRY MICS · BOOK CLUBS · ✦ · ";

const Marquee = () => (
  <div className="w-full bg-sage/50 py-3 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap flex">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="font-mono text-[11px] tracking-wider text-ink/70 inline-block">
          {text}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
