import * as React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ className = "", ...props }: LabelProps) {
  const baseStyles = "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50";
  
  return (
    <label
      data-slot="label"
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
}

export { Label };
