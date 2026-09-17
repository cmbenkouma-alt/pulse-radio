import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Sur quelle fréquence je peux écouter PULSE ?",
    a: "98.7 FM à Paris, 101.2 à Lyon, 96.4 à Marseille, et en DAB+ dans toute la France. Partout ailleurs — Bruxelles, Montréal ou Dakar — l'appli et le player web prennent le relais, en qualité jusqu'à FLAC.",
  },
  {
    q: "C'est vraiment gratuit, sans piège ?",
    a: "Oui. Le direct, les podcasts natifs et le vote resteront gratuits pour toujours. Pas de carte demandée, pas d'essai qui se transforme en abonnement à ton insu. PULSE+ existe pour celles et ceux qui veulent zéro pub, le hors-ligne et la qualité FLAC.",
  },
  {
    q: "Je fais de la musique — comment passer à l'antenne ?",
    a: "Dépose ta démo sur PULSE Upload dans l'appli ou sur pulse.fm/upload. Nos 40 diggers écoutent TOUT, chaque semaine. Si ça nous retourne, tu passes dans Nova Scène — et potentiellement en session live au Studio 11e. Aucun piston n'a jamais battu une bonne prod.",
  },
  {
    q: "Quelle différence avec Spotify ou Deezer ?",
    a: "Un algorithme te ressert ce que tu aimes déjà. Nous, on a des oreilles, de la passion et un studio à Paris : la prog est construite par des humains qui passent leurs nuits à chercher le son de demain. Et quand tu votes, ça change vraiment l'antenne.",
  },
  {
    q: "Le mode hors-ligne, ça marche comment ?",
    a: "Avec PULSE+, télécharge émissions, sessions et podcasts en un geste. Tout se synchronise en Wi-Fi et te suit dans le métro, l'avion ou la zone blanche de chez tes grands-parents.",
  },
  {
    q: "Et si je veux résilier ?",
    a: "Deux clics dans l'appli, aucune question piège, aucun formulaire à poster en recommandé. Ton compte repasse en Free à la fin de la période — et tu gardes tes pépites sauvegardées.",
  },
];

function FaqItem({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl transition-colors duration-500",
        open ? "grad-border bg-panel" : "hairline bg-panel/55 hover:border-white/20"
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7"
        >
          <span className="font-display text-lg font-medium sm:text-xl">{q}</span>
          <span
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-500",
              open ? "rotate-45 bg-acid text-ink" : "hairline text-milk"
            )}
          >
            <Plus className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={cn("faq-panel", open && "open")}
      >
        <div className="faq-inner">
          <p className="px-6 pb-7 pr-14 text-[15px] leading-relaxed text-fog sm:px-7">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32" aria-label="Questions fréquentes">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">[ 06 — On te répond ]</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl text-balance">
              Les questions qu'on nous pose <span className="text-grad">à l'antenne.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-13 space-y-3.5">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 70}>
              <FaqItem
                q={f.q}
                a={f.a}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-9 text-center text-sm text-fog">
            Une autre question ? La team répond sur le chat de l'appli,{" "}
            <a href="#" className="text-acid underline decoration-acid/40 underline-offset-4 transition-colors hover:decoration-acid">
              7j/7 jusqu'à minuit
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
