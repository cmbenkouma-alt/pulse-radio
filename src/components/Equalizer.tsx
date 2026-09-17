import { cn } from "../utils/cn";

const BARS = [0.9, 0.62, 1.15, 0.78, 1.35, 0.7, 1.05];

type EqualizerProps = {
  playing?: boolean;
  className?: string;
  barClassName?: string;
};

export function Equalizer({ playing = true, className, barClassName }: EqualizerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("eq h-4", className)}
      style={{ "--eq-state": playing ? "running" : "paused" } as React.CSSProperties}
    >
      {BARS.map((d, i) => (
        <span
          key={i}
          className={cn("bg-current", barClassName)}
          style={
            {
              "--eq-dur": `${d}s`,
              "--eq-delay": `${i * 0.12}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
