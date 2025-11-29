import { Metadata } from "next";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for Business Funding | CapTap",
  description: "Apply for up to $500,000 in business funding. Simple 5-minute application with no impact to your credit score. Get funded in 24-48 hours.",
};

const benefits = [
  "No impact to credit score to apply",
  "Get approved in as little as 24 hours",
  "Funding in 24-48 hours",
  "All credit types welcome",
  "No collateral required",
  "Use funds for any business purpose",
];

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Apply for Business Funding
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Complete the form below to see how much funding your business qualifies for. 
            It only takes 5 minutes.
          </p>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ApplicationForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Why Apply with CapTap?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-semibold text-primary mb-3">
                    Need Help?
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our funding specialists are available to answer your questions.
                  </p>
                  <a
                    href="tel:8885552274"
                    className="flex items-center text-secondary font-semibold hover:text-secondary-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (888) 555-CASH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
