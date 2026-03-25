"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative bg-[#0D0D1A] min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute right-0 top-0 w-full h-full">
          {/* Orange diagonal shape */}
          <div 
            className="absolute right-0 top-0 w-[80%] h-full bg-[#FF5733]"
            style={{
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
          {/* Dark overlay triangle */}
          <div 
            className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-[#0D0D1A]"
            style={{
              clipPath: "polygon(100% 30%, 100% 100%, 30% 100%)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-4">
              Best IT Solution Provider
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Elevate Your{" "}
              <span className="text-[#FF5733]">Business</span> with IT Excellence
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              We have been operating for over a decade providing expert team services
              to businesses worldwide with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#FF5733] hover:bg-[#E64A2E] text-white px-8"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0D0D1A] px-8"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Video
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop"
                alt="Professional businessman smiling"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
