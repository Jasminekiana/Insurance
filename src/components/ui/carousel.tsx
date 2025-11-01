import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Record<string, unknown>;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="carousel"
        className={`relative ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div data-slot="carousel-content-wrapper" className="overflow-hidden">
      <div
        ref={ref}
        data-slot="carousel-content"
        className={`flex ${className}`}
        {...props}
      />
    </div>
  )
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="carousel-item"
      className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}
      {...props}
    />
  )
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    data-slot="carousel-previous"
    className={`absolute h-8 w-8 rounded-full left-4 top-1/2 -translate-y-1/2 flex items-center justify-center border bg-background hover:bg-accent ${className}`}
    {...props}
  >
    <ArrowLeft className="h-4 w-4" />
    <span className="sr-only">Previous slide</span>
  </button>
));
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    data-slot="carousel-next"
    className={`absolute h-8 w-8 rounded-full right-4 top-1/2 -translate-y-1/2 flex items-center justify-center border bg-background hover:bg-accent ${className}`}
    {...props}
  >
    <ArrowRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </button>
));
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
