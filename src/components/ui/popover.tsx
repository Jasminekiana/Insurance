import * as React from "react";

interface PopoverProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Popover({ children }: PopoverProps) {
  return <div data-slot="popover">{children}</div>;
}

function PopoverTrigger({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="popover-trigger"
      className={className}
      {...props}
    />
  );
}

function PopoverAnchor({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="popover-anchor"
      className={className}
      {...props}
    />
  );
}

function PopoverContent({
  className = "",
  align = "center",
  sideOffset = 4,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  return (
    <div
      data-slot="popover-content"
      className={`z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none ${className}`}
      {...props}
    />
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
