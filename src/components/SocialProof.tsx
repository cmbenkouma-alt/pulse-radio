import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { Stat } from "./Stat";

const PRESS = [
  { name: "KONBINI", style: "font-display font-semibold tracking-tight" },
  { name: "Trax Magazine", style: "font-mono tracking-[0.28em] uppercase text-sm" },
  { name: "Les Inrocks", style: "font-display italic font-medium" },
  { name: "TSUGI", style: "font-mono font-semibold tracking-[0.4em]" },
  { name: "YARD", style: "font-display font-semibold tracking-[0.18em]" },
];

function Stars() {
  return (
    <span className="flex gap-0.5 text-acid" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="relative py-20 sm:py-24" aria-label="Ils parlent de nous">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-fog">
            La presse musicale en parle mieux que nous
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-milk/45">
            {PRESS.map((p) => (
              <span
                key={p.name}
                className={`${p.style} text-lg transition-all duration-500 hover:scale-105 hover:text-milk`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <blockquote className="mx-auto mt-12 max-w-3xl text-center">
            <p className="font-display text-2xl font-medium leading-snug text-milk sm:text-3xl text-balance">
              « La seule radio que la génération TikTok écoute encore{" "}
              <span className="text-grad">volontairement</span>. »
            </p>
            <cite className="mt-4 block font-mono text-xs uppercase tracking-[0.24em] text-fog not-italic">
              — Trax Magazine, mars 2026
            </cite>
          </blockquote>
        </Reveal>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-line pt-14 lg:grid-cols-4">
          {[
            <Stat key="1" value={2.4} decimals={1} suffix=" M" label="d'auditeurs chaque mois" sub="FM + streaming cumulés" />,
            <Stat key="2" value={152} suffix="" label="artistes émergents lancés" sub="depuis janvier 2025" />,
            <Stat key="3" value={68} suffix=" min" label="de musique non-stop / heure" sub="zéro écran pub au milieu" />,
            <Stat key="4" value={4.8} decimals={1} suffix="/5" label="note moyenne sur les stores" sub="41 200 avis vérifiés" />,
          ].map((el, i) => (
            <Reveal key={i} delay={i * 110}>
              {el}
            </Reveal>
          ))}
        </div>

        {/* Store badges */}
        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {["App Store", "Google Play"].map((store) => (
              <div key={store} className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
                <Stars />
                <div className="text-left">
                  <p className="text-sm font-semibold leading-tight">4,8 sur {store}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-fog">« app de l'année » — jury 2025</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
