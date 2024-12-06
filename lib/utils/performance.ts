import { useEffect } from 'react'

export function useImagePreload(imageSources: string[]) {
  useEffect(() => {
    imageSources.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [imageSources])
}

export function useDeferredLoad(callback: () => void, delay = 3000) {
  useEffect(() => {
    const timeoutId = setTimeout(callback, delay)
    return () => clearTimeout(timeoutId)
  }, [callback, delay])
}

export function useIntersectionObserverWithThreshold(
  elementRef: React.RefObject<Element>,
  callback: (entry: IntersectionObserverEntry) => void,
  threshold = 0.1
) {
  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback(entry)
        }
      },
      { threshold }
    )

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [elementRef, callback, threshold])
}