import { type ReactNode } from "react";
import { cn } from "../utils/cn";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  pauseOnHover?: boolean;
};

export function Marquee({ children, className, duration = 36, pauseOnHover = false }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", pauseOnHover && "marquee-paused", className)}>
      <div
        className="marquee-track items-center"
        style={{ "--marquee-dur": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
