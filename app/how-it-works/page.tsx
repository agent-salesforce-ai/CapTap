import { Metadata } from "next";
import Timeline from "@/components/sections/Timeline";
import GradientButton from "@/components/GradientButton";
import Card, { CardIcon, CardTitle, CardDescription } from "@/components/Card";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "How It Works - CapTap | Simple Business Funding Process",
  description: "Learn how easy it is to get business funding with CapTap. Quick application, fast approval, and funds in your account within 24 hours.",
};

const documents = [
  { icon: "📄", title: "Business Bank Statements", description: "Last 4 months of statements" },
  { icon: "🪪", title: "Valid ID", description: "Driver's license or passport" },
  { icon: "📋", title: "Business License", description: "Proof of business ownership" },
  { icon: "💳", title: "Processing Statements", description: "If you accept card payments" },
];

const comparison = [
  { feature: "Time to Apply", mca: "5 minutes", bank: "Hours to days" },
  { feature: "Decision Time", mca: "Same day", bank: "2-8 weeks" },
  { feature: "Funding Speed", mca: "24 hours", bank: "1-3 months" },
  { feature: "Credit Requirements", mca: "Flexible", bank: "Excellent credit" },
  { feature: "Collateral", mca: "Not required", bank: "Often required" },
  { feature: "Paperwork", mca: "Minimal", bank: "Extensive" },
  { feature: "Approval Rate", mca: "High (up to 90%+)", bank: "Low (20-30%)" },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="text-accent-400">Works</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Getting the funding your business needs shouldn&apos;t be complicated. 
            Our streamlined process gets you from application to funding in as little as 24 hours.
          </p>
          <GradientButton href="/apply" size="lg">
            Start Your Application
          </GradientButton>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline 
        title="Four Simple Steps"
        subtitle="We've removed the complexity from business funding. Here's how it works."
      />

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              What You Need
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We keep paperwork to a minimum. Here&apos;s all you need to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <Card key={index} variant="elevated">
                <CardIcon>
                  <span className="text-2xl">{doc.icon}</span>
                </CardIcon>
                <CardTitle>{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              Compare
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MCA vs. Traditional Bank Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why thousands of businesses choose merchant cash advances over traditional bank loans.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary-800 to-primary-700">
                  <th className="py-4 px-6 text-left text-white font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-white font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center">C</span>
                      CapTap MCA
                    </span>
                  </th>
                  <th className="py-4 px-6 text-center text-white font-semibold">Bank Loan</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-2 text-secondary-600 font-medium">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {row.mca}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">{row.bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Get Started?"
        subtitle="Join thousands of businesses that have grown with CapTap funding."
        buttonText="Apply Now"
      />
    </>
  );
}
