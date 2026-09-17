import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, MapPin, Pause, Play, Radio, Sparkles, Users } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { Equalizer } from "./Equalizer";
import { Marquee } from "./Marquee";

const STREAM_URL = "https://stream.zeno.fm/empfvkwmxkyuv";
const METADATA_URL = "https://api.zeno.fm/mounts/metadata/subscribe/empfvkwmxkyuv";

const SHOWS = [
  "06:00 Morning Pulse",
  "10:00 BPM Libre",
  "12:00 Le Débrief",
  "16:00 Session Club Kids",
  "19:00 Nova Scène",
  "21:00 Live depuis le Studio 11e",
  "23:00 Afterhours",
];

const AVATARS = [
  { initials: "LM", from: "#d9ff3d", to: "#6ee7f9" },
  { initials: "YK", from: "#8b5cf6", to: "#ff3d8d" },
  { initials: "SR", from: "#ff3d8d", to: "#d9ff3d" },
  { initials: "NT", from: "#6ee7f9", to: "#8b5cf6" },
];

function splitStreamTitle(value: string) {
  const title = value.trim();
  if (!title) return { artist: "", song: "" };
  const parts = title.split(" - ");
  if (parts.length >= 2) {
    return { artist: parts.shift()?.trim() || "", song: parts.join(" - ").trim() };
  }
  return { artist: "", song: title };
}

