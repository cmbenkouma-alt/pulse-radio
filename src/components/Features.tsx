import { Headphones, Mic2, Radar, SignalHigh, VolumeX, Vote } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: VolumeX,
    tint: "#d9ff3d",
    title: "Zéro coupure pub",
    desc: "68 minutes de son non-stop par heure. Les écrans publicitaires, on les laisse aux radios d'avant.",
    tag: "FUN.TIME MAX",
  },
  {
    icon: Radar,
    tint: "#8b5cf6",
    title: "Découverte avant tout le monde",
    desc: "Un artiste émergent par jour, scanné par nos 40 diggers — pas par un algorithme en mal de clics.",
    tag: "HUMAIN 100%",
  },
  {
    icon: Mic2,
    tint: "#ff3d8d",
    title: "Sessions live exclusives",
    desc: "Chaque semaine, un live depuis le Studio 11e à Paris. Public réduit, énergie maximale, replay dispo.",
    tag: "STUDIO 11E",
  },
  {
    icon: Vote,
    tint: "#6ee7f9",
    title: "La prog, c'est toi",
    desc: "Vote en temps réel dans l'appli : le prochain titre diffusé, c'est la communauté qui le choisit.",
    tag: "TOON.CTRL",
  },
  {
    icon: Headphones,
    tint: "#d9ff3d",
    title: "Podcasts natifs",
    desc: "Des formats courts produits par la rédac : culture, coulisses, débats. Que du vrai, jamais du remplissage.",
    tag: "ORIGINALS",
  },
  {
    icon: SignalHigh,
    tint: "#8b5cf6",
    title: "Partout, tout le temps",
    desc: "FM, DAB+, appli iOS / Android, enceintes connectées — et même dans le métro grâce au mode hors-ligne.",
    tag: "24/7 GRID",
  },
];

export function Features() {
  return (
    <section id="emissions" className="relative scroll-mt-24 py-24 sm:py-32" aria-label="Pourquoi PULSE">
      {/* ambient */}
      <div className="absolute top-1/3 left-[-200px] h-[460px] w-[460px] rounded-full bg-viol/15 blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">[ 01 — Pourquoi nous ]</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl text-balance">
              On n'est pas une radio.{" "}
              <span className="text-stroke">On est un réflexe.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-fog">
              Les grandes radios te parlent de haut. Nous, on émet depuis ta génération —
              avec ses codes, ses artistes et son niveau d'exigence.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 90} variant="up">
              <article className="lift group relative h-full overflow-hidden rounded-3xl hairline bg-panel/70 p-7">
                <div
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                  style={{ background: f.tint }}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    style={{ background: `${f.tint}1f`, color: f.tint }}
                  >
                    <f.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fog/60">{f.tag}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fog">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
