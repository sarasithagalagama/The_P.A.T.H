"use client";

/**
 * LikertScale Component
 * A responsive 5-point scale for user inputs.
 *
 * @param {number|null} value - Current selected value (-2 to 2)
 * @param {Function} onChange - Callback when a value is selected
 * @param {Object} labels - Localized labels for the scale options
 */
export function LikertScale({ value, onChange, labels }) {
  // Map internal values (-2 to +2) to display labels
  const options = [
    { value: -2, label: labels.stronglyDisagree },
    { value: -1, label: labels.disagree },
    { value: 0, label: labels.neutral },
    { value: 1, label: labels.agree },
    { value: 2, label: labels.stronglyAgree },
  ];

  return (
    <div className="w-full">
      {/* Desktop Layout: Horizontal buttons */}
      <div className="hidden md:flex gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              flex-1 min-h-[44px] px-4 py-3 rounded-lg font-medium text-sm
              transition-all duration-200
              ${
                value === option.value
                  ? "bg-primary text-primary-foreground shadow-lg scale-105 ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }
            `}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Mobile Layout: Vertical Stack for better touch targets */}
      <div className="flex flex-col gap-2 md:hidden">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              w-full min-h-[44px] px-4 py-3 rounded-lg font-medium text-sm
              transition-all duration-200
              ${
                value === option.value
                  ? "bg-primary text-primary-foreground shadow-lg scale-105 ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }
            `}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
