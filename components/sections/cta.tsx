"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-[#FF5733] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-white text-xl md:text-2xl font-bold text-center md:text-left">
            Elevating Customer Experience.
          </h3>
          <Button 
            size="lg" 
            className="bg-[#0D0D1A] hover:bg-[#1A1A2E] text-white px-8"
          >
            <Phone className="w-4 h-4 mr-2" />
            +1 800 000 9876
          </Button>
        </div>
      </div>
    </section>
  )
}
