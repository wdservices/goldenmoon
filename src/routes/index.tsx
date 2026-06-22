import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  Phone,
  MessageCircle,
  Wifi,
  Waves,
  Dumbbell,
  Zap,
  Car,
  UtensilsCrossed,
  Snowflake,
  ShieldCheck,
  Star,
  MapPin,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { brand } from "@/config/brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import onebed from "@/assets/onebed.jpg";
import penthouse from "@/assets/penthouse.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} — Luxury Serviced Apartments in ${brand.location}` },
      {
        name: "description",
        content: `${brand.name} offers hand-finished serviced apartments in ${brand.location} with 24/7 concierge, prime location and seamless self check-in.`,
      },
      { property: "og:title", content: `${brand.name} — ${brand.location}` },
      { property: "og:description", content: brand.tagline },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Landing,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-blur");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Apartments />
      <Gallery />
      <Amenities />
      <Reserve />
      <Testimonials />
      <Location />
      <CtaBanner />
      <Footer />
      <ThemeToggle floating />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"],
    ["Stays", "#apartments"],
    ["Gallery", "#gallery"],
    ["Amenities", "#amenities"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-foreground">
          {brand.shortName}
          <span className="text-bronze">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-[0.7rem] tracking-[0.22em] uppercase text-foreground/70 hover:text-foreground transition-colors group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#reserve"
            className="btn-luxe hidden sm:inline-flex !py-2.5 !px-5 text-[0.65rem]"
          >
            Reserve
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden noise"
    >
      <div className="absolute inset-0">
        <img
          src={hero}
          alt={`${brand.name} interior`}
          className="hero-bg h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Decorative side rail */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-6 text-bone/40">
        <span className="text-[0.6rem] tracking-[0.4em] uppercase rotate-90 origin-center mt-20">
          {brand.location}
        </span>
        <div className="h-24 w-px bg-bone/30" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-4xl" style={{ animation: "blur-in 1.4s ease-out 0.2s both" }}>
          <span className="eyebrow-line !text-bronze-soft">Est. 2024 · {brand.location}</span>
          <h1 className="mt-6 text-bone text-[2.8rem] sm:text-6xl md:text-[5.5rem] leading-[0.98] font-light">
            {brand.heroHeadline.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.25em]"
                style={{
                  animation: `blur-in 1.2s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.08}s both`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p
            className="mt-8 text-bone/75 text-base md:text-lg max-w-xl leading-relaxed font-light"
            style={{ animation: "blur-in 1.2s ease-out 1s both" }}
          >
            {brand.heroSub}
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3"
            style={{ animation: "blur-in 1.2s ease-out 1.2s both" }}
          >
            <a href="#reserve" className="btn-luxe">
              Check availability <ArrowRight className="size-4" />
            </a>
            <a
              href="#apartments"
              className="btn-ghost-luxe !text-bone !border-bone/30 hover:!border-bone"
            >
              Explore apartments
            </a>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute right-6 bottom-28 md:right-12 md:bottom-40 z-10 hidden md:flex flex-col gap-3">
        {[
          { k: "24/7", v: "Concierge" },
          { k: "4.97", v: "Guest rating" },
          { k: "<1h", v: "Reply time" },
        ].map((s, i) => (
          <div
            key={s.v}
            className="glass px-5 py-3 min-w-[160px]"
            style={{ animation: `rise 1s ease-out ${1.4 + i * 0.15}s both` }}
          >
            <div className="font-display text-2xl text-bone">{s.k}</div>
            <div className="text-[0.6rem] tracking-[0.25em] uppercase text-bone/60 mt-1">
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="h-10 w-px bg-bone/40 animate-pulse" />
        <span className="text-bone/50 text-[0.6rem] tracking-[0.35em] uppercase">Scroll</span>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const words = [
    "Hand-finished",
    "24/7 concierge",
    "Self check-in",
    "Rooftop pool",
    "Fibre Wi-Fi",
    "Chef kitchen",
    "Estate security",
    "Private terrace",
  ];
  return (
    <section className="py-8 md:py-10 bg-surface border-y border-border overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex items-center gap-12 px-6 shrink-0">
            {words.map((w) => (
              <span
                key={`${dup}-${w}`}
                className="font-display text-3xl md:text-5xl text-foreground/30 hover:text-bronze transition-colors duration-500 flex items-center gap-12"
              >
                {w}
                <Sparkles className="size-4 text-bronze/60" strokeWidth={1} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const stats = [
    { n: "06", l: "Curated apartments" },
    { n: "24h", l: "Live concierge" },
    { n: "100%", l: "Verified guests" },
  ];
  return (
    <section id="about" className="relative py-28 md:py-44 bg-background overflow-hidden">
      {/* Decorative giant numeral */}
      <div className="absolute -right-10 top-20 font-display text-[20rem] md:text-[32rem] leading-none text-foreground/[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 reveal md:sticky md:top-32">
            <span className="eyebrow-line">Chapter 01 · The residence</span>
            <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] font-light">
              A different kind of <em className="text-bronze not-italic font-normal">address</em> in
              {" "}{brand.location}.
            </h2>
            <div className="mt-10 flex items-center gap-4">
              <div className="size-14 rounded-full bg-bronze/15 flex items-center justify-center">
                <Sparkles className="size-5 text-bronze" strokeWidth={1.4} />
              </div>
              <div className="font-display text-sm">
                Curated, not catalogued.
                <div className="text-foreground/50 text-xs mt-1">— The Aurelia team</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 reveal-blur">
            <p className="text-xl md:text-2xl font-light leading-[1.55] text-foreground/85">
              {brand.name} is a private collection of{" "}
              <span className="text-bronze">six serviced apartments</span> reimagined for the modern
              traveller. Every detail — from the linen weight to the espresso blend — has been
              chosen, not specified. You will not find another address like it in the city.
            </p>
            <div className="mt-16 grid grid-cols-3 gap-px bg-border">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="bg-background p-6 md:p-8 flex flex-col gap-2 group hover:bg-surface transition-colors duration-500"
                >
                  <div className="font-display text-5xl md:text-6xl text-foreground group-hover:text-bronze transition-colors duration-500">
                    {s.n}
                  </div>
                  <div className="text-[0.65rem] tracking-[0.22em] uppercase text-foreground/60 mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- APARTMENTS — horizontal scroll ---------- */
function Apartments() {
  const rooms = [
    {
      img: studio,
      name: "The Studio",
      price: "₦95,000",
      sub: "Quiet retreat",
      amenities: ["Sleeps 2", "Queen bed", "Kitchenette", "City view"],
    },
    {
      img: onebed,
      name: "Executive One-Bedroom",
      price: "₦165,000",
      sub: "For the working stay",
      amenities: ["Sleeps 2", "King bed", "Workspace", "Walk-in closet"],
    },
    {
      img: penthouse,
      name: "Skyline Penthouse",
      price: "₦420,000",
      sub: "The full floor",
      amenities: ["Sleeps 4", "2 Bedrooms", "Private terrace", "Plunge pool"],
    },
  ];
  return (
    <section id="apartments" className="py-28 md:py-40 bg-surface relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow-line">Chapter 02 · The stays</span>
            <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] font-light">
              Three ways to stay,{" "}
              <em className="text-bronze not-italic">all of them yours.</em>
            </h2>
          </div>
          <a
            href="#reserve"
            className="text-xs tracking-[0.22em] uppercase text-foreground/70 hover:text-bronze flex items-center gap-2 group"
          >
            See availability
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((r, i) => (
            <article
              key={r.name}
              className="group relative flex flex-col reveal"
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <span className="absolute top-5 left-5 bg-bronze text-ink text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1.5 font-medium">
                  {r.sub}
                </span>
                <div className="absolute bottom-5 left-5 right-5 text-bone">
                  <div className="font-display text-3xl">{r.name}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-bone/80 mt-2">
                    from {r.price} <span className="text-bone/50">/ night</span>
                  </div>
                </div>
                <div className="absolute top-5 right-5 size-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="size-5 text-bone" />
                </div>
              </div>
              <div className="pt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-wider text-foreground/65">
                {r.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-bronze" />
                    {a}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY — 3D tilt + parallax ---------- */
function Gallery() {
  const items = [
    { src: g1, alt: "Marble bathroom", h: 520, w: 4 },
    { src: g2, alt: "Luxury kitchen", h: 380, w: 5 },
    { src: g3, alt: "Rooftop pool", h: 480, w: 6 },
    { src: g4, alt: "Reading nook", h: 360, w: 4 },
    { src: g5, alt: "Dining area", h: 440, w: 5 },
    { src: hero, alt: "Living room", h: 400, w: 5 },
  ];

  const scrollRow = [g1, g2, g3, g4, g5, hero, studio];

  return (
    <section id="gallery" className="py-28 md:py-40 bg-background relative overflow-hidden noise">
      <div className="absolute -left-10 top-20 font-display text-[20rem] md:text-[32rem] leading-none text-foreground/[0.03] select-none pointer-events-none">
        03
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 reveal">
          <div>
            <span className="eyebrow-line">Chapter 03 · The interiors</span>
            <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] font-light">
              A house tour,{" "}
              <em className="text-bronze not-italic">in fragments.</em>
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-sm">
            Hover, drag, breathe in. Every frame is a real room in a real apartment — no stock,
            no filter.
          </p>
        </div>

        {/* Masonry with 3D tilt */}
        <div className="columns-2 md:columns-3 gap-4 md:gap-5 reveal-blur">
          {items.map((it, i) => (
            <TiltCard key={i} src={it.src} alt={it.alt} index={i} />
          ))}
        </div>
      </div>

      {/* Marquee strip of rooms */}
      <div className="mt-20 overflow-hidden">
        <div className="flex marquee-track-reverse gap-4 w-max">
          {[...scrollRow, ...scrollRow].map((src, i) => (
            <div
              key={i}
              className="relative h-56 md:h-72 w-80 md:w-[26rem] shrink-0 overflow-hidden group"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const heights = ["h-72", "h-96", "h-[28rem]", "h-80", "h-[22rem]", "h-96"];

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(20px)`;
    const img = el.querySelector("img") as HTMLImageElement | null;
    if (img) img.style.transform = `scale(1.12) translate(${-x * 18}px, ${-y * 18}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateY(0) rotateX(0) translateZ(0)";
    const img = el.querySelector("img") as HTMLImageElement | null;
    if (img) img.style.transform = "scale(1) translate(0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`gallery-card group relative mb-4 md:mb-5 overflow-hidden bg-muted break-inside-avoid ${heights[index % heights.length]}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out"
        style={{ transformOrigin: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-bone opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <span className="text-[0.65rem] tracking-[0.25em] uppercase">{alt}</span>
        <span className="font-display text-sm">0{index + 1}</span>
      </div>
    </div>
  );
}

/* ---------- AMENITIES — bento ---------- */
function Amenities() {
  const items = [
    { icon: Waves, label: "Rooftop Pool", desc: "Infinity edge over the skyline." },
    { icon: Wifi, label: "Fibre Wi-Fi", desc: "1Gbps, mesh, two backups." },
    { icon: Dumbbell, label: "Private Gym", desc: "Technogym, residents only." },
    { icon: Zap, label: "24h Power", desc: "Solar + inverter + diesel." },
    { icon: Car, label: "Secure Parking", desc: "Valet on request." },
    { icon: UtensilsCrossed, label: "Chef Kitchen", desc: "Knives that actually cut." },
    { icon: Snowflake, label: "Climate Control", desc: "Per-room, whisper-quiet." },
    { icon: ShieldCheck, label: "Estate Security", desc: "Vetted, on-site, 24/7." },
  ];
  return (
    <section
      id="amenities"
      className="py-28 md:py-44 bg-ink text-bone relative overflow-hidden noise"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[60rem] rounded-full bg-bronze/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
          <div className="md:col-span-7 reveal">
            <span className="eyebrow-line !text-bronze-soft">Chapter 04 · Amenities</span>
            <h2 className="mt-6 text-5xl md:text-7xl text-bone leading-[1.02] font-light">
              Everything in.{" "}
              <span className="text-gradient-bronze italic">Nothing extra to think about.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-bone/65 font-light leading-relaxed reveal text-lg">
            Power, security, water, internet — the things that quietly make or break a stay in
            Lagos. We handle them, so you don't.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 reveal">
          {items.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className={`relative bg-white/[0.03] border border-white/10 p-6 md:p-7 flex flex-col justify-between group hover:bg-bronze/10 hover:border-bronze/40 transition-all duration-500 overflow-hidden ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${i === 5 ? "md:col-span-2" : ""}`}
            >
              <Icon
                className={`text-bronze transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                  i === 0 ? "size-12" : "size-7"
                }`}
                strokeWidth={1.2}
              />
              <div>
                <div
                  className={`font-display text-bone leading-tight ${
                    i === 0 ? "text-4xl md:text-5xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {label}
                </div>
                <div className="text-xs text-bone/55 mt-2 leading-relaxed">{desc}</div>
              </div>
              <div className="absolute top-4 right-4 text-[0.6rem] tracking-[0.25em] uppercase text-bone/30 font-mono">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESERVE ---------- */
function Reserve() {
  return (
    <section id="reserve" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-bronze/5 blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="reveal">
          <span className="eyebrow-line">Chapter 05 · Reserve</span>
          <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] font-light">
            Tell us when you're coming.{" "}
            <em className="text-bronze not-italic">We'll handle the rest.</em>
          </h2>
          <p className="mt-8 text-foreground/70 font-light leading-relaxed text-lg">
            A real human reviews every reservation. You'll hear back from our concierge within an
            hour — by WhatsApp, email or call, whichever suits you.
          </p>
          <div className="mt-12 space-y-1">
            <ContactRow icon={Phone} label="Call" value={brand.phone} href={`tel:${brand.phone}`} />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value={brand.phone}
              href={`https://wa.me/${brand.whatsapp}`}
            />
            <ContactRow
              icon={MapPin}
              label="Visit"
              value={brand.address}
              href={`https://maps.google.com/?q=${encodeURIComponent(brand.address)}`}
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/${brand.whatsapp}`, "_blank");
          }}
          className="glass p-8 md:p-10 shadow-luxe reveal space-y-5 relative"
        >
          <div className="absolute -top-3 left-8 bg-bronze text-ink text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1 font-medium">
            Quick request
          </div>
          <h3 className="font-display text-2xl mb-2 mt-2">Request a reservation</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Check in" type="date" />
            <Input label="Check out" type="date" />
          </div>
          <Input label="Full name" type="text" placeholder="Your name" />
          <Input label="Phone / WhatsApp" type="tel" placeholder={brand.phone} />
          <div>
            <Label>Apartment</Label>
            <select className="mt-2 w-full bg-transparent border border-border px-4 py-3 text-sm outline-none focus:border-bronze transition-colors">
              <option>The Studio</option>
              <option>Executive One-Bedroom</option>
              <option>Skyline Penthouse</option>
              <option>I'm not sure yet</option>
            </select>
          </div>
          <button type="submit" className="btn-luxe w-full mt-2">
            Send reservation <ArrowRight className="size-4" />
          </button>
          <p className="text-xs text-foreground/50 text-center">
            We'll open WhatsApp to confirm details.
          </p>
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.62rem] tracking-[0.22em] uppercase text-foreground/60">
      {children}
    </span>
  );
}
function Input({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        {...rest}
        className="mt-2 w-full bg-transparent border border-border px-4 py-3 text-sm outline-none focus:border-bronze transition-colors placeholder:text-foreground/40"
      />
    </label>
  );
}
function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 group border-t border-border py-5 hover:pl-3 transition-all duration-500"
    >
      <Icon className="size-5 text-bronze" strokeWidth={1.4} />
      <div className="flex-1 min-w-0">
        <div className="text-[0.62rem] tracking-[0.22em] uppercase text-foreground/50">
          {label}
        </div>
        <div className="font-display text-lg truncate group-hover:text-bronze transition-colors">
          {value}
        </div>
      </div>
      <ArrowUpRight className="size-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
    </a>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const reviews = [
    {
      img: t1,
      name: "Adaeze O.",
      role: "Stayed 6 nights",
      stars: 5,
      quote:
        "I've stayed in suites at the Eko and Radisson — this felt more private, more personal, and somehow more luxurious. The concierge anticipated everything.",
    },
    {
      img: t2,
      name: "Tunde A.",
      role: "Business traveller",
      stars: 5,
      quote:
        "Spotless. The Wi-Fi held a four-hour call without flinching, and the kitchen actually has good knives. Small thing. Means everything.",
    },
    {
      img: t3,
      name: "Hannah L.",
      role: "From London",
      stars: 5,
      quote:
        "I almost didn't want to go home. The morning light through those windows, the espresso machine, the silence — I'm coming back in October.",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 reveal">
          <span className="eyebrow-line">Chapter 06 · Guests</span>
          <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] font-light">
            A few words from{" "}
            <em className="text-bronze not-italic">people who stayed.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="bg-background border border-border p-8 md:p-10 flex flex-col reveal hover:border-bronze/40 hover:-translate-y-2 transition-all duration-700 group"
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <div className="flex gap-1 text-bronze mb-6">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="size-4 fill-bronze" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug text-foreground/90 flex-1">
                <span className="text-bronze text-3xl leading-none mr-1">"</span>
                {r.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="size-12 rounded-full object-cover ring-2 ring-bronze/30 group-hover:ring-bronze transition-all"
                />
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-foreground/55 tracking-wider uppercase">
                    {r.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  return (
    <section className="py-28 md:py-36 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="eyebrow-line">Chapter 07 · The neighbourhood</span>
          <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] font-light">
            Quiet street.<br />
            <em className="text-bronze not-italic">Loud city,</em> at your doorstep.
          </h2>
          <p className="mt-8 text-foreground/70 font-light leading-relaxed text-lg">
            {brand.address}. A few minutes from the things that matter, far enough from the things
            that don't.
          </p>
          <ul className="mt-10 divide-y divide-border border-t border-b border-border">
            {brand.nearby.map((n, i) => (
              <li
                key={n.name}
                className="flex justify-between items-center py-5 group hover:pl-3 transition-all duration-500"
              >
                <span className="flex items-center gap-4 text-sm">
                  <span className="font-mono text-[0.65rem] text-foreground/40">
                    0{i + 1}
                  </span>
                  {n.name}
                </span>
                <span className="font-display text-bronze text-lg">{n.distance}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal aspect-square md:aspect-[4/5] overflow-hidden border border-border relative group">
          <iframe
            title="Map"
            className="w-full h-full grayscale contrast-110 group-hover:grayscale-0 transition-all duration-1000"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 left-4 right-4 glass px-4 py-3 flex items-center gap-3 pointer-events-none">
            <MapPin className="size-4 text-bronze" />
            <span className="text-xs tracking-wider">{brand.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BANNER ---------- */
function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden bg-ink text-bone noise"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${penthouse})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-bronze/15 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center reveal-blur">
        <span className="eyebrow-line !text-bronze-soft justify-center">Ready when you are</span>
        <h2 className="mt-6 text-5xl md:text-8xl text-bone leading-[0.98] font-light">
          Ready to experience{" "}
          <span className="block mt-2 text-gradient-bronze italic">{brand.name}?</span>
        </h2>
        <p className="mt-8 text-bone/65 max-w-xl mx-auto font-light text-lg">
          Reach out directly. We respond within the hour, every hour.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-luxe"
          >
            <MessageCircle className="size-4" /> WhatsApp us
          </a>
          <a
            href={`tel:${brand.phone}`}
            className="btn-ghost-luxe !text-bone !border-bone/30 hover:!border-bone"
          >
            <Phone className="size-4" /> {brand.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="font-display text-3xl">
              {brand.shortName}
              <span className="text-bronze">.</span>
            </div>
            <p className="mt-5 text-foreground/65 max-w-sm leading-relaxed">
              {brand.name} — {brand.tagline}
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Instagram, href: brand.socials.instagram, label: "Instagram" },
                { icon: Twitter, href: brand.socials.twitter, label: "Twitter" },
                { icon: Facebook, href: brand.socials.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="size-10 rounded-full border border-border flex items-center justify-center hover:border-bronze hover:text-bronze transition-all duration-300"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Visit</div>
            <p className="text-sm text-foreground/75 leading-relaxed">{brand.address}</p>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Reach</div>
            <ul className="text-sm space-y-3 text-foreground/75">
              <li>
                <a href={`tel:${brand.phone}`} className="hover:text-bronze transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-bronze transition-colors">
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  className="hover:text-bronze transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="size-3.5" /> WhatsApp concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="border-t border-border pt-10 overflow-hidden">
          <div className="font-display text-[20vw] md:text-[14vw] leading-none text-foreground/[0.05] select-none -mb-4">
            {brand.shortName}.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/50 mt-6">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>Crafted in {brand.location}.</span>
          <span className="flex items-center gap-2">
            <ChevronRight className="size-3" />
            <a href="#top" className="hover:text-bronze">
              Back to top
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
