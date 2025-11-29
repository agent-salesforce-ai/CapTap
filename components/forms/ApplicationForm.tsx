"use client";

import { useState } from "react";
import Button from "../Button";

interface FormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  monthlyRevenue: string;
  timeInBusiness: string;
  fundingAmount: string;
  industry: string;
}

const initialFormData: FormData = {
  businessName: "",
  ownerName: "",
  email: "",
  phone: "",
  monthlyRevenue: "",
  timeInBusiness: "",
  fundingAmount: "",
  industry: "",
};

const industries = [
  "Restaurant / Food Service",
  "Retail",
  "Healthcare / Medical",
  "Construction",
  "Transportation / Trucking",
  "Professional Services",
  "Manufacturing",
  "E-commerce",
  "Hospitality / Hotels",
  "Automotive",
  "Other",
];

const revenueRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
];

const fundingRanges = [
  "$5,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000+",
];

const timeInBusinessOptions = [
  "Less than 6 months",
  "6 months - 1 year",
  "1 - 2 years",
  "2 - 5 years",
  "5+ years",
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.monthlyRevenue) {
      newErrors.monthlyRevenue = "Please select your monthly revenue";
    }

    if (!formData.timeInBusiness) {
      newErrors.timeInBusiness = "Please select time in business";
    }

    if (!formData.fundingAmount) {
      newErrors.fundingAmount = "Please select funding amount needed";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select your industry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Application Received!
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for your application, {formData.ownerName}. A funding specialist 
          will contact you within the next few hours to discuss your options.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-primary mb-2">What happens next?</h3>
          <ol className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-secondary font-semibold mr-2">1.</span>
              We&apos;ll review your application (usually within 2 hours)
            </li>
            <li className="flex items-start">
              <span className="text-secondary font-semibold mr-2">2.</span>
              A specialist will call to discuss funding options
            </li>
            <li className="flex items-start">
              <span className="text-secondary font-semibold mr-2">3.</span>
              If approved, receive funds in 24-48 hours
            </li>
          </ol>
        </div>
        <p className="text-sm text-gray-500">
          Questions? Call us at{" "}
          <a href="tel:8885552274" className="text-secondary font-semibold">
            (888) 555-CASH
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Get Your Free Quote
        </h2>
        <p className="text-gray-600">
          Complete the form below and we&apos;ll get back to you within hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
            Business Name *
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.businessName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Business Name"
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
          )}
        </div>

        {/* Owner Name */}
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">
            Owner Name *
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.ownerName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Full Name"
          />
          {errors.ownerName && (
            <p className="mt-1 text-sm text-red-500">{errors.ownerName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@business.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Monthly Revenue */}
        <div>
          <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Revenue *
          </label>
          <select
            id="monthlyRevenue"
            name="monthlyRevenue"
            value={formData.monthlyRevenue}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.monthlyRevenue ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select monthly revenue</option>
            {revenueRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.monthlyRevenue && (
            <p className="mt-1 text-sm text-red-500">{errors.monthlyRevenue}</p>
          )}
        </div>

        {/* Time in Business */}
        <div>
          <label htmlFor="timeInBusiness" className="block text-sm font-medium text-gray-700 mb-1">
            Time in Business *
          </label>
          <select
            id="timeInBusiness"
            name="timeInBusiness"
            value={formData.timeInBusiness}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.timeInBusiness ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select time in business</option>
            {timeInBusinessOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeInBusiness && (
            <p className="mt-1 text-sm text-red-500">{errors.timeInBusiness}</p>
          )}
        </div>

        {/* Funding Amount */}
        <div>
          <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-1">
            Funding Amount Needed *
          </label>
          <select
            id="fundingAmount"
            name="fundingAmount"
            value={formData.fundingAmount}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.fundingAmount ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select amount needed</option>
            {fundingRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.fundingAmount && (
            <p className="mt-1 text-sm text-red-500">{errors.fundingAmount}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            Industry *
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors ${
              errors.industry ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select your industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Get My Free Quote"
          )}
        </Button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 text-center mt-6">
        By submitting this form, you agree to be contacted by a funding specialist. 
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}
