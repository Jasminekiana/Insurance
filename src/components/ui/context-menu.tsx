import * as React from "react";
import { Check, ChevronRight, Circle } from "lucide-react";

function ContextMenu({ children }: { children: React.ReactNode }) {
  return <div data-slot="context-menu">{children}</div>;
}

function ContextMenuTrigger({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-trigger" className={className} {...props} />;
}

function ContextMenuContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="context-menu-content"
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`}
      {...props}
    />
  );
}

function ContextMenuItem({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="context-menu-item"
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none focus:bg-accent focus:text-accent-foreground ${className}`}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className = "",
  children,
  checked,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }) {
  return (
    <div
      data-slot="context-menu-checkbox-item"
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none focus:bg-accent ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  );
}

function ContextMenuRadioItem({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="context-menu-radio-item"
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none focus:bg-accent ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </div>
  );
}

function ContextMenuLabel({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-label" className={`px-2 py-1.5 ${className}`} {...props} />;
}

function ContextMenuSeparator({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-separator" className={`-mx-1 my-1 h-px bg-muted ${className}`} {...props} />;
}

function ContextMenuShortcut({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span data-slot="context-menu-shortcut" className={`ml-auto tracking-widest opacity-60 ${className}`} {...props} />;
}

function ContextMenuGroup({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-group" {...props} />;
}

function ContextMenuPortal({ children }: { children: React.ReactNode }) {
  return <div data-slot="context-menu-portal">{children}</div>;
}

function ContextMenuSub({ children }: { children: React.ReactNode }) {
  return <div data-slot="context-menu-sub">{children}</div>;
}

function ContextMenuSubContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="context-menu-sub-content"
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg ${className}`}
      {...props}
    />
  );
}

function ContextMenuSubTrigger({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="context-menu-sub-trigger"
      className={`flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none focus:bg-accent ${className}`}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </div>
  );
}

function ContextMenuRadioGroup({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-radio-group" {...props} />;
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
