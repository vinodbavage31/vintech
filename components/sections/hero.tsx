"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative bg-[#0D0D1A] py-24 lg:py-32 overflow-hidden">
      {/* Geometric background shapes */}
      <div className="absolute inset-0">
        {/* Large orange diagonal shape - right side */}
        <div 
          className="absolute -right-20 -top-20 w-[800px] h-[800px] bg-[#FF5733] rounded-full opacity-20 blur-3xl"
          style={{ transform: "translate(20%, -10%)" }}
        />
        
        {/* V shape divider */}
        <div className="absolute right-0 top-0 w-2/3 h-full" style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)"
        }}>
          <div className="absolute inset-0 bg-gradient-to-l from-[#FF5733]/10 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left: Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/80">Best IT Solution Provider</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
              Elevate Your{" "}
              <span className="text-[#FF5733] block">Business</span> with IT Excellence
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              We have been operating for over a decade providing expert team services to businesses worldwide with cutting-edge technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-[#FF5733] hover:bg-[#E64A2E] text-white font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/30"
              >
                Get Started
              </Button>
              <Button 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0D0D1A] font-semibold px-8 h-12 rounded-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Our Video
              </Button>
            </div>
          </div>

          {/* Right: Image with overlay */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Background decorative shapes */}
            <div className="absolute -inset-20 bg-gradient-to-br from-[#FF5733]/20 to-transparent rounded-3xl blur-2xl" />
            
            {/* Main image container */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Orange accent shape */}
              <div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FF5733] rounded-3xl blur-2xl opacity-30 -z-10"
                style={{ transform: "rotate(45deg)" }}
              />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                  alt="Professional businessman"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D1A] via-transparent to-transparent opacity-30" />
              </div>

              {/* Floating accent element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF5733] rounded-2xl shadow-lg opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
