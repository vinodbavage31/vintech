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
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">Work Process</span>
          </div>
          <h2 className="text-5xl font-bold text-[#111] text-balance">
            WORKS IN 3 EASY STEPS
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed line connector - hidden on mobile */}
          <div className="hidden lg:block absolute top-32 left-1/3 right-1/3 border-t-2 border-dashed border-[#FF5733]/30 h-0" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Circle with number - positioned absolutely for dashed line */}
                <div className="flex flex-col items-center">
                  {/* Image Circle */}
                  <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-200">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    {/* Number badge - larger */}
                    <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#FF5733] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl ring-4 ring-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#111] mb-3">{step.title}</h3>
                  <p className="text-[#6B7280] text-base max-w-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-[#6B7280] mt-20 text-base font-medium">
          We are following a &quot;Excellent Customer Experience since 1999&quot;
        </p>
      </div>
    </section>
  )
}
