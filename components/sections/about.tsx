"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation("common")

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center space-x-3 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-transparent blur-xl -z-10 rounded-lg"></div>
        <div className="bg-emerald-600 p-2 rounded-lg">
          <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{t("aboutMe")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="md:col-span-2">
          <Card className="bg-card text-card-foreground border-border">
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                I am currently studying Computer Engineering at Hacettepe University, specializing in front-end
                development with React. My passion lies in creating intuitive and responsive user interfaces that
                deliver exceptional user experiences.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Beyond front-end work, I have solid experience in full-stack development using Java Spring, Node.js, and
                Django. I enjoy the challenge of connecting elegant front-ends with robust back-end systems, and I'm
                always eager to learn new technologies and approaches.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                My goal is to create web applications that are not only visually appealing but also performant,
                accessible, and maintainable.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-card text-card-foreground border-border h-full">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">{t("contactInformation")}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-emerald-500" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t("phone")}</p>
                    <p className="text-sm sm:text-base">+90 541 406 46 49</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-emerald-500" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t("email")}</p>
                    <p className="break-all text-sm sm:text-base">murat.gurgenyatagi@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-emerald-500" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t("location")}</p>
                    <p className="text-sm sm:text-base">Bahçeleriçi Mah. Mamak / Ankara</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
