"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import MediumIcon from "./medium-icon"

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

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
    <section id="contact" ref={sectionRef} className="py-20 px-4 section-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card border-primary/20 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <p className="text-foreground">nileshgorade2004@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <p className="text-foreground">+91 8149078448</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/nileshgorde04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nilesh-gorade-6aa32a224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://medium.com/@nileshgorade2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <MediumIcon className="h-5 w-5 text-primary" />
                    <span className="sr-only">Medium</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
