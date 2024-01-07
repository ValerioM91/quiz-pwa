import { cn } from "../utils/cn"

type Label = React.ComponentPropsWithoutRef<"label">

const Label = ({ className, children, ...rest }: Label) => {
  return (
    <label className={cn("text-indigo11 text-sm font-medium leading-none", className)} {...rest}>
      {children}
    </label>
  )
}
export default Label
