import { useEffect, useState } from 'react'

const isStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
}

export function useIsPwaInstalled(): boolean {
  const [installed, setInstalled] = useState(false)
  useEffect(() => {
    setInstalled(isStandalone())
  }, [])

  return installed
}
