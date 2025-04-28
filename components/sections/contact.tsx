"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation("common")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t("messageSent"),
      description: t("thankYouMessage"),
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center space-x-3">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{t("getInTouch")}</h2>
      </div>

      <Card className="bg-card text-card-foreground border-border">
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1">
                  {t("name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("yourName")}
                  required
                  className="bg-input border-input focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1">
                  {t("email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("yourEmail")}
                  required
                  className="bg-input border-input focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium mb-1">
                {t("subject")}
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("subject")}
                required
                className="bg-input border-input focus:border-emerald-500 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium mb-1">
                {t("message")}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("yourMessage")}
                required
                className="min-h-32 bg-input border-input focus:border-emerald-500 focus:ring-emerald-500 text-sm"
              />
            </div>

            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto relative overflow-hidden shine"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t("sending")}
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  {t("sendMessage")}
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
