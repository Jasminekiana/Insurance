import * as React from "react";

interface TooltipProps {
  children: React.ReactNode;
  delayDuration?: number;
}

function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <div data-slot="tooltip-provider">{children}</div>;
}

function Tooltip({ children }: TooltipProps) {
  return <div data-slot="tooltip">{children}</div>;
}

function TooltipTrigger({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="tooltip-trigger"
      className={className}
      {...props}
    />
  );
}

function TooltipContent({
  className = "",
  sideOffset = 4,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }) {
  return (
    <div
      data-slot="tooltip-content"
      className={`z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-primary-foreground animate-in fade-in-0 zoom-in-95 ${className}`}
      style={{ marginTop: `${sideOffset}px` }}
      {...props}
    />
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
