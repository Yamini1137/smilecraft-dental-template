import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MoveHorizontal, Star } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { highlights, doctors, pricing, testimonials, treatments } from "@/lib/clinic-data";
import heroImage from "@/assets/hero.jpg";
import smileImage from "@/assets/smile-feature.jpg";
import candidImage from "@/assets/dental-care.jpg";
import galleryOne from "@/assets/gallery-01.jpg";
import beforeImage from "@/assets/before-after.jpg";
import galleryTwo from "@/assets/gallery-02.jpg";

/** Fades children in once they scroll into view. */
export function InView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} data-inview={seen ? "true" : "false"} className={className}>{children}</div>;
}

const Eyebrow = ({ children, light = false }: { children: ReactNode; light?: boolean }) => <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? "text-secondary" : "text-muted-foreground"}`}><span className="h-px w-8 bg-accent" />{children}</p>;

const PrimaryCta = ({ children, className = "" }: { children: ReactNode; className?: string }) => <Link to="/contact" hash="appointment" className={`group inline-flex h-14 items-center gap-3 rounded-full bg-primary pl-7 pr-2 font-display text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 ${className}`}>{children}<span className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-1"><ArrowRight className="size-4" /></span></Link>;

export function Hero() {
  return <section className="relative overflow-hidden">
    <div aria-hidden className="absolute -right-40 top-10 size-[42rem] rounded-full bg-secondary/60 blur-3xl" />
    <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-6 lg:px-12 lg:pb-24 lg:pt-14">
      <div className="relative z-10 flex flex-col justify-center">
        <div className="reveal"><Eyebrow>Modern dentistry, humanly done</Eyebrow></div>
        <h1 className="reveal reveal-d1 mt-7 font-display text-[2.9rem] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[5.6rem] xl:text-[6.4rem]">Your smile deserves better than a <span className="relative inline-block">rushed<svg aria-hidden viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full text-accent" preserveAspectRatio="none"><path d="M3 14 C 80 4, 200 4, 297 12" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" /></svg></span> visit.</h1>
        <p className="reveal reveal-d2 mt-8 max-w-md text-lg leading-8 text-muted-foreground">Thoughtful dentistry, modern technology and a team that takes the time to understand what you actually want.</p>
        <div className="reveal reveal-d3 mt-10 flex flex-wrap items-center gap-6"><PrimaryCta>Book a visit</PrimaryCta><Link to="/services" className="group inline-flex items-center gap-2 border-b-2 border-foreground pb-1 text-sm font-semibold">Explore treatments <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></div>
        <p className="reveal reveal-d3 mt-8 text-xs text-muted-foreground">{highlights.disclaimer}</p>
      </div>
      <div className="reveal reveal-d1 relative mx-auto w-full max-w-xl lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tr-[9rem] lg:-mr-24 lg:aspect-[4/4.8]"><img src={heroImage} alt="Dentist talking calmly with a patient in a bright treatment room" width={1024} height={1280} className="h-full w-full object-cover" /></div>
        <div className="absolute -left-3 top-10 rounded-[1.5rem] bg-card px-5 py-4 shadow-card sm:-left-10"><p className="font-display text-3xl font-extrabold tracking-tight">{highlights.rating}<span className="text-base text-muted-foreground"> / 5</span></p><div className="mt-1 flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div><p className="mt-1 text-xs text-muted-foreground">{highlights.ratingLabel}</p></div>
        <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-full bg-primary py-3 pl-3 pr-6 text-primary-foreground shadow-card sm:right-10"><span className="grid size-11 place-items-center rounded-full bg-secondary text-secondary-foreground"><Clock className="size-5" /></span><p className="font-display text-sm font-bold leading-tight">{highlights.availability}<br /><span className="font-sans font-normal text-primary-foreground/70">{highlights.availabilityLabel}</span></p></div>
      </div>
    </div>
  </section>;
}

export function TreatmentSelector() {
  const [active, setActive] = useState(0);
  const t = treatments[active] ?? treatments[0];
  return <section id="treatments" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <InView className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end"><div><Eyebrow>Treatments</Eyebrow><h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">What would you like to change?</h2></div><p className="max-w-md text-muted-foreground lg:justify-self-end">From everyday care to complete smile transformations, we'll help you find the right path.</p></InView>
    <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground">
        <img key={t.title} src={t.image} alt={t.title} width={1024} height={1024} loading="lazy" className="reveal aspect-[4/3] w-full object-cover opacity-90 lg:aspect-[16/12]" />
        <div className="relative p-6 sm:p-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-gradient-to-t lg:from-primary lg:via-primary/85 lg:to-transparent lg:pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">0{active + 1} — {t.duration}</p>
          <h3 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">{t.title}</h3>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-sm text-sm leading-6 text-primary-foreground/75">{t.description}</p><Link to="/contact" hash="appointment" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground">Ask about this <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></div>
        </div>
      </div>
      <ul className="flex flex-col justify-center" role="tablist" aria-label="Treatments">
        {treatments.map((item, i) => { const Icon = item.icon; const on = i === active; return <li key={item.title}><button role="tab" aria-selected={on} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={`group flex w-full items-center gap-5 border-b border-border py-5 text-left transition-colors sm:py-6 ${on ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}><span className={`grid size-11 shrink-0 place-items-center rounded-full transition-colors ${on ? "bg-accent text-accent-foreground" : "bg-muted"}`}><Icon className="size-5" /></span><span className="flex-1 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">{item.title}</span><ArrowRight className={`size-5 transition-all ${on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} /></button></li>; })}
      </ul>
    </div>
  </section>;
}

export function Statement() {
  return <section className="relative overflow-hidden bg-secondary py-24 lg:py-36">
    <InView className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <p className="font-display text-[17vw] font-extrabold leading-[0.85] tracking-[-0.06em] lg:text-[11rem]">Small<br />changes.</p>
      <div className="relative z-10 mx-auto -mt-8 w-3/4 max-w-lg overflow-hidden rounded-full border-8 border-background shadow-card sm:-mt-20 lg:absolute lg:right-24 lg:top-6 lg:mt-0 lg:w-[30rem]"><img src={smileImage} alt="Close-up of a natural, confident smile" width={1024} height={1024} loading="lazy" className="aspect-square w-full object-cover" /></div>
      <p className="relative mt-6 text-right font-display text-[17vw] font-extrabold leading-[0.85] tracking-[-0.06em] text-primary lg:mt-0 lg:text-[11rem]">Big <span className="text-transparent [-webkit-text-stroke:2px_var(--primary)]">difference.</span></p>
    </InView>
  </section>;
}

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const move = (x: number) => { const r = box.current?.getBoundingClientRect(); if (r) setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100))); };
  return <section id="results" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-12 lg:py-32">
    <InView><Eyebrow>Smile Transformation</Eyebrow><h2 className="mt-5 font-display text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl">See the difference.</h2>
      <dl className="mt-10 divide-y divide-border border-y border-border">{[["Treatment", "Composite bonding"], ["Duration", "2 visits"], ["Result", "Natural-looking smile refinement"]].map(([k, v]) => <div key={k} className="flex justify-between gap-6 py-4"><dt className="text-sm text-muted-foreground">{k}</dt><dd className="text-right text-sm font-semibold">{v}</dd></div>)}</dl>
      <p className="mt-6 text-xs text-muted-foreground">Drag the handle to compare visual treatment results. Visual comparison for template preview.</p></InView>
    <div ref={box} className="relative aspect-[4/3] touch-none select-none overflow-hidden rounded-[2rem] shadow-card" onPointerDown={(e) => { (e.target as HTMLElement).setPointerCapture(e.pointerId); move(e.clientX); }} onPointerMove={(e) => e.buttons && move(e.clientX)}>
      <img src={galleryOne} alt="Sample image: smile after refinement" width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><img src={beforeImage} alt="Sample image: smile before refinement" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" draggable={false} /></div>
      <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-xs font-bold">Before</span><span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">After</span><span className="absolute bottom-5 left-5 rounded-full bg-primary/85 px-3 py-1 text-[11px] font-semibold text-primary-foreground">Smile Transformation</span>
      <div className="absolute inset-y-0 w-0.5 bg-background" style={{ left: `${pos}%` }}><button type="button" aria-label="Comparison slider" role="slider" aria-valuenow={Math.round(pos)} aria-valuemin={0} aria-valuemax={100} onKeyDown={(e) => { if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5)); if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5)); }} className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-background text-foreground shadow-card"><MoveHorizontal className="size-5" /></button></div>
    </div>
  </section>;
}

const steps = ["Tell us what you're looking for.", "Meet your dentist.", "Build your treatment plan.", "Leave knowing exactly what's next."];
export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => { const el = ref.current; if (!el) return; const r = el.getBoundingClientRect(); const p = (window.innerHeight * 0.75 - r.top) / (r.height * 0.8); setProgress(Math.min(1, Math.max(0, p))); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const active = Math.min(3, Math.floor(progress * 4));
  return <section ref={ref} className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-[1440px]"><Eyebrow light>The experience</Eyebrow><h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">Know exactly what happens next.</h2>
      <div className="relative mt-14"><div className="absolute left-5 top-0 h-full w-px bg-primary-foreground/15 md:left-0 md:top-7 md:h-px md:w-full" /><div className="absolute left-5 top-0 w-px bg-accent md:hidden" style={{ height: `${progress * 100}%` }} /><div className="absolute left-0 top-7 hidden h-px bg-accent transition-[width] duration-300 md:block" style={{ width: `${progress * 100}%` }} />
        <ol className="grid gap-12 md:grid-cols-4 md:gap-8">{steps.map((s, i) => <li key={s} className={`relative pl-14 transition-opacity duration-500 md:pl-0 md:pt-16 ${i <= active ? "opacity-100" : "opacity-35"}`}><span className={`absolute left-[14px] top-2 size-3 rounded-full transition-colors md:left-0 md:top-[22px] ${i <= active ? "bg-accent" : "bg-primary-foreground/30"}`} /><span className="font-display text-7xl font-extrabold tracking-tighter text-secondary lg:text-8xl">0{i + 1}</span><p className="mt-4 max-w-[14rem] font-display text-xl font-bold leading-snug">{s}</p></li>)}</ol>
      </div></div>
  </section>;
}

export function DentistShowcase() {
  const [idx, setIdx] = useState(0);
  const d = doctors[idx] ?? doctors[0];
  return <section id="dentists" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <InView><Eyebrow>Your dentist</Eyebrow><h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">Meet the person behind your care.</h2></InView>
    <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
      <div className="relative"><div aria-hidden className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-[2rem] bg-secondary" /><img key={d.name} src={d.image} alt={`${d.name}, ${d.specialty}`} width={768} height={960} loading="lazy" className="reveal relative aspect-[4/5] w-full rounded-[2rem] object-cover" /></div>
      <div key={d.name} className="reveal"><p className="text-sm font-semibold text-muted-foreground">{d.specialty}</p><h3 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">{d.name}</h3><p className="mt-3 inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground">{d.experience}</p><p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">{d.bio}</p><PrimaryCta className="mt-10">Book with {d.name.split(" ").slice(0, 2).join(" ")}</PrimaryCta>
        <div className="mt-12 flex gap-4 border-t border-border pt-8">{doctors.map((o, i) => i !== idx && <button key={o.name} onClick={() => setIdx(i)} className="group flex items-center gap-3 text-left"><img src={o.image} alt="" width={64} height={64} loading="lazy" className="size-16 rounded-full object-cover ring-2 ring-transparent transition group-hover:ring-accent" /><span><span className="block font-display text-sm font-bold">{o.name}</span><span className="text-xs text-muted-foreground">{o.specialty.split(" ")[0]}</span></span></button>)}</div>
      </div>
    </div>
  </section>;
}

export function Pricing() {
  return <section className="bg-muted px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <InView className="lg:sticky lg:top-28 lg:self-start"><Eyebrow>Transparent pricing</Eyebrow><h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">Know what you're investing in.</h2><p className="mt-6 max-w-sm text-muted-foreground">Starting prices, clearly shown. Your final plan is confirmed at your first consultation — no surprises.</p></InView>
    <div>{pricing.map((p) => <InView key={p.title}><div className="group grid gap-3 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10"><div><h3 className="font-display text-2xl font-bold tracking-tight transition-transform group-hover:translate-x-1 sm:text-3xl">{p.title}</h3><p className="mt-2 max-w-md text-sm text-muted-foreground">{p.description} <span className="font-semibold text-foreground">· {p.duration}</span></p></div><p className="font-display text-2xl font-extrabold tracking-tight sm:text-right">{p.price}</p></div></InView>)}<p className="mt-6 text-xs text-muted-foreground">Sample template prices — replace with your clinic's actual fees and quotes.</p></div>
  </div></section>;
}

export function Gallery() {
  const img = "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105";
  const Tile = ({ src, alt, className = "", label }: { src: string; alt: string; className?: string; label: string }) => <figure className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}><img src={src} alt={alt} loading="lazy" width={1024} height={1024} className={img} /><figcaption className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">{label}</figcaption></figure>;
  const [main, ...rest] = testimonials;
  return <section id="gallery" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <InView className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">Real smiles.<br /><span className="text-muted-foreground">Thoughtful work.</span></h2><Eyebrow>Smile gallery</Eyebrow></InView>
    <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4">
      <Tile src={smileImage} alt="Whitened natural smile" label="Smile whitening" className="col-span-2 row-span-2" />
      <Tile src={galleryTwo} alt="Straightened smile after aligners" label="Clear aligners" className="row-span-2" />
      <Tile src={galleryOne} alt="Refined smile after bonding" label="Composite bonding" />
      <Tile src={heroImage} alt="Patient consultation" label="Consultation" />
      <Tile src={candidImage} alt="Relaxed patient in the dental chair" label="General care" className="col-span-2 md:col-span-4 lg:col-span-2" />
    </div>
    <div className="mt-16 grid gap-12 border-t border-border pt-14 lg:grid-cols-[1.4fr_.6fr] lg:gap-14">
      <InView><span aria-hidden className="font-display text-8xl font-extrabold leading-none text-accent">“</span><blockquote className="-mt-6 font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-5xl">{main?.quote}</blockquote><div className="mt-8 flex items-center gap-4"><img src={galleryTwo} alt="" width={56} height={56} loading="lazy" className="size-14 rounded-full object-cover" /><p className="font-semibold">{main?.name}<span className="block text-sm font-normal text-muted-foreground">{main?.detail}</span></p></div></InView>
      <div className="flex flex-col justify-end gap-8">{rest.map((t) => <InView key={t.name}><figure className="border-l-2 border-accent pl-6"><blockquote className="text-lg leading-7">“{t.quote}”</blockquote><figcaption className="mt-3 text-sm text-muted-foreground">{t.name} · {t.detail}</figcaption></figure></InView>)}</div>
    </div>
  </section>;
}

export function Finale() {
  return <section className="px-3 pb-3 sm:px-5 sm:pb-5"><div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:py-20 lg:rounded-[4rem]">
    <div aria-hidden className="absolute -left-24 -top-24 size-80 rounded-full border-[40px] border-secondary/15" /><div aria-hidden className="absolute -bottom-32 -right-10 size-96 rounded-full bg-accent/20 blur-2xl" /><div aria-hidden className="absolute right-[18%] top-16 size-4 rounded-full bg-accent" />
    <InView className="relative"><h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Ready to love your smile?</h2><p className="mx-auto mt-5 max-w-md text-primary-foreground/70">Let's make your next dental visit feel a little different.</p><Link to="/contact" hash="appointment" className="group mt-10 inline-flex h-16 items-center gap-4 rounded-full bg-secondary pl-8 pr-2 font-display text-base font-bold text-secondary-foreground transition-transform hover:scale-[1.03]">Book your visit<span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-[-45deg]"><ArrowRight className="size-5" /></span></Link></InView>
  </div></section>;
}
