"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react"

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="about" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I’m a results-driven Full Stack Developer with expertise in Java, Spring Boot, React, Node.js, and PostgreSQL,
              passionate about building scalable, secure, and real-time systems. With a strong foundation in AI/ML and Cloud Computing, 
              I’ve delivered production-grade applications blending backend efficiency with modern UI/UX.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Currently in the second year of my MCA at MIT-WPU, where I topped the first year, and with a strong academic background in my bachelor's degree, 
              I combine academic excellence with hands-on experience. I’ve built and contributed to real-world systems across diverse domains -
              from enterprise platforms to intelligent applications - applying deep technical skills and a product-thinking mindset.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From securing the Runner-Up title at MIT-WPU Hackathon to solving 500+ DSA problems across LeetCode, GFG, and HackerRank, 
              I consistently push myself to solve real-world problems through code. 
              I'm currently diving deeper into cloud-native development, contributing to open source, 
              and actively engaging the dev community with 200K+ impressions on LinkedIn.
            </p>
          </div>

          <div>
            <Card className="glass-card border-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Masters in Computer Application</p>
            
                    <p className="text-muted-foreground">CGPA: 9.33</p>
                    <p className="text-muted-foreground">MIT World Peace University, Pune</p>
                    <p className="text-sm text-muted-foreground">Current</p>
            
                  </div>
                  <div>
                    <p className="font-medium">Bachelor's Degree, Computer Science</p>
                    <p className="text-muted-foreground">CGPA: 9.93</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Pune, Maharashtra</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">nileshgorade2004@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">+91 8149078448</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
