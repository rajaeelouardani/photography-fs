"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Galerie", href: "/gallery" },
  { name: "Vidéos", href: "/videos" },
  { name: "Compétitions", href: "/competitions" },
  { name: "Cours", href: "/cours" },
  { name: "3D Interactive", href: "/3d-camera" },
  { name: "Partenaires", href: "/partners" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Fonction pour faire défiler la page vers le haut après la navigation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Effet pour s'assurer que la page commence toujours en haut lors de la navigation
  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" onClick={scrollToTop}>
            <span className="sr-only">Photography Club FSM</span>
            <div className="relative h-12 w-12">
              <Image
                src="/images/photography-club-logo.png"
                alt="Photography Club FSM Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors",
                  isActive ? "text-red-600" : "hover:text-red-600",
                )}
                onClick={scrollToTop}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => {
                setMobileMenuOpen(false)
                scrollToTop()
              }}
            >
              <span className="sr-only">Photography Club FSM</span>
              <div className="relative h-10 w-10">
                <Image
                  src="/images/photography-club-logo.png"
                  alt="Photography Club FSM Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                        isActive ? "bg-red-50 text-red-600" : "hover:bg-red-50 hover:text-red-600",
                      )}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        scrollToTop()
                      }}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
