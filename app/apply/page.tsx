'use client';

import { useState } from 'react';
import MultiStepForm, { FormData } from "@/components/forms/MultiStepForm";
import FormStep, { InputField, SelectField, CheckboxField } from "@/components/forms/FormStep";

const businessTypes = [
  { value: 'sole_proprietor', label: 'Sole Proprietor' },
  { value: 'llc', label: 'LLC' },
  { value: 'corporation', label: 'Corporation' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'nonprofit', label: 'Non-Profit' },
];

const industries = [
  { value: 'retail', label: 'Retail' },
  { value: 'restaurant', label: 'Restaurant / Food Service' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'construction', label: 'Construction' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'professional_services', label: 'Professional Services' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'wholesale', label: 'Wholesale' },
  { value: 'other', label: 'Other' },
];

const revenueRanges = [
  { value: '10000-25000', label: '$10,000 - $25,000' },
  { value: '25000-50000', label: '$25,000 - $50,000' },
  { value: '50000-100000', label: '$50,000 - $100,000' },
  { value: '100000-250000', label: '$100,000 - $250,000' },
  { value: '250000+', label: '$250,000+' },
];

const fundingAmounts = [
  { value: '5000-25000', label: '$5,000 - $25,000' },
  { value: '25000-50000', label: '$25,000 - $50,000' },
  { value: '50000-100000', label: '$50,000 - $100,000' },
  { value: '100000-250000', label: '$100,000 - $250,000' },
  { value: '250000-500000', label: '$250,000 - $500,000' },
];

const fundingPurposes = [
  { value: 'inventory', label: 'Inventory Purchase' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'expansion', label: 'Business Expansion' },
  { value: 'payroll', label: 'Payroll' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'working_capital', label: 'Working Capital' },
  { value: 'other', label: 'Other' },
];

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (data: FormData) => {
    // In a real application, you would send this data to your API
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
  };

  const steps = [
    {
      number: 1,
      title: 'Business',
      component: (
        <FormStep
          title="Business Information"
          description="Tell us about your business."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <InputField
              name="businessName"
              label="Business Legal Name"
              placeholder="Your Business LLC"
              required
            />
            <SelectField
              name="businessType"
              label="Business Type"
              options={businessTypes}
              required
            />
            <SelectField
              name="industry"
              label="Industry"
              options={industries}
              required
            />
            <InputField
              name="yearsInBusiness"
              label="Years in Business"
              type="number"
              placeholder="5"
            />
            <InputField
              name="businessAddress"
              label="Business Address"
              placeholder="123 Main St"
            />
            <InputField
              name="city"
              label="City"
              placeholder="New York"
            />
            <InputField
              name="state"
              label="State"
              placeholder="NY"
            />
            <InputField
              name="zipCode"
              label="ZIP Code"
              placeholder="10001"
            />
          </div>
        </FormStep>
      ),
    },
    {
      number: 2,
      title: 'Owner',
      component: (
        <FormStep
          title="Owner Information"
          description="Tell us about yourself."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <InputField
              name="firstName"
              label="First Name"
              placeholder="John"
              required
            />
            <InputField
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              required
            />
            <InputField
              name="email"
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              required
            />
            <InputField
              name="phone"
              label="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              required
            />
            <InputField
              name="ownership"
              label="Ownership Percentage"
              type="number"
              placeholder="100"
            />
            <InputField
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
            />
            <div className="md:col-span-2">
              <InputField
                name="homeAddress"
                label="Home Address"
                placeholder="456 Oak Ave, City, State ZIP"
              />
            </div>
          </div>
        </FormStep>
      ),
    },
    {
      number: 3,
      title: 'Financials',
      component: (
        <FormStep
          title="Financial Details"
          description="Help us understand your funding needs."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <SelectField
              name="monthlyRevenue"
              label="Average Monthly Revenue"
              options={revenueRanges}
              required
            />
            <SelectField
              name="fundingAmount"
              label="Desired Funding Amount"
              options={fundingAmounts}
              required
            />
            <SelectField
              name="fundingPurpose"
              label="Funding Purpose"
              options={fundingPurposes}
            />
            <InputField
              name="currentLoans"
              label="Current Business Loans/MCAs"
              placeholder="0"
            />
            <InputField
              name="bankName"
              label="Business Bank Name"
              placeholder="Bank of America"
            />
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500 mt-4">
                Note: Additional documentation such as bank statements will be requested after initial approval.
              </p>
            </div>
          </div>
        </FormStep>
      ),
    },
    {
      number: 4,
      title: 'Review',
      component: (
        <FormStep
          title="Review & Submit"
          description="Please review and confirm the following."
        >
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Before You Submit</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                You&apos;ll receive a decision within hours of submitting your application
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                If approved, funds can be in your account within 24 hours
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                A team member may contact you to verify information
              </li>
            </ul>
          </div>

          <CheckboxField
            name="agreeTerms"
            label={
              <>
                I agree to the{' '}
                <a href="#" className="text-primary-600 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>
              </>
            }
            required
          />
          <CheckboxField
            name="agreeCredit"
            label="I authorize CapTap to obtain my credit report and business information for the purpose of evaluating this application"
            required
          />

          <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
            <p className="text-sm text-primary-800">
              <strong>Disclaimer:</strong> This application does not guarantee approval. 
              All applications are subject to underwriting review. A merchant cash advance is not a loan; 
              it is a purchase of future receivables at a discount.
            </p>
          </div>
        </FormStep>
      ),
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Application Submitted!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for applying with CapTap. Our team will review your application 
              and get back to you within a few hours.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h2>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 font-semibold">1</span>
                  <div>
                    <p className="font-medium text-gray-900">Application Review</p>
                    <p className="text-gray-600 text-sm">Our team reviews your information within hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 font-semibold">2</span>
                  <div>
                    <p className="font-medium text-gray-900">Document Request</p>
                    <p className="text-gray-600 text-sm">We may request additional documents via email</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 font-semibold">3</span>
                  <div>
                    <p className="font-medium text-gray-900">Receive Your Offer</p>
                    <p className="text-gray-600 text-sm">Get a personalized funding offer with clear terms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0 font-semibold">4</span>
                  <div>
                    <p className="font-medium text-gray-900">Get Funded</p>
                    <p className="text-gray-600 text-sm">Accept your offer and receive funds within 24 hours</p>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-gray-500">
              Questions? Contact us at{' '}
              <a href="tel:1-800-555-1234" className="text-primary-600 hover:underline">1-800-555-1234</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Get Started
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apply for <span className="gradient-text">Funding</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the application below to get started. It only takes about 5 minutes, 
            and you could have funds in your account within 24 hours.
          </p>
        </div>

        {/* Form */}
        <MultiStepForm steps={steps} onSubmit={handleSubmit} />

        {/* Security Notice */}
        <div className="max-w-3xl mx-auto mt-8 flex items-center justify-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            256-bit SSL Encrypted
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Your data is secure
          </div>
        </div>
      </div>
    </div>
  );
}
