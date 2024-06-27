'use client'

import { ArrowUp, ChevronDown } from '@/public/icons'
import Hamburger from '@/public/icons/hamburger'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-greenPrimary flex justify-center text-white p-2 w-full rounded-full shadow-lg hover:bg-green-700 focus:outline-none"
          aria-label="Scroll to top"
        >
            <ArrowUp color="white" />
        </button>
      )}
    </div>
  )
}
