"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/rp-logo-1.png"
              alt="Recruitment Plus Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/candidats" className="nav-link text-sm font-medium">
              Candidats
            </Link>
            <Link href="/employeurs" className="nav-link text-sm font-medium">
              Employeurs
            </Link>
            <Link href="/a-propos" className="nav-link text-sm font-medium">
              À Propos
            </Link>
            <Link href="/services" className="nav-link text-sm font-medium">
              Services
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="hidden md:block text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <button className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-primary">
            <Search className="h-4 w-4" />
            Recherche
          </button>
          <Link href="/login" className="hidden md:block text-sm font-medium hover:text-primary">
            S'identifier
          </Link>
          <Button size="sm" className="hidden md:inline-flex">
            Contact
          </Button>
          <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <Globe className="h-4 w-4" />
            <span className="hidden md:inline">FR / EN</span>
          </button>
          <ThemeToggle />
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
