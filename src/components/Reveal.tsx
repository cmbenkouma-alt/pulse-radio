import { type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({ children, className, delay = 0, variant = "up", as = "div" }: RevealProps) {
  const { ref, inView } = useInView();
  const Tag = as;
  const style: CSSProperties = { "--rv-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn(
        "rv",
        variant === "left" && "rv-left",
        variant === "right" && "rv-right",
        variant === "zoom" && "rv-zoom",
        inView && "is-in",
        className
      )}
    >
      {children}
    </Tag>
  );
}
