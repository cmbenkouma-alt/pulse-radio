import { useState } from "react";
import { Check, Flame } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

type Plan = {
  name: string;
  monthly: number;
  annual: number;
  tagline: string;
  cta: string;
  featured?: boolean;
  features: string[];
  missing?: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    tagline: "Pour brancher, tout simplement.",
    cta: "Écouter gratuitement",
    features: [
      "Le direct en illimité, 24/7",
      "Podcasts natifs en accès libre",
      "Vote temps réel sur la prog",
      "Qualité 320 kbps",
    ],
    missing: ["Zéro publicité", "Mode hors-ligne & FLAC"],
  },
  {
    name: "PULSE+",
    monthly: 4.99,
    annual: 3.33,
    tagline: "L'expérience complète, sans friction.",
    cta: "Essayer 1 mois offert",
    featured: true,
    features: [
      "Tout Free, évidemment",
      "Zéro publicité, pour toujours",
      "Direct & podcasts en FLAC",
      "Mode hors-ligne illimité",
      "Podcasts exclusifs PULSE+",
      "Accès prioritaire aux sessions live",
    ],
  },
  {
    name: "Crew",
    monthly: 8.99,
    annual: 5.99,
    tagline: "Jusqu'à 4 comptes, une seule vibe.",
    cta: "Créer ma crew",
    features: [
      "Tout PULSE+, en × 4 profils",
      "Playlists de crew partagées",
      "Concours & guests réservés",
      "Invitations PULSE Club × 2 / mois",
    ],
    missing: ["Tarif étudiant fusionné à PULSE+"],
  },
];

function Price({ plan, annual }: { plan: Plan; annual: boolean }) {
  const value = annual ? plan.annual : plan.monthly;
  return (
    <div className="flex items-end gap-2">
      <span className="font-display text-5xl font-semibold tracking-tight tabular-nums">
        {value === 0 ? "0" : value.toFixed(2).replace(".", ",")} €
      </span>
      <span className="pb-1.5 font-mono text-[11px] uppercase tracking-wider text-fog">
        / mois
      </span>
    </div>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="offres" className="relative scroll-mt-24 py-24 sm:py-32" aria-label="Nos offres">
      <div className="absolute right-[-160px] top-1/4 h-[440px] w-[440px] rounded-full bg-acid/8 blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">[ 05 — Les offres ]</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl text-balance">
              Gratuit pour t'écouter.{" "}
              <span className="text-stroke">Presque rien pour tout avoir.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-fog">
              Le direct restera gratuit pour toujours — promis, signé, diffusé à l'antenne.
              PULSE+ finance juste les artistes et les studios.
            </p>
          </Reveal>

          {/* Billing toggle */}
          <Reveal delay={280}>
            <div className="mt-9 inline-flex items-center gap-1 rounded-full hairline bg-panel/70 p-1.5" role="group" aria-label="Choix de facturation">
              {[
                { key: false, label: "Mensuel" },
                { key: true, label: "Annuel −2 mois" },
              ].map((opt) => (
                <button
                  key={String(opt.key)}
                  type="button"
                  onClick={() => setAnnual(opt.key)}
                  aria-pressed={annual === opt.key}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-400",
                    annual === opt.key
                      ? "bg-acid text-ink shadow-[0_6px_24px_-8px_rgba(217,255,61,0.6)]"
                      : "text-fog hover:text-milk"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 130} variant={plan.featured ? "zoom" : "up"}>
              <article
                className={cn(
                  "lift relative flex h-full flex-col rounded-[1.8rem] p-8",
                  plan.featured
                    ? "grad-border bg-panel lg:scale-[1.045] lg:shadow-[0_30px_90px_-40px_rgba(139,92,246,0.5)]"
                    : "hairline bg-panel/55"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-acid px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                    <Flame className="h-3 w-3" aria-hidden="true" />
                    Le plus choisi
                  </span>
                )}

                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-fog">{plan.tagline}</p>

                <div className="mt-6" aria-live="polite">
                  <Price plan={plan} annual={annual} />
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-fog/80">
                    {plan.monthly === 0
                      ? "pour toujours, sans CB"
                      : annual
                        ? "facturé à l'année · résiliable en 2 clics"
                        : "sans engagement · résiliable en 2 clics"}
                  </p>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-milk/88">
                      <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-acid" strokeWidth={2.4} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                  {plan.missing?.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-fog/55 line-through decoration-fog/40">
                      <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-fog/30" strokeWidth={2.4} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={cn(
                    "mt-9 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold",
                    plan.featured ? "btn-acid" : "btn-ghost hairline text-milk"
                  )}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-9 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            −26 ans ou étudiant·e : PULSE+ à 2,99 €/mois, garanti tant que tu bosses tes exams
          </p>
        </Reveal>
      </div>
    </section>
  );
}
