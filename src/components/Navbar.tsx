import { useEffect, useState } from "react";
import { Menu, Play, Radio, X } from "lucide-react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Émissions", href: "#emissions" },
  { label: "L'appli", href: "#appli" },
  { label: "Le mouvement", href: "#mouvement" },
  { label: "Offres", href: "#offres" },
  { label: "FAQ", href: "#faq" },
];

function requestPlayerToggle() {
  window.dispatchEvent(new CustomEvent("pulse:toggle-player"));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const listen = () => {
    setOpen(false);
    requestPlayerToggle();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-500",
            scrolled ? "glass-deep edge-glow" : "border border-transparent"
          )}
        >
          <a href="#" className="group flex items-center gap-2.5" aria-label="PULSE — accueil">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-acid text-ink transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
              <Radio className="h-4.5 w-4.5" strokeWidth={2.5} />
              <span className="absolute inset-0 rounded-xl bg-acid/60 animate-ping-ring" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              PULSE<span className="text-acid">.</span>
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog sm:block">
              98.7 FM
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-milk/75 transition-all duration-300 hover:bg-white/5 hover:text-milk"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={listen}
              className="btn-acid hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Écouter en direct
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid h-10 w-10 place-items-center rounded-full hairline text-milk transition-colors hover:bg-white/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 -z-10 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={cn(
                "font-display text-4xl font-medium text-milk transition-all duration-500 hover:text-acid",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={listen}
            style={{ transitionDelay: open ? "500ms" : "0ms" }}
            className={cn(
              "btn-acid mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            Écouter en direct
          </button>
        </nav>
        <p className="absolute bottom-8 left-8 font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
          En direct de Paris 11e — 24/7
        </p>
      </div>
    </header>
  );
}
