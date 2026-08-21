import { useEffect, useRef, useState } from 'react'

/**
 * Flips to true the first time the element scrolls into view, then stops
 * observing. Used to drive the `.reveal` transition on below-the-fold
 * sections, which would otherwise finish animating before anyone sees them.
 */
export function useInView<T extends HTMLElement>(rootMargin = '-12% 0px') {
  const ref = useRef<T>(null)
  // Nothing to observe with, so start revealed rather than derive it in an effect.
  const supported = typeof IntersectionObserver !== 'undefined'
  const [inView, setInView] = useState(!supported)

  useEffect(() => {
    if (!supported) return
    const el = ref.current
    if (!el) return

    // A working observer always delivers an initial callback as soon as it
    // starts observing. If none arrives, observation is not running (throttled
    // or backgrounded renderer) and waiting longer would leave the content
    // permanently invisible — so reveal it rather than hide it.
    let delivered = false

    const io = new IntersectionObserver(
      ([entry]) => {
        delivered = true
        if (!entry.isIntersecting) return
        setInView(true)
        io.disconnect()
      },
      { rootMargin },
    )

    io.observe(el)

    const failsafe = window.setTimeout(() => {
      if (!delivered) setInView(true)
    }, 1200)

    return () => {
      window.clearTimeout(failsafe)
      io.disconnect()
    }
  }, [rootMargin, supported])

  return { ref, inView }
}
