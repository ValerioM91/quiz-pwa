import { useEffect } from "react"
import { getDeviceType } from "../utils/deviceInfo"
import { DotsVerticalIcon, Share2Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useCallback } from "react"
import Tooltip from "./Tooltip"

const InstallationTooltip = () => {
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false)
  const deviceType = getDeviceType()
  const isIOs = deviceType === "iPhone" || deviceType === "iPad"
  const isInstalledOnIOs = "standalone" in window.navigator && window.navigator.standalone === true
  const isInstalledAndroid = window.matchMedia("(display-mode: standalone)").matches

  const isAndroid = deviceType === "Android"

  useEffect(() => {
    const installationShownExpiration = localStorage.getItem("installationShownExpiration")
    if (installationShownExpiration && new Date().getTime() < +installationShownExpiration) return

    setShouldShowTooltip(true)
    localStorage.setItem("installationShownExpiration", (new Date().getTime() + 3600 * 1000).toString())
  }, [])

  const closeTooltip = useCallback(() => {
    setShouldShowTooltip(false)
    localStorage.setItem("installationShownExpiration", (new Date().getTime() + 3600 * 1000).toString())
  }, [])

  if (!shouldShowTooltip) return null

  if (isIOs && !isInstalledOnIOs) {
    return (
      <Tooltip closeTooltip={closeTooltip}>
        <span>
          Install the app on your device: tap <Share2Icon className="inline text-[#0FB5EE]" height={16} width={16} />{" "}
          and then Add to Home Screen.
        </span>
      </Tooltip>
    )
  }

  if (isAndroid && !isInstalledAndroid) {
    return (
      <Tooltip closeTooltip={closeTooltip} position="top">
        <span>
          Install the app on your device: tap <DotsVerticalIcon className="inline text-[#111]" height={16} width={16} />{" "}
          and then Add to Home Screen.
        </span>
      </Tooltip>
    )
  }

  return null
}
export default InstallationTooltip
