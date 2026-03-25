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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Heading and Featured Client */}
          <div>
            <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
              Client Review
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D1A] mb-12 text-balance">
              Customized Solutions to Meet Client{" "}
              <span className="text-[#FF5733]">Needs.</span>
            </h2>

            {/* Featured Client */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#0D0D1A] text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Right - Testimonial Cards */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#0D0D1A] shadow-xl"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-[#FF5733] ${
                        activeIndex === index ? "text-[#FF5733]" : "text-[#FF5733]"
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    activeIndex === index ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <h5
                      className={`font-semibold ${
                        activeIndex === index ? "text-white" : "text-[#0D0D1A]"
                      }`}
                    >
                      {testimonial.name}
                    </h5>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF5733] text-sm font-semibold hover:underline"
                  >
                    View Full Review
                  </a>
                </div>
              </div>
            ))}

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-[#FF5733]" : "bg-gray-300"
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
