"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  codeLink: string  // ← new
  demoLink?: string 
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      title: "Carbon Coal Control",
      description:
        "Web application for carbon emission management in coal mines, helping companies track and reduce their environmental impact.",
      techStack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "/carbon.jpg?height=300&width=500",
      codeLink: "https://github.com/nileshgorde04/Carbon-Coal-Control",
    },
    {
      title: "Bandwidth Utilization Optimization",
      description:
        "Implemented LSTM models to predict and optimize network bandwidth utilization, improving efficiency by 35%.",
      techStack: ["Python", "TensorFlow", "Flask", "Pandas"],
      image: "/bandwidth.jpg?height=300&width=500",
      codeLink: "https://github.com/nileshgorde04/Network-Bandwidth-Utilization",
    },
    {
      title: "Diabetes Prediction Web App",
      description:
        "Machine learning-powered web application that predicts diabetes risk based on patient data with 92% accuracy.",
      techStack: ["Java", "Spring Boot", "React", "Scikit-learn"],
      image: "/diabetes.jpg?height=300&width=500",
      codeLink: "https://github.com/nileshgorde04/bandwidth-optimization",
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
    <section id="projects" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card glass-card border-primary/20 overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                >
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                </a>
                <Button size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
