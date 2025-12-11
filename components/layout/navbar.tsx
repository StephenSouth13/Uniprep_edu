"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = {
    en: [
      { label: "About", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Pathway", href: "/pathway" },
      { label: "Blog", href: "/blog" },
      { label: "Admissions", href: "/admissions" },
    ],
    vi: [
      { label: "Giới thiệu", href: "/about" },
      { label: "Chương trình", href: "/programs" },
      { label: "Lộ trình", href: "/pathway" },
      { label: "Blog", href: "/blog" },
      { label: "Tuyển sinh", href: "/admissions" },
    ],
  }

  const currentNavItems = language === "vi" ? navItems.vi : navItems.en

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
          <Image
            src="/logo.png"
            alt="Uniprep Vietnam Logo"
            width={120}
            height={120}
            className="transition-transform duration-300 group-hover:brightness-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {currentNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary relative transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-all duration-300 hover:scale-105"
          >
            <Globe size={18} />
            <span className="hidden sm:block uppercase text-xs font-semibold">{language}</span>
          </button>

          {/* CTA Button */}
          <Button
            asChild
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/admissions">{language === "vi" ? "Đăng ký" : "Enroll"}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-all duration-300 hover:scale-110"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container py-4 flex flex-col gap-4">
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors hover:translate-x-1 duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/admissions">{language === "vi" ? "Đăng ký" : "Enroll"}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
