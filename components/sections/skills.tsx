"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, GitBranch, Users, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Skills() {
  const { t } = useTranslation("common")

  const technicalSkills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Java Spring", level: 75 },
    { name: "Python", level: 70 },
    { name: "Node.js/Express.js", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "PHP", level: 60 },
    { name: "PostgreSQL", level: 65 },
    { name: "MongoDB", level: 65 },
  ]

  const toolsSkills = [
    { name: "Git/GitLab", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Kubernetes", level: 65 },
    { name: "Jenkins", level: 65 },
    { name: "Algorithms", level: 75 },
  ]

  const softSkills = [
    { name: "Analytical Thinking", level: 85 },
    { name: "Teamwork", level: 80 },
  ]

  const languages = [
    { name: "Turkish", level: 100 },
    { name: "English", level: 85 },
  ]

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-3 sm:mb-4 group">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-xs sm:text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {name}
        </span>
        <span className="text-emerald-600 dark:text-emerald-500 text-xs sm:text-sm">{level}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div
          className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-500 ease-out group-hover:from-emerald-500 group-hover:to-emerald-300 relative shine"
          style={{ width: `${level}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 sm:w-2 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center space-x-3">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{t("mySkills")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <Card className="bg-card text-card-foreground border-border">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="p-1.5 bg-emerald-600/20 rounded-md mr-2">
                <Sparkles className="h-4 w-4 text-emerald-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{t("technicalSkills")}</h3>
            </div>
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border-border">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="p-1.5 bg-emerald-600/20 rounded-md mr-2">
                <GitBranch className="h-4 w-4 text-emerald-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{t("toolsTechnologies")}</h3>
            </div>
            {toolsSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border-border">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="p-1.5 bg-emerald-600/20 rounded-md mr-2">
                <Users className="h-4 w-4 text-emerald-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{t("softSkills")}</h3>
            </div>
            {softSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border-border">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="p-1.5 bg-emerald-600/20 rounded-md mr-2">
                <Globe className="h-4 w-4 text-emerald-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{t("languages")}</h3>
            </div>
            {languages.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
