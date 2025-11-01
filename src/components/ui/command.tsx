import * as React from "react";
import { Search } from "lucide-react";

const Command = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="command"
      className={`flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground ${className}`}
      {...props}
    />
  )
);
Command.displayName = "Command";

const CommandInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <div className="flex items-center border-b px-3" data-slot="command-input-wrapper">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      ref={ref}
      data-slot="command-input"
      className={`flex h-10 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="command-list"
      className={`max-h-[300px] overflow-y-auto overflow-x-hidden ${className}`}
      {...props}
    />
  )
);
CommandList.displayName = "CommandList";

const CommandEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <div
      ref={ref}
      data-slot="command-empty"
      className="py-6 text-center"
      {...props}
    />
  )
);
CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="command-group"
      className={`overflow-hidden p-1 text-foreground ${className}`}
      {...props}
    />
  )
);
CommandGroup.displayName = "CommandGroup";

const CommandSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="command-separator"
      className={`-mx-1 h-px bg-border ${className}`}
      {...props}
    />
  )
);
CommandSeparator.displayName = "CommandSeparator";

const CommandItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="command-item"
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 ${className}`}
      {...props}
    />
  )
);
CommandItem.displayName = "CommandItem";

const CommandShortcut = ({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="command-shortcut"
    className={`ml-auto tracking-widest text-muted-foreground ${className}`}
    {...props}
  />
);
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
};
