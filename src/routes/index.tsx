import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";

import { brand } from "@/config/brand";
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
    const els = document.querySelectorAll(".reveal");
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
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Apartments />
      <Amenities />
      <Reserve />
      <Testimonials />
      <Location />
      <CtaBanner />
      <Footer />
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
    ["Apartments", "#apartments"],
    ["Amenities", "#amenities"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a
          href="#top"
          className={`font-display text-xl tracking-tight ${
            scrolled ? "text-foreground" : "text-bone"
          }`}
        >
          {brand.shortName}
          <span className="text-bronze">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-xs tracking-[0.18em] uppercase transition-colors hover:text-bronze ${
                scrolled ? "text-foreground/80" : "text-bone/90"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#reserve" className="btn-luxe hidden sm:inline-flex !py-2.5 !px-5 text-[0.68rem]">
          Reserve
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt={`${brand.name} interior`}
          className="hero-bg h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/85" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-32 md:pb-40">
        <div
          className="max-w-3xl"
          style={{ animation: "rise 1s ease-out 0.2s both" }}
        >
          <span className="eyebrow text-bronze-soft">{brand.location} · Est. 2024</span>
          <h1 className="mt-5 text-bone text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02]">
            {brand.heroHeadline}
          </h1>
          <p className="mt-6 text-bone/80 text-base md:text-lg max-w-xl leading-relaxed font-light">
            {brand.heroSub}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#reserve" className="btn-luxe !bg-bronze !border-bronze">
              Check availability <ArrowRight className="size-4" />
            </a>
            <a href="#apartments" className="btn-ghost-luxe">
              View apartments
            </a>
          </div>
        </div>

        <BookingBar />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bone/60 text-[0.65rem] tracking-[0.3em] uppercase z-10">
        Scroll
      </div>
    </section>
  );
}

function BookingBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-12 grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_auto] gap-px bg-border/40 border border-bone/15 backdrop-blur-md bg-ink/40 overflow-hidden"
      style={{ animation: "rise 1s ease-out 0.5s both" }}
    >
      <Field label="Check in" type="date" />
      <Field label="Check out" type="date" />
      <Field label="Guests" type="select" />
      <button
        type="submit"
        className="btn-luxe !rounded-none !bg-bronze !border-bronze md:!px-10"
      >
        Search
      </button>
    </form>
  );
}

