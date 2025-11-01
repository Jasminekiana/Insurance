import * as React from "react";

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className = "", variant = "default", size = "default", pressed, onPressedChange, onClick, ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(pressed || false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const newPressed = !isPressed;
      setIsPressed(newPressed);
      onPressedChange?.(newPressed);
      onClick?.(e);
    };

    const variantStyles = {
      default: "bg-transparent hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    };

    const sizeStyles = {
      default: "h-9 px-2 min-w-9",
      sm: "h-8 px-1.5 min-w-8",
      lg: "h-10 px-2.5 min-w-10",
    };

    return (
      <button
        ref={ref}
        type="button"
        data-slot="toggle"
        data-state={isPressed ? "on" : "off"}
        onClick={handleClick}
        className={`inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
