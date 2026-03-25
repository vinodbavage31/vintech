"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Company", href: "#about" },
  { name: "Portfolio", href: "#case-studies" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF5733] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-[#0D0D1A]">
              Sola<span className="text-[#FF5733]">Tek</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-sm font-medium transition-colors relative ${
                  activeLink === link.name
                    ? "text-[#FF5733]"
                    : "text-[#0D0D1A] hover:text-[#FF5733]"
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF5733]" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#FF5733] hover:bg-[#E64A2E] text-white px-6">
              Get A Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0D0D1A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-sm font-medium transition-colors ${
                    activeLink === link.name
                      ? "text-[#FF5733]"
                      : "text-[#0D0D1A] hover:text-[#FF5733]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-[#FF5733] hover:bg-[#E64A2E] text-white w-full mt-2">
                Get A Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
