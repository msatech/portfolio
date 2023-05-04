import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const largeHeadingVariants = cva("text-black text-center lg:text-left font-extrabold leading-tight tracking-tighter ", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      lg: 'text-5xl md:text-6xl lg:text-7xl',
      sm: "tex-2xl md:text-xl lg:text-4xl"
    },
  },
  defaultVariants: {
    size: 'default'
  },
});

export interface HeaderProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof largeHeadingVariants> {}

const LargeHeading: FC<HeaderProps> = ({
  className,
  children,
  size,
  ...props
}) => {
  return (
    <h1 className={cn(largeHeadingVariants({ className, size }))} {...props}>
      {children}
    </h1>
  );
};

export default LargeHeading;

