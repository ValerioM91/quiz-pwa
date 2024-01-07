import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        violet: "bg-violet9 text-white hover:bg-violet9/90",
        indigo: "bg-indigo9 text-white hover:bg-indigo9/90",
        red: "bg-red8 text-white",
        green: "bg-green8 text-white",
        teal: "bg-teal9 text-white hover:bg-teal9/90",
        mauve: "bg-mauve9 text-white hover:bg-mauve9/90",
        purple: "bg-purple9 text-white hover:bg-purple9/90",
        gray: "bg-gray-100 text-gray-700 hover:bg-gray-200/90",
        light: "bg-indigo3 text-indigo11 hover:bg-indigo5/90",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100/90",
      },
      size: {
        default: "min-h-10 px-4 py-2",
        sm: "min-h-9 rounded-md px-3",
        lg: "min-h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "indigo",
      size: "default",
    },
  },
)
