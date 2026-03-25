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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - FAQ Accordion */}
          <div>
            <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
              Client FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D1A] mb-8 text-balance">
              Most Common{" "}
              <span className="text-[#FF5733]">Question?</span>
            </h2>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#0D0D1A]">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF5733] transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 pt-0 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
              alt="Person working at desk"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
