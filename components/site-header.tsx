"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  User,
  LogIn,
  Sparkles,
  Briefcase,
  Users,
  Building2,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-4">
      <div
        className={`
          mx-auto max-w-7xl rounded-2xl transition-all duration-500 mt-2
          ${
            isScrolled
              ? "bg-background/70 backdrop-blur-xl shadow-2xl border border-white/20"
              : "bg-background/40 backdrop-blur-lg shadow-xl border border-white/10"
          }
        `}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <div className="relative">
                <Image
                  src="/images/rp-logo-1.png"
                  alt="Recruitment Plus Logo"
                  width={160}
                  height={36}
                  className="h-8 w-auto"
                />
                {!isScrolled && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                )}
              </div>
            </Link>

            <nav className="hidden lg:flex gap-2">
              {/* Candidats Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("candidats")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive("/candidats")
                      ? "text-primary bg-primary/10 backdrop-blur-sm shadow-md"
                      : "hover:bg-white/10 hover:text-primary hover:shadow-md"
                  }`}
                >
                  <Users className="h-4 w-4" />
                  Candidats
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "candidats" ? "rotate-180" : ""}`}
                  />
                </button>

                {activeDropdown === "candidats" && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-background/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden animate-in slide-in-from-top-5 duration-300 z-50">
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          Pour les Candidats
                        </h3>
                        <p className="text-sm text-muted-foreground">Explorez vos opportunités de carrière</p>
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/candidats"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Vue d'ensemble</div>
                            <div className="text-xs text-muted-foreground">Découvrez nos services</div>
                          </div>
                        </Link>
                        <Link
                          href="/candidats/emplois"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Search className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Offres d'emploi</div>
                            <div className="text-xs text-muted-foreground">Trouvez votre emploi idéal</div>
                          </div>
                        </Link>
                        <Link
                          href="/candidats/faire-carriere"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Sparkles className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Faire carrière avec R+</div>
                            <div className="text-xs text-muted-foreground">Accompagnement personnalisé</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Employeurs Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("employeurs")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive("/employeurs")
                      ? "text-primary bg-primary/10 backdrop-blur-sm shadow-md"
                      : "hover:bg-white/10 hover:text-primary hover:shadow-md"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  Employeurs
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "employeurs" ? "rotate-180" : ""}`}
                  />
                </button>

                {activeDropdown === "employeurs" && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-background/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden animate-in slide-in-from-top-5 duration-300 z-50">
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          Pour les Employeurs
                        </h3>
                        <p className="text-sm text-muted-foreground">Solutions de recrutement sur mesure</p>
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/employeurs"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Building2 className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Vue d'ensemble</div>
                            <div className="text-xs text-muted-foreground">Nos solutions RH</div>
                          </div>
                        </Link>
                        <Link
                          href="/employeurs/industries"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Industries desservies</div>
                            <div className="text-xs text-muted-foreground">Secteurs d'expertise</div>
                          </div>
                        </Link>
                        <Link
                          href="/employeurs/publier-offre"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Sparkles className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Publier une offre</div>
                            <div className="text-xs text-muted-foreground">Trouvez vos talents</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/a-propos"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive("/a-propos")
                    ? "text-primary bg-primary/10 backdrop-blur-sm shadow-md"
                    : "hover:bg-white/10 hover:text-primary hover:shadow-md"
                }`}
              >
                À Propos
              </Link>

              <Link
                href="/services"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive("/services")
                    ? "text-primary bg-primary/10 backdrop-blur-sm shadow-md"
                    : "hover:bg-white/10 hover:text-primary hover:shadow-md"
                }`}
              >
                Services
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="hidden lg:flex px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:shadow-md"
            >
              Blog
            </Link>

            <button
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:shadow-md"
              aria-label="Rechercher"
            >
              <Search className="h-4 w-4" />
            </button>

            <div className="relative hidden md:block">
              <button
                onClick={() => handleDropdownToggle("account")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:shadow-md"
                aria-label="Compte"
              >
                <User className="h-4 w-4" />
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "account" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "account" && (
                <div className="absolute top-full right-0 mt-2 w-64 rounded-2xl bg-background/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden animate-in slide-in-from-top-5 duration-300 z-50">
                  <div className="p-4">
                    <div className="space-y-2">
                      <Link
                        href="/login"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                        onClick={closeDropdown}
                      >
                        <LogIn className="h-4 w-4 text-primary" />
                        <span>Se connecter</span>
                      </Link>
                      <Link
                        href="/register"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                        onClick={closeDropdown}
                      >
                        <User className="h-4 w-4 text-primary" />
                        <span>Créer un compte</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("language")}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:shadow-md"
                aria-label="Changer de langue"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">FR</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "language" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "language" && (
                <div className="absolute top-full right-0 mt-2 w-32 rounded-xl bg-background/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden animate-in slide-in-from-top-5 duration-300 z-50">
                  <div className="p-2">
                    <button
                      className="w-full text-left p-2 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                      onClick={closeDropdown}
                    >
                      Français
                    </button>
                    <button
                      className="w-full text-left p-2 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                      onClick={closeDropdown}
                    >
                      English
                    </button>
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />

            <Button
              size="sm"
              className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>

            <button
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
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
        <div className="lg:hidden mt-2 mx-2 rounded-2xl bg-background/80 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden animate-in slide-in-from-top-5 duration-300">
          <div className="py-6 space-y-6 px-6">
            <div className="space-y-4">
              <div className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Candidats
              </div>
              <nav className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/candidats"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4 text-primary" />
                  Vue d'ensemble
                </Link>
                <Link
                  href="/candidats/emplois"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Search className="h-4 w-4 text-primary" />
                  Offres d'emploi
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <div className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Employeurs
              </div>
              <nav className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/employeurs"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Building2 className="h-4 w-4 text-primary" />
                  Vue d'ensemble
                </Link>
                <Link
                  href="/employeurs/industries"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="h-4 w-4 text-primary" />
                  Industries desservies
                </Link>
              </nav>
            </div>

            <div className="space-y-2">
              <Link
                href="/a-propos"
                className="flex items-center gap-3 px-3 py-2 font-medium rounded-xl hover:bg-primary/5 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4 text-primary" />À Propos
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-3 px-3 py-2 font-medium rounded-xl hover:bg-primary/5 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Briefcase className="h-4 w-4 text-primary" />
                Services
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-3 px-3 py-2 font-medium rounded-xl hover:bg-primary/5 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="h-4 w-4 text-primary" />
                Se connecter
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button
                className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-40" onClick={closeDropdown} />}
    </header>
  )
}
