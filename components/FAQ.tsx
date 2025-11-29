'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQProps {
  items?: FAQItem[];
  showSearch?: boolean;
  showCategories?: boolean;
}

const defaultFAQs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is a Merchant Cash Advance?',
    answer: 'A Merchant Cash Advance (MCA) is not a loan. It\'s a purchase of a portion of your future credit card or debit card sales at a discount. You receive a lump sum of capital upfront and repay it through a percentage of your daily sales.',
  },
  {
    category: 'General',
    question: 'How is an MCA different from a traditional business loan?',
    answer: 'Unlike traditional loans, MCAs don\'t have fixed monthly payments. Instead, repayment is tied to your sales - when business is slow, you pay less. MCAs also don\'t typically require collateral and have faster approval processes.',
  },
  {
    category: 'Eligibility',
    question: 'What are the requirements to qualify?',
    answer: 'Generally, you need to have been in business for at least 4 months, have a minimum of $10,000 in monthly revenue, and accept credit/debit card payments. Unlike banks, we look at your business performance, not just credit scores.',
  },
  {
    category: 'Eligibility',
    question: 'Can I qualify with bad credit?',
    answer: 'Yes! We understand that credit scores don\'t tell the whole story. We focus primarily on your business\'s revenue and performance. Many of our clients have less-than-perfect credit but thriving businesses.',
  },
  {
    category: 'Process',
    question: 'How long does the application take?',
    answer: 'Our online application takes about 5 minutes to complete. Once submitted, you\'ll typically receive a decision within a few hours. If approved, funds can be in your account within 24 hours.',
  },
  {
    category: 'Process',
    question: 'What documents do I need?',
    answer: 'You\'ll need to provide: 4 months of business bank statements, a valid ID, proof of business ownership, and basic business information. That\'s it - no tax returns or lengthy financial documents required.',
  },
  {
    category: 'Terms',
    question: 'How much can I get funded?',
    answer: 'Funding amounts range from $5,000 to $500,000, depending on your business\'s monthly revenue and overall performance. Most businesses qualify for an amount equal to their monthly revenue.',
  },
  {
    category: 'Terms',
    question: 'What is the factor rate?',
    answer: 'Factor rates typically range from 1.1 to 1.5, depending on risk assessment. For example, if you receive $10,000 at a 1.2 factor rate, you\'ll repay $12,000. This is clearly disclosed before you accept any offer.',
  },
  {
    category: 'Repayment',
    question: 'How do I repay the advance?',
    answer: 'Repayment is automatic through a small percentage of your daily card sales or via daily/weekly ACH withdrawals. The percentage is determined upfront and stays consistent throughout the term.',
  },
  {
    category: 'Repayment',
    question: 'Are there any prepayment penalties?',
    answer: 'No! You can pay off your advance early without any penalties. In fact, many of our clients do this to save on the total cost and become eligible for renewal funding sooner.',
  },
];

export default function FAQ({ items = defaultFAQs, showSearch = true, showCategories = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(items.map((item) => item.category)))];

  const filteredItems = items.filter((item) => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search Bar */}
      {showSearch && (
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}

      {/* Category Filter */}
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No questions found matching your search.</p>
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
