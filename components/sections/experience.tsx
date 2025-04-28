"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { useTranslation } from "react-i18next"

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string
}

export default function Experience() {
  const { t } = useTranslation("common")

  const experiences: ExperienceItem[] = [
    {
      title: "Full-Stack Web Developer (Front-End Focus)",
      company: "BiSoft Bilgi Teknolojileri A.Ş.",
      period: "07.09.2024 - Present",
      description:
        "As a Full-Stack Web Developer focused on React, I also work with Java Spring and Python for backend tasks. I've gained familiarity with CI/CD processes and tools like Docker, Jenkins, GitLab, and Kubernetes in an Agile/Scrum environment.",
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Webbeyaz İnternet Hizmetleri",
      period: "22.01.2024 - 01.03.2024",
      description:
        "I learned PHP and used as the backend of a project in this internship. I only used HTML, CSS and Vanilla Javascript for frontend.",
    },
    {
      title: "Bootcamp",
      company: "Koç & Microsoft & Elev8",
      period: "01.07.2023 - 01.10.2023",
      description:
        "I've developed three web projects here and took lots of classes for self improvement, azure, html, css, js and react.",
    },
    {
      title: "Front-end Developer Intern",
      company: "Aygaz A.Ş.",
      period: "01.10.2023 - 31.12.2023",
      description:
        "I worked on a micro-frontend project that I used some new technologies for me like nx, webpack, babel besides html, css, js, react that I had already used.",
    },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center space-x-3">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{t("workExperience")}</h2>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-card text-card-foreground border-border">
            <CardContent className="p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/5 rounded-bl-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">{exp.title}</h3>
                  <p className="text-emerald-600 dark:text-emerald-500 font-medium text-xs sm:text-sm">{exp.company}</p>
                </div>
                <div className="flex items-center text-muted-foreground md:text-right bg-background/80 dark:bg-zinc-800/80 px-2 py-1 rounded-md border border-border text-xs whitespace-nowrap">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 flex-shrink-0" />
                  <span className="text-xs">{exp.period}</span>
                </div>
              </div>
              <p className="text-foreground text-xs sm:text-sm">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
