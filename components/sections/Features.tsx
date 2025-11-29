import Card, { CardIcon, CardTitle, CardDescription } from '../Card';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast Funding',
    description: 'Get funds deposited into your account within 24 hours of approval. No waiting, no delays.',
  },
  {
    icon: '📊',
    title: 'Flexible Repayment',
    description: 'Payments that flex with your sales. When business is slow, payments adjust automatically.',
  },
  {
    icon: '🔓',
    title: 'No Collateral Required',
    description: 'Unlike traditional loans, we don\'t require collateral. Your future sales are enough.',
  },
  {
    icon: '📝',
    title: 'Simple Application',
    description: 'Apply in minutes with our streamlined online form. No mountains of paperwork.',
  },
  {
    icon: '🎯',
    title: 'High Approval Rate',
    description: 'We look beyond just credit scores. If your business has strong sales, you\'re likely to qualify.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: 'Get a personal funding advisor who understands your business and is there when you need help.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for <span className="gradient-text">Business Owners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand what small businesses need. That&apos;s why we&apos;ve built a funding solution that works the way you do.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="gradient" className="group">
              <CardIcon className="group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </CardIcon>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
