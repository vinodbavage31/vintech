"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 120, suffix: "K+", label: "Retina Clients" },
  { value: 700, suffix: "+", label: "Project Campaigns" },
  { value: 100, suffix: "%", label: "Build Guarantee" },
  { value: 280, suffix: "+", label: "Global Partners" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative bg-[#0D0D1A] py-24 overflow-hidden">
      {/* Gradient background element */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FF5733]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5733]/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Orange gradient strip */}
        <div className="absolute -top-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#FF5733] to-transparent" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-8">
              <div className="inline-flex flex-col items-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-base text-gray-400 mt-3 font-medium">{stat.label}</p>
              </div>
              
              {/* Divider (except last) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#FF5733]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
