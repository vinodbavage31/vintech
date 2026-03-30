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
    <section id="case-studies" className="relative py-24 bg-[#0D0D1A] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5733]/5 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Case Studies</span>
          </div>
          <h2 className="text-5xl font-bold text-white text-balance">
            OUR LATEST CASE STUDIES
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Case Study */}
          {featured && (
            <div className="group relative bg-gradient-to-br from-[#1A1A2E] to-[#0D0D1A] rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl hover:shadow-[#FF5733]/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-96">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-2 bg-[#FF5733] text-white text-xs font-bold rounded-full mb-4 shadow-lg">
                  {featured.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{featured.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center text-[#FF5733] font-semibold group/link hover:gap-3 transition-all gap-2 text-lg"
                >
                  View Details <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

          {/* Other Case Studies */}
          <div className="space-y-8">
            {others.map((study, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1A1A2E] to-[#0D0D1A] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#FF5733]/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="relative w-full sm:w-56 h-56 flex-shrink-0 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A] via-transparent to-transparent opacity-40" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="inline-block px-4 py-2 bg-[#FF5733] text-white text-xs font-bold rounded-full mb-4 w-fit shadow-lg">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                    <a
                      href="#"
                      className="inline-flex items-center text-[#FF5733] font-semibold group/link hover:gap-3 transition-all gap-2"
                    >
                      View Details <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
