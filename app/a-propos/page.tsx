import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function AProposPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  À propos de <span className="text-primary">Recruitment Plus</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Recruitment Plus Inc. aide les employeurs canadiens à combler la pénurie de main-d'œuvre avec une
                  approche personnalisée, humaine et simple.
                </p>
                <Button size="lg">Contactez-nous</Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/team-working.png"
                  alt="Équipe Recruitment Plus en collaboration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connecter les talents aux meilleures opportunités professionnelles, aider les candidats à trouver un
                emploi passionnant et aider les employeurs à recruter la personne idéale avec un service transparent,
                efficace et humain.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg border bg-background p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Connecter</h3>
                  <p className="text-sm text-muted-foreground">
                    Mettre en relation les talents et les opportunités professionnelles.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Confiance</h3>
                  <p className="text-sm text-muted-foreground">
                    Bâtir des relations durables fondées sur la confiance et le respect.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Résultats</h3>
                  <p className="text-sm text-muted-foreground">
                    Fournir un service transparent, efficace et axé sur les résultats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Notre équipe au travail"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Pourquoi nous choisir</h2>
                <p className="text-muted-foreground mb-6">
                  Notre approche humaine, personnalisée et axée sur les résultats nous distingue. Nous offrons un
                  accompagnement complet, une sélection rigoureuse des candidats et une compréhension profonde des
                  besoins de nos clients.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
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
                      className="h-6 w-6 mr-2 text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <h3 className="font-bold">Expertise Reconnue</h3>
                      <p className="text-sm text-muted-foreground">
                        Années d'expérience et connaissance approfondie du marché.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="h-6 w-6 mr-2 text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <h3 className="font-bold">Service Personnalisé</h3>
                      <p className="text-sm text-muted-foreground">Solutions sur mesure pour des résultats durables.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="h-6 w-6 mr-2 text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <h3 className="font-bold">Portée Mondiale</h3>
                      <p className="text-sm text-muted-foreground">Recrutement international des meilleurs talents.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">M</span>
                </div>
                <h3 className="font-bold text-lg">Marie Tremblay</h3>
                <p className="text-sm text-muted-foreground mb-2">Directrice Générale</p>
                <div className="flex justify-center gap-2">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">J</span>
                </div>
                <h3 className="font-bold text-lg">Jean Dupont</h3>
                <p className="text-sm text-muted-foreground mb-2">Directeur du Recrutement</p>
                <div className="flex justify-center gap-2">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">S</span>
                </div>
                <h3 className="font-bold text-lg">Sophie Martin</h3>
                <p className="text-sm text-muted-foreground mb-2">Responsable International</p>
                <div className="flex justify-center gap-2">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">P</span>
                </div>
                <h3 className="font-bold text-lg">Pierre Lavoie</h3>
                <p className="text-sm text-muted-foreground mb-2">Conseiller RH Senior</p>
                <div className="flex justify-center gap-2">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nos succursales</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Location 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4">Montréal (Siège social)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">123 Rue Principale, Montréal, QC H3Z 2Y7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">+1 (514) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">montreal@recruitmentplus.ca</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Voir sur la carte
                  </Button>
                </div>
              </div>

              {/* Location 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4">Québec</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">456 Boulevard des Forges, Québec, QC G1K 7P4</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">+1 (418) 987-6543</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">quebec@recruitmentplus.ca</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Voir sur la carte
                  </Button>
                </div>
              </div>

              {/* Location 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4">Toronto</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">789 Bay Street, Toronto, ON M5G 2N8</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">+1 (416) 555-7890</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">toronto@recruitmentplus.ca</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Voir sur la carte
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-4">Discutons ensemble</h2>
              <p className="mb-8 text-muted-foreground">
                Contactez notre équipe pour vos besoins spécifiques en recrutement et ressources humaines.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">+1 (514) 123-4567</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">info@recruitmentplus.ca</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Formulaire</h3>
                  <p className="text-sm text-muted-foreground">Remplissez notre formulaire en ligne</p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg">Contactez-nous</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
