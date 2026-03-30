"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    name: "Brandon A. Vela",
    role: "CEO, Tech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Absolutely awesome! I can't say enough about our experience. Through the years I've used many marketing companies and this team has been the most creative and responsive to our creative marketing needs.",
  },
  {
    name: "Sarah M. Johnson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Pros/features we appreciate: A. Convenient dashboard designed to give you monthly recap and all information. B. On demand support is answered ASAP, professional methods to deliver work.",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Heading and Featured Client */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">Client Review</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-[#111] text-balance">
              Customized Solutions to Meet Client <span className="text-[#FF5733]">Needs.</span>
            </h2>

            {/* Featured Client Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#FF5733]/20">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#111] text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-[#6B7280] text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF5733] text-[#FF5733]" />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Testimonial Cards */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer border-2 ${
                  activeIndex === index
                    ? "bg-[#0D0D1A] border-[#FF5733] shadow-lg shadow-[#FF5733]/20"
                    : "bg-white border-gray-200 hover:border-[#FF5733]/50"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-[#FF5733] text-[#FF5733]`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    activeIndex === index ? "text-gray-300" : "text-[#6B7280]"
                  }`}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <h5
                      className={`font-bold text-lg ${
                        activeIndex === index ? "text-white" : "text-[#111]"
                      }`}
                    >
                      {testimonial.name}
                    </h5>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF5733] text-sm font-semibold hover:gap-2 transition-all inline-flex items-center gap-1"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}

            {/* Dot Navigation */}
            <div className="flex justify-center gap-3 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "w-8 h-3 bg-[#FF5733]" 
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
