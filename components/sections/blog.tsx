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
    <section id="blog" className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF5733]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">Explore News</span>
          </div>
          <h2 className="text-5xl font-bold text-[#111] text-balance">
            EXPLORE BLOGS & NEWS
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-4 py-2 bg-[#FF5733] text-white text-xs font-bold rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 text-[#6B7280] text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#111] mb-4 line-clamp-2 group-hover:text-[#FF5733] transition-colors flex-1">
                  {post.title}
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center text-[#FF5733] font-semibold text-sm hover:gap-3 transition-all gap-2 mt-4"
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
