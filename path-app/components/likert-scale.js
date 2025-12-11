"use client";

export function LikertScale({ value, onChange, labels }) {
  const options = [
    { value: -2, label: labels.stronglyDisagree },
    { value: -1, label: labels.disagree },
    { value: 0, label: labels.neutral },
    { value: 1, label: labels.agree },
    { value: 2, label: labels.stronglyAgree },
  ];

  return (
    <div className="w-full">
      {/* Desktop: Horizontal */}
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

      {/* Mobile: Vertical */}
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
