import * as React from "react";
import { Check, ChevronRight, Circle } from "lucide-react";

const Menubar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar"
      className={`flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-sm ${className}`}
      {...props}
    />
  )
);
Menubar.displayName = "Menubar";

const MenubarMenu = ({ children }: { children: React.ReactNode }) => (
  <div data-slot="menubar-menu">{children}</div>
);

const MenubarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    data-slot="menubar-trigger"
    className={`flex cursor-default select-none items-center rounded-sm px-3 py-1 outline-none focus:bg-accent focus:text-accent-foreground ${className}`}
    {...props}
  />
));
MenubarTrigger.displayName = "MenubarTrigger";

const MenubarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar-content"
      className={`z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`}
      {...props}
    />
  )
);
MenubarContent.displayName = "MenubarContent";

const MenubarItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar-item"
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none focus:bg-accent focus:text-accent-foreground ${className}`}
      {...props}
    />
  )
);
MenubarItem.displayName = "MenubarItem";

const MenubarCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }
>(({ className = "", children, checked, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="menubar-checkbox-item"
    className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none focus:bg-accent ${className}`}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {checked && <Check className="h-4 w-4" />}
    </span>
    {children}
  </div>
));
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

const MenubarRadioItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar-radio-item"
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none focus:bg-accent ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </div>
  )
);
MenubarRadioItem.displayName = "MenubarRadioItem";

const MenubarLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar-label"
      className={`px-2 py-1.5 ${className}`}
      {...props}
    />
  )
);
MenubarLabel.displayName = "MenubarLabel";

const MenubarSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar-separator"
      className={`-mx-1 my-1 h-px bg-muted ${className}`}
      {...props}
    />
  )
);
MenubarSeparator.displayName = "MenubarSeparator";

const MenubarShortcut = ({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="menubar-shortcut"
    className={`ml-auto tracking-widest ${className}`}
    {...props}
  />
);

const MenubarGroup = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="menubar-group" {...props} />
);

const MenubarPortal = ({ children }: { children: React.ReactNode }) => (
  <div data-slot="menubar-portal">{children}</div>
);

const MenubarSub = ({ children }: { children: React.ReactNode }) => (
  <div data-slot="menubar-sub">{children}</div>
);

const MenubarSubContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="menubar-sub-content"
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg ${className}`}
      {...props}
    />
  )
);
MenubarSubContent.displayName = "MenubarSubContent";

const MenubarSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="menubar-sub-trigger"
    className={`flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none focus:bg-accent ${className}`}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </div>
));
MenubarSubTrigger.displayName = "MenubarSubTrigger";

const MenubarRadioGroup = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="menubar-radio-group" {...props} />
);

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarGroup,
  MenubarPortal,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarRadioGroup,
};
