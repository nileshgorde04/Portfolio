"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

interface Experience {
  company: string
  position: string
  period: string
  description: string
  skills: string[]
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const experiences: Experience[] = [
    {
      company: "SkillVertex",
      position: "Data Science Intern",
      period: "June 2023 - August 2023",
      description:
        "Led a team in implementing regression algorithms for predictive analytics. Developed data visualization dashboards to present insights to stakeholders.",
      skills: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "Team Leadership"],
    },
    {
      company: "InternPe",
      position: "Machine Learning Intern",
      period: "January 2023 - March 2023",
      description:
        "Worked on neural networks and deep learning models for real-time applications. Implemented and optimized ML algorithms for improved performance.",
      skills: ["Neural Networks", "Deep Learning", "TensorFlow", "Python", "Algorithm Optimization"],
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
    <section id="experience" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card border-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                </div>
                <div className="flex items-center mb-4 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
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

export default ExperienceSection
