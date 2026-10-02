# SmileCraft Dental — Dental Clinic Website Template

SmileCraft Dental is a modern, high-performance website template designed specifically for dental practices, healthcare clinics, and medical professionals. Built with React, TypeScript, Vite, TanStack Router, and Tailwind CSS, this template provides a calm, elegant, and patient-focused digital presence that is easy to customize.

---

## 1. Product Overview

- **What it is:** A commercial-grade, multi-page website template for dental clinics and dental practitioners.
- **Who it is for:** Dental clinic owners, practice managers, web agencies, and freelance developers creating websites for dental or healthcare clients.
- **Main Features:**
  - Responsive mobile-first layout.
  - Interactive treatment visualizer & Before/After comparison slider.
  - Centralized clinic data configuration for rapid branding updates.
  - Accessible typography, soft card layouts, and smooth micro-interactions.
  - Optimized for speed, SEO, and screen-reader accessibility.
- **Pages Included:**
  - **Home:** Hero section, treatment selector, smile transformation slider, team preview, pricing table, testimonial gallery, and booking CTA.
  - **About:** Clinic story, values, key statistics, and patient-first philosophy.
  - **Services:** Full service cards for general dentistry, preventive care, whitening, aligners, implants, veneers, and FAQs.
  - **Doctors:** Practitioner profiles with specialties, experience badges, and bios.
  - **Contact:** Opening hours, location address, map placeholder, phone/email contact cards, emergency notice, and appointment request form.

---

## 2. Technology

- **Core Framework:** [React](https://react.dev/) (v19+)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [TanStack Router](https://tanstack.com/router) (file-based routing under `src/routes/`)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 3. Requirements

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (or equivalent package manager like `yarn` or `pnpm`)

---

## 4. Installation

Clone or extract the template files, navigate into the project root directory, and install dependencies:

```bash
# Install project dependencies
npm install

# Start the local development server
npm run dev
```

Open your browser and visit `http://localhost:5173` to preview the website locally.

---

## 5. Production Build

To build the static application for production deployment, run:

```bash
# Create production build
npm run build
```

The optimized production output will be generated inside the `.output` directory.

---

## 6. Customization

All primary clinic data, copy, team profiles, pricing, and contact details are centralized in a single configuration file:
📁 **`src/lib/clinic-data.ts`**

Updating this single file automatically updates headers, footers, route meta tags, page titles, and body content across the entire application without needing to edit individual page templates.

### Editable Fields in `src/lib/clinic-data.ts`:
- **Clinic Name:** `clinic.name`
- **Tagline:** `clinic.tagline`
- **Phone Number:** `clinic.phone`
- **Email Address:** `clinic.email`
- **Physical Address:** `clinic.address`
- **Opening Hours:** `clinic.hours`
- **Social Media Links:** `clinic.socials`
- **Hero & Ratings Highlights:** `highlights` (rating score, availability badges, disclaimers)
- **Doctors & Team:** `doctors` (names, specialties, experience, bios, photo references)
- **Services & Treatments:** `treatments` & `services` (titles, descriptions, pricing, durations)
- **Pricing Table:** `pricing` (service titles, pricing tiers, durations, notes)
- **Testimonials:** `testimonials` (quotes, patient names, treatment details)

---

## 7. Images & Media Assets

All template images are located in the directory:
📁 **`src/assets/`**

The assets use standardized, generic filenames to make replacing images straightforward for developers:
- `hero.jpg` / `hero-alt.jpg` — Hero section featured photos
- `clinic.jpg` — Clinic interior and practice image
- `dental-care.jpg` — Preventive care / consultation photo
- `before-after.jpg` — Transformation comparison image
- `dentist-01.jpg` through `dentist-06.jpg` — Doctor & team practitioner photos
- `gallery-01.jpg` & `gallery-02.jpg` — Smile gallery photos

To replace any image, copy your own high-resolution image into `src/assets/` and update the import statements at the top of `src/lib/clinic-data.ts`.

---

## 8. Pages Overview

- **Home (`src/routes/index.tsx`):** Introduces the clinic, displays key services, interactive before/after slider, doctor preview, transparent pricing table, and testimonials.
- **About (`src/routes/about.tsx`):** Shares the clinic's core philosophy, story, care values, and key practice metrics.
- **Services (`src/routes/services.tsx`):** Detailed breakdown of dental treatments and frequently asked questions.
- **Doctors (`src/routes/doctors.tsx`):** Full profiles of clinic dentists, specialties, clinical background, and care philosophy.
- **Contact (`src/routes/contact.tsx`):** Complete practice location info, contact methods, operating hours, emergency guidelines, and the appointment request form.

---

## 9. Appointment Form

The appointment form component (`src/components/appointment-form.tsx`) is a **frontend UI template** with client-side validation. It simulates a successful submission for demonstration purposes and **does not include a live backend booking system or database connection**.

### Connecting to a Live Backend:
Developers can easily connect the form to any backend API or form endpoint service (such as [Formspree](https://formspree.io/), [Web3Forms](https://web3forms.com/), [SendGrid](https://sendgrid.com/), or a custom REST API / serverless function):
1. Open `src/components/appointment-form.tsx`.
2. Locate the `submit` handler function.
3. Replace the `setSent(true)` state change with an `async fetch()` or `axios` call sending the form data to your endpoint.

---

## 10. Deployment

You can deploy the built template to any modern web hosting service.

### Option A: Vercel
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository in [Vercel](https://vercel.com/).
3. Vercel will automatically detect Vite. Click **Deploy**.

### Option B: Netlify
1. Connect your repository to [Netlify](https://netlify.com/).
2. Set Build Command to: `npm run build`
3. Set Publish Directory to: `.output/public`
4. Click **Deploy Site**.

### Option C: Cloudflare Pages / Static Hosting
1. Run `npm run build` locally or via CI/CD.
2. Upload the generated `.output/public` folder to your hosting provider.

---

## 11. Template Content Disclaimer

This template includes **sample placeholder content** (clinic names, generic practitioner profiles, illustrative statistics, pricing estimates, and placeholder patient reviews). 

Before launching a website for a real medical or dental practice:
- Replace all placeholder names with real, licensed practitioners.
- Replace sample testimonials with genuine, verified patient feedback compliant with local health advertising regulations.
- Verify that all pricing, operating hours, addresses, and medical notices accurately reflect the actual clinic.

---

## 12. Support & Customization Note

This template is designed to be developer-friendly and customizable using standard React and Tailwind CSS conventions. Further structural, visual, or functional modifications (such as custom backend integration, advanced booking calendars, or new page additions) require web development expertise.
