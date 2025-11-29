'use client';

import { ReactNode } from 'react';
import { useFormContext } from './MultiStepForm';

// Input field component
interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function InputField({ name, label, type = 'text', placeholder, required }: InputFieldProps) {
  const { formData, updateFormData, errors } = useFormContext();
  const value = formData[name as keyof typeof formData];
  const error = errors[name as keyof typeof errors];

  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={typeof value === 'boolean' ? '' : value}
        onChange={(e) => updateFormData(name as keyof typeof formData, e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-0 ${
          error
            ? 'border-red-300 focus:border-red-500'
            : 'border-gray-200 focus:border-primary-500'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

// Select field component
interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export function SelectField({ name, label, options, required }: SelectFieldProps) {
  const { formData, updateFormData, errors } = useFormContext();
  const value = formData[name as keyof typeof formData];
  const error = errors[name as keyof typeof errors];

  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={typeof value === 'boolean' ? '' : value}
        onChange={(e) => updateFormData(name as keyof typeof formData, e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-0 appearance-none bg-white ${
          error
            ? 'border-red-300 focus:border-red-500'
            : 'border-gray-200 focus:border-primary-500'
        }`}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

// Checkbox field component
interface CheckboxFieldProps {
  name: string;
  label: ReactNode;
  required?: boolean;
}

export function CheckboxField({ name, label, required }: CheckboxFieldProps) {
  const { formData, updateFormData, errors } = useFormContext();
  const value = formData[name as keyof typeof formData];
  const error = errors[name as keyof typeof errors];

  return (
    <div className="mb-5">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={typeof value === 'boolean' ? value : false}
          onChange={(e) => updateFormData(name as keyof typeof formData, e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <span className="text-gray-600">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

// Form Step wrapper component
interface FormStepProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function FormStep({ title, description, children }: FormStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-8">{description}</p>}
      {children}
    </div>
  );
}
