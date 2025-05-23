import Link from "next/link"
import Image from "next/image"
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
  Building2,
  Globe,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmployeursPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Enhanced Design */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background/80 to-primary/20 z-0">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23031F28' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated shapes */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl opacity-50 floating-element"></div>
          <div
            className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 floating-element"
            style={{ animationDelay: "-3s" }}
          ></div>

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="inline-block mb-6 px-6 py-2 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                  <Building2 className="inline-block h-4 w-4 mr-2" />
                  Solutions RH innovantes
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Solutions de recrutement{" "}
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    sur mesure
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Des actions ciblées pour vos besoins en recrutement et développement RH. Trouvez les talents qui
                  feront la différence dans votre organisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="magic-button">
                    <Users className="mr-2 h-5 w-5" />
                    Publier une offre
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl border-white/20 backdrop-blur-sm hover:bg-white/10"
                  >
                    Nos services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="magic-card p-2 overflow-hidden">
                  <Image
                    src="/images/business-meeting-office-recuiteers.jpg"
                    alt="Équipe professionnelle"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Globe className="inline-block h-4 w-4 mr-2" />
                Secteurs d'expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Industries que nous desservons
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Notre expertise couvre un large éventail de secteurs d'activité pour répondre à tous vos besoins en
                recrutement.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Technologie", color: "from-blue-500/20 to-blue-600/20" },
                { name: "Santé", color: "from-green-500/20 to-green-600/20" },
                { name: "Finance", color: "from-yellow-500/20 to-yellow-600/20" },
                { name: "Ingénierie", color: "from-purple-500/20 to-purple-600/20" },
                { name: "Manufacture", color: "from-red-500/20 to-red-600/20" },
                { name: "Construction", color: "from-orange-500/20 to-orange-600/20" },
                { name: "Éducation", color: "from-indigo-500/20 to-indigo-600/20" },
                { name: "Hôtellerie", color: "from-pink-500/20 to-pink-600/20" },
              ].map((industry, index) => (
                <div key={index} className="magic-card group overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${industry.color} relative`}>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={industry.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover opacity-60 transition-transform group-hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="font-bold text-white text-lg">{industry.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Zap className="inline-block h-4 w-4 mr-2" />
                Nos Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Solutions de recrutement
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Des approches personnalisées pour chaque type de besoin en recrutement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Solution 1 */}
              <div className="magic-card p-8 group">
                <div className="mb-6 relative">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Recrutement Local"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                    Local
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Recrutement Local</h3>
                <p className="text-muted-foreground mb-6">
                  Candidats disponibles rapidement avec une analyse des besoins en personnel et une présélection
                  rigoureuse.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Analyse des besoins", "Présélection rigoureuse", "Suivi post-placement"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/employeurs/recrutement-local"
                  className="inline-flex items-center text-sm font-medium text-primary group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    En savoir plus
                  </span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Solution 2 */}
              <div className="magic-card p-8 group">
                <div className="mb-6 relative">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Recrutement National"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 text-white text-xs font-medium rounded-full">
                    National
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Recrutement National</h3>
                <p className="text-muted-foreground mb-6">
                  Recherche à travers le Canada avec coordination des démarches de relocalisation.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Recherche ciblée", "Coordination de relocalisation", "Soutien à l'intégration"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/employeurs/recrutement-national"
                  className="inline-flex items-center text-sm font-medium text-primary group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    En savoir plus
                  </span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Solution 3 */}
              <div className="magic-card p-8 group">
                <div className="mb-6 relative">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Recrutement International"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium rounded-full">
                    International
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Recrutement International</h3>
                <p className="text-muted-foreground mb-6">
                  Spécialistes du recrutement de travailleurs étrangers qualifiés avec préparation et montage du dossier
                  d'EIMT.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Préparation dossier EIMT", "Suivi du processus de permis", "Accompagnement à l'intégration"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Link
                  href="/employeurs/recrutement-international"
                  className="inline-flex items-center text-sm font-medium text-primary group"
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

        {/* Process Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Target className="inline-block h-4 w-4 mr-2" />
                Notre Processus
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Notre processus employeur
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Un processus structuré et efficace pour vous garantir les meilleurs résultats.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {[
                {
                  step: "1",
                  title: "Définition des Besoins",
                  description: "Analyse des besoins en main-d'œuvre spécialisée.",
                  icon: Target,
                },
                {
                  step: "2",
                  title: "Diffusion des Offres",
                  description: "Transmission aux partenaires et intégration au réseau.",
                  icon: Globe,
                },
                {
                  step: "3",
                  title: "Analyse Préliminaire",
                  description: "Authentification des documents et validation des compétences.",
                  icon: Users,
                },
                {
                  step: "4",
                  title: "Sélection Finale",
                  description: "Collecte des documents et demande de permis de travail.",
                  icon: Award,
                },
                {
                  step: "5",
                  title: "Intégration",
                  description: "Préparation à l'arrivée et suivi de l'intégration.",
                  icon: TrendingUp,
                },
              ].map((item, index) => (
                <div key={index} className="magic-card p-6 text-center group">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                  <div className="mb-4 text-secondary">
                    <item.icon className="h-8 w-8 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Complémentaires */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Sparkles className="inline-block h-4 w-4 mr-2" />
                Services Complémentaires
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Services complémentaires
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Des services additionnels pour optimiser votre stratégie RH et développer votre marque employeur.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Développement de la marque employeur",
                  description:
                    "Stratégies pour renforcer votre image et attirer les meilleurs talents dans votre secteur.",
                  icon: Building2,
                },
                {
                  title: "Gestion des talents",
                  description:
                    "Programmes de rétention et développement des compétences pour maximiser le potentiel de vos équipes.",
                  icon: Users,
                },
                {
                  title: "Planification stratégique",
                  description: "Analyse et planification des besoins en main-d'œuvre à court, moyen et long terme.",
                  icon: Target,
                },
              ].map((service, index) => (
                <div key={index} className="magic-card p-8 group">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Star className="inline-block h-4 w-4 mr-2" />
                Témoignages
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Découvrez les expériences de nos partenaires employeurs qui nous font confiance.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Jean Dupont",
                  role: "Directeur RH, TechCorp",
                  content:
                    "Nous collaborons avec Recruitment Plus depuis 3 ans et leur expertise nous a permis de constituer une équipe solide et performante. Leur processus de recrutement international a été particulièrement efficace.",
                  rating: 5,
                },
                {
                  name: "Marie Tremblay",
                  role: "PDG, Santé Plus",
                  content:
                    "Face à la pénurie de personnel dans le secteur de la santé, Recruitment Plus nous a fourni des solutions innovantes et efficaces. Leur accompagnement a été précieux pour notre croissance.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="magic-card p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="flex items-center gap-4 mb-6 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-secondary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed text-lg">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container relative">
            <div className="magic-border">
              <div className="magic-border-content bg-gradient-to-r from-secondary to-secondary/80 text-primary-foreground relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="text-center relative p-8 md:p-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Prêt à trouver vos talents?</h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Que vous ayez besoin d'un recrutement ponctuel ou d'une stratégie à long terme, notre équipe est là
                    pour vous accompagner vers le succès.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-xl bg-white/90 text-secondary hover:bg-white transition-all duration-300"
                    >
                      <Users className="mr-2 h-5 w-5" />
                      Publier une offre
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl bg-transparent text-white border-white/30 hover:bg-white/10 transition-all duration-300"
                    >
                      Contactez-nous
                      <ArrowRight className="ml-2 h-4 w-4" />
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
    </div>
  )
}
