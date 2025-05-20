import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { FloatingContact } from "@/components/floating-contact"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recruitment Plus",
  description: "Solutions de recrutement personnalisées pour employeurs et candidats",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pt-24">{children}</main>
            <FloatingContact />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
