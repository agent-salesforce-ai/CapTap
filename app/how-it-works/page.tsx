import { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "How It Works | CapTap - Fast Business Funding",
  description: "Learn how CapTap's merchant cash advance process works. Simple application, fast approval, and funding in 24-48 hours.",
};

const steps = [
  {
    number: "1",
    title: "Complete Your Application",
    description:
      "Fill out our simple online application in just 5 minutes. We'll ask for basic information about your business including revenue, time in business, and funding needs.",
    details: [
      "No impact to your credit score",
      "Takes only 5 minutes to complete",
      "Secure and encrypted data",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Quick Review Process",
    description:
      "Our team reviews your application within hours, not days. We look at your business performance, not just your credit score.",
    details: [
      "Decision within hours",
      "Focus on business revenue",
      "All credit types considered",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Receive Your Offer",
    description:
      "If approved, you'll receive a clear, transparent offer with all terms explained. Our team walks you through every detail.",
    details: [
      "No hidden fees",
      "Clear repayment terms",
      "Dedicated funding specialist",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Get Funded",
    description:
      "Accept your offer and receive funds directly in your business bank account. Most clients receive funding within 24-48 hours.",
    details: [
      "Direct deposit to your account",
      "Funds available in 24-48 hours",
      "Use for any business purpose",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const documents = [
  {
    title: "3 Months Business Bank Statements",
    description: "Recent statements showing your business revenue and cash flow",
  },
  {
    title: "Driver's License",
    description: "Valid government-issued photo ID of the business owner",
  },
  {
    title: "Voided Check",
    description: "For direct deposit of your funding",
  },
  {
    title: "Simple Application",
    description: "Basic business and owner information",
  },
];

const comparison = [
  { feature: "Application Time", mca: "5 minutes", bank: "2-3 weeks" },
  { feature: "Approval Time", mca: "Same day", bank: "2-4 weeks" },
  { feature: "Funding Time", mca: "24-48 hours", bank: "1-2 months" },
  { feature: "Credit Requirements", mca: "All types welcome", bank: "Excellent credit required" },
  { feature: "Collateral Required", mca: "No", bank: "Usually yes" },
  { feature: "Paperwork", mca: "Minimal", bank: "Extensive" },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Getting the funding your business needs is simple. Our streamlined 
            process gets you from application to funding in as little as 24-48 hours.
          </p>
          <Button href="/apply" variant="primary" size="lg">
            Start Your Application
          </Button>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      {step.number}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-secondary mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-gray-50 rounded-2xl p-8 flex items-center justify-center ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <div className="w-32 h-32 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What You&apos;ll Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our application requires minimal documentation. Here&apos;s what to have ready:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-bold text-primary mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600">{doc.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              CapTap vs. Traditional Bank Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our merchant cash advance compares to traditional lending options.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-50 font-semibold text-gray-600">
                    Feature
                  </th>
                  <th className="text-center p-4 bg-secondary text-white font-semibold">
                    CapTap MCA
                  </th>
                  <th className="text-center p-4 bg-gray-200 text-gray-600 font-semibold">
                    Bank Loan
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium text-primary">{row.feature}</td>
                    <td className="p-4 text-center text-secondary font-semibold">
                      {row.mca}
                    </td>
                    <td className="p-4 text-center text-gray-500">{row.bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="Apply now and see how much funding you can qualify for. It only takes 5 minutes."
        variant="secondary"
      />
    </>
  );
}
