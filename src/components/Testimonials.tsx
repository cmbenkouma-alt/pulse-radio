import { BadgeCheck, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "J'ai désinstallé deux apps de streaming. PULSE me fait découvrir des artistes avant qu'ils explosent — je me sens en avance sur tout le monde.",
    name: "Léa M.",
    role: "19 ans, auditrice à Lille",
    gradient: "from-acid to-cyanx",
    featured: false,
  },
  {
    quote:
      "Mon premier passage radio, c'était PULSE. Trois mois après, je signais chez un label. Ils écoutent vraiment les démos.",
    name: "LUNA MAR",
    role: "artiste, Prix Jeune Scène 2025",
    gradient: "from-viol to-mag",
    featured: true,
  },
  {
    quote:
      "Le vote en temps réel a tout changé. Ma prog du soir, c'est moi qui l'écris avec 40 000 autres personnes. Aucune plateforme ne fait ça.",
    name: "Yanis K.",
    role: "22 ans, auditeur à Marseille",
    gradient: "from-mag to-acid",
    featured: false,
  },
  {
    quote:
      "Mode hors-ligne dans le métro, FLAC à la maison, alarme sur Afterhours. C'est la première appli radio qui respecte mes oreilles.",
    name: "Inès R.",
    role: "24 ans, abonnée PULSE+ à Lyon",
    gradient: "from-cyanx to-viol",
    featured: false,
  },
  {
    quote:
      "On a programmé PULSE dans notre concept-store. Les clients shazament en boucle — c'est devenu notre identité sonore.",
    name: "Nadia T.",
    role: "fondatrice, boutique Casual Studies",
    gradient: "from-acid to-viol",
    featured: false,
  },
  {
    quote:
      "Les podcasts natifs sont d'un autre niveau : 20 minutes, zéro bla-bla, et des sujets que personne d'autre n'ose traiter.",
    name: "Sacha D.",
    role: "21 ans, auditeur à Bruxelles",
    gradient: "from-mag to-cyanx",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32" aria-label="Ce que dit la communauté">
      <div className="absolute left-1/2 top-0 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-viol/12 blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">[ 04 — La communauté ]</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl text-balance">
              Ils ont branché. <span className="text-grad">Ils ne reviennent pas en arrière.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="list">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 3) * 110} className={t.featured ? "md:col-span-2 lg:col-span-1" : ""}>
              <figure
                className={`lift relative h-full rounded-3xl p-7 ${
                  t.featured ? "grad-border bg-panel" : "hairline bg-panel/60"
                }`}
              >
                <Quote className="h-6 w-6 text-acid" aria-hidden="true" />
                <blockquote className="mt-5 text-[15px] leading-relaxed text-milk/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5">
                  <span
                    aria-hidden="true"
                    className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br font-mono text-xs font-bold text-ink ${t.gradient}`}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-semibold">
                      {t.name}
                      {t.featured && <BadgeCheck className="h-4 w-4 text-acid" aria-label="Artiste vérifiée" />}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-fog">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
