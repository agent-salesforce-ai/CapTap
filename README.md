# CapTap

A modern website for CapTap, a Merchant Cash Advance (MCA) lender.

## About

CapTap provides fast, flexible business funding solutions for small and medium-sized businesses. This website showcases the company's services, application process, and provides an easy way for businesses to apply for funding.

## Tech Stack

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Features

- Fully responsive design (mobile-first)
- SEO-optimized with proper meta tags
- Accessible (ARIA labels, semantic HTML)
- Professional fintech styling
- Multi-page application form with validation
- FAQ accordion component
- Interactive contact form

## Pages

- **Home** (`/`) - Hero section, stats, how it works, benefits, testimonials
- **How It Works** (`/how-it-works`) - Detailed process explanation
- **Apply** (`/apply`) - Multi-field application form
- **About** (`/about`) - Company story, values, and team
- **Contact** (`/contact`) - Contact form and information
- **FAQ** (`/faq`) - Accordion-style frequently asked questions

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/captap.git
   cd captap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
/app
  /layout.tsx          # Root layout with Header/Footer
  /page.tsx            # Homepage
  /how-it-works/       # How It Works page
  /apply/              # Application page
  /about/              # About page
  /contact/            # Contact page
  /faq/                # FAQ page
/components
  /Header.tsx          # Navigation header
  /Footer.tsx          # Site footer
  /Button.tsx          # Reusable button component
  /Card.tsx            # Card component
  /FAQ.tsx             # Accordion FAQ component
  /forms/
    /ApplicationForm.tsx  # Application form
  /sections/
    /Hero.tsx          # Hero section
    /Stats.tsx         # Stats bar
    /HowItWorks.tsx    # How it works section
    /Benefits.tsx      # Benefits section
    /Testimonials.tsx  # Testimonials section
    /CTA.tsx           # Call-to-action section
```

## Brand Guidelines

- **Primary Color**: Deep blue (#1E3A5F) - trust and professionalism
- **Secondary/Accent Color**: Teal (#0D9488) - growth and money, used for CTAs
- **Typography**: Inter font family

## License

All rights reserved.
