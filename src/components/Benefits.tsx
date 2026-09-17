import { ArrowUpRight, DoorOpen, PartyPopper, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: DoorOpen,
    title: "Studios ouverts",
    desc: "Le Studio 11e ouvre ses portes aux auditeurs chaque jeudi. Viens voir — ou faire — une émission.",
  },
  {
    icon: PartyPopper,
    title: "PULSE Club",
    desc: "Des soirées mensuelles dans 6 villes, line-up annoncé 48h avant, entrée prioritaire avec l'appli.",
  },
  {
    icon: Trophy,
    title: "Prix Jeune Scène",
    desc: "Chaque saison, un artiste de la communauté repart avec un budget studio et une résidence à l'antenne.",
  },
];

export function Benefits() {
  return (
    <section id="mouvement" className="relative scroll-mt-24 py-24 sm:py-32" aria-label="Le mouvement PULSE">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">[ 03 — Le mouvement ]</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl text-balance">
                Plus qu'une antenne.{" "}
                <span className="text-stroke">Une scène.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-lg text-fog">
                Une radio qui reste derrière sa vitre ne nous intéresse pas. PULSE vit dans
                la rue, les clubs et les chambres de celles et ceux qui font le son de demain.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-7" role="list">
              {ITEMS.map((item, i) => (
                <Reveal as="li" key={item.title} delay={260 + i * 100}>
                  <div className="group flex gap-5">
                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl hairline bg-panel text-acid transition-colors duration-500 group-hover:border-acid/40">
                      <item.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-fog">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={580}>
              <a
                href="#offres"
                className="group mt-10 inline-flex items-center gap-2 font-display text-lg font-medium text-milk"
              >
                <span className="border-b border-acid/50 pb-0.5 transition-colors duration-300 group-hover:border-acid group-hover:text-acid">
                  Rejoindre le mouvement
                </span>
                <ArrowUpRight className="h-5 w-5 text-acid transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal variant="right" delay={200}>
            <div className="relative">
              <div className="noise relative overflow-hidden rounded-[2rem] hairline">
                <img
                  src="/images/studio.jpg"
                  alt="Le Studio 11e de PULSE : console de mixage rétroéclairée et écrans affichant des ondes sonores vertes"
                  className="aspect-[16/11] w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                  width={1024}
                  height={704}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-acid">Studio 11e — Paris</p>
                  <p className="mt-1 font-display text-xl font-medium">Là où chaque session devient un direct.</p>
                </div>
              </div>

              {/* Overlay card */}
              <div className="glass-deep edge-glow absolute -bottom-8 -left-4 max-w-[240px] rounded-2xl p-5 animate-floaty sm:-left-10">
                <p className="font-display text-3xl font-semibold text-acid">320</p>
                <p className="mt-1 text-sm leading-snug text-milk/85">sessions live jouées à guichets fermés en 2025</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
