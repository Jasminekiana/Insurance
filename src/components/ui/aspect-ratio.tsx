import * as React from "react";

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

function AspectRatio({
  className = "",
  ratio = 16 / 9,
  style,
  ...props
}: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      className={`relative w-full ${className}`}
      style={{
        paddingBottom: `${100 / ratio}%`,
        ...style,
      }}
      {...props}
    />
  );
}

export { AspectRatio };
