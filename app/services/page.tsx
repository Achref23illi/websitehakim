import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Nos <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Des solutions complètes de recrutement adaptées à vos besoins spécifiques.
              </p>
              <Button size="lg">Contactez-nous</Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-primary">
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
                    className="h-10 w-10"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recrutement Permanent</h3>
                <p className="mt-2 text-muted-foreground">
                  Placement d'employés permanents avec une collaboration étroite entre demandeurs et employeurs pour une
                  adéquation parfaite des profils.
                </p>
                <Link
                  href="/services/recrutement-permanent"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-primary">
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
                    className="h-10 w-10"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recrutement Temporaire</h3>
                <p className="mt-2 text-muted-foreground">
                  Solution pour les besoins à court terme, couvrant les vacances, congés maladie et projets spéciaux
                  avec flexibilité.
                </p>
                <Link
                  href="/services/recrutement-temporaire"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-primary">
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
                    className="h-10 w-10"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="m22 12-3 2-2-2-2 2-3-2" />
                    <path d="M16 7h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recherche de Cadres</h3>
                <p className="mt-2 text-muted-foreground">
                  Services spécialisés pour les postes de direction avec une sélection rigoureuse des meilleurs
                  candidats de haut niveau.
                </p>
                <Link
                  href="/services/recherche-cadres"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service 4 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-primary">
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
                    className="h-10 w-10"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recrutement International</h3>
                <p className="mt-2 text-muted-foreground">
                  Agence reconnue par la CNESST avec assistance EIMT et un réseau mondial de recruteurs et partenaires.
                </p>
                <Link
                  href="/services/recrutement-international"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service 5 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-primary">
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
                    className="h-10 w-10"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M22 12h-2" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m7 20.66 1-1.73" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recrutement Externalisé (RPO)</h3>
                <p className="mt-2 text-muted-foreground">
                  Externalisation complète du processus de recrutement avec gestion de la recherche à l'intégration.
                </p>
                <Link
                  href="/services/recrutement-externalise"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service 6 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-primary">
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
                    className="h-10 w-10"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Stages</h3>
                <p className="mt-2 text-muted-foreground">
                  Opportunités pour les étudiants avec une expérience professionnelle valorisante servant de tremplin
                  pour une carrière réussie.
                </p>
                <Link
                  href="/services/stages"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
