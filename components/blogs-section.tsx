"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

interface BlogPost {
  title: string
  snippet: string
  date: string
  link: string
  readTime: string
}

const BlogsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  // Mock blog data - replace with actual Medium RSS/API integration
  const blogPosts: BlogPost[] = [
    {
      title: "Building Scalable Web Applications with Spring Boot and React",
      snippet:
        "Learn how to create robust full-stack applications using Spring Boot for the backend and React for the frontend. This comprehensive guide covers best practices, security, and deployment strategies.",
      date: "Dec 15, 2023",
      link: "https://medium.com/@nileshgorade2004",
      readTime: "8 min read",
    },
    {
      title: "Machine Learning in Production: From Model to Deployment",
      snippet:
        "A deep dive into deploying machine learning models in production environments. Covering containerization, monitoring, and scaling ML applications for real-world use cases.",
      date: "Nov 28, 2023",
      link: "https://medium.com/@nileshgorade2004",
      readTime: "12 min read",
    },
    {
      title: "Optimizing Database Performance in Java Applications",
      snippet:
        "Explore advanced techniques for optimizing database queries, connection pooling, and caching strategies in Java applications. Learn how to identify and resolve performance bottlenecks.",
      date: "Nov 10, 2023",
      link: "https://medium.com/@nileshgorade2004",
      readTime: "10 min read",
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
                <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
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
