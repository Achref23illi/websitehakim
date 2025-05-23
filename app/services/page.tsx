import Link from "next/link"
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Users,
  Building2,
  Globe,
  Zap,
  Target,
  Award,
  Clock,
  Search,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
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
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 px-6 py-2 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Zap className="inline-block h-4 w-4 mr-2" />
                Solutions complètes
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Nos{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Des solutions complètes de recrutement adaptées à vos besoins spécifiques, de la recherche locale au
                placement international.
              </p>
              <Button size="lg" className="magic-button">
                <Users className="mr-2 h-5 w-5" />
                Contactez-nous
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Target className="inline-block h-4 w-4 mr-2" />
                Nos Expertises
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solutions de recrutement complètes
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins en recrutement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Recrutement Permanent",
                  description:
                    "Placement d'employés permanents avec une collaboration étroite entre demandeurs et employeurs pour une adéquation parfaite des profils.",
                  features: ["Évaluation approfondie", "Matching précis", "Suivi long terme"],
                  color: "from-blue-500/20 to-blue-600/20",
                  href: "/services/recrutement-permanent",
                },
                {
                  icon: Clock,
                  title: "Recrutement Temporaire",
                  description:
                    "Solution pour les besoins à court terme, couvrant les vacances, congés maladie et projets spéciaux avec flexibilité.",
                  features: ["Réactivité rapide", "Flexibilité totale", "Gestion simplifiée"],
                  color: "from-green-500/20 to-green-600/20",
                  href: "/services/recrutement-temporaire",
                },
                {
                  icon: Award,
                  title: "Recherche de Cadres",
                  description:
                    "Services spécialisés pour les postes de direction avec une sélection rigoureuse des meilleurs candidats de haut niveau.",
                  features: ["Approche confidentielle", "Réseau exclusif", "Évaluation experte"],
                  color: "from-purple-500/20 to-purple-600/20",
                  href: "/services/recherche-cadres",
                },
                {
                  icon: Globe,
                  title: "Recrutement International",
                  description:
                    "Agence reconnue par la CNESST avec assistance EIMT et un réseau mondial de recruteurs et partenaires.",
                  features: ["Expertise EIMT", "Réseau mondial", "Support immigration"],
                  color: "from-orange-500/20 to-orange-600/20",
                  href: "/services/recrutement-international",
                },
                {
                  icon: TrendingUp,
                  title: "Recrutement Externalisé (RPO)",
                  description:
                    "Externalisation complète du processus de recrutement avec gestion de la recherche à l'intégration.",
                  features: ["Processus complet", "Économies d'échelle", "Expertise dédiée"],
                  color: "from-red-500/20 to-red-600/20",
                  href: "/services/recrutement-externalise",
                },
                {
                  icon: Search,
                  title: "Stages",
                  description:
                    "Opportunités pour les étudiants avec une expérience professionnelle valorisante servant de tremplin pour une carrière réussie.",
                  features: ["Programmes structurés", "Mentorat inclus", "Opportunités d'embauche"],
                  color: "from-indigo-500/20 to-indigo-600/20",
                  href: "/services/stages",
                },
              ].map((service, index) => (
                <div key={index} className="magic-card p-8 group">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center text-sm font-medium text-primary group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                      En savoir plus
                    </span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <Target className="inline-block h-4 w-4 mr-2" />
                Notre Approche
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Comment nous travaillons
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Un processus éprouvé et structuré pour garantir les meilleurs résultats à chaque étape.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Analyse des Besoins",
                  description: "Compréhension approfondie de vos exigences et de votre culture d'entreprise.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Recherche Active",
                  description: "Identification et approche des meilleurs candidats sur le marché.",
                  icon: Users,
                },
                {
                  step: "03",
                  title: "Évaluation Rigoureuse",
                  description: "Tests, entretiens et vérifications pour garantir la qualité des profils.",
                  icon: Award,
                },
                {
                  step: "04",
                  title: "Accompagnement",
                  description: "Suivi personnalisé jusqu'à l'intégration réussie du candidat.",
                  icon: TrendingUp,
                },
              ].map((step, index) => (
                <div key={index} className="magic-card p-6 text-center group">
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Building2 className="inline-block h-4 w-4 mr-2" />
                Secteurs d'Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Industries que nous servons
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Notre expertise s'étend à de nombreux secteurs d'activité pour répondre à tous vos besoins.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Technologie", emoji: "💻", color: "from-blue-500/20 to-blue-600/20" },
                { name: "Santé", emoji: "🏥", color: "from-green-500/20 to-green-600/20" },
                { name: "Finance", emoji: "💰", color: "from-yellow-500/20 to-yellow-600/20" },
                { name: "Ingénierie", emoji: "⚙️", color: "from-purple-500/20 to-purple-600/20" },
                { name: "Manufacture", emoji: "🏭", color: "from-red-500/20 to-red-600/20" },
                { name: "Construction", emoji: "🏗️", color: "from-orange-500/20 to-orange-600/20" },
                { name: "Éducation", emoji: "📚", color: "from-indigo-500/20 to-indigo-600/20" },
                { name: "Hôtellerie", emoji: "🏨", color: "from-pink-500/20 to-pink-600/20" },
                { name: "Transport", emoji: "🚛", color: "from-cyan-500/20 to-cyan-600/20" },
              ].map((industry, index) => (
                <div key={index} className="magic-card p-6 text-center group">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{industry.emoji}</span>
                  </div>
                  <h3 className="font-bold text-lg">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-secondary/80 text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm">
                <Sparkles className="inline-block h-4 w-4 mr-2" />
                Nos Avantages
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Pourquoi choisir nos services</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Des avantages concrets qui font la différence dans votre stratégie de recrutement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Rapidité d'exécution",
                  description: "Processus optimisés pour des résultats rapides sans compromis sur la qualité.",
                },
                {
                  icon: Award,
                  title: "Expertise reconnue",
                  description: "15+ années d'expérience et une connaissance approfondie du marché canadien.",
                },
                {
                  icon: Users,
                  title: "Approche personnalisée",
                  description: "Solutions sur mesure adaptées à votre culture d'entreprise et vos besoins spécifiques.",
                },
                {
                  icon: Globe,
                  title: "Réseau international",
                  description: "Accès à un vaste réseau de talents locaux et internationaux qualifiés.",
                },
                {
                  icon: Target,
                  title: "Taux de réussite élevé",
                  description: "98% de taux de satisfaction client et 95% de rétention des placements.",
                },
                {
                  icon: Building2,
                  title: "Support continu",
                  description: "Accompagnement post-placement et suivi de l'intégration des candidats.",
                },
              ].map((benefit, index) => (
                <div key={index} className="magic-card p-6 bg-white/10 backdrop-blur-sm group">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="opacity-90 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl floating-element"></div>
          <div
            className="absolute bottom-1/4 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl floating-element"
            style={{ animationDelay: "-2s" }}
          ></div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container relative">
            <div className="magic-border">
              <div className="magic-border-content bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="text-center relative p-8 md:p-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Prêt à transformer votre recrutement?
                  </h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Découvrez comment nos services peuvent vous aider à attirer, recruter et retenir les meilleurs
                    talents pour votre organisation.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-xl bg-white/90 text-primary hover:bg-white transition-all duration-300"
                    >
                      <Users className="mr-2 h-5 w-5" />
                      Demander une consultation
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl bg-transparent text-white border-white/30 hover:bg-white/10 transition-all duration-300"
                    >
                      Voir nos tarifs
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
