"use client"

import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-[#0D0D1A] text-white py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#FF5733] transition-colors">
            <Phone className="w-4 h-4" />
            <span>+1 234 567 890</span>
          </a>
          <a href="mailto:info@solatek.com" className="flex items-center gap-2 hover:text-[#FF5733] transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@solatek.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#FF5733] transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#FF5733] transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#FF5733] transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#FF5733] transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
