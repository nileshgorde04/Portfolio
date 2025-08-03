"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mic, FileText } from "lucide-react"

const ResearchSection = () => {
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
    <section id="research" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research <span className="text-primary">Paper</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-primary/20 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                An IoT-Powered Real-Time Cattle Health Monitoring System for Enhanced Agricultural Productivity
              </h3>
              <p className="text-muted-foreground mb-4">
                Research Paper • Presented at ICT4SD 2025 Conference
              </p>
              <p className="text-muted-foreground mb-6">
                This research presents an innovative IoT-based system for real-time cattle health monitoring to enhance agricultural productivity. The system utilizes wearable sensors to continuously monitor vital parameters such as body temperature, heart rate, and activity levels, transmitting data wirelessly to a cloud server for analysis and early disease detection through a user-friendly mobile application.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Contributions:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>IoT-based real-time cattle health monitoring</li>
                  <li>Wearable sensor integration for vital parameters</li>
                  <li>Cost-effective solution for smallholder farmers</li>
                  <li>Mobile application for real-time alerts</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["IoT", "Wearable Sensors", "Cloud Computing", "Mobile App"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Role:</h4>
                <p className="text-muted-foreground">Lead Author & Co-Author at ICT4SD 2025</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                <a href="https://www.youtube.com/watch?v=J73On-ga6Ss&t=2855s" target="_blank" rel="noopener noreferrer">
                  <Mic className="mr-2 h-4 w-4" /> Watch Presentation
                </a>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground">
                <a href="https://drive.google.com/file/d/1QIbvxFgyUUeHn3lcpjl2qKQOUkYgdqjM/view" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Read Full Paper
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ResearchSection