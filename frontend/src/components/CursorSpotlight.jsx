import { useEffect, useRef } from 'react'

/**
 * CursorSpotlight
 * - `.cursor-dot`  : tiny glowing center dot (instant tracking)
 * - `.cursor-ring` : sharp cyan ring with slight lag (elegance)
 * - `.cursor-halo` : large soft radial gradient that follows lazily
 * Ring expands when hovering over buttons, links, and inputs.
 */
export default function CursorSpotlight() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current

    if (!dot || !ring) return

    // Positions for lagged ring
    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let mouseX = ringX
    let mouseY = ringY
    let rafId

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // Dot follows instantly
      dot.style.left = `${mouseX}px`
      dot.style.top  = `${mouseY}px`
    }

    const onMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase()
      const interactive = ['a', 'button', 'input', 'textarea', 'select', 'label']
      if (interactive.includes(tag) || e.target.closest('a, button')) {
        ring.classList.add('expanded')
      }
    }

    const onMouseOut = () => {
      ring.classList.remove('expanded')
    }

    // Smooth lagged animation loop
    const animate = () => {
      // Ring: ~12% lerp — slightly behind the dot
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top  = `${ringY}px`

      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout',  onMouseOut)

    // Hide default cursor globally
    document.documentElement.style.cursor = 'none'

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout',  onMouseOut)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={ringRef}  className="cursor-ring" />
      <div ref={dotRef}   className="cursor-dot"  />
    </>
  )
}
