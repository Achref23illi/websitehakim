import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, ChevronRight, Phone, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-secondary/20 z-0">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230F766E' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated shapes */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 floating-element"></div>
          <div
            className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl opacity-50 floating-element"
            style={{ animationDelay: "-3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-xl opacity-30 floating-element"
            style={{ animationDelay: "-1.5s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-secondary/5 rounded-full filter blur-xl opacity-30 floating-element"
            style={{ animationDelay: "-4.5s" }}
          ></div>

          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
              <Sparkles className="inline-block h-4 w-4 mr-2" />
              Recrutement innovant et personnalisé
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              TROUVE TON{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RECRUTEMENT PLUS
              </span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground mb-8">
              Connecter les talents aux meilleures opportunités professionnelles avec une approche personnalisée,
              humaine et simple.
            </p>
            <div className="magic-card w-full max-w-3xl p-4 shadow-2xl">
              <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Titre du poste, compétences ou mots-clés"
                    className="magic-input pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="text" placeholder="Ville, province ou code postal" className="magic-input pl-10" />
                </div>
                <Button className="magic-button w-full md:w-auto">RECHERCHE D'EMPLOIS</Button>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-6 gap-1 rounded-full border-white/20 backdrop-blur-sm hover:bg-white/10"
            >
              EN SAVOIR PLUS SUR RECRUITMENT PLUS
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Services Highlight Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Sparkles className="inline-block h-4 w-4 mr-2" />
                Nos Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solutions de recrutement adaptées
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Des services personnalisés pour répondre aux besoins spécifiques des candidats et des employeurs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="magic-card p-6 group">
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
                    className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
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
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    En savoir plus
                  </span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Service Card 2 */}
              <div className="magic-card p-6 group">
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
                    className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
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
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    En savoir plus
                  </span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Service Card 3 */}
              <div className="magic-card p-6 group">
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
                    className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
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
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    En savoir plus
                  </span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Sections */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Candidates Section */}
              <div className="magic-card p-8 overflow-hidden relative group">
                <div className="mb-4 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/young-woman-office-style-clothes-glasses-holds-tablet-with-documents-employee.jpg"
                    alt="Candidate with tablet"
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <h2 className="text-2xl font-bold mb-4 relative">Pour les Candidats</h2>
                <p className="text-muted-foreground mb-6 relative">
                  Explorez les opportunités et lancez votre avenir professionnel avec notre accompagnement personnalisé.
                </p>
                <ul className="space-y-3 mb-6 relative">
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
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
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Aide à la rédaction de CV</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
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
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Préparation aux entretiens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
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
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Accompagnement à l'intégration</span>
                  </li>
                </ul>
                <Button className="magic-button w-full sm:w-auto relative">Trouver un emploi</Button>
              </div>

              {/* Employers Section */}
              <div className="magic-card p-8 overflow-hidden relative group">
                <div className="mb-4 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/business-meeting-office-recuiteers.jpg"
                    alt="Candidate with tablet"
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <h2 className="text-2xl font-bold mb-4 relative">Pour les Employeurs</h2>
                <p className="text-muted-foreground mb-6 relative">
                  Des solutions ciblées pour vos besoins en recrutement et développement RH.
                </p>
                <ul className="space-y-3 mb-6 relative">
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
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
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Analyse des besoins en personnel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
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
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Présélection rigoureuse des candidats</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
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
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Suivi post-placement</span>
                  </li>
                </ul>
                <Button className="magic-button w-full sm:w-auto relative">Publier une offre</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Sparkles className="inline-block h-4 w-4 mr-2" />
                Témoignages
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Découvrez les expériences de ceux qui ont fait confiance à Recruitment Plus pour leurs besoins en
                recrutement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="magic-card p-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-4 mb-4 relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">M</span>
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
              <div className="magic-card p-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-4 mb-4 relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">J</span>
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
              <div className="magic-card p-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-4 mb-4 relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">S</span>
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
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container relative">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2">Entreprises servies</div>
              </div>
              <div className="text-center backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="text-4xl font-bold">5000+</div>
                <div className="mt-2">Placements réussis</div>
              </div>
              <div className="text-center backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="mt-2">Années d'expérience</div>
              </div>
              <div className="text-center backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="text-4xl font-bold">98%</div>
                <div className="mt-2">Taux de satisfaction</div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl floating-element"></div>
          <div
            className="absolute bottom-1/4 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl floating-element"
            style={{ animationDelay: "-2s" }}
          ></div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Sparkles className="inline-block h-4 w-4 mr-2" />
                Restez informé
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Newsletter
              </h2>
              <p className="mt-4 text-muted-foreground mb-6">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières offres d'emploi et conseils de carrière.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Votre adresse email" className="magic-input flex-1" />
                <Button className="magic-button">S'inscrire</Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                En vous inscrivant, vous acceptez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="underline underline-offset-2 hover:text-primary transition-colors"
                >
                  politique de confidentialité
                </Link>
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl floating-element"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl floating-element"
            style={{ animationDelay: "-3s" }}
          ></div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container relative">
            <div className="magic-border">
              <div className="magic-border-content bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12 relative p-8 md:p-12">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Prêt à collaborer avec nous?</h2>
                    <p className="mt-4">
                      Que vous soyez à la recherche d'un emploi ou d'un candidat idéal, notre équipe est là pour vous
                      accompagner.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 md:items-end md:justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="rounded-full backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
                    >
                      Contactez-nous
                    </Button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl floating-element"></div>
                <div
                  className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl floating-element"
                  style={{ animationDelay: "-2.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-background/70 backdrop-blur-sm">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Recruitment
                </span>
                <span>Plus</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Connecter les talents aux meilleures opportunités professionnelles avec une approche personnalisée.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  <Link
                    href="/candidats/faire-carriere"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Faites carrière avec R+
                  </Link>
                </li>
                <li>
                  <Link
                    href="/candidats/trouver-emploi"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Trouver un emploi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/candidats/impulsion"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Impulsion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/candidats/accompagnement"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Service d'accompagnement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Employeurs</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/employeurs/industries"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Industries que nous desservons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employeurs/initiatives"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Nos initiatives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employeurs/publier-offre"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Publier une offre d'emploi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employeurs/solutions"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
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
          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Recruitment Plus Inc. Tous droits réservés.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/mentions-legales"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/politique-confidentialite"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  href="/conditions-utilisation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
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
