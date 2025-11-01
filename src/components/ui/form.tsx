import * as React from "react";
import { Label } from "./label";

// Simplified form components without external dependencies
const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props}>{children}</form>;
};

const FormItem = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="form-item"
      className={`grid gap-2 ${className}`}
      {...props}
    />
  );
};

const FormLabel = ({ className = "", ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <Label
      data-slot="form-label"
      className={className}
      {...props}
    />
  );
};

const FormControl = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="form-control"
      className={className}
      {...props}
    />
  );
};

const FormDescription = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      data-slot="form-description"
      className={`text-muted-foreground ${className}`}
      {...props}
    />
  );
};

const FormMessage = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      data-slot="form-message"
      className={`text-destructive ${className}`}
      {...props}
    />
  );
};

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};
