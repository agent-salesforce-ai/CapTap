import { Metadata } from "next";
import Card, { CardTitle, CardDescription } from "@/components/Card";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us - CapTap | Your Trusted Funding Partner",
  description: "Learn about CapTap's mission to empower small businesses with fast, flexible funding solutions. Discover our values and team.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed",
    description: "We understand that time is money. That's why we've built a process that gets you funded in hours, not weeks.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    description: "No hidden fees, no fine print. We believe in clear, honest terms that you can understand and trust.",
  },
  {
    icon: "💪",
    title: "Empowerment",
    description: "We exist to help small businesses grow. Your success is our success, and we're here to support you every step of the way.",
  },
  {
    icon: "🎯",
    title: "Accessibility",
    description: "We look beyond credit scores. If your business is thriving, you deserve access to the capital you need.",
  },
];

const milestones = [
  { year: "2015", title: "Founded", description: "CapTap was founded with a mission to make business funding accessible to all." },
  { year: "2017", title: "$50M Funded", description: "Reached our first major milestone, helping hundreds of businesses grow." },
  { year: "2019", title: "5,000+ Clients", description: "Expanded our reach to serve thousands of businesses across the country." },
  { year: "2021", title: "$250M Funded", description: "Continued growth and expansion of our funding capabilities." },
  { year: "2023", title: "10,000+ Clients", description: "Proud to have helped over 10,000 businesses achieve their goals." },
  { year: "2024", title: "$500M+ Funded", description: "Continuing to grow and serve more businesses than ever before." },
];

const team = [
  { name: "Sarah Mitchell", role: "CEO & Founder", initial: "SM" },
  { name: "David Chen", role: "Chief Operations Officer", initial: "DC" },
  { name: "Marcus Johnson", role: "Chief Financial Officer", initial: "MJ" },
  { name: "Emily Rodriguez", role: "VP of Sales", initial: "ER" },
  { name: "James Wilson", role: "VP of Technology", initial: "JW" },
  { name: "Lisa Park", role: "VP of Customer Success", initial: "LP" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Businesses to <span className="text-accent-400">Thrive</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              We started CapTap with a simple belief: every business deserves access to the 
              capital it needs to grow, regardless of credit history or traditional banking 
              relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Making Business Funding <span className="gradient-text">Accessible</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Traditional banks often overlook small businesses, focusing on credit scores 
                  rather than potential. We take a different approach. We look at your business&apos;s 
                  actual performance - your sales, your growth, your potential.
                </p>
                <p className="text-gray-600 text-lg">
                  Our mission is to provide fast, fair, and flexible funding to help businesses 
                  seize opportunities, overcome challenges, and achieve their goals.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-4xl font-bold gradient-text">$500M+</div>
                    <div className="text-gray-600">Funded to Date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from how we treat our clients to how we build our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} variant="elevated" className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-4xl mb-4">
                  {value.icon}
                </div>
                <CardTitle className="text-center">{value.title}</CardTitle>
                <CardDescription className="text-center">{value.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-500 to-accent-500 md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="text-sm font-semibold text-primary-600">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-white shadow" />

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team is dedicated to helping your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {member.initial}
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Work Together?"
        subtitle="Join thousands of businesses that trust CapTap for their funding needs."
        buttonText="Get Started Today"
      />
    </>
  );
}
