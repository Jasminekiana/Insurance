import * as React from "react";
import { Minus } from "lucide-react";

interface InputOTPProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
}

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ className = "", maxLength = 6, value = "", onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, maxLength);
      onChange?.(newValue);
    };

    return (
      <div data-slot="input-otp" className={`flex items-center gap-2 ${className}`}>
        <input
          ref={ref}
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
      </div>
    );
  }
);

InputOTP.displayName = "InputOTP";

const InputOTPGroup = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="input-otp-group" className={`flex items-center ${className}`} {...props} />
);

const InputOTPSlot = ({
  className = "",
  index,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { index: number }) => (
  <div
    data-slot="input-otp-slot"
    className={`relative flex h-9 w-9 items-center justify-center border-y border-r border-input transition-all first:rounded-l-md first:border-l last:rounded-r-md ${className}`}
    {...props}
  />
);

const InputOTPSeparator = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="input-otp-separator" role="separator" {...props}>
    <Minus />
  </div>
);

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
