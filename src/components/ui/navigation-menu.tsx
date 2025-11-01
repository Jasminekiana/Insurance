import * as React from "react";

// Simplified navigation menu components without external dependencies
function NavigationMenu({
  className = "",
  children,
  viewport = true,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  viewport?: boolean;
}) {
  return (
    <nav
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </nav>
  );
}

function NavigationMenuList({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      data-slot="navigation-menu-list"
      className={`group flex flex-1 list-none items-center justify-center gap-1 ${className}`}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      data-slot="navigation-menu-item"
      className={`relative ${className}`}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 outline-none transition-all";

function NavigationMenuTrigger({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      data-slot="navigation-menu-trigger"
      className={`${navigationMenuTriggerStyle} group ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function NavigationMenuContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="navigation-menu-content"
      className={`top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto ${className}`}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="absolute top-full left-0 isolate z-50 flex justify-center"
    >
      <div
        data-slot="navigation-menu-viewport"
        className={`origin-top-center bg-popover text-popover-foreground relative mt-1.5 w-full overflow-hidden rounded-md border shadow ${className}`}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      data-slot="navigation-menu-link"
      className={`flex flex-col gap-1 rounded-sm p-2 transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="navigation-menu-indicator"
      className={`top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden ${className}`}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </div>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
