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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D1A]">
            EXCLUSIVE IT SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Header */}
              <div className="p-6 border-b">
                <div className="w-14 h-14 bg-[#FF5733]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF5733] transition-colors">
                  <service.icon className="w-7 h-7 text-[#FF5733] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D1A] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
