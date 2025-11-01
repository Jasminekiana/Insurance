import * as React from "react";

interface ToasterProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  expand?: boolean;
  richColors?: boolean;
  duration?: number;
  closeButton?: boolean;
}

const Toaster = ({ className = "", position = "bottom-right", ...props }: ToasterProps) => {
  return (
    <div
      data-slot="toaster"
      data-position={position}
      className={`fixed z-50 ${className}`}
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      } as React.CSSProperties}
      {...props}
    />
  );
};

export { Toaster };
