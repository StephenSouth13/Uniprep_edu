"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group hover:from-accent hover:to-secondary animate-in fade-in slide-in-from-bottom-2 duration-500"
      aria-label="Back to top"
      title="Quay lại đầu trang"
    >
      <ArrowUp className="w-5 h-5 group-hover:translate-y-0 translate-y-0.5 transition-transform duration-300" />
    </button>
  )
}
