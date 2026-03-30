"use client"

import { MapPin, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = [
  {
    icon: MapPin,
    title: "Cloud Based Solution",
    description: "Our secure cloud solutions ensure your data is always accessible.",
  },
  {
    icon: Award,
    title: "Best Services",
    description: "We deliver excellence with our team of certified professionals.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Diamond Images */}
          <div className="relative h-[550px] hidden lg:flex items-center justify-center">
            {/* Decorative dot pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-[#FF5733] rounded-full" 
                  style={{
                    left: `${(i % 4) * 30}px`,
                    top: `${Math.floor(i / 4) * 30}px`
                  }}
                />
              ))}
            </div>

            {/* Main diamond image - larger */}
            <div 
              className="absolute left-1/2 top-1/2 w-80 h-80 overflow-hidden shadow-2xl rounded-3xl"
              style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
                alt="Professional woman working"
                fill
                className="object-cover"
                style={{ transform: "rotate(-45deg) scale(1.4)" }}
              />
            </div>
            
            {/* Secondary diamond image - overlapping */}
            <div 
              className="absolute left-[10%] top-[8%] w-56 h-56 overflow-hidden shadow-xl border-8 border-white rounded-2xl bg-white"
              style={{ transform: "rotate(45deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
                style={{ transform: "rotate(-45deg) scale(1.3)" }}
              />
            </div>

            {/* Orange accent diamond */}
            <div 
              className="absolute right-[10%] bottom-[12%] w-24 h-24 bg-[#FF5733] rounded-xl shadow-lg"
              style={{ transform: "rotate(45deg)" }}
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">About Company</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-[#111] text-balance">
              Customized Solutions to Meet Client <span className="text-[#FF5733]">Needs.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our vision is to seamlessly fuse tech-driven expertise with intuitive design 
              concepts to create digital solutions that delight, convert, and retain. 
              We work with businesses of all sizes to deliver results that matter.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 bg-[#FF5733] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#111] mb-1">{feature.title}</h4>
                    <p className="text-[#6B7280] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-[#FF5733] hover:bg-[#E64A2E] text-white font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/30 mt-4">
              Show More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
