import * as React from "react";

function Collapsible({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="collapsible"
      className={className}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      data-slot="collapsible-trigger"
      className={className}
      {...props}
    />
  );
}

function CollapsibleContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="collapsible-content"
      className={className}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
