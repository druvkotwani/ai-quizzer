import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-text bg-main border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none",
        noShadow:
          "text-text bg-main border-2 border-border dark:border-darkBorder",
        neutral:
          "bg-white dark:bg-secondaryBlack text-text dark:text-darkText border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none",
        reverse:
          "text-text bg-main border-2 border-border dark:border-darkBorder hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-light dark:hover:shadow-dark",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Create a separate component for the neobrutalism button with sliding animation
export const NeobrutButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    slideText?: string,
    shadowOffset?: number,
    shadowColor?: string
  }
>(({ className, children, slideText, shadowColor = "#000", ...props }, ref) => {
  return (
    <div className="relative group h-full w-full">
      {/* Shadow element that stays in place */}
      <div 
        className="absolute inset-0 border-2 border-black"
        style={{ backgroundColor: shadowColor }}
      />
      
      <button
       className={cn(
        "relative flex !text-black h-full w-full items-center justify-between border-2 border-black bg-white px-8 text-xl font-semibold transition-all duration-300 ease-in-out",
        "group-hover:translate-x-2 group-hover:-translate-y-2",
        className
      )}
        ref={ref}
        {...props}
      >
        <span className="relative overflow-hidden">
          <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            {children}
          </span>
          <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            {slideText || children}
          </span>
        </span>
        <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
          <ArrowRight className="shrink-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 text-red-500" />
          <ArrowRight className="shrink-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
        </div>
      </button>
    </div>
  );
});
NeobrutButton.displayName = "NeobrutButton";

export { Button, buttonVariants };