import { marqueeItems } from "../data/site"

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee-paused relative overflow-hidden border-y border-line bg-surface py-5">
      <div className="animate-marquee flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-display text-lg font-medium uppercase tracking-wider text-cream/80">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