function Field({ label, type }: { label: string; type: "date" | "select" }) {
  return (
    <label className="bg-ink/60 px-5 py-4 flex flex-col gap-1 text-bone">
      <span className="text-[0.62rem] tracking-[0.22em] uppercase text-bone/60">{label}</span>
      {type === "date" ? (
        <input
          type="date"
          className="bg-transparent outline-none text-bone text-sm [color-scheme:dark]"
        />
      ) : (
        <select className="bg-transparent outline-none text-bone text-sm">
          <option className="bg-ink">1 guest</option>
          <option className="bg-ink">2 guests</option>
          <option className="bg-ink">3 guests</option>
          <option className="bg-ink">4+ guests</option>
        </select>
      )}
    </label>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const badges = [
    { icon: ShieldCheck, label: "24/7 Concierge" },
    { icon: Star, label: "Verified Listings" },
    { icon: MapPin, label: "Prime Location" },
    { icon: Zap, label: "Self Check-In" },
  ];
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 reveal">
            <span className="eyebrow">About the residence</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">
              A different kind of address in {brand.location}.
            </h2>
          </div>
          <div className="md:col-span-7 reveal">
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80">
              {brand.name} is a private collection of {" "}
              <span className="text-bronze">six serviced apartments</span> reimagined for the modern
              traveller. Every detail — from the linen weight to the espresso blend — has been
              chosen, not specified. You will not find another address like it in the city.
            </p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="bg-background p-6 flex flex-col gap-3 items-start">
                  <Icon className="size-5 text-bronze" strokeWidth={1.4} />
                  <span className="text-xs tracking-[0.16em] uppercase text-foreground/80 leading-relaxed">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const items = [
    { src: g1, h: "row-span-2", alt: "Marble bathroom" },
    { src: g2, h: "", alt: "Luxury kitchen" },
    { src: g3, h: "row-span-2", alt: "Rooftop infinity pool" },
    { src: g4, h: "", alt: "Reading nook" },
    { src: g5, h: "", alt: "Dining area" },
  ];
  return (
    <section id="gallery" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="eyebrow">The interiors</span>
            <h2 className="mt-4 text-4xl md:text-5xl">A house tour, in fragments.</h2>
          </div>
          <a href="#reserve" className="text-sm text-foreground/80 hover:text-bronze flex items-center gap-2">
            See every room <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[240px] gap-3 reveal">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden bg-muted ${it.h} group`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- APARTMENTS ---------- */
function Apartments() {
  const rooms = [
    {
      img: studio,
      name: "The Studio",
      price: "₦95,000",
      amenities: ["Sleeps 2", "Queen bed", "Kitchenette"],
    },
    {
      img: onebed,
      name: "Executive One-Bedroom",
      price: "₦165,000",
      amenities: ["Sleeps 2", "King bed", "Workspace"],
    },
    {
      img: penthouse,
      name: "Skyline Penthouse",
      price: "₦420,000",
      amenities: ["Sleeps 4", "2 Bedrooms", "Private terrace"],
    },
  ];
  return (
    <section id="apartments" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal mb-16">
          <span className="eyebrow">Apartments</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Three ways to stay.</h2>
          <p className="mt-5 text-foreground/70 font-light text-lg">
            From quiet studios to a full-floor penthouse — each apartment is fully serviced and
            ready the moment you arrive.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((r, i) => (
            <article
              key={r.name}
              className="group flex flex-col reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-bone/95 text-ink text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5">
                  From {r.price} / night
                </span>
              </div>
              <div className="pt-6">
                <h3 className="text-2xl">{r.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-foreground/65">
                  {r.amenities.map((a) => (
                    <li key={a}>· {a}</li>
                  ))}
                </ul>
                <a
                  href="#reserve"
                  className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-foreground border-b border-bronze pb-1 hover:text-bronze transition-colors"
                >
                  View details <ArrowRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AMENITIES ---------- */
function Amenities() {
  const items = [
    { icon: Wifi, label: "Fibre Wi-Fi" },
    { icon: Waves, label: "Rooftop Pool" },
    { icon: Dumbbell, label: "Private Gym" },
    { icon: Zap, label: "24h Power" },
    { icon: Car, label: "Secure Parking" },
    { icon: UtensilsCrossed, label: "Chef Kitchen" },
    { icon: Snowflake, label: "Climate Control" },
    { icon: ShieldCheck, label: "Estate Security" },
  ];
  return (
    <section
      id="amenities"
      className="py-28 md:py-40 bg-ink text-bone relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-7 reveal">
            <span className="eyebrow">Amenities</span>
            <h2 className="mt-4 text-4xl md:text-6xl text-bone">
              Everything in. <span className="text-bronze italic">Nothing extra to think about.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-bone/70 font-light leading-relaxed reveal">
            Power, security, water, internet — the things that quietly make or break a stay in
            Lagos. We handle them, so you don't.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-bone/10 reveal">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-ink p-8 md:p-10 flex flex-col gap-5 items-start group hover:bg-forest transition-colors duration-500"
            >
              <Icon className="size-7 text-bronze" strokeWidth={1.2} />
              <span className="text-sm tracking-[0.12em] uppercase text-bone/90">{label}</span>
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
    <section id="reserve" className="py-28 md:py-40 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="reveal">
          <span className="eyebrow">Reserve</span>
          <h2 className="mt-4 text-4xl md:text-5xl leading-[1.05]">
            Tell us when you're coming. We'll handle the rest.
          </h2>
          <p className="mt-6 text-foreground/70 font-light leading-relaxed">
            A real human reviews every reservation. You'll hear back from our concierge within an
            hour — by WhatsApp, email or call, whichever suits you.
          </p>
          <div className="mt-10 space-y-4">
            <ContactRow icon={Phone} label="Call" value={brand.phone} href={`tel:${brand.phone}`} />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value={brand.phone}
              href={`https://wa.me/${brand.whatsapp}`}
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/${brand.whatsapp}`, "_blank");
          }}
          className="bg-background border border-border p-8 md:p-10 shadow-card reveal space-y-5"
        >
          <h3 className="text-2xl mb-2">Request a reservation</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Check in" type="date" />
            <Input label="Check out" type="date" />
          </div>
          <Input label="Full name" type="text" placeholder="Your name" />
          <Input label="Phone / WhatsApp" type="tel" placeholder={brand.phone} />
          <div>
            <Label>Apartment</Label>
            <select className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-bronze">
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
        className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-bronze placeholder:text-foreground/40 [color-scheme:light]"
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
      className="flex items-center gap-4 group border-t border-border py-4 hover:text-bronze transition-colors"
    >
      <Icon className="size-5 text-bronze" strokeWidth={1.4} />
      <div className="flex-1 min-w-0">
        <div className="text-[0.62rem] tracking-[0.22em] uppercase text-foreground/50">{label}</div>
        <div className="font-display text-lg truncate">{value}</div>
      </div>
      <ArrowRight className="size-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
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
    <section className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16 reveal">
          <span className="eyebrow">Guests</span>
          <h2 className="mt-4 text-4xl md:text-5xl">A few words from people who stayed.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="bg-background p-8 md:p-10 flex flex-col reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-1 text-bronze mb-6">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="size-4 fill-bronze" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug text-foreground/90 flex-1">
                "{r.quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="size-12 rounded-full object-cover"
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
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="eyebrow">The neighbourhood</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Quiet street.<br />Loud city, at your doorstep.
          </h2>
          <p className="mt-6 text-foreground/70 font-light leading-relaxed">
            {brand.address}. A few minutes from the things that matter, far enough from the things
            that don't.
          </p>
          <ul className="mt-10 divide-y divide-border border-t border-b border-border">
            {brand.nearby.map((n) => (
              <li key={n.name} className="flex justify-between items-center py-4">
                <span className="text-sm">{n.name}</span>
                <span className="font-display text-bronze">{n.distance}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal aspect-square md:aspect-[4/5] overflow-hidden border border-border">
          <iframe
            title="Map"
            className="w-full h-full grayscale-[40%] contrast-95"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BANNER ---------- */
function CtaBanner() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden bg-ink text-bone">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${penthouse})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="relative mx-auto max-w-4xl px-6 text-center reveal">
        <span className="eyebrow text-bronze-soft">Ready when you are</span>
        <h2 className="mt-5 text-4xl md:text-6xl text-bone leading-[1.05]">
          Ready to experience <span className="italic text-bronze">{brand.name}?</span>
        </h2>
        <p className="mt-6 text-bone/70 max-w-xl mx-auto font-light">
          Reach out directly. We respond within the hour, every hour.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-luxe !bg-bronze !border-bronze"
          >
            <MessageCircle className="size-4" /> WhatsApp us
          </a>
          <a href={`tel:${brand.phone}`} className="btn-ghost-luxe">
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
    <footer className="bg-background border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-2xl">
              {brand.shortName}
              <span className="text-bronze">.</span>
            </div>
            <p className="mt-4 text-sm text-foreground/65 max-w-sm leading-relaxed">
              {brand.name} — {brand.tagline}
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Visit</div>
            <p className="text-sm text-foreground/75 leading-relaxed">{brand.address}</p>
          </div>
          <div>
            <div className="eyebrow mb-4">Reach</div>
            <ul className="text-sm space-y-2 text-foreground/75">
              <li>
                <a href={`tel:${brand.phone}`} className="hover:text-bronze">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-bronze">
                  {brand.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3 text-foreground/60">
              <a href={brand.socials.instagram} aria-label="Instagram" className="hover:text-bronze">
                <Instagram className="size-4" />
              </a>
              <a href={brand.socials.twitter} aria-label="Twitter" className="hover:text-bronze">
                <Twitter className="size-4" />
              </a>
              <a href={brand.socials.facebook} aria-label="Facebook" className="hover:text-bronze">
                <Facebook className="size-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/50">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Crafted in {brand.location}.</span>
        </div>
      </div>
    </footer>
  );
}
