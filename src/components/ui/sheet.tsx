import * as React from "react";
import { X } from "lucide-react";

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Sheet({ children }: SheetProps) {
  return <div data-slot="sheet">{children}</div>;
}

function SheetTrigger({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="sheet-trigger"
      className={className}
      {...props}
    />
  );
}

function SheetClose({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="sheet-close"
      className={`absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ${className}`}
      {...props}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  );
}

function SheetPortal({ children }: { children: React.ReactNode }) {
  return <div data-slot="sheet-portal">{children}</div>;
}

function SheetOverlay({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-overlay"
      className={`fixed inset-0 z-50 bg-black/50 ${className}`}
      {...props}
    />
  );
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left";
}

function SheetContent({
  side = "right",
  className = "",
  children,
  ...props
}: SheetContentProps) {
  const sideStyles = {
    top: "inset-x-0 top-0 border-b",
    bottom: "inset-x-0 bottom-0 border-t",
    left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
    right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <div
        data-slot="sheet-content"
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out ${sideStyles[side]} ${className}`}
        {...props}
      >
        {children}
        <SheetClose />
      </div>
    </SheetPortal>
  );
}

function SheetHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-header"
      className={`flex flex-col gap-2 text-center sm:text-left ${className}`}
      {...props}
    />
  );
}

function SheetFooter({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-footer"
      className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 ${className}`}
      {...props}
    />
  );
}

function SheetTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="sheet-title"
      className={`text-foreground ${className}`}
      {...props}
    />
  );
}

function SheetDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="sheet-description"
      className={`text-muted-foreground ${className}`}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
