import Button from "../Button";

interface CTAProps {
  title?: string;
  description?: string;
  variant?: "primary" | "secondary";
}

export default function CTA({
  title = "Ready to Grow Your Business?",
  description = "Apply now and get the funding you need in as little as 24-48 hours. No obligations, no impact to your credit score.",
  variant = "primary",
}: CTAProps) {
  const bgClass = variant === "primary" 
    ? "bg-gradient-to-r from-secondary to-secondary-600" 
    : "bg-gradient-to-r from-primary to-primary-600";

  return (
    <section className={`${bgClass} text-white py-16 md:py-20`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/apply" variant="primary" size="lg">
            Apply Now - Free &amp; Fast
          </Button>
          <Button 
            href="/contact" 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-secondary"
          >
            Talk to a Specialist
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-6">
          ✓ 5-minute application &nbsp; ✓ No credit check to apply &nbsp; ✓ Funds in 24-48 hours
        </p>
      </div>
    </section>
  );
}
