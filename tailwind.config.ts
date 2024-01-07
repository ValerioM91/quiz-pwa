import { type Config } from "tailwindcss"
import { teal, mauve, violet, purple, indigo, red, green } from "@radix-ui/colors"
import tailwindcssAnimate from "tailwindcss-animate"

export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(330deg,color(display-p3 0.523 0.318 0.751) 0,color(display-p3 0.276 0.384 0.837));",
      },
      colors: {
        ...teal,
        ...red,
        ...green,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
