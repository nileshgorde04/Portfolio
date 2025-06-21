"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BadgeIcon as Certificate } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Achievement {
  title: string
  organization: string
  year: string
  description: string
}

interface Certification {
  title: string
  organization: string
  year: string
  credential?: string
}

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const awards: Achievement[] = [
    {
      title: "Silver Medalist",
      organization: "MIT-WPU",
      year: "2023",
      description: "Awarded for academic excellence and outstanding performance.",
    },
    {
      title: "Hackathon Runner-Up",
      organization: "MIT-WPU",
      year: "2022",
      description: "Secured second place in the university-wide hackathon for innovative solution.",
    },
  ]

  const certifications: Certification[] = [
    {
      title: "Data Analytics and Visualization",
      organization: "Accenture North America",
      year: "2023",
    },
    {
      title: "Cloud Computing",
      organization: "EdX",
      year: "2022",
    },
    {
      title: "Data Analytics Essentials",
      organization: "Cisco",
      year: "2022",
    },
    {
      title: "Veritas Hackathon 2023 Participant",
      organization: "Veritas",
      year: "2023",
    },
    {
      title: "Packet Tracer Training",
      organization: "Cisco",
      year: "2021",
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
    <section id="achievements" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Tabs defaultValue="awards" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger
              value="awards"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Awards
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="awards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="glass-card border-primary/20 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{award.title}</h3>
                        <p className="text-muted-foreground">
                          {award.organization} • {award.year}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card border-primary/20 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Certificate className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {cert.organization} • {cert.year}
                        </p>
                      </div>
                    </div>
                    {cert.credential && (
                      <p className="text-sm text-muted-foreground">Credential ID: {cert.credential}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default AchievementsSection
