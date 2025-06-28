'use client'
import { useEffect } from 'react'

const ScrollbarController = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    
    // Force hide scrollbar on mount
    const forceHideScrollbar = () => {
      document.documentElement.classList.add('hide-scrollbar-completely')
      document.body.classList.add('hide-scrollbar-completely')
      document.documentElement.classList.remove('scrolling')
      document.body.classList.remove('scrolling')
    }

    // Initialize with hidden scrollbar
    forceHideScrollbar()

    const showScrollbar = () => {
      document.documentElement.classList.remove('hide-scrollbar-completely')
      document.body.classList.remove('hide-scrollbar-completely')
      document.documentElement.classList.add('scrolling')
      document.body.classList.add('scrolling')
    }

    const hideScrollbar = () => {
      document.documentElement.classList.remove('scrolling')
      document.body.classList.remove('scrolling')
      // Small delay before completely hiding
      setTimeout(() => {
        document.documentElement.classList.add('hide-scrollbar-completely')
        document.body.classList.add('hide-scrollbar-completely')
      }, 100)
    }

    const handleScroll = () => {
      showScrollbar()
      
      // Clear existing timeout
      clearTimeout(scrollTimeout)
      
      // Hide scrollbar after user stops scrolling
      scrollTimeout = setTimeout(() => {
        hideScrollbar()
      }, 1500) // Wait 1.5 seconds
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show scrollbar when mouse is very close to the right edge
      const threshold = 30 // pixels from right edge
      const isNearRightEdge = window.innerWidth - e.clientX < threshold
      
      if (isNearRightEdge) {
        showScrollbar()
        
        clearTimeout(scrollTimeout)
        
        scrollTimeout = setTimeout(() => {
          hideScrollbar()
        }, 2000)
      }
    }

    const handleMouseLeave = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        hideScrollbar()
      }, 800)
    }

    // Touch events for mobile
    const handleTouchStart = () => {
      showScrollbar()
    }

    const handleTouchEnd = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        hideScrollbar()
      }, 1000)
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    // Force hide on window focus/blur
    window.addEventListener('focus', forceHideScrollbar)
    window.addEventListener('blur', forceHideScrollbar)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('focus', forceHideScrollbar)
      window.removeEventListener('blur', forceHideScrollbar)
      clearTimeout(scrollTimeout)
      
      // Clean up classes on unmount
      document.documentElement.classList.remove('scrolling', 'hide-scrollbar-completely')
      document.body.classList.remove('scrolling', 'hide-scrollbar-completely')
    }
  }, [])

  return null
}

export default ScrollbarController