"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

interface BlogPost {
  title: string
  snippet: string
  image?: string
  date: string
  link: string
  readTime: string
}

const BlogsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const blogPosts: BlogPost[] = [
    {
      title: "From Books to Breakthroughs: The Power of Learning by Doing",
      snippet:
        "In the beginning, I did what every dedicated student does, I followed the path laid before me. I studied from textbooks, completed assignments, and topped my class.",
      image: "/carbon.jpg?height=300&width=500",
      date: "May 24, 2025",
      link: "https://medium.com/@nileshgorade2004/from-books-to-breakthroughs-the-power-of-learning-by-doing-bfd66699dd0f",
      readTime: "4 min read",
    },
    {
      title: "Are No-Code Platforms the End of Traditional Software Development?",
      snippet:
        "No-code and low-code platforms have exploded in popularity. Tools like Bubble, Webflow, and Microsoft Power Apps allow people to build apps without writing a single line of code.",
      image: "/bandwidth.jpg?height=300&width=500",
      date: "Feb 15, 2025",
      link: "https://medium.com/@nileshgorade2004/are-no-code-platforms-the-end-of-traditional-software-development-dc11055d7a4b",
      readTime: "4 min read",
    },
    {
      title: "It’s More Than Just Code: Mastering Learning, Coding, and Career Growth",
      snippet:
        "When people think about coding, the first thing that comes to mind is problem-solving. But it's also about learning mindset and career growth.",
      image: "/diabetes.jpg?height=300&width=500",
      date: "Dec 16, 2024",
      link: "https://medium.com/@nileshgorade2004/its-more-than-just-code-mastering-learning-coding-and-career-growth-113e6349bbb0",
      readTime: "4 min read",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="blogs" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Latest <span className="text-primary">Blogs</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights on software development, machine learning, and technology trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="project-card glass-card border-primary/20 overflow-hidden h-full flex flex-col"
            >
              {post.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}

              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-primary line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.snippet}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read More
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a href="https://medium.com/@nileshgorade2004" target="_blank" rel="noopener noreferrer">
              View All Blogs
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection
