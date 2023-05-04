import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const paragraphVariants = cva("max-w-prose text-slate-700 text-center", {
  variants: {
    size: {
      default: "sm:text-lg",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(paragraphVariants({ size, className }))} {...props}>
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph'

export default Paragraph;
