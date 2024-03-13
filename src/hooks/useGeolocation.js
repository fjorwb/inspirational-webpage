import { useEffect, useState } from 'react'

export const useGeolocation = () => {
  const [location, setLocation] = useState({ lat: 0, lon: 0 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
      })
    }
  }, [])

  return location
}

export default useGeolocation
