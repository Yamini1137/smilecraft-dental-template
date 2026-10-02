import { Activity, AlignCenter, Gem, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

// =====================================================
// CLINIC ASSETS / IMAGES
// Replace images in src/assets/ or update imports below
// =====================================================
import mayaPhoto from "@/assets/dentist-05.jpg";
import arjunPhoto from "@/assets/dentist-02.jpg";
import ishaPhoto from "@/assets/dentist-04.jpg";
import smilePhoto from "@/assets/smile-feature.jpg";
import candidPhoto from "@/assets/dental-care.jpg";
import galleryOne from "@/assets/gallery-01.jpg";
import galleryTwo from "@/assets/gallery-02.jpg";

// =====================================================
// CLINIC INFORMATION — EDIT THESE VALUES
// Primary clinic identity, contact info, and hours
// =====================================================
export const clinic = {
  /** Your clinic's display name */
  name: "SmileCraft Dental",
  /** Short tagline used in footer and hero sections */
  tagline: "A better kind of dental visit.",
  /** Primary contact phone number */
  phone: "+1 (555) 019-2834",
  /** Primary contact email address */
  email: "hello@smilecraftdental.example",
  /** Physical address of your clinic */
  address: "100 Healthcare Avenue, Suite 200, Metro City, MC 10001",
  /** Operating hours displayed on contact page and footer */
  hours: [
    ["Monday–Friday", "8:00 AM–7:00 PM"],
    ["Saturday", "9:00 AM–4:00 PM"],
    ["Sunday", "Closed"],
  ],
  /** Social media links (leave empty array [] to hide) */
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
} as const;

// =====================================================
// HERO & TRUST HIGHLIGHTS — EDIT THESE VALUES
// Shown in hero badge, availability counter, and banners
// =====================================================
export const highlights = {
  /** Rating score displayed in the hero badge (e.g. "4.9") */
  rating: "4.9",
  /** Label for rating score (e.g. "Patient satisfaction") */
  ratingLabel: "Patient satisfaction",
  /** Appointment availability badge text */
  availability: "Same-week*",
  /** Sub-text for availability badge */
  availabilityLabel: "appointments",
  /** Disclaimer note shown below hero buttons */
  disclaimer: "*Sample metrics — replace with your clinic information.",
} as const;

// =====================================================
// NAVIGATION LINKS
// Header and footer navigation structure
// =====================================================
export const navItems = [
  { label: "Treatments", to: "/services" },
  { label: "Smile Gallery", to: "/", hash: "gallery" },
  { label: "Dentists", to: "/doctors" },
  { label: "About", to: "/about" },
] as const;

// =====================================================
// FEATURED TREATMENTS — EDIT THESE VALUES
// Highlighted treatments shown on the home page selector
// =====================================================
export const treatments = [
  { title: "Smile Whitening", description: "A brighter smile, carefully calibrated to look naturally yours.", duration: "60–90 minutes", price: "From $250", icon: Sparkles, image: smilePhoto },
  { title: "Clear Aligners", description: "Discreet, digitally planned movement with regular progress reviews.", duration: "6–18 months", price: "From $2,200", icon: AlignCenter, image: galleryTwo },
  { title: "Veneers", description: "Fine, considered refinements to shape, balance and proportion.", duration: "2–3 visits", price: "From $600", icon: Gem, image: galleryOne },
  { title: "Implants", description: "Durable tooth replacement planned around comfort and long-term health.", duration: "3–6 months", price: "From $1,500", icon: Activity, image: candidPhoto },
  { title: "General Dentistry", description: "Everyday preventive care with clear advice and no rushed conversations.", duration: "45–60 minutes", price: "From $95", icon: Stethoscope, image: candidPhoto },
] as const;

// =====================================================
// CLINIC SERVICES — EDIT THESE VALUES
// Comprehensive service grid list on /services page
// =====================================================
export const services = [
  { title: "General Dentistry", description: "Check-ups, cleaning and restorative care designed around prevention.", icon: Stethoscope },
  { title: "Preventive Care", description: "Simple routines and timely reviews that protect your smile for longer.", icon: ShieldCheck },
  { title: "Smile Whitening", description: "Clinically guided whitening for a fresh, natural-looking result.", icon: Sparkles },
  { title: "Clear Aligners", description: "A discreet route to straighter teeth with digitally planned care.", icon: AlignCenter },
  { title: "Dental Implants", description: "Confident, durable replacements planned for the way you live.", icon: Activity },
  { title: "Veneers & Bonding", description: "Subtle refinements to shape, symmetry and proportion.", icon: Gem },
] as const;

// =====================================================
// DOCTORS & TEAM — EDIT THESE VALUES
// Shown on /doctors page and home page showcase
// Replace with your clinic's actual doctor/staff details
// =====================================================
export const doctors = [
  { name: "Dr. Sarah Jenkins", specialty: "Cosmetic & Restorative Dentist", experience: "12 years experience", bio: "Dr. Jenkins (placeholder profile) focuses on subtle, natural-looking results and an unhurried approach that puts patients at ease.", image: mayaPhoto },
  { name: "Dr. Marcus Vance", specialty: "Orthodontist", experience: "15 years experience", bio: "Dr. Vance (placeholder profile) combines digital treatment planning with practical guidance to make straighter smiles feel straightforward.", image: arjunPhoto },
  { name: "Dr. Elena Rostova", specialty: "Restorative Dentist", experience: "10 years experience", bio: "Dr. Rostova (placeholder profile) focuses on comfortable, conservative care that preserves healthy tooth structure.", image: ishaPhoto },
] as const;

// =====================================================
// PRICING LIST — EDIT THESE VALUES
// Shown in pricing section on the home page
// =====================================================
export const pricing = [
  { title: "Smile Whitening", price: "From $250", duration: "60–90 min", description: "A clinician-led treatment tailored to your preferred shade." },
  { title: "Clear Aligners", price: "From $2,200", duration: "6–18 months", description: "Digital planning, custom aligners and progress reviews." },
  { title: "Composite Bonding", price: "From $350", duration: "1–2 visits", description: "Thoughtful reshaping with minimal alteration to the tooth." },
  { title: "Routine Cleaning", price: "From $95", duration: "45 min", description: "A gentle clean, polish and practical prevention advice." },
] as const;

// =====================================================
// TESTIMONIALS — EDIT THESE VALUES
// Patient reviews shown in home page gallery section
// Replace quotes and details with verified patient reviews
// =====================================================
export const testimonials = [
  { quote: "Sample Testimonial: The care team explained every step clearly and made my visit entirely comfortable.", name: "Sample Patient Review", detail: "Composite bonding" },
  { quote: "Sample Testimonial: Transparent advice and attentive care throughout my aligner treatment.", name: "Sample Patient Review", detail: "Clear aligners" },
  { quote: "Sample Testimonial: A calm, professional experience with subtle and natural-looking results.", name: "Sample Patient Review", detail: "Smile whitening" },
] as const;