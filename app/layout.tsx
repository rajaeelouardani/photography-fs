import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import TopBar from "@/components/top-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Photography Club FSM",
  description: "Site officiel du Photography Club de la Faculté des Sciences de Meknès",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
