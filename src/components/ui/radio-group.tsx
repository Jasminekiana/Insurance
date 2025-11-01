import * as React from "react";
import { Circle } from "lucide-react";

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  onValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="radio-group"
        className={`grid gap-2 ${className}`}
        role="radiogroup"
        {...props}
      />
    );
  }
);

RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <input
          ref={ref}
          type="radio"
          data-slot="radio-group-item"
          className="peer h-4 w-4 shrink-0 rounded-full border border-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none checked:border-primary"
          {...props}
        />
        <Circle className="absolute h-2.5 w-2.5 fill-primary text-primary pointer-events-none hidden peer-checked:block left-0.5 top-0.5" />
      </div>
    );
  }
);

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
