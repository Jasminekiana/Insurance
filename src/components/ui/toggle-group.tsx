import * as React from "react";

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className = "", variant = "default", size = "default", type = "single", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="toggle-group"
        role="group"
        className={`flex items-center justify-center gap-1 ${className}`}
        {...props}
      />
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-transparent hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    };

    const sizeStyles = {
      default: "h-9 px-3",
      sm: "h-8 px-2",
      lg: "h-10 px-3",
    };

    return (
      <button
        ref={ref}
        type="button"
        data-slot="toggle-group-item"
        className={`inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
