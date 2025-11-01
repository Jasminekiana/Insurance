import * as React from "react";
import { PanelLeft } from "lucide-react";
import { useIsMobile } from "./use-mobile";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import { Skeleton } from "./skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className = "",
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
    },
    [setOpenProp, open]
  );

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={`flex min-h-svh w-full ${className}`}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className = "",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={`bg-sidebar text-sidebar-foreground flex h-full flex-col ${className}`}
        style={{ width: SIDEBAR_WIDTH }}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              width: SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      <div
        data-slot="sidebar-gap"
        className="relative bg-transparent transition-[width] duration-200 ease-linear"
        style={{ width: state === "collapsed" && collapsible === "icon" ? SIDEBAR_WIDTH_ICON : SIDEBAR_WIDTH }}
      />
      <div
        data-slot="sidebar-container"
        className={`fixed inset-y-0 z-10 hidden h-svh transition-[left,right,width] duration-200 ease-linear md:flex ${
          side === "left" ? "left-0" : "right-0"
        } ${className}`}
        style={{ width: state === "collapsed" && collapsible === "icon" ? SIDEBAR_WIDTH_ICON : SIDEBAR_WIDTH }}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar flex h-full w-full flex-col"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className = "",
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={`size-7 ${className}`}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className = "", ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={`absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear sm:flex ${className}`}
      {...props}
    />
  );
}

function SidebarInset({ className = "", ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={`bg-background relative flex w-full flex-1 flex-col ${className}`}
      {...props}
    />
  );
}

function SidebarInput({
  className = "",
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={`bg-background h-8 w-full shadow-none ${className}`}
      {...props}
    />
  );
}

function SidebarHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={`flex flex-col gap-2 p-2 ${className}`}
      {...props}
    />
  );
}

function SidebarFooter({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={`flex flex-col gap-2 p-2 ${className}`}
      {...props}
    />
  );
}

function SidebarSeparator({
  className = "",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={`bg-sidebar-border mx-2 w-auto ${className}`}
      {...props}
    />
  );
}

function SidebarContent({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={`flex min-h-0 flex-1 flex-col gap-2 overflow-auto ${className}`}
      {...props}
    />
  );
}

function SidebarGroup({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={`relative flex w-full min-w-0 flex-col p-2 ${className}`}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={`text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs ${className}`}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className = "",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={`text-sidebar-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 ${className}`}
      {...props}
    />
  );
}

function SidebarGroupContent({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={`w-full text-sm ${className}`}
      {...props}
    />
  );
}

function SidebarMenu({ className = "", ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={`flex w-full min-w-0 flex-col gap-1 ${className}`}
      {...props}
    />
  );
}

function SidebarMenuItem({ className = "", ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={`group/menu-item relative ${className}`}
      {...props}
    />
  );
}

interface SidebarMenuButtonProps extends React.ComponentProps<"button"> {
  isActive?: boolean;
  tooltip?: string;
}

function SidebarMenuButton({
  isActive = false,
  tooltip,
  className = "",
  ...props
}: SidebarMenuButtonProps) {
  const button = (
    <button
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-active={isActive}
      className={`flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm hover:bg-sidebar-accent ${
        isActive ? "bg-sidebar-accent font-medium" : ""
      } ${className}`}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

function SidebarMenuAction({
  className = "",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={`text-sidebar-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 ${className}`}
      {...props}
    />
  );
}

function SidebarMenuBadge({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={`text-sidebar-foreground absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs ${className}`}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className = "",
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={`flex h-8 items-center gap-2 rounded-md px-2 ${className}`}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1"
        data-sidebar="menu-skeleton-text"
        style={{ maxWidth: width }}
      />
    </div>
  );
}

function SidebarMenuSub({ className = "", ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={`mx-3.5 flex min-w-0 flex-col gap-1 border-l px-2.5 py-0.5 ${className}`}
      {...props}
    />
  );
}

function SidebarMenuSubItem({
  className = "",
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={`group/menu-sub-item relative ${className}`}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  size = "md",
  isActive = false,
  className = "",
  ...props
}: React.ComponentProps<"a"> & {
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  return (
    <a
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={`text-sidebar-foreground flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 hover:bg-sidebar-accent ${
        size === "sm" ? "text-xs" : "text-sm"
      } ${isActive ? "bg-sidebar-accent" : ""} ${className}`}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
