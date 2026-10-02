import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter, DentistShowcase, Experience, Finale, Gallery, Hero, Pricing, Statement, TreatmentSelector } from "@/components/dental-home";
import { clinic } from "@/lib/clinic-data";

const title = `${clinic.name} — ${clinic.tagline}`;
const description = "Thoughtful, unhurried modern dentistry: whitening, aligners, veneers, implants and everyday care with clear pricing.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Home,
});

function Home() {
  return <>
    <Hero />
    <TreatmentSelector />
    <Statement />
    <BeforeAfter />
    <Experience />
    <DentistShowcase />
    <Pricing />
    <Gallery />
    <Finale />
  </>;
}
