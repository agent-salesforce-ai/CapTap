import { Metadata } from "next";
import Card from "@/components/Card";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us | CapTap - Fast Business Funding",
  description: "Learn about CapTap's mission to help small businesses grow with fast, flexible funding solutions. Discover our story and values.",
};

const values = [
  {
    title: "Speed",
    description:
      "We understand that when you need funding, you need it now. That's why we've streamlined our process to get you funded in 24-48 hours, not weeks or months.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We believe in clear, upfront communication about all terms and costs so you can make informed decisions for your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "Your success is our success. We're not just a funding source – we're a partner invested in helping your business grow and thrive.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const whyChoose = [
  {
    title: "Industry Expertise",
    description: "Years of experience in small business funding means we understand your unique challenges and needs.",
  },
  {
    title: "Flexible Solutions",
    description: "Every business is different. We offer customized funding solutions tailored to your specific situation.",
  },
  {
    title: "Dedicated Support",
    description: "Your personal funding specialist guides you through every step of the process.",
  },
  {
    title: "Fast Decisions",
    description: "Our streamlined process means you get answers quickly, not weeks of waiting.",
  },
];

const team = [
  { name: "John Mitchell", role: "CEO & Founder", initials: "JM" },
  { name: "Sarah Chen", role: "Chief Operating Officer", initials: "SC" },
  { name: "Michael Rodriguez", role: "Head of Underwriting", initials: "MR" },
  { name: "Emily Thompson", role: "Director of Client Success", initials: "ET" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CapTap
            </h1>
            <p className="text-xl text-primary-100">
              We&apos;re on a mission to make business funding accessible, fast, and transparent 
              for small businesses across America.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  CapTap was founded with a simple belief: small businesses are the backbone 
                  of the American economy, and they deserve access to capital that doesn&apos;t 
                  come with months of paperwork and endless hoops to jump through.
                </p>
                <p>
                  Our founders experienced firsthand the frustration of traditional bank lending. 
                  The lengthy applications, the weeks of waiting, the rejection letters that 
                  offered no explanation. They knew there had to be a better way.
                </p>
                <p>
                  Today, CapTap has helped over 10,000 businesses access more than $500 million 
                  in funding. We&apos;ve streamlined the process to get business owners the capital 
                  they need in as little as 24-48 hours – so they can focus on what matters 
                  most: running and growing their business.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">$500M+</div>
                  <div className="text-gray-600">Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">10,000+</div>
                  <div className="text-gray-600">Businesses Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <div className="text-gray-600">Approval Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">24-48 hrs</div>
                  <div className="text-gray-600">Avg. Funding Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose CapTap?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the team dedicated to helping your business succeed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Partner with CapTap?"
        description="Let us help you get the funding your business needs to grow."
      />
    </>
  );
}
