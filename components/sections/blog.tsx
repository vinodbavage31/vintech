"use client"

import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"

const posts = [
  {
    title: "Regional Manager Limited Time Management.",
    category: "Management",
    date: "Jan 15, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
  },
  {
    title: "The Complete Guide to Future App Development.",
    category: "Development",
    date: "Jan 12, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
  },
  {
    title: "Easy and Most Powerful Serverless Platforms.",
    category: "Technology",
    date: "Jan 10, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF5733] text-sm font-semibold uppercase tracking-wider mb-3">
            Explore News
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D1A]">
            EXPLORE BLOGS & NEWS
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#FF5733] text-white text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0D0D1A] mb-4 line-clamp-2 group-hover:text-[#FF5733] transition-colors">
                  {post.title}
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center text-[#FF5733] font-semibold text-sm hover:gap-3 transition-all gap-2"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
