import { useEffect, useRef, useState } from 'react'

export const useObserver = ({
  rootMargin = '100px',
  onlyOneView = false,
} = {}) => {
  const [show, setShow] = useState(false)
  const observerRef = useRef()

  useEffect(() => {
    let observer

    const handleObserve = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        return onlyOneView && observer.disconnect()
      }

      return setShow(false)
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(handleObserve, {
        rootMargin,
      })

      observer.observe(observerRef.current)
    })

    return () => observer && observer.disconnect()
  }, [])

  return {
    show,
    observerRef,
  }
}
