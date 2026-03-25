"use client"

import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Plan and Research",
    description: "We start with a deep understanding of your goals through research and strategy development.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Creating stunning designs and prototypes to visualize the final product before development.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=200&h=200&fit=crop",
  },
  {
    number: "03",
    title: "Final Solution",
    description: "Delivering a polished, responsive product that exceeds expectations and drives results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
  },
]

export function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
            Work Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D1A]">
            WORKS IN 3 EASY STEPS
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed line connector - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/4 left-1/4 right-1/4 border-t-2 border-dashed border-gray-300" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  {/* Number badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#FF5733] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0D0D1A] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          We are following a &quot;Excellent Customer Experience since 1999&quot;
        </p>
      </div>
    </section>
  )
}
