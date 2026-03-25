import { TopBar } from "@/components/sections/top-bar"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Stats } from "@/components/sections/stats"
import { CaseStudies } from "@/components/sections/case-studies"
import { Testimonials } from "@/components/sections/testimonials"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { Blog } from "@/components/sections/blog"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Process />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}
