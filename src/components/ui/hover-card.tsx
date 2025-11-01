import * as React from "react";

interface HoverCardProps {
  children: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
}

function HoverCard({ children }: HoverCardProps) {
  return <div data-slot="hover-card">{children}</div>;
}

function HoverCardTrigger({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="hover-card-trigger"
      className={className}
      {...props}
    />
  );
}

function HoverCardContent({
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
      data-slot="hover-card-content"
      className={`z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none ${className}`}
      {...props}
    />
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
