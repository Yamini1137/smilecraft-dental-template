import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doctors, services } from "@/lib/clinic-data";

export function SectionIntro({ eyebrow, title, text, centered = false, as = "h2" }: { eyebrow: string; title: string; text?: string; centered?: boolean; as?: "h1" | "h2" }) {
  const Heading = as;
  return <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><Heading className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">{title}</Heading>{text && <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>}</div>;
}

export function ServicesGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, limit).map((service) => { const Icon = service.icon; return <article key={service.title} className="group rounded-lg border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"><span className="grid size-11 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" /></span><h3 className="mt-7 font-display text-xl font-semibold">{service.title}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{service.description}</p><Link to="/contact" hash="appointment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></article>; })}</div>;
}

export function DoctorsGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? doctors.slice(0, 3) : doctors;
  return <div className="grid gap-5 md:grid-cols-3">{list.map((doctor) => <article key={doctor.name} className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft"><div className="aspect-[4/4.5] overflow-hidden"><img src={doctor.image} alt={`${doctor.name}, ${doctor.specialty}`} width={768} height={960} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{doctor.specialty}</p><h3 className="mt-2 font-display text-2xl font-semibold">{doctor.name}</h3>{!compact && <p className="mt-3 text-sm leading-6 text-muted-foreground">{doctor.bio}</p>}<div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-5"><span className="text-xs font-medium text-muted-foreground">{doctor.experience}</span><Button asChild variant="ghost" size="sm" className="rounded-full text-primary"><Link to="/contact" hash="appointment"><CalendarCheck /> Book</Link></Button></div></div></article>)}</div>;
}

export function AppointmentBand() {
  return <section className="px-5 py-8 sm:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-primary px-6 py-12 text-primary-foreground sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-14"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/65">Your health, your pace</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Ready for care that feels more personal?</h2><p className="mt-4 text-sm leading-6 text-primary-foreground/75">Choose a convenient time and tell us what you need. Our team will take it from there.</p></div><Button asChild size="lg" variant="secondary" className="mt-7 h-12 shrink-0 rounded-full px-6 lg:mt-0"><Link to="/contact" hash="appointment">Book an Appointment <ArrowRight /></Link></Button></div></section>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="mt-7 grid gap-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}</ul>;
}
