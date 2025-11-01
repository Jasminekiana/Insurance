import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className = "", ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={`text-muted-foreground flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5 ${className}`}
      {...props}
    />
  );
}

function BreadcrumbItem({ className = "", ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={`inline-flex items-center gap-1.5 ${className}`}
      {...props}
    />
  );
}

function BreadcrumbLink({
  className = "",
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="breadcrumb-link"
      className={`hover:text-foreground transition-colors ${className}`}
      {...props}
    />
  );
}

function BreadcrumbPage({ className = "", ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={`text-foreground ${className}`}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className = "",
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children ?? <ChevronRight className="w-3.5 h-3.5" />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className = "",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={`flex size-9 items-center justify-center ${className}`}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
