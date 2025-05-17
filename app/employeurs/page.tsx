import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function EmployeursPage() {
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
                  Solutions de recrutement <span className="text-primary">sur mesure</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Des actions ciblées pour vos besoins en recrutement et développement RH.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Publier une offre</Button>
                  <Button variant="outline" size="lg">
                    Nos services
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/business-meeting-office-recuiteers.jpg"
                  alt="Équipe professionnelle"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Industries que nous desservons</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Industry 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Technologie"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Technologie</h3>
                </div>
              </div>

              {/* Industry 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Santé"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Santé</h3>
                </div>
              </div>

              {/* Industry 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Finance"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Finance</h3>
                </div>
              </div>

              {/* Industry 4 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Ingénierie"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Ingénierie</h3>
                </div>
              </div>

              {/* Industry 5 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Manufacture"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Manufacture</h3>
                </div>
              </div>

              {/* Industry 6 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Construction"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Construction</h3>
                </div>
              </div>

              {/* Industry 7 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Éducation"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Éducation</h3>
                </div>
              </div>

              {/* Industry 8 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Hôtellerie"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-bold text-white">Hôtellerie</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions de recrutement</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Solution 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Recrutement Local"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Recrutement Local</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Candidats disponibles rapidement avec une analyse des besoins en personnel et une présélection
                    rigoureuse.
                  </p>
                  <ul className="space-y-2 mb-4">
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Analyse des besoins</span>
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Présélection rigoureuse</span>
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Suivi post-placement</span>
                    </li>
                  </ul>
                  <Link
                    href="/employeurs/recrutement-local"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Recrutement National"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Recrutement National</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recherche à travers le Canada avec coordination des démarches de relocalisation.
                  </p>
                  <ul className="space-y-2 mb-4">
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Recherche ciblée</span>
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Coordination de relocalisation</span>
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Soutien à l'intégration</span>
                    </li>
                  </ul>
                  <Link
                    href="/employeurs/recrutement-national"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Recrutement International"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Recrutement International</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Spécialistes du recrutement de travailleurs étrangers qualifiés avec préparation et montage du
                    dossier d'EIMT.
                  </p>
                  <ul className="space-y-2 mb-4">
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Préparation dossier EIMT</span>
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Suivi du processus de permis</span>
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
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Accompagnement à l'intégration</span>
                    </li>
                  </ul>
                  <Link
                    href="/employeurs/recrutement-international"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Notre processus employeur</h2>
            <div className="grid gap-8 md:grid-cols-5">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Définition des Besoins</h3>
                <p className="text-sm text-muted-foreground">Analyse des besoins en main-d'œuvre spécialisée.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Diffusion des Offres</h3>
                <p className="text-sm text-muted-foreground">Transmission aux partenaires et intégration au réseau.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Analyse Préliminaire</h3>
                <p className="text-sm text-muted-foreground">
                  Authentification des documents et validation des compétences.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sélection Finale</h3>
                <p className="text-sm text-muted-foreground">Collecte des documents et demande de permis de travail.</p>
              </div>

              {/* Step 5 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Intégration</h3>
                <p className="text-sm text-muted-foreground">Préparation à l'arrivée et suivi de l'intégration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Complémentaires */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Services complémentaires</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Service 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
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
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Développement de la marque employeur</h3>
                <p className="text-muted-foreground">
                  Stratégies pour renforcer votre image et attirer les meilleurs talents dans votre secteur.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Gestion des talents</h3>
                <p className="text-muted-foreground">
                  Programmes de rétention et développement des compétences pour maximiser le potentiel de vos équipes.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
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
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Planification stratégique</h3>
                <p className="text-muted-foreground">
                  Analyse et planification des besoins en main-d'œuvre à court, moyen et long terme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Jean Dupont</h3>
                    <p className="text-sm text-muted-foreground">Directeur RH, TechCorp</p>
                  </div>
                </div>
                <p className="italic">
                  "Nous collaborons avec Recruitment Plus depuis 3 ans et leur expertise nous a permis de constituer une
                  équipe solide et performante. Leur processus de recrutement international a été particulièrement
                  efficace."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Marie Tremblay</h3>
                    <p className="text-sm text-muted-foreground">PDG, Santé Plus</p>
                  </div>
                </div>
                <p className="italic">
                  "Face à la pénurie de personnel dans le secteur de la santé, Recruitment Plus nous a fourni des
                  solutions innovantes et efficaces. Leur accompagnement a été précieux pour notre croissance."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à trouver vos talents?</h2>
              <p className="mb-6">
                Que vous ayez besoin d'un recrutement ponctuel ou d'une stratégie à long terme, notre équipe est là pour
                vous accompagner.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Publier une offre
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
