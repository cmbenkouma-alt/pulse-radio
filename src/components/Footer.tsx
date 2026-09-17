import { useState } from "react";
import { ArrowRight, AtSign, Check, Podcast, Radio, Video } from "lucide-react";
import { Reveal } from "./Reveal";

const COLS = [
  {
    title: "La radio",
    links: ["Émissions", "Grille des programmes", "Podcasts", "Sessions live", "PULSE Upload"],
  },
  {
    title: "Entreprise",
    links: ["Manifeste", "La rédac", "Devenir digger", "Espace presse", "Recrutement"],
  },
  {
    title: "Aide",
    links: ["Centre d'aide", "Nous écrire", "Statut du direct", "Accessibilité"],
  },
];

const FREQS = [
  ["Paris", "98.7"],
  ["Lyon", "101.2"],
  ["Marseille", "96.4"],
  ["Bordeaux", "DAB+"],
  ["Lille", "DAB+"],
  ["Nantes", "DAB+"],
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative border-t border-line bg-ink-2/50" aria-label="Pied de page">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        {/* Newsletter band */}
        <Reveal>
          <div className="glass-deep edge-glow noise relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-acid/15 blur-[100px]" aria-hidden="true" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                  La Note PULSE<span className="text-acid">.</span>
                </h2>
                <p className="mt-3 max-w-md text-fog">
                  Un mail par semaine : les pépites de la rédac, les sessions à venir,
                  zéro spam. Désabonnement en un clic, promis.
                </p>
              </div>
              {sent ? (
                <div className="flex items-center gap-3 rounded-2xl bg-acid/10 px-5 py-4 text-acid" role="status">
                  <Check className="h-5 w-5" aria-hidden="true" />
                  <p className="font-medium">Bien reçu. Première note vendredi, 7h07.</p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setSent(true);
                  }}
                >
                  <label htmlFor="newsletter-email" className="sr-only">Ton adresse e-mail</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ton@email.com"
                    className="w-full flex-1 rounded-full hairline bg-ink/60 px-6 py-4 text-sm text-milk placeholder:text-fog/60 focus:border-acid/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-acid inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
                  >
                    S'abonner
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        {/* Main footer grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-2.5" aria-label="PULSE — retour en haut">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-acid text-ink">
                <Radio className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight">
                PULSE<span className="text-acid">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
              La fréquence de ta génération. En direct du Studio 11e,
              Paris — et partout où tu te trouves.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: AtSign, label: "Instagram" },
                { icon: Video, label: "YouTube" },
                { icon: Podcast, label: "Twitch" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={`PULSE sur ${s.label}`}
                  className="grid h-11 w-11 place-items-center rounded-full hairline text-fog transition-all duration-300 hover:-translate-y-1 hover:border-acid/50 hover:text-acid"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLS.map((col) => (
              <nav key={col.title} aria-label={`Liens ${col.title.toLowerCase()}`}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-fog">{col.title}</h3>
                <ul className="mt-5 space-y-3" role="list">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-milk/75 transition-colors duration-300 hover:text-acid">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Frequencies */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
          {FREQS.map(([city, freq]) => (
            <p key={city} className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
              {city} <span className="text-milk/80">{freq}</span>
            </p>
          ))}
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-acid">+ Appli & DAB+ national</p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wider text-fog/70">
            © 2026 PULSE Radio SAS — Émet depuis Paris 11e
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "Cookies"].map((l) => (
              <a key={l} href="#" className="font-mono text-[11px] tracking-wider text-fog/70 transition-colors hover:text-milk">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
