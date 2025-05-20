"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, Globe, Menu, X, ChevronDown, User, LogIn, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname?.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <div
        className={`
          mx-auto max-w-7xl rounded-full transition-all duration-500 mt-4
          ${
            isScrolled
              ? "bg-background/60 backdrop-blur-lg shadow-lg border border-white/10"
              : "bg-background/30 backdrop-blur-md shadow-md border border-white/5"
          }
        `}
      >
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <div className="relative">
                <Image
                  src="/images/rp-logo-1.png"
                  alt="Recruitment Plus Logo"
                  width={160}
                  height={36}
                  className="h-7 w-auto"
                />
                {!isScrolled && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                )}
              </div>
            </Link>
            <nav className="hidden md:flex gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive("/candidats")
                        ? "text-primary bg-primary/10 backdrop-blur-sm"
                        : "hover:bg-white/10 hover:text-primary"
                    }`}
                  >
                    Candidats
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 rounded-xl bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link href="/candidats" className="cursor-pointer rounded-lg">
                      Vue d'ensemble
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/candidats/emplois" className="cursor-pointer rounded-lg">
                      Offres d'emploi
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/candidats/faire-carriere" className="cursor-pointer rounded-lg">
                      Faire carrière avec R+
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/candidats/impulsion" className="cursor-pointer rounded-lg">
                      Programme Impulsion
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive("/employeurs")
                        ? "text-primary bg-primary/10 backdrop-blur-sm"
                        : "hover:bg-white/10 hover:text-primary"
                    }`}
                  >
                    Employeurs
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 rounded-xl bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link href="/employeurs" className="cursor-pointer rounded-lg">
                      Vue d'ensemble
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/employeurs/industries" className="cursor-pointer rounded-lg">
                      Industries desservies
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/employeurs/publier-offre" className="cursor-pointer rounded-lg">
                      Publier une offre
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/employeurs/solutions" className="cursor-pointer rounded-lg">
                      Solutions de recrutement
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/a-propos"
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive("/a-propos")
                    ? "text-primary bg-primary/10 backdrop-blur-sm"
                    : "hover:bg-white/10 hover:text-primary"
                }`}
              >
                À Propos
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive("/services")
                        ? "text-primary bg-primary/10 backdrop-blur-sm"
                        : "hover:bg-white/10 hover:text-primary"
                    }`}
                  >
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 rounded-xl bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link href="/services" className="cursor-pointer rounded-lg">
                      Tous nos services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem asChild>
                    <Link href="/services/recrutement-local" className="cursor-pointer rounded-lg">
                      Recrutement Local
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/recrutement-national" className="cursor-pointer rounded-lg">
                      Recrutement National
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/recrutement-international" className="cursor-pointer rounded-lg">
                      Recrutement International
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/recherche-cadres" className="cursor-pointer rounded-lg">
                      Recherche de Cadres
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/blog"
              className="hidden md:flex px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary"
            >
              Blog
            </Link>

            <button
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary"
              aria-label="Rechercher"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Recherche</span>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary"
                  aria-label="Compte"
                >
                  <User className="h-4 w-4" />
                  <span>Compte</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 rounded-xl bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg"
              >
                <DropdownMenuItem asChild>
                  <Link href="/login" className="cursor-pointer rounded-lg">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Se connecter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register" className="cursor-pointer rounded-lg">
                    <User className="mr-2 h-4 w-4" />
                    <span>Créer un compte</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary"
                  aria-label="Changer de langue"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline">FR</span>
                  <ChevronDown className="hidden md:block h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="rounded-xl bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg"
              >
                <DropdownMenuItem className="cursor-pointer rounded-lg">Français</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer rounded-lg">English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            <Button
              size="sm"
              className="hidden md:inline-flex rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              Contact
            </Button>

            <button
              className="md:hidden p-1.5 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-background/70 backdrop-blur-lg shadow-lg border border-white/10 overflow-hidden animate-in slide-in-from-top-5 duration-300">
          <div className="py-4 space-y-4 px-4">
            <div className="space-y-2">
              <div className="font-medium px-2">Candidats</div>
              <nav className="flex flex-col space-y-1 pl-4">
                <Link
                  href="/candidats"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vue d'ensemble
                </Link>
                <Link
                  href="/candidats/emplois"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offres d'emploi
                </Link>
                <Link
                  href="/candidats/faire-carriere"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Faire carrière avec R+
                </Link>
                <Link
                  href="/candidats/impulsion"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programme Impulsion
                </Link>
              </nav>
            </div>

            <div className="space-y-2">
              <div className="font-medium px-2">Employeurs</div>
              <nav className="flex flex-col space-y-1 pl-4">
                <Link
                  href="/employeurs"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vue d'ensemble
                </Link>
                <Link
                  href="/employeurs/industries"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industries desservies
                </Link>
                <Link
                  href="/employeurs/publier-offre"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Publier une offre
                </Link>
                <Link
                  href="/employeurs/solutions"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions de recrutement
                </Link>
              </nav>
            </div>

            <div className="space-y-2">
              <div className="font-medium px-2">Services</div>
              <nav className="flex flex-col space-y-1 pl-4">
                <Link
                  href="/services"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tous nos services
                </Link>
                <Link
                  href="/services/recrutement-local"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recrutement Local
                </Link>
                <Link
                  href="/services/recrutement-national"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recrutement National
                </Link>
                <Link
                  href="/services/recrutement-international"
                  className="px-2 py-1.5 text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recrutement International
                </Link>
              </nav>
            </div>

            <div className="space-y-2">
              <Link
                href="/a-propos"
                className="block px-2 py-1.5 font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                href="/blog"
                className="block px-2 py-1.5 font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/login"
                className="block px-2 py-1.5 font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Se connecter
              </Link>
            </div>

            <div className="pt-2 border-t border-white/10">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles className="mr-1 h-3 w-3" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
