import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | CapTap",
  description: "Find answers to common questions about merchant cash advances, our application process, funding requirements, and more.",
};

const faqItems = [
  {
    question: "What is a merchant cash advance (MCA)?",
    answer:
      "A merchant cash advance is not a loan – it's an advance on your future sales. You receive a lump sum of capital upfront, and in exchange, you agree to repay a percentage of your daily or weekly sales until the advance is fully paid back. This makes it different from a traditional loan because there's no fixed monthly payment – your payments flex with your business revenue.",
  },
  {
    question: "How do I qualify for funding?",
    answer:
      "Our basic requirements are simple: you need to have been in business for at least 4 months, have a minimum of $10,000 in monthly revenue, and have an active business bank account. We consider all credit types, so even if you've been turned down by banks, you may still qualify with CapTap.",
  },
  {
    question: "How much funding can I get?",
    answer:
      "Funding amounts typically range from $5,000 to $500,000, depending on your business's monthly revenue and overall financial health. Most businesses qualify for 1-1.5 times their monthly revenue. Our funding specialists will work with you to determine the best amount for your needs.",
  },
  {
    question: "What are the terms and costs?",
    answer:
      "Instead of interest rates, merchant cash advances use a factor rate, typically ranging from 1.1 to 1.5. This means if you receive $100,000 with a factor rate of 1.3, you'll repay $130,000. Repayment terms usually range from 4 to 18 months, depending on your business and funding amount. Your funding specialist will explain all costs clearly before you accept any offer.",
  },
  {
    question: "How fast can I get funded?",
    answer:
      "Most of our clients receive funding within 24-48 hours of approval. Once you complete your application and provide the required documents (bank statements, ID, and voided check), our team works quickly to review your file. Many applications are approved the same day.",
  },
  {
    question: "How are repayments made?",
    answer:
      "Repayments are typically made automatically through one of two methods: (1) A fixed percentage of your daily credit card sales is automatically deducted, or (2) A fixed daily or weekly amount is debited from your business bank account. The method depends on your business type and preferences.",
  },
  {
    question: "Will applying affect my credit score?",
    answer:
      "No. We perform a soft credit pull during the application process, which does not impact your credit score. We focus primarily on your business's revenue and performance rather than personal credit.",
  },
  {
    question: "What can I use the funds for?",
    answer:
      "You can use your funding for virtually any business purpose: purchasing inventory, hiring staff, buying equipment, marketing campaigns, covering payroll, renovating your location, or managing cash flow during slow seasons. There are no restrictions on how you use your capital.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "The application process is simple. You'll need: 3 months of recent business bank statements, a valid government-issued photo ID, a voided business check for direct deposit, and basic information about your business. That's it – no tax returns, no business plans, no lengthy paperwork.",
  },
  {
    question: "Can I get additional funding later?",
    answer:
      "Yes! Many of our clients return for additional funding as their businesses grow. Once you've successfully completed a portion of your current advance, you may qualify for additional capital. Our team proactively reaches out to discuss renewal options.",
  },
  {
    question: "Is there a prepayment penalty?",
    answer:
      "This depends on the specific terms of your agreement. Some funding options offer discounts for early repayment, while others have fixed terms. Your funding specialist will explain all terms, including any prepayment considerations, before you accept an offer.",
  },
  {
    question: "What if my business has bad credit?",
    answer:
      "We welcome businesses with all types of credit. Unlike banks that focus heavily on credit scores, we primarily evaluate your business's revenue and cash flow. Many of our clients have been turned down by traditional lenders but found success with CapTap.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Find answers to common questions about merchant cash advances 
            and our funding process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our funding specialists are here to help. Contact us and we&apos;ll 
              answer any questions you have about our merchant cash advance products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8885552274"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (888) 555-CASH
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="Apply now and see how much funding your business qualifies for."
      />
    </>
  );
}
