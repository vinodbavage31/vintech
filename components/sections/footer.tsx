"use client"

import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const usefulLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Team", href: "#" },
  { name: "Portfolio", href: "#case-studies" },
  { name: "Testimonials", href: "#" },
]

const services = [
  { name: "Web Design", href: "#services" },
  { name: "App Development", href: "#services" },
  { name: "Digital Marketing", href: "#services" },
  { name: "SEO", href: "#services" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0D0D1A] text-white pt-24 pb-12 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#FF5733] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#FF5733] rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#FF5733]/40 transition-all">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">
                Sola<span className="text-[#FF5733]">Tek</span>
              </span>
            </a>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Simply stated, a well-designed business website should be professional, 
              accessible, and easy to navigate. Our agency delivers excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/30"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/30"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/30"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Useful Links</h4>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF5733] transition-colors text-base font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#FF5733] transition-colors text-base font-medium"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <p className="text-gray-400 text-base leading-relaxed">
              Subscribe to our newsletter to get information about our latest news and offers.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1A1A2E] border-[#1A1A2E] text-white placeholder:text-gray-500 focus:border-[#FF5733] h-12 rounded-lg"
              />
              <Button className="bg-[#FF5733] hover:bg-[#E64A2E] px-4 h-12 rounded-lg transition-all duration-300">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A1A2E] my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-base font-medium">
            © Copyright 2024 By SolaTek. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-[#FF5733] transition-colors text-base font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF5733] transition-colors text-base font-medium">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
