import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

function Accordion({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="accordion" className={className} {...props} />;
}

function AccordionItem({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="accordion-item"
      className={`border-b last:border-b-0 ${className}`}
      {...props}
    />
  );
}

function AccordionTrigger({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="flex">
      <button
        data-slot="accordion-trigger"
        type="button"
        className={`flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  );
}

function AccordionContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="accordion-content"
      className="overflow-hidden"
      {...props}
    >
      <div className={`pt-0 pb-4 ${className}`}>{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
