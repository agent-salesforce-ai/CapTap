'use client';

import { useState, ReactNode, createContext, useContext } from 'react';
import ProgressIndicator from '../ProgressIndicator';
import GradientButton from '../GradientButton';

// Form Data Interface
export interface FormData {
  // Step 1: Business Information
  businessName: string;
  businessType: string;
  yearsInBusiness: string;
  industry: string;
  employeeCount: string;
  businessAddress: string;
  city: string;
  state: string;
  zipCode: string;

  // Step 2: Owner Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ownership: string;
  dateOfBirth: string;
  ssn: string;
  homeAddress: string;

  // Step 3: Financial Details
  monthlyRevenue: string;
  fundingAmount: string;
  fundingPurpose: string;
  currentLoans: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;

  // Step 4: Consent
  agreeTerms: boolean;
  agreeCredit: boolean;
}

export const initialFormData: FormData = {
  businessName: '',
  businessType: '',
  yearsInBusiness: '',
  industry: '',
  employeeCount: '',
  businessAddress: '',
  city: '',
  state: '',
  zipCode: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ownership: '',
  dateOfBirth: '',
  ssn: '',
  homeAddress: '',
  monthlyRevenue: '',
  fundingAmount: '',
  fundingPurpose: '',
  currentLoans: '',
  bankName: '',
  accountNumber: '',
  routingNumber: '',
  agreeTerms: false,
  agreeCredit: false,
};

// Form Context for sharing state between form steps
interface FormContextType {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string | boolean) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

export const FormContext = createContext<FormContextType | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

// Component interfaces
interface Step {
  number: number;
  title: string;
  component: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: FormData) => void | Promise<void>;
}

export default function MultiStepForm({ steps, onSubmit }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const progressSteps = steps.map((step) => ({
    number: step.number,
    title: step.title,
  }));

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    switch (step) {
      case 1:
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.businessType) newErrors.businessType = 'Business type is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        break;
      case 2:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        break;
      case 3:
        if (!formData.monthlyRevenue) newErrors.monthlyRevenue = 'Monthly revenue is required';
        if (!formData.fundingAmount) newErrors.fundingAmount = 'Funding amount is required';
        break;
      case 4:
        if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
        if (!formData.agreeCredit) newErrors.agreeCredit = 'You must agree to the credit check';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <ProgressIndicator steps={progressSteps} currentStep={currentStep} />

      {/* Form Content */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-8">
        <FormContext.Provider value={{ formData, updateFormData, errors }}>
          {steps[currentStep - 1].component}
        </FormContext.Provider>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-8 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        )}
        <div className="flex-1" />
        {currentStep < steps.length ? (
          <GradientButton onClick={handleNext} size="lg">
            Continue
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </GradientButton>
        ) : (
          <GradientButton 
            onClick={handleSubmit} 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </GradientButton>
        )}
      </div>
    </div>
  );
}
