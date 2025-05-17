import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"

export default function CandidatsPage() {
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
                  Faites carrière avec <span className="text-primary">Recruitment Plus</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Explorez les opportunités et lancez votre avenir professionnel avec notre accompagnement personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Trouver un emploi</Button>
                  <Button variant="outline" size="lg">
                    Nos services
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/hero-background.png"
                  alt="Espace de travail moderne pour candidats"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Job Search Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-center mb-8">Trouvez votre prochain emploi</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="text" placeholder="Titre du poste, compétences ou mots-clés" className="pl-10" />
                  </div>
                  <div className="relative">
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
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <Input type="text" placeholder="Ville, province ou code postal" className="pl-10" />
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    RECHERCHER
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm font-medium">Recherches populaires:</span>
                  <Link href="/candidats/emplois?q=developpeur" className="text-sm text-primary hover:underline">
                    Développeur
                  </Link>
                  <Link href="/candidats/emplois?q=infirmier" className="text-sm text-primary hover:underline">
                    Infirmier
                  </Link>
                  <Link href="/candidats/emplois?q=comptable" className="text-sm text-primary hover:underline">
                    Comptable
                  </Link>
                  <Link href="/candidats/emplois?q=ingenieur" className="text-sm text-primary hover:underline">
                    Ingénieur
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nos services d'accompagnement</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Service 1 */}
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
                      <span className="text-sm">Accompagnement personnalisé</span>
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
                      <span className="text-sm">Aide à la rédaction de CV</span>
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
                      <span className="text-sm">Préparation aux entretiens</span>
                    </li>
                  </ul>
                  <Link
                    href="/candidats/recrutement-local"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
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
                      <span className="text-sm">Service adapté aux besoins professionnels</span>
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
                      <span className="text-sm">Couverture à travers tout le Canada</span>
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
                      <span className="text-sm">Mobilité professionnelle interrégionale</span>
                    </li>
                  </ul>
                  <Link
                    href="/candidats/recrutement-national"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Service 3 */}
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
                      <span className="text-sm">Soutien aux démarches d'immigration</span>
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
                      <span className="text-sm">Présélection rigoureuse des candidats</span>
                    </li>
                  </ul>
                  <Link
                    href="/candidats/recrutement-international"
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
            <h2 className="text-3xl font-bold text-center mb-12">Notre processus</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Évaluation et Présélection</h3>
                <p className="text-sm text-muted-foreground">
                  Validation des compétences, évaluation linguistique et vérification du parcours professionnel.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Placement</h3>
                <p className="text-sm text-muted-foreground">
                  Présentation des candidatures aux employeurs et préparation des documents pour le contrat de travail.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Préparation à l'Arrivée</h3>
                <p className="text-sm text-muted-foreground">
                  Logistique du transport et coordination de l'installation.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Accompagnement à l'Intégration</h3>
                <p className="text-sm text-muted-foreground">
                  Séance d'information sur l'entreprise et familiarisation avec l'environnement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impulsion Program */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Programme Impulsion</h2>
                <p className="mb-6">
                  Notre programme de développement professionnel sur mesure conçu pour vous aider à atteindre vos
                  objectifs de carrière.
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
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Coaching personnalisé</span>
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
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Ateliers de développement des compétences</span>
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
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Mentorat par des professionnels expérimentés</span>
                  </li>
                </ul>
                <Button variant="secondary">Découvrir Impulsion</Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Programme Impulsion"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Témoignages de candidats</h2>
            <div className="grid gap-8 md:grid-cols-3">
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
                    <h3 className="font-bold">Marie Tremblay</h3>
                    <p className="text-sm text-muted-foreground">Développeuse Web</p>
                  </div>
                </div>
                <p className="italic">
                  "Grâce à Recruitment Plus, j'ai trouvé un emploi qui correspond parfaitement à mes compétences et
                  aspirations. Leur accompagnement a été précieux."
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
                    <h3 className="font-bold">Pierre Lavoie</h3>
                    <p className="text-sm text-muted-foreground">Ingénieur Civil</p>
                  </div>
                </div>
                <p className="italic">
                  "Le processus de recrutement a été rapide et efficace. J'ai particulièrement apprécié la préparation
                  aux entretiens qui m'a donné confiance."
                </p>
              </div>

              {/* Testimonial 3 */}
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
                    <h3 className="font-bold">Sophie Martin</h3>
                    <p className="text-sm text-muted-foreground">Infirmière</p>
                  </div>
                </div>
                <p className="italic">
                  "En tant que candidate internationale, le processus d'immigration était complexe, mais l'équipe de
                  Recruitment Plus m'a guidée à chaque étape."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre carrière?</h2>
              <p className="mb-6 text-muted-foreground">
                Que vous soyez à la recherche de votre premier emploi ou d'un nouveau défi professionnel, notre équipe
                est là pour vous accompagner.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">Trouver un emploi</Button>
                <Button variant="outline" size="lg">
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
