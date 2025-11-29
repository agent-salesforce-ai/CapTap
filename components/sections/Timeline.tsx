'use client';

interface TimelineItem {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  items?: TimelineItem[];
  title?: string;
  subtitle?: string;
}

const defaultItems: TimelineItem[] = [
  {
    step: 1,
    title: 'Quick Application',
    description: 'Fill out our simple online form in just 5 minutes. No paperwork headaches or complicated requirements.',
    icon: '📝',
  },
  {
    step: 2,
    title: 'Fast Review',
    description: 'Our team reviews your application within hours, not days. Get a decision quickly so you can plan ahead.',
    icon: '⚡',
  },
  {
    step: 3,
    title: 'Get Approved',
    description: 'Receive your personalized funding offer with transparent terms. No hidden fees or surprises.',
    icon: '✅',
  },
  {
    step: 4,
    title: 'Receive Funds',
    description: 'Once approved, funds are deposited directly into your account within 24 hours. Start growing immediately.',
    icon: '💰',
  },
];

export default function Timeline({ 
  items = defaultItems, 
  title = 'How It Works',
  subtitle = 'Getting funded has never been easier. Our streamlined process gets you capital fast.'
}: TimelineProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary-600 via-secondary-500 to-accent-500 rounded-full" />

          {items.map((item, index) => (
            <div
              key={item.step}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                }`}
              >
                <div className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                } max-w-md`}>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Step Circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                {item.step}
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