export function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [nowPlaying, setNowPlaying] = useState({ artist: "", song: "" });

  useEffect(() => {
    const eventSource = new EventSource(METADATA_URL);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const streamTitle = data?.streamTitle || data?.metadata?.current?.title || "";
        if (streamTitle) setNowPlaying(splitStreamTitle(streamTitle));
      } catch {
        // Keep the player usable if metadata is temporarily unavailable.
      }
    };

    eventSource.onerror = () => {
      // Metadata is optional; the audio stream remains independent.
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    setLoading(true);
    setStreamError(false);
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      setStreamError(true);
    } finally {
      setLoading(false);
    }
  };

  const songLabel = nowPlaying.song || "PULSE — Le direct";
  const artistLabel = nowPlaying.artist || "Écoute en direct · 24/7";

  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40" aria-label="Introduction">
      <audio
        ref={audioRef}
        src={STREAM_URL}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onWaiting={() => setLoading(true)}
        onPlaying={() => { setLoading(false); setStreamError(false); }}
        onError={() => { setPlaying(false); setLoading(false); setStreamError(true); }}
      />

      {/* Ambient background */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-viol/25 blur-[140px] animate-blob" aria-hidden="true" />
      <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-acid/10 blur-[120px] animate-blob" style={{ animationDelay: "-6s" }} aria-hidden="true" />
      <div className="absolute right-[-160px] bottom-10 h-[420px] w-[420px] rounded-full bg-mag/15 blur-[130px] animate-blob" style={{ animationDelay: "-11s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* ---- Left: copy ---- */}
          <div>
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full rounded-full bg-mag animate-ping-ring" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-mag" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-milk/85">
                  En direct · 98.7 FM & partout ailleurs
                </span>
              </div>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] font-semibold tracking-tight text-balance">
              <Reveal as="span" delay={90} className="block">Pas une radio.</Reveal>
              <Reveal as="span" delay={210} className="text-grad block pb-2">Une fréquence.</Reveal>
            </h1>

            <Reveal delay={330}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
                PULSE stream le meilleur des scènes émergentes, des sessions live exclusives
                et des podcasts qui disent les choses.{" "}
                <span className="text-milk">Sans coupure pub. Sans formatage. Sans gêne.</span>
              </p>
            </Reveal>

            <Reveal delay={430}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={togglePlayback}
                  disabled={loading}
                  className="btn-acid inline-flex items-center gap-2.5 rounded-full px-7 py-4 font-semibold disabled:cursor-wait disabled:opacity-70"
                >
                  {playing ? <Pause className="h-4.5 w-4.5 fill-current" aria-hidden="true" /> : <Play className="h-4.5 w-4.5 fill-current" aria-hidden="true" />}
                  {loading ? "Connexion…" : playing ? "Mettre en pause" : "Écouter le direct"}
                </button>
                <a href="#appli" className="btn-ghost inline-flex items-center gap-2.5 rounded-full hairline px-7 py-4 font-medium text-milk">
                  Découvrir l'appli
                  <ArrowDownRight className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-fog/80">
                {streamError ? "Le direct est momentanément indisponible · réessayez" : "Gratuit · Sans CB · Direct en un clic"}
              </p>
            </Reveal>

            {/* Live mini player */}
            <Reveal delay={540}>
              <div className="glass-deep edge-glow mt-9 flex max-w-xl items-center gap-4 rounded-2xl p-4">
                <button
                  type="button"
                  onClick={togglePlayback}
                  disabled={loading}
                  aria-pressed={playing}
                  aria-label={playing ? "Mettre le direct en pause" : "Lire le direct"}
                  className="grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full bg-acid text-ink transition-transform duration-300 hover:scale-105 active:scale-95 disabled:cursor-wait disabled:opacity-70"
                >
                  {playing ? <Pause className="h-5 w-5 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
                </button>
                <img
                  src="/images/cover-wave.jpg"
                  alt="PULSE en direct"
                  className={cn(
                    "h-14 w-14 shrink-0 rounded-xl object-cover transition-transform duration-700",
                    playing && "animate-spin-slow rounded-full"
                  )}
                  width={56}
                  height={56}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mag">{playing ? "On air" : "PULSE"}</span>
                    <span className="font-mono text-[10px] text-fog">LIVE</span>
                  </div>
                  <p className="truncate font-display text-base font-medium">{songLabel}</p>
                  <p className="truncate text-xs text-fog">{artistLabel}</p>
                </div>
                <Equalizer playing={playing} className="h-6 w-10 shrink-0 text-acid" />
              </div>
            </Reveal>

            {/* Listeners */}
            <Reveal delay={640}>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {AVATARS.map((a) => (
                    <span
                      key={a.initials}
                      aria-hidden="true"
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink font-mono text-[10px] font-semibold text-ink"
                      style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                    >
                      {a.initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-fog">
                  <span className="font-semibold text-milk">En direct</span> · rejoignez l'écoute
                </p>
              </div>
            </Reveal>
          </div>

          {/* ---- Right: visual ---- */}
          <Reveal variant="right" delay={300} className="relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Vinyl ring */}
              <div className="absolute -top-14 -right-14 hidden h-44 w-44 rounded-full border border-white/10 animate-spin-slow lg:block" aria-hidden="true">
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="absolute inset-7 rounded-full border border-acid/30" />
                <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid" />
              </div>

              <div className="glass-deep edge-glow noise relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src="/images/hero-artist.jpg"
                  alt="Jeune auditrice portant un casque chrome, baignée d'un éclairage violet et vert acide"
                  className="aspect-[4/5] w-full rounded-3xl object-cover"
                  width={880}
                  height={1100}
                />
                <div className="absolute inset-x-3 bottom-3 rounded-b-3xl bg-gradient-to-t from-ink/80 to-transparent p-5 pb-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">Session live</p>
                      <p className="font-display text-lg font-medium">Ce soir, 21h — Studio 11e</p>
                    </div>
                    <Equalizer className="h-5 w-8 text-milk/80" />
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="glass-deep absolute -left-20 top-10 hidden rounded-2xl p-4 animate-floaty lg:block">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-viol/25 text-viol">
                    <Sparkles className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Nouvelle pépite</p>
                    <p className="font-mono text-[10px] text-fog">détectée il y a 3 min</p>
                  </div>
                </div>
              </div>
              <div className="glass-deep absolute -right-10 bottom-24 hidden rounded-2xl p-4 animate-floaty-2 lg:block">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-acid/20 text-acid">
                    <Users className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Live</p>
                    <p className="font-mono text-[10px] text-fog">écoute en cours</p>
                  </div>
                </div>
              </div>
              <div className="glass-deep absolute -bottom-6 left-8 hidden items-center gap-2 rounded-2xl px-4 py-3 animate-floaty sm:flex" style={{ animationDelay: "-4s" }}>
                <MapPin className="h-4 w-4 text-mag" />
                <p className="font-mono text-[11px] uppercase tracking-wider text-milk/80">Paris · Lyon · Marseille · DAB+</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Program ticker */}
      <Reveal delay={720} className="mt-20 sm:mt-24">
        <div className="border-y border-line bg-ink-2/60 py-4 backdrop-blur-sm">
          <Marquee duration={42} pauseOnHover>
            {SHOWS.map((s) => (
              <span key={s} className="flex items-center gap-6 pr-6 font-mono text-xs uppercase tracking-[0.2em] text-fog">
                <span className="text-milk/85">{s}</span>
                <Radio className="h-3.5 w-3.5 text-acid" aria-hidden="true" />
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
