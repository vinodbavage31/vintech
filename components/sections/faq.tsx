"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "What Medical Services Do You Provide?",
    answer: "We provide comprehensive IT solutions including web development, mobile app development, digital marketing, cloud solutions, and IT consulting services tailored to your business needs.",
  },
  {
    question: "What is your customer geography?",
    answer: "We serve clients globally with a strong presence in North America, Europe, and Asia-Pacific regions. Our remote-first approach allows us to work with businesses anywhere in the world.",
  },
  {
    question: "What are the main incentives we serve?",
    answer: "Our main incentives include competitive pricing, dedicated support, flexible engagement models, and a commitment to delivering projects on time and within budget.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - FAQ Accordion */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">Client FAQs</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-[#111] text-balance">
              Most Common{" "}
              <span className="text-[#FF5733]">Question?</span>
            </h2>

            {/* Accordion */}
            <div className="space-y-4 pt-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "border-[#FF5733] bg-white shadow-lg"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                      openIndex === index ? "bg-[#FF5733]/5" : "hover:bg-gray-50"
                    }`}
                  >
                    <span className={`font-semibold text-lg ${
                      openIndex === index ? "text-[#FF5733]" : "text-[#111]"
                    }`}>{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#FF5733] transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="p-6 pt-2 text-[#6B7280] text-base leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
              alt="Person working at desk"
              fill
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
