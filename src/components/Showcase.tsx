import { Bell, Download, Heart, ListMusic, MoonStar, SkipBack, SkipForward, Timer, Wifi } from "lucide-react";
import { Reveal } from "./Reveal";
import { Equalizer } from "./Equalizer";

const PERKS = [
  {
    icon: Download,
    title: "Mode hors-ligne",
    desc: "Tes émissions et podcasts te suivent dans le métro, l'avion ou la campagne profonde.",
  },
  {
    icon: ListMusic,
    title: "Qualité FLAC",
    desc: "Le direct en 1 411 kbps. Tes oreilles ne reviendront plus jamais en arrière.",
  },
  {
    icon: Timer,
    title: "Alarme PULSE",
    desc: "Réveille-toi sur ta session préférée plutôt que sur une sirène d'angoisse.",
  },
  {
    icon: Heart,
    title: "Pépites sauvegardées",
    desc: "Un cœur sur un titre diffusé, il atterrit direct dans ta playlist Spotify ou Deezer.",
  },
];

const COVERS = [
  { src: "/images/cover-neon.jpg", alt: "Pochette — artiste NÉBULEUSE" },
  { src: "/images/cover-orb.jpg", alt: "Pochette — artiste KLARA" },
];

export function Showcase() {
  return (
    <section id="appli" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32" aria-label="L'application PULSE">
      <div className="absolute right-[-180px] top-24 h-[480px] w-[480px] rounded-full bg-mag/12 blur-[150px]" aria-hidden="true" />
      <div className="absolute left-[-160px] bottom-0 h-[400px] w-[400px] rounded-full bg-acid/8 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone mockup */}
          <Reveal variant="left" className="order-2 lg:order-1">
            <div className="group relative mx-auto w-fit [perspective:1400px]">
              <div
                className="edge-glow relative w-[300px] rounded-[3rem] border border-white/12 bg-ink-2 p-3 transition-transform duration-700 ease-out group-hover:[transform:rotateY(-9deg)_rotateX(4deg)] sm:w-[330px]"
                aria-hidden="true"
              >
                {/* Screen */}
                <div className="noise relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-[#15101f] via-ink-2 to-ink px-5 pb-6 pt-4">
                  {/* Notch */}
                  <div className="mx-auto h-6 w-28 rounded-full bg-black" />
                  {/* Status */}
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-fog">
                    <span>21:04</span>
                    <span className="flex items-center gap-1.5">
                      <Wifi className="h-3 w-3" /> PULSE+
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-mag">Live · Studio 11e</p>
                    <p className="mt-1 font-display text-lg font-semibold leading-tight">Afterhours avec JENA RED</p>
                  </div>

                  {/* Now playing art */}
                  <div className="relative mt-4 overflow-hidden rounded-2xl">
                    <img src="/images/cover-wave.jpg" alt="" className="aspect-square w-full object-cover" width={560} height={560} loading="lazy" />
                    <div className="absolute bottom-2.5 left-2.5 glass flex items-center gap-2 rounded-full px-3 py-1.5">
                      <Equalizer className="h-3 w-6 text-acid" />
                      <span className="font-mono text-[9px] tracking-[0.18em] text-milk/90">FLAC 1411 kbps</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="mt-4 flex items-center justify-center gap-6 text-milk">
                    <SkipBack className="h-5 w-5 text-fog" />
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink shadow-[0_8px_30px_-6px_rgba(217,255,61,0.6)]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                    </span>
                    <SkipForward className="h-5 w-5 text-fog" />
                  </div>

                  {/* Vote widget */}
                  <div className="glass mt-4 rounded-2xl p-3.5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-fog">Prochain titre — tu votes</p>
                    <div className="mt-2.5 space-y-2">
                      {[
                        { name: "VOLTIGE — « Mirroir »", pct: 64, active: true },
                        { name: "SIBELLE — « 3h43 »", pct: 36, active: false },
                      ].map((v) => (
                        <div key={v.name}>
                          <div className="flex justify-between text-[11px]">
                            <span className={v.active ? "text-milk" : "text-fog"}>{v.name}</span>
                            <span className="font-mono text-[10px] text-fog">{v.pct}%</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/8">
                            <div
                              className={`h-full rounded-full ${v.active ? "bg-acid" : "bg-fog/50"}`}
                              style={{ width: `${v.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini covers queue */}
                  <div className="mt-4 flex items-center gap-3">
                    {COVERS.map((c) => (
                      <img key={c.src} src={c.src} alt={c.alt} width={44} height={44} loading="lazy" className="h-11 w-11 rounded-xl object-cover" />
                    ))}
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium">File d'attente communautaire</p>
                      <p className="font-mono text-[9px] text-fog">14 titres · votés ce soir</p>
                    </div>
                    <Bell className="ml-auto h-4 w-4 text-fog" />
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="glass-deep absolute -right-28 top-16 hidden rounded-2xl p-3.5 animate-floaty sm:block">
                <div className="flex items-center gap-2.5">
                  <MoonStar className="h-4 w-4 text-viol" />
                  <div>
                    <p className="text-xs font-semibold">Minuterie sommeil</p>
                    <p className="font-mono text-[9px] text-fog">extinction dans 20 min</p>
                  </div>
                </div>
              </div>
              <div className="glass-deep absolute -left-24 bottom-20 hidden rounded-2xl p-3.5 animate-floaty-2 sm:block">
                <div className="flex items-center gap-2.5">
                  <Heart className="h-4 w-4 text-mag" />
                  <div>
                    <p className="text-xs font-semibold">Pépite capturée</p>
                    <p className="font-mono text-[9px] text-fog">→ ta playlist Spotify</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">[ 02 — L'appli ]</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl text-balance">
                La radio, enfin <span className="text-grad">dans ta poche</span> comme il faut.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-lg text-fog">
                Fini les applis radio des années 2010. PULSE reconstruit l'expérience :
                direct, votes, podcasts et pépites dans un seul objet pensé pour tes pouces.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-3" role="list">
              {PERKS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={260 + i * 90}>
                  <div className="lift flex gap-4 rounded-2xl hairline bg-panel/60 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-acid/12 text-acid">
                      <p.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-fog">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={620}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#offres" className="btn-acid inline-flex items-center gap-2.5 rounded-full px-7 py-4 font-semibold">
                  <Download className="h-4.5 w-4.5" aria-hidden="true" />
                  Télécharger l'appli
                </a>
                <p className="flex items-center font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                  iOS 16+ · Android 11+ · 34 Mo
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
