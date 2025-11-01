import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const badgeVariants = (variant: BadgeProps["variant"] = "default") => {
  const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 gap-1 transition-colors overflow-hidden";
  
  const variantStyles = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
    destructive: "border-transparent bg-destructive text-white hover:bg-destructive/90",
    outline: "text-foreground hover:bg-accent hover:text-accent-foreground",
  };
  
  return `${baseStyles} ${variantStyles[variant]}`;
};

function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={`${badgeVariants(variant)} ${className}`}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
