'use client';

interface Step {
  number: number;
  title: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                  transition-all duration-500
                  ${
                    step.number < currentStep
                      ? 'bg-gradient-to-br from-secondary-500 to-secondary-600 text-white shadow-lg'
                      : step.number === currentStep
                      ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-lg ring-4 ring-primary-200'
                      : 'bg-gray-100 text-gray-400'
                  }
                `}
              >
                {step.number < currentStep ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`
                  mt-2 text-sm font-medium text-center
                  ${step.number <= currentStep ? 'text-primary-700' : 'text-gray-400'}
                `}
              >
                {step.title}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4">
                <div
                  className={`
                    h-full rounded-full transition-all duration-500
                    ${step.number < currentStep ? 'bg-gradient-to-r from-secondary-500 to-secondary-400' : 'bg-gray-200'}
                  `}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
