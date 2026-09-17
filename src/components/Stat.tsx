import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

type StatProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
};

export function Stat({ value, decimals = 0, suffix = "", prefix = "", label, sub }: StatProps) {
  const { ref, inView } = useInView(0.4);
  const [display, setDisplay] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(value * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [inView, value]);

  const formatted = display
    .toFixed(decimals)
    .replace(".", ",");

  return (
    <div ref={ref} className="group">
      <div className="font-display text-4xl font-semibold tracking-tight text-milk tabular-nums transition-colors duration-500 group-hover:text-acid sm:text-5xl">
        {prefix}
        {formatted}
        <span className="text-acid">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-milk/85">{label}</div>
      {sub && <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-fog/70">{sub}</div>}
    </div>
  );
}
