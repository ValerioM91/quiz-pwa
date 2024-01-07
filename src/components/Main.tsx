import { cn } from "../utils/cn"
import { getDeviceType } from "../utils/deviceInfo"

const Main = ({ children }: { children: React.ReactNode }) => {
  const isPhone = getDeviceType() === "iPhone"
  return (
    <main
      className={cn(
        "bg-gradient-linear relative mx-auto flex w-full items-center justify-center p-4",
        isPhone ? "min-h-svh" : "min-h-screen",
      )}
    >
      {children}
    </main>
  )
}
export default Main
