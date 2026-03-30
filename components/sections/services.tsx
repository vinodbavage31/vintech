"use client"

import { Globe, TrendingUp, Smartphone } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web solutions tailored to your business needs with modern technologies and responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing services to help your business grow and reach more customers online.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5c4ef?w=400&h=250&fit=crop",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-[#111] text-balance">
            EXCLUSIVE IT SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Icon Header */}
              <div className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#FF5733] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5733]/40 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111] mb-3">{service.title}</h3>
                <p className="text-base text-[#6B7280] leading-relaxed">{service.description}</p>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200 flex-1">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
