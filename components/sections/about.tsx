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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Diamond Images */}
          <div className="relative h-[500px]">
            {/* Main diamond image */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 overflow-hidden shadow-2xl"
              style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
                alt="Professional woman working"
                fill
                className="object-cover"
                style={{ transform: "rotate(-45deg) scale(1.5)" }}
              />
            </div>
            
            {/* Secondary diamond image - positioned above */}
            <div 
              className="absolute left-[20%] top-[10%] w-48 h-48 overflow-hidden shadow-xl border-4 border-white"
              style={{ transform: "rotate(45deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
                style={{ transform: "rotate(-45deg) scale(1.5)" }}
              />
            </div>

            {/* Orange accent diamond */}
            <div 
              className="absolute right-[15%] bottom-[15%] w-20 h-20 bg-[#FF5733]"
              style={{ transform: "rotate(45deg)" }}
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
              About Company
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D1A] mb-6 text-balance">
              Customized Solutions to Meet Client{" "}
              <span className="text-[#FF5733]">Needs.</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our vision is to seamlessly fuse tech-driven expertise with intuitive design 
              concepts to create digital solutions that delight, convert, and retain. 
              We work with businesses of all sizes to deliver results that matter.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FF5733]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#FF5733]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0D0D1A] mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#FF5733] hover:bg-[#E64A2E] text-white px-8">
              Show More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
