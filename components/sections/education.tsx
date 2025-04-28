"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Education() {
  const { t } = useTranslation("common")

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">{t("education")}</h2>
      </div>

      <Card className="bg-card text-card-foreground border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
            <div>
              <h3 className="text-xl font-semibold">Computer Engineering</h3>
              <p className="text-emerald-600 dark:text-emerald-500 font-medium">Hacettepe University</p>
            </div>
            <div className="flex items-center text-muted-foreground md:text-right">
              <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-sm">Expected Graduation: 06/2025</span>
            </div>
          </div>
          <p className="text-foreground">
            Studying Computer Engineering with a focus on software development and web technologies. My coursework
            includes algorithms, data structures, software engineering, and web development. I've applied these skills
            in various projects, focusing particularly on front-end and full-stack web development.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
