"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0D0D1A]">
      {/* BACKGROUND LAYER - Circular radial pattern */}
      <div className="absolute inset-0 z-0">
        {/* Subtle concentric circles pattern on left side */}
        <svg 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <circle 
              key={i}
              cx="300" 
              cy="300" 
              r={50 * i} 
              fill="none" 
              stroke="#1a1a2e" 
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      {/* V-SHAPE LAYER - The iconic diagonal design */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        
        {/* ORANGE DIAGONAL BAR - Main V component */}
        <div 
          className="absolute top-0 right-1/4 w-[300px] h-screen bg-[#FF5733]"
          style={{
            transform: "skewX(-25deg) translateX(80px)",
            transformOrigin: "top center"
          }}
        />
        
        {/* DARK NAVY DIAGONAL BAR - Secondary V component for depth */}
        <div 
          className="absolute top-0 right-1/3 w-[200px] h-screen bg-[#0D0D1A] opacity-90"
          style={{
            transform: "skewX(15deg) translateX(-60px)",
            transformOrigin: "top center"
          }}
        />

        {/* GRADIENT OVERLAY for smooth transition */}
        <div 
          className="absolute right-1/4 top-0 w-96 h-screen bg-gradient-to-l from-[#FF5733] via-[#FF5733]/70 to-transparent opacity-50"
          style={{
            zIndex: 15
          }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 w-full h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-8 items-center h-full">
          
          {/* LEFT COLUMN - Text Content */}
          <div className="text-white space-y-6 flex flex-col justify-center py-20 lg:py-0">
            
            {/* Small Label with Line */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#FF5733]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5733]">BEST IT SOLUTION PROVIDER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Elevate Your{" "}
              <span className="text-[#FF5733]">Business</span> with IT{" "}
              Excellence
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
              We have been operating for over a decade prvid have beens expert IT solutions to businesses worldwide.
            </p>

            {/* CTA Section */}
            <div className="flex items-center gap-4 pt-4">
              {/* Primary CTA - Get Started Button */}
              <Button 
                className="bg-[#FF5733] hover:bg-[#E64A2E] text-white font-bold px-8 h-12 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/40"
              >
                GET STARTED
              </Button>

              {/* Secondary CTA - Meet Our Experts */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5733] to-[#E64A2E] flex items-center justify-center text-white text-xs font-bold shadow-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                    alt="Expert avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-white group-hover:text-[#FF5733] transition-colors">MEET OUR EXPERTS</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Image (positioned over V-shape) */}
          <div className="relative hidden lg:flex items-center justify-end h-full">
            {/* Image positioned to overlap with V-shape */}
            <div className="relative w-full max-w-2xl h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                alt="Professional working with design"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Warm light glow effect near top-right */}
            <div 
              className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733] rounded-full blur-3xl opacity-20 -z-10"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simplified diagonal */}
      <div className="lg:hidden relative w-full flex flex-col items-center justify-center min-h-screen py-20 px-6">
        {/* Simplified shape for mobile */}
        <div 
          className="absolute top-0 right-0 w-48 h-96 bg-[#FF5733] opacity-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        
        {/* Text content */}
        <div className="relative z-10 text-center space-y-6 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5733] block">BEST IT SOLUTION PROVIDER</span>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Elevate Your <span className="text-[#FF5733]">Business</span> with IT Excellence
          </h1>
          <p className="text-base text-gray-400 max-w-sm mx-auto">
            We have been operating for over a decade providing expert IT solutions to businesses worldwide.
          </p>
          <Button 
            className="bg-[#FF5733] hover:bg-[#E64A2E] text-white font-bold px-8 h-12 rounded-full w-full sm:w-auto"
          >
            GET STARTED
          </Button>
        </div>

        {/* Image below text on mobile */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
            alt="Professional working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
