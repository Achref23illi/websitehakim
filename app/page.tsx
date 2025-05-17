import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-28">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              TROUVE TON <span className="text-primary">RECRUTEMENT PLUS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Connecter les talents aux meilleures opportunités professionnelles avec une approche personnalisée,
              humaine et simple.
            </p>
            <div className="mt-8 w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg">
              <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="text" placeholder="Titre du poste, compétences ou mots-clés" className="pl-10" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="text" placeholder="Ville, province ou code postal" className="pl-10" />
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  RECHERCHE D'EMPLOIS
                </Button>
              </div>
            </div>
            <Button variant="outline" className="mt-6 gap-1">
              EN SAVOIR PLUS SUR RECRUITMENT PLUS
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero-background.png"
              alt="Professional workers in a modern office"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </section>

        {/* Services Highlight Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12">Nos Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
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
                <h3 className="text-xl font-bold">Recrutement Local</h3>
                <p className="mt-2 text-muted-foreground">
                  Accompagnement personnalisé aux chercheurs d'emploi avec aide à la rédaction de CV et préparation aux
                  entretiens.
                </p>
                <Link
                  href="/services/recrutement-local"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service Card 2 */}
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
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recrutement National</h3>
                <p className="mt-2 text-muted-foreground">
                  Service adapté aux besoins professionnels avec une couverture à travers tout le Canada.
                </p>
                <Link
                  href="/services/recrutement-national"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Service Card 3 */}
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
                  Recrutement de talents qualifiés pour le marché canadien avec soutien aux démarches d'immigration.
                </p>
                <Link
                  href="/services/recrutement-international"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Sections */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Candidates Section */}
              <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/young-woman-office-style-clothes-glasses-holds-tablet-with-documents-employee.jpg"
                    alt="Candidate with tablet"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4">Pour les Candidats</h2>
                <p className="text-muted-foreground mb-6">
                  Explorez les opportunités et lancez votre avenir professionnel avec notre accompagnement personnalisé.
                </p>
                <ul className="space-y-3 mb-6">
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
                    <span>Aide à la rédaction de CV</span>
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
                    <span>Préparation aux entretiens</span>
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
                    <span>Accompagnement à l'intégration</span>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto">Trouver un emploi</Button>
              </div>

              {/* Employers Section */}
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/business-meeting-office-recuiteers.jpg"
                    alt="Candidate with tablet"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4">Pour les Employeurs</h2>
                <p className="text-muted-foreground mb-6">
                  Des solutions ciblées pour vos besoins en recrutement et développement RH.
                </p>
                <ul className="space-y-3 mb-6">
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
                    <span>Analyse des besoins en personnel</span>
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
                    <span>Présélection rigoureuse des candidats</span>
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
                    <span>Suivi post-placement</span>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto">Publier une offre</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12">Témoignages</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-lg border bg-background p-6">
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
                    <p className="text-sm text-muted-foreground">Candidate placée</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Grâce à Recruitment Plus, j'ai trouvé un emploi qui correspond parfaitement à mes compétences et
                  aspirations. Leur accompagnement a été précieux."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg border bg-background p-6">
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
                    <p className="text-sm text-muted-foreground">Directeur RH</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Nous collaborons avec Recruitment Plus depuis 3 ans et leur expertise nous a permis de constituer une
                  équipe solide et performante."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg border bg-background p-6">
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
                    <h3 className="font-bold">Sophie Martin</h3>
                    <p className="text-sm text-muted-foreground">Candidate internationale</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Le processus d'immigration était complexe, mais l'équipe de Recruitment Plus m'a guidée à chaque
                  étape. Je suis maintenant bien installée au Canada."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2">Entreprises servies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">5000+</div>
                <div className="mt-2">Placements réussis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">15+</div>
                <div className="mt-2">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">98%</div>
                <div className="mt-2">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Restez informé</h2>
              <p className="mt-4 text-muted-foreground">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières offres d'emploi et conseils de carrière.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Votre adresse email" className="flex-1" />
                <Button>S'inscrire</Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                En vous inscrivant, vous acceptez notre{" "}
                <Link href="/politique-confidentialite" className="underline underline-offset-2">
                  politique de confidentialité
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Prêt à collaborer avec nous?</h2>
                  <p className="mt-4">
                    Que vous soyez à la recherche d'un emploi ou d'un candidat idéal, notre équipe est là pour vous
                    accompagner.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 md:items-end md:justify-center">
                  <Button variant="secondary" size="lg">
                    Contactez-nous
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-primary">Recruitment</span>
                <span>Plus</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Connecter les talents aux meilleures opportunités professionnelles avec une approche personnalisée.
              </p>
              <div className="flex gap-4">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Candidats</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/candidats/faire-carriere" className="text-sm text-muted-foreground hover:text-primary">
                    Faites carrière avec R+
                  </Link>
                </li>
                <li>
                  <Link href="/candidats/trouver-emploi" className="text-sm text-muted-foreground hover:text-primary">
                    Trouver un emploi
                  </Link>
                </li>
                <li>
                  <Link href="/candidats/impulsion" className="text-sm text-muted-foreground hover:text-primary">
                    Impulsion
                  </Link>
                </li>
                <li>
                  <Link href="/candidats/accompagnement" className="text-sm text-muted-foreground hover:text-primary">
                    Service d'accompagnement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Employeurs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/employeurs/industries" className="text-sm text-muted-foreground hover:text-primary">
                    Industries que nous desservons
                  </Link>
                </li>
                <li>
                  <Link href="/employeurs/initiatives" className="text-sm text-muted-foreground hover:text-primary">
                    Nos initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/employeurs/publier-offre" className="text-sm text-muted-foreground hover:text-primary">
                    Publier une offre d'emploi
                  </Link>
                </li>
                <li>
                  <Link href="/employeurs/solutions" className="text-sm text-muted-foreground hover:text-primary">
                    Solutions de recrutement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">123 Rue Principale, Montréal, QC H3Z 2Y7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">+1 (514) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-sm text-muted-foreground">info@recruitmentplus.ca</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Recruitment Plus Inc. Tous droits réservés.
              </p>
              <div className="flex gap-4">
                <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary">
                  Politique de confidentialité
                </Link>
                <Link href="/conditions-utilisation" className="text-sm text-muted-foreground hover:text-primary">
                  Conditions d'utilisation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
