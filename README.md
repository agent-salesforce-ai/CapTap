# CapTap - Version B (A/B Testing Variant)

A modern website for CapTap, a Merchant Cash Advance (MCA) lender. This is **Version B** for A/B testing purposes.

## Version B Design Characteristics

This version features a premium, bold aesthetic with the following distinctive elements:

### Brand Colors
- **Primary**: Deep Purple (#5B21B6) - premium and unique
- **Secondary**: Emerald Green (#059669) - growth and prosperity  
- **Accent**: Gold/Amber (#D97706) - premium feel, used for CTAs

### Design Features
- Gradient backgrounds (purple to indigo)
- Glass-morphism card effects with shadows
- Centered hero layout
- Timeline-style "How It Works" section
- Multi-step application wizard form
- Rich animations and transitions
- Bold typography with Inter font

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero with animated stats, timeline, features, testimonials |
| How It Works | `/how-it-works` | Timeline design, comparison table, document checklist |
| Apply | `/apply` | Multi-step wizard form with progress indicator |
| About | `/about` | Company mission, values, milestones, team |
| Contact | `/contact` | Split layout form with contact cards |
| FAQ | `/faq` | Searchable accordion with categories |

## Components

### Layout Components
- `Header` - Transparent-to-solid scroll effect
- `Footer` - Gradient accent with legal disclaimers

### UI Components
- `Button` - Multiple variants (primary, secondary, outline, ghost)
- `GradientButton` - Shimmer effect, multiple color variants
- `Card` - Glass-morphism and elevated variants
- `ProgressIndicator` - Multi-step form progress

### Section Components
- `Hero` - Gradient background, animated stats
- `Stats` - Animated counters
- `Timeline` - Alternating vertical timeline
- `Features` - Hover-lift cards
- `Testimonials` - Carousel with ratings
- `CTA` - Call-to-action sections

### Form Components
- `MultiStepForm` - Wizard form with validation
- `FormStep` - Individual form step wrapper
- Input, Select, and Checkbox field components

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## A/B Testing Notes

This is **Version B** of the CapTap website. Key differences from Version A:

1. **Color Scheme**: Purple/Emerald/Gold vs Version A's colors
2. **Hero Layout**: Centered text vs left-aligned in Version A
3. **How It Works**: Timeline style vs card grid in Version A
4. **Application Form**: Multi-step wizard vs single form in Version A
5. **Visual Style**: More gradients, animations, and premium feel

## Legal Disclaimer

This website includes proper MCA legal disclaimers in the footer noting that merchant cash advances are not loans and are purchases of future receivables at a discount.

## License

All rights reserved.
