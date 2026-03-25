"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    title: "Travel & Tour Mobile Apps Design",
    category: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Professional Website Design",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    title: "Professional Website Design",
    category: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    featured: false,
  },
]

export function CaseStudies() {
  const featured = caseStudies.find((c) => c.featured)
  const others = caseStudies.filter((c) => !c.featured)

  return (
    <section id="case-studies" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            OUR LATEST CASE STUDIES
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Case Study */}
          {featured && (
            <div className="group relative bg-[#1A1A2E] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#FF5733] text-white text-xs font-semibold rounded-full mb-3">
                  {featured.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{featured.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center text-[#FF5733] font-semibold hover:gap-3 transition-all gap-2"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Other Case Studies */}
          <div className="space-y-8">
            {others.map((study, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row bg-[#1A1A2E] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-[#FF5733] text-white text-xs font-semibold rounded-full mb-3 w-fit">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#FF5733] font-semibold hover:gap-3 transition-all gap-2"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
