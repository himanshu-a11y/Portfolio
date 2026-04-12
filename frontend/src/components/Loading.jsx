import { useState, useEffect } from 'react'
import './Loading.css'

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <svg className="loading-logo" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loadingLogoGrad" x1="3" y1="2" x2="49" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(250,84%,70%)" />
              <stop offset="100%" stopColor="hsl(180,100%,55%)" />
            </linearGradient>
            <linearGradient id="loadingLogoGradInner" x1="8" y1="7" x2="44" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(250,84%,70%)" />
              <stop offset="100%" stopColor="hsl(180,100%,55%)" />
            </linearGradient>
            <linearGradient id="loadingTextGrad" x1="0" y1="0" x2="36" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(250,84%,75%)" />
              <stop offset="100%" stopColor="hsl(180,100%,65%)" />
            </linearGradient>
          </defs>
          {/* Hexagon outer border */}
          <polygon
            points="26,2 49,14.5 49,37.5 26,50 3,37.5 3,14.5"
            stroke="url(#loadingLogoGrad)"
            strokeWidth="1.5"
            fill="none"
            className="hex-outer"
          />
          {/* Inner dashed ring */}
          <polygon
            points="26,7 44,17 44,35 26,45 8,35 8,17"
            stroke="url(#loadingLogoGradInner)"
            strokeWidth="0.5"
            strokeDasharray="3 3"
            fill="none"
            opacity="0.4"
            className="hex-inner"
          />
          {/* HG text */}
          <text
            x="26" y="31"
            textAnchor="middle"
            fontSize="15"
            fontWeight="800"
            fontFamily="'Fira Code', monospace"
            fill="url(#loadingTextGrad)"
            letterSpacing="-0.5"
            className="hex-text"
          >HG</text>
        </svg>
        
        <div className="loading-spinner"></div>
        
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}
