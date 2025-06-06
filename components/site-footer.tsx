"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function SiteFooter() {
  const { t, locale } = useLanguage()
  
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-white/10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Image
                src="/images/rp-logo-1.png"
                alt="Recruitment Plus Logo"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {locale === 'fr' 
                ? 'Solutions de recrutement personnalisées pour employeurs et candidats à travers le Canada et au niveau international.' 
                : 'Customized recruitment solutions for employers and candidates across Canada and internationally.'}
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === 'fr' ? 'Liens Rapides' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/candidats" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Candidats' : 'Candidates'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/employeurs" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Employeurs' : 'Employers'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Services' : 'Services'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/a-propos" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'À Propos' : 'About'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Blog' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Contact' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === 'fr' ? 'Mentions Légales' : 'Legal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/policies/terms-of-use" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Conditions d\'Utilisation' : 'Terms of Use'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/policies/privacy-policy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/policies/refund-policy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Politique de Remboursement' : 'Refund Policy'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/policies/accessibility" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {locale === 'fr' ? 'Accessibilité' : 'Accessibility'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === 'fr' ? 'Contact' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 {locale === 'fr' ? 'Rue Principale' : 'Main Street'}, {locale === 'fr' ? 'Montréal, QC H3Z 2Y7' : 'Montreal, QC H3Z 2Y7'}
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (514) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">info@recruitmentplus.ca</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} Recruitment Plus Inc. {locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              {locale === 'fr' ? 'Conçu avec' : 'Designed with'} ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}