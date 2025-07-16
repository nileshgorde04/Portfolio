"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import MediumIcon from "./medium-icon"
import Image from "next/image"

// Custom LeetCode icon component
const LeetCode = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.661 1.837-.661s1.357.194 1.823.661l2.697 2.606c.514.515 1.357.497 1.823.031.467-.466.467-1.222.031-1.688l-2.728-2.636c-.994-.994-2.317-1.478-3.637-1.478s-2.607.484-3.6 1.478l-4.33 4.363C1.24 12.82.757 14.176.757 15.553c0 1.376.466 2.732 1.47 3.731l4.363 4.363c.994.993 2.317 1.478 3.637 1.478 1.32 0 2.643-.485 3.637-1.478l2.728-2.636c.466-.467.466-1.223-.03-1.689-.467-.467-1.319-.466-1.833.03l.03-.03z" />
      <path d="M20.413 7.5a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652z" />
    </svg>
  )
}

const skills = [
  "Java Developer",
  "Full Stack Engineer",
  "AI/ML Enthusiast",
  "Cloud Explorer",
  "DSA Problem Solver",
  "Tech Blogger",
  "System Design Learner"
]


const HeroSection = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(70)

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex]

    const handleTyping = () => {
      if (!isDeleting && displayText === currentSkill) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length)
        return
      }

      const delta = isDeleting ? 20 : typingSpeed

      setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentSkill.substring(0, displayText.length - 1)
            : currentSkill.substring(0, displayText.length + 1),
        )
      }, delta)
    }

    const typingTimer = setTimeout(handleTyping, 30)
    return () => clearTimeout(typingTimer)
  }, [displayText, currentSkillIndex, isDeleting, typingSpeed])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 z-0"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Nilesh Gorade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Building high-performance applications with Java, Spring Boot, React, and AI/ML.
            </p>
            <div className="h-8 md:h-10">
              <p className="text-lg md:text-xl text-primary typing-animation">{displayText}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume-off-campus.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Button>
              </a>
              <a
                href="https://github.com/nileshgorde04"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/nileshgorade/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              </a>
              <a
                href="https://medium.com/@nileshgorade2004"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <MediumIcon className="mr-2 h-4 w-4" /> Medium
              </Button>
              </a>
              <a
                href="https://leetcode.com/u/nileshgorade/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <LeetCode className="mr-2 h-4 w-4" /> LeetCode
              </Button>
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-md"></div>
              <div className="glass-card absolute inset-2 rounded-full overflow-hidden border border-primary/30">
                <Image
                  src="/profile-photo.png"
                  alt="Nilesh Gorade"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
