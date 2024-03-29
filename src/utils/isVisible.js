import { useState, useEffect } from 'react';

export default function useIsVisible(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    // eslint-disable-next-line
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}