"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0D0D1A] via-[#1a1a2e] to-[#0D0D1A]">
      {/* BACKGROUND LAYER - Radial glow */}
      <div className="absolute inset-0">
        {/* Subtle radial gradient center-right */}
        <div 
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #FF5733 0%, transparent 70%)"
          }}
        />
        {/* Secondary glow for depth */}
        <div 
          className="absolute right-1/3 bottom-0 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #FF5733 0%, transparent 70%)"
          }}
        />
      </div>

      {/* SHAPE LAYER 1 - Orange diagonal shape (behind image) */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5733]"
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          transform: "skewX(-20deg) translateX(150px)",
          zIndex: 1
        }}
      />

      {/* SHAPE LAYER 2 - Dark navy overlay shape (for depth) */}
      <div 
        className="absolute right-1/3 top-0 w-[500px] h-full"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(13, 13, 26, 0.8) 50%, rgba(13, 13, 26, 0.95) 100%)",
          clipPath: "polygon(0% 0%, 100% 20%, 100% 100%, 0% 80%)",
          zIndex: 2
        }}
      />

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-auto py-20 lg:py-0">
          
          {/* LEFT COLUMN - Content */}
          <div className="text-white space-y-8 flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/15 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Best IT Solution Provider</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance">
              Elevate Your{" "}
              <span className="text-[#FF5733] block">Business</span>{" "}
              with IT Excellence
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              We have been operating for over a decade providing expert team services to businesses worldwide with cutting-edge technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Primary Button - Get Started */}
              <Button 
                size="lg"
                className="bg-[#FF5733] hover:bg-[#E64A2E] text-white font-bold px-10 h-14 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5733]/50 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Secondary Button - Watch Video */}
              <Button 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0D0D1A] font-bold px-10 h-14 rounded-full transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Our Video
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN - Image with layered shapes */}
          <div className="relative hidden lg:flex items-center justify-center min-h-screen lg:min-h-auto">
            
            {/* IMAGE LAYER - Professional working image */}
            <div className="relative w-full h-[600px] z-30">
              {/* Image container with rounded corners */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=700&fit=crop"
                  alt="Professional team collaboration"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D1A]/20 via-transparent to-transparent" />
              </div>

              {/* Floating orange accent element (top right) */}
              <div 
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF5733] rounded-3xl shadow-2xl shadow-[#FF5733]/40 hover:scale-110 transition-transform duration-300 z-40"
                style={{ transform: "rotate(-15deg)" }}
              />

              {/* Subtle shadow beneath image for depth */}
              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-[#FF5733] rounded-full blur-3xl opacity-20 -z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image - Below content on small screens */}
      <div className="lg:hidden relative w-full px-6 pb-12">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
            alt="Professional team collaboration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D1A]/20 via-transparent to-transparent" />
        </div>
        {/* Mobile accent shape */}
        <div 
          className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF5733] rounded-2xl shadow-lg -z-10"
          style={{ transform: "rotate(-15deg)" }}
        />
      </div>
    </section>
  )
}
