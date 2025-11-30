"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

const navigationKeys = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "gallery", href: "/gallery" },
  { key: "videos", href: "/videos" },
  { key: "competitions", href: "/competitions" },
  { key: "courses", href: "/cours" },
  { key: "camera3d", href: "/3d-camera" },
  { key: "partners", href: "/partners" },
  { key: "contact", href: "/contact" },
]

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const navigation = navigationKeys.map((item) => ({
    name: t(`nav.${item.key}`),
    href: item.href,
  }))

  const handleLinkClick = () => {
    scrollToTop()
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
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
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors",
                  isActive ? "text-red-600 dark:text-red-400" : "hover:text-red-600 dark:hover:text-red-400 text-gray-900 dark:text-gray-100",
                )}
                onClick={scrollToTop}
              >
                {item.name}
              </Link>
            )
          })}
          <LanguageSwitcher />
          <ModeToggle />
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              >
                <span className="sr-only">{t("nav.openMainMenu")}</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-bold text-gray-900 dark:text-white">
                  {t("nav.menu")}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-semibold transition-colors",
                        isActive
                          ? "bg-red-600 dark:bg-red-700 text-white"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

    </header>
  )
}
