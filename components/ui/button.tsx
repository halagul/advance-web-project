// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils"; // We'll create this helper in the next step

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
//   {
//     variants: {
//       variant: {
//         default: "bg-black text-white hover:bg-gray-800",
//         outline: "border border-gray-300 bg-white hover:bg-gray-100 text-black",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {}

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         className={cn(buttonVariants({ variant, size, className }))}
//         {...props}
//       />
//     );
//   }
// );

// Button.displayName = "Button";

// export { Button, buttonVariants };
