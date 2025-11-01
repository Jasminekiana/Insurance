import * as React from "react";
import { Check, ChevronRight, Circle } from "lucide-react";

function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div data-slot="dropdown-menu">{children}</div>;
}

function DropdownMenuTrigger({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="dropdown-menu-trigger"
      className={className}
      {...props}
    />
  );
}

function DropdownMenuContent({
  className = "",
  sideOffset = 4,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }) {
  return (
    <div
      data-slot="dropdown-menu-content"
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`}
      {...props}
    />
  );
}

function DropdownMenuItem({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-item"
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className = "",
  children,
  checked,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }) {
  return (
    <div
      data-slot="dropdown-menu-checkbox-item"
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  );
}

function DropdownMenuRadioItem({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-radio-item"
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </div>
  );
}

function DropdownMenuLabel({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-label"
      className={`px-2 py-1.5 ${className}`}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-separator"
      className={`-mx-1 my-1 h-px bg-muted ${className}`}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={`ml-auto tracking-widest opacity-60 ${className}`}
      {...props}
    />
  );
}

function DropdownMenuGroup({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuPortal({ children }: { children: React.ReactNode }) {
  return <div data-slot="dropdown-menu-portal">{children}</div>;
}

function DropdownMenuSub({ children }: { children: React.ReactNode }) {
  return <div data-slot="dropdown-menu-sub">{children}</div>;
}

function DropdownMenuSubContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-sub-content"
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg ${className}`}
      {...props}
    />
  );
}

function DropdownMenuSubTrigger({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-sub-trigger"
      className={`flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none focus:bg-accent data-[state=open]:bg-accent ${className}`}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </div>
  );
}

function DropdownMenuRadioGroup({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="dropdown-menu-radio-group" {...props} />;
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
