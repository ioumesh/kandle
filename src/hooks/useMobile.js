import { useEffect, useState } from 'react';

function useMobile(mobile) {
  const [isMobile, setIsMobile] = useState(mobile)

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    )
    setIsMobile(mobile);
  }, [])

  return [isMobile]
}

export default useMobile
