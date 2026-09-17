import { ArrowRight, Play, Radio } from "lucide-react";
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";

const WORDS = ["BRANCHE-TOI", "SUR LA", "BONNE FRÉQUENCE"];

export function CTA() {
  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36" aria-label="Appel à l'action">
      {/* Ambient */}
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-viol/20 blur-[160px]" aria-hidden="true" />
      <div className="absolute left-[15%] top-[20%] h-[280px] w-[280px] rounded-full bg-acid/12 blur-[120px] animate-blob" aria-hidden="true" />

      {/* Background marquee */}
      <div className="pointer-events-none absolute inset-x-0 top-10 opacity-[0.07]" aria-hidden="true">
        <Marquee duration={60}>
          {WORDS.map((w) => (
            <span key={w} className="flex items-center whitespace-nowrap pr-10 font-display text-[11rem] font-bold leading-none tracking-tight">
              {w} <Radio className="mx-6 h-16 w-16" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-acid">Dernier appel avant le refrain</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl text-balance">
            Ta vie mérite une <span className="text-grad">meilleure bande-son.</span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-fog">
            Rejoins 2,4 millions d'auditeurs qui ont rangé le shuffle au placard.
            Le direct est gratuit, le reste est presque offert.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#offres" className="btn-acid inline-flex items-center gap-2.5 rounded-full px-8 py-4.5 text-base font-semibold">
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              Écouter PULSE maintenant
            </a>
            <a href="#offres" className="btn-ghost inline-flex items-center gap-2.5 rounded-full hairline px-8 py-4.5 text-base font-medium">
              1 mois PULSE+ offert
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fog/80">
            Sans engagement · Sans CB pour le gratuit · Sans regrets
          </p>
        </Reveal>
      </div>
    </section>
  );
}
