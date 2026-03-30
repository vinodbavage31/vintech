"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative bg-[#FF5733] py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#E64A2E] rounded-full opacity-40 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#E64A2E] rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-4xl md:text-5xl font-bold text-balance leading-tight">
              Elevating Customer Experience.
            </h3>
          </div>
          <Button 
            size="lg"
            className="bg-[#0D0D1A] hover:bg-[#1A1A2E] text-white font-semibold px-8 h-14 rounded-xl transition-all duration-300 hover:shadow-lg flex-shrink-0 group"
          >
            <Phone className="w-5 h-5 mr-2" />
            +1 800 000 9876
          </Button>
        </div>
      </div>
    </section>
  )
}
