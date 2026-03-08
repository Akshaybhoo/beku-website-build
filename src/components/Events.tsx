import { useState, useEffect } from "react";

const events = [
  { name: "HORN OK QUIZ", desc: "Bangalore's favourite pub quiz night", barColor: "bg-mustard", time: "Fridays · 7 PM", nextDate: getNextFriday() },
  { name: "LETTERS TO THE LIVING WORLD", desc: "A creative writing evening", barColor: "bg-sage-dark", time: "Monthly · Sat", nextDate: getNextWeekday(6, 14) },
  { name: "POETRY OPEN MIC", desc: "Read. Listen. Feel.", barColor: "bg-blush", time: "Bi-weekly · Sun", nextDate: getNextWeekday(0, 7) },
  { name: "QUEER HOBBY HOUR", desc: "A safe, joyful creative space", barColor: "bg-teal-light", time: "Monthly · Sat", nextDate: getNextWeekday(6, 21) },
  { name: "ONCE UPON A REFLECTION", desc: "Storytelling and reflection", barColor: "bg-deep-green", time: "Monthly · Sun", nextDate: getNextWeekday(0, 21) },
  { name: "BOLLYWOOD TRIVIA NIGHT", desc: "80s to 2000s — test your filmy IQ", barColor: "bg-mustard", time: "Monthly · Fri", nextDate: getNextWeekday(5, 28) },
  { name: "BEKU BOOK CLUB", desc: "Read together, talk forever", barColor: "bg-sage-dark", time: "Monthly · Sat", nextDate: getNextWeekday(6, 28) },
];

function getNextFriday(): Date {
  const now = new Date();
  const d = new Date(now);
  d.setDate(d.getDate() + ((5 - d.getDay() + 7) % 7 || 7));
  d.setHours(19, 0, 0, 0);
  return d;
}

function getNextWeekday(day: number, approxDate: number): Date {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth(), approxDate);
  // If past, move to next month
  if (d < now) d.setMonth(d.getMonth() + 1);
  // Adjust to correct weekday
  while (d.getDay() !== day) d.setDate(d.getDate() + 1);
  d.setHours(17, 0, 0, 0);
  return d;
}

function getNextEvent() {
  const now = new Date();
  const sorted = [...events].sort((a, b) => a.nextDate.getTime() - b.nextDate.getTime());
  return sorted.find((e) => e.nextDate > now) || sorted[0];
}

function getCountdown(target: Date) {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

const CountdownTimer = () => {
  const nextEvent = getNextEvent();
  const [countdown, setCountdown] = useState(getCountdown(nextEvent.nextDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(nextEvent.nextDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [nextEvent.nextDate]);

  const units = [
    { value: countdown.days, label: "DAYS" },
    { value: countdown.hours, label: "HRS" },
    { value: countdown.minutes, label: "MIN" },
    { value: countdown.seconds, label: "SEC" },
  ];

  return (
    <div className="scroll-reveal bg-teal rounded-xl p-6 md:p-8 mb-10 border border-sage/15">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-sage/60">COMING UP NEXT</span>
          <h3 className="font-headline text-3xl md:text-4xl text-cream mt-1">{nextEvent.name}</h3>
          <p className="font-mono text-[11px] text-cream/50 mt-1">{nextEvent.desc}</p>
        </div>
        <div className="flex gap-3">
          {units.map((u) => (
            <div key={u.label} className="bg-deep-green/60 rounded-lg px-4 py-3 text-center min-w-[60px]">
              <span className="font-headline text-2xl md:text-3xl text-sage block leading-none">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="font-mono text-[8px] tracking-wider text-cream/40 mt-1 block">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Events = () => (
  <section id="events" className="bg-cream py-20 px-6 md:px-16 relative">
    <div className="max-w-7xl mx-auto relative">
      {/* Rotated label */}
      <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2">
        <span
          className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          EVENTS
        </span>
      </div>

      <div className="scroll-reveal mb-10">
        <h2 className="font-headline text-[50px] md:text-[80px] text-ink leading-[0.9]">WHAT'S ON</h2>
        <p className="font-body italic text-teal text-xl md:text-2xl mt-2">at Beku this month</p>
      </div>

      {/* Countdown timer */}
      <CountdownTimer />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((ev) => (
          <div
            key={ev.name}
            className="scroll-reveal group bg-warm-white rounded-lg border border-ink/5 hover:border-teal/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className={`${ev.barColor} h-2 rounded-t-lg transition-all duration-300 group-hover:h-3`} />
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-headline text-xl md:text-2xl text-ink leading-none">{ev.name}</h3>
                <span
                  className="font-mono text-[9px] tracking-wider text-ink/50 border border-ink/15 px-2 py-1 rounded whitespace-nowrap"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  {ev.time}
                </span>
              </div>
              <p className="font-mono text-[11px] text-ink/50">{ev.desc}</p>
              <a
                href="https://lnk.bio/beku.blr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-headline text-sm tracking-wider text-teal hover:text-teal-light transition-colors"
              >
                BOOK TICKETS →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Host CTA */}
      <div className="mt-16 bg-teal rounded-lg p-8 md:p-12 scroll-reveal">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-3xl md:text-4xl text-cream">WANT TO HOST YOUR OWN EVENT?</h3>
            <p className="font-body text-cream/70 mt-2 max-w-lg">
              Beku's bungalow space is yours — for pop-ups, workshops, art shows, screenings, and more.
            </p>
          </div>
          <a
            href="tel:9008798842"
            className="font-headline text-sm tracking-wider bg-sage text-ink px-8 py-4 rounded-sm hover:bg-sage/80 transition-all hover:scale-105 whitespace-nowrap"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
