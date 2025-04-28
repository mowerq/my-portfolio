import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Murat Gürgenyatağı | Full Stack Developer",
  description:
    "Portfolio website of Murat Gürgenyatağı, a Full Stack Web Developer with a focus on front-end development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
