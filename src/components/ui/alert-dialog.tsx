import * as React from "react";

function AlertDialog({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-dialog" {...props}>{children}</div>;
}

function AlertDialogTrigger({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="alert-dialog-portal" {...props}>{children}</div>
  );
}

function AlertDialogOverlay({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-overlay"
      className={`fixed inset-0 z-50 bg-black/50 ${className}`}
      {...props}
    />
  );
}

function AlertDialogContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <div
        data-slot="alert-dialog-content"
        className={`bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg ${className}`}
        {...props}
      >
        {children}
      </div>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={`flex flex-col gap-2 text-center sm:text-left ${className}`}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ${className}`}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="alert-dialog-title"
      className={`${className}`}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="alert-dialog-description"
      className={`text-muted-foreground ${className}`}
      {...props}
    />
  );
}

function AlertDialogAction({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 ${className}`}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 ${className}`}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
