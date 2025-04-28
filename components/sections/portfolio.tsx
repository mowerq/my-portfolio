"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  category: string
}

export default function Portfolio() {
  const { t } = useTranslation("common")

  // Sample projects based on skills mentioned in CV
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A React-based admin dashboard for e-commerce platforms with data visualization and inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/mowerq",
      category: "frontend",
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Full-stack application for task management with user authentication and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
      github: "https://github.com/mowerq",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Customer Portal",
      description: "A micro-frontend application built during my internship at Aygaz A.Ş.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Nx", "Webpack", "Babel"],
      link: "#",
      category: "frontend",
    },
    {
      id: 4,
      title: "Inventory API",
      description: "RESTful API for inventory management built with Java Spring Boot.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/mowerq",
      category: "backend",
    },
    {
      id: 5,
      title: "Company Website",
      description: "PHP-based company website developed during my internship at Webbeyaz.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      link: "#",
      category: "fullstack",
    },
    {
      id: 6,
      title: "Weather App",
      description: "A weather application that fetches and displays weather data from an API.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "API Integration", "CSS"],
      link: "#",
      github: "https://github.com/mowerq",
      category: "frontend",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center space-x-3">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{t("myPortfolio")}</h2>
      </div>

      <Tabs defaultValue="all" className="mb-6 sm:mb-8">
        <TabsList className="bg-muted border border-border p-1 overflow-x-auto flex-nowrap w-full">
          <TabsTrigger
            value="all"
            onClick={() => setFilter("all")}
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs sm:text-sm"
          >
            {t("allProjects")}
          </TabsTrigger>
          <TabsTrigger
            value="frontend"
            onClick={() => setFilter("frontend")}
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs sm:text-sm"
          >
            {t("frontend")}
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            onClick={() => setFilter("backend")}
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs sm:text-sm"
          >
            {t("backend")}
          </TabsTrigger>
          <TabsTrigger
            value="fullstack"
            onClick={() => setFilter("fullstack")}
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs sm:text-sm"
          >
            {t("fullStack")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="frontend" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="backend" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden bg-card text-card-foreground border-border group hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-36 sm:h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-emerald-500 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 text-white p-1.5 sm:p-2 rounded-full hover:bg-zinc-600 transition-colors"
                aria-label="View source code on GitHub"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-3 sm:mb-4 text-xs">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] sm:text-xs bg-muted text-muted-foreground px-1.5 sm:px-2 py-0.5 rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
