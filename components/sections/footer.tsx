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
    <footer id="contact" className="bg-[#0D0D1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#FF5733] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">
                Sola<span className="text-[#FF5733]">Tek</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Simply stated, a well-designed business website should be professional, 
              accessible, and easy to navigate. Our agency delivers excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#FF5733] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF5733] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#FF5733] transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to get information about our latest news and offers.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1A1A2E] border-[#1A1A2E] text-white placeholder:text-gray-500 focus:border-[#FF5733]"
              />
              <Button className="bg-[#FF5733] hover:bg-[#E64A2E] px-4">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A2E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright 2024 By SolaTek
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#FF5733] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF5733] transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
