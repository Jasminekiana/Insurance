import * as React from "react";

interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Drawer({ children }: DrawerProps) {
  return <div data-slot="drawer">{children}</div>;
}

function DrawerTrigger({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="drawer-trigger"
      className={className}
      {...props}
    />
  );
}

function DrawerPortal({ children }: { children: React.ReactNode }) {
  return <div data-slot="drawer-portal">{children}</div>;
}

function DrawerOverlay({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-overlay"
      className={`fixed inset-0 z-50 bg-black/80 ${className}`}
      {...props}
    />
  );
}

function DrawerContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <div
        data-slot="drawer-content"
        className={`fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background ${className}`}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </div>
    </DrawerPortal>
  );
}

function DrawerHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-header"
      className={`grid gap-1.5 p-4 text-center sm:text-left ${className}`}
      {...props}
    />
  );
}

function DrawerFooter({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-footer"
      className={`mt-auto flex flex-col gap-2 p-4 ${className}`}
      {...props}
    />
  );
}

function DrawerTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="drawer-title"
      className={className}
      {...props}
    />
  );
}

function DrawerDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="drawer-description"
      className={`text-muted-foreground ${className}`}
      {...props}
    />
  );
}

function DrawerClose({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="drawer-close"
      className={className}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
