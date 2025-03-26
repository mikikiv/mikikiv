import { type VariantProps, cva, cx } from "class-variance-authority";

import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 overflow-auto whitespace-nowrap rounded-base font-base text-sm  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all ",
  {
    variants: {
      variant: {
        // static with shadow
        default:
          "border-2 border-border shadow-double-shadow hover:shadow-shadow  hover:translate-x-hover hover:translate-y-hover active:shadow-none active:translate-y-pressed active:translate-x-pressed",
        noShadow: "border-2 border-border",
        neutral: "",
        // static no shadow
        reverse:
          "border-2 border-border shadow-none hover:translate-x-hover hover:translate-y-hover hover:shadow-shadow active:translate-x-pressed active:translate-y-pressed active:shadow-none",
      },
      colors: {
        default: "bg-bg text-text",
        github: "bg-slate-600 text-white",
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
      colors: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      "aria-selected": ariaSelected,
      colors,
      size,
      role,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cx(
          cn(buttonVariants({ colors, variant, size, className })),

          ariaSelected === true
            ? "translate-x-selected translate-y-selected"
            : "",
        )}
        aria-selected={ariaSelected}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
