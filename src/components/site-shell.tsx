import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { clinic, navItems } from "@/lib/clinic-data";

function Brand() {
  return <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${clinic.name} home`}><span className="relative grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><span className="h-3.5 w-2.5 rounded-b-full rounded-t-[45%] border-2 border-current" /></span><span className="truncate text-lg font-extrabold">{clinic.name}</span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border/70 bg-background/88 backdrop-blur-xl" : "border-transparent bg-background"}`}>
    <div className={`mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all sm:px-8 lg:px-12 ${scrolled ? "h-16" : "h-20"}`}>
      <Brand />
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">{navItems.map((item) => <Link key={item.label} to={item.to} {...("hash" in item ? { hash: item.hash } : {})} className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}<Button asChild className="ml-4 h-11 rounded-full px-5"><Link to="/contact" hash="appointment">Book a visit <ArrowUpRight /></Link></Button></nav>
      <Button variant="ghost" size="icon" className="size-11 rounded-full lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    <div className={`overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}><nav className="mx-auto flex max-w-7xl flex-col px-5 py-5" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.label} to={item.to} {...("hash" in item ? { hash: item.hash } : {})} onClick={() => setOpen(false)} className="border-b border-border py-4 text-lg font-semibold">{item.label}</Link>)}<Button asChild className="mt-5 h-12 rounded-full"><Link to="/contact" hash="appointment" onClick={() => setOpen(false)}>Book a visit <ArrowUpRight /></Link></Button></nav></div>
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-primary text-primary-foreground"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12"><div className="grid gap-12 border-b border-primary-foreground/15 pb-14 lg:grid-cols-[1.5fr_1fr_1fr]"><div><Brand /><p className="mt-5 max-w-xs text-sm leading-7 text-primary-foreground/65">{clinic.tagline} Modern dentistry with more time, more clarity and less anxiety.</p></div><div><p className="text-xs font-bold uppercase text-primary-foreground/50">Explore</p><div className="mt-5 grid grid-cols-2 gap-3">{navItems.map((item) => <Link key={item.label} to={item.to} {...("hash" in item ? { hash: item.hash } : {})} className="text-sm text-primary-foreground/75 hover:text-primary-foreground">{item.label}</Link>)}<Link to="/contact" className="text-sm text-primary-foreground/75 hover:text-primary-foreground">Contact</Link></div></div><div><p className="text-xs font-bold uppercase text-primary-foreground/50">Visit</p><a href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`} className="mt-5 block text-sm leading-6 text-primary-foreground/75 hover:text-primary-foreground">{clinic.address}</a><a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="mt-3 block text-sm text-primary-foreground/75 hover:text-primary-foreground">{clinic.phone}</a><p className="mt-3 text-sm text-primary-foreground/75">Mon–Fri 8:00–19:00 · Sat 9:00–16:00</p></div></div><div className="flex flex-col gap-3 pt-7 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {clinic.name}. {clinic.tagline}</span><span className="flex gap-4">{clinic.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">{s.label}</a>)}</span></div></div></footer>;
}