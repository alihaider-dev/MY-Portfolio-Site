import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

// Animated count-up number that starts when scrolled into view.
export default function Counter({ value, suffix = "", decimals = 0, className = "" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix
    })
  }, [spring, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
