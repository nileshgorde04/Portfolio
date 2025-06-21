"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Wrench } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: string[]
  color: string
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "HTML", "CSS", "JavaScript"],
      color: "text-blue-500",
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Java", "Spring Boot", "Node.js"],
      color: "text-green-500",
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL"],
      color: "text-purple-500",
    },
    {
      name: "Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git/GitHub", "Postman", "Python", "Cloud Computing"],
      color: "text-orange-500",
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card border-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <div className={`flex items-center mb-4 ${category.color}`}>
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2 text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
