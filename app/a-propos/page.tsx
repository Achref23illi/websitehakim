import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Sparkles, Users, Award, Target, Heart, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AProposPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Enhanced Design */}
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

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                  <Heart className="inline-block h-4 w-4 mr-2" />
                  Notre histoire
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  À propos de{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Recruitment Plus
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Recruitment Plus Inc. aide les employeurs canadiens à combler la pénurie de main-d'œuvre avec une
                  approche personnalisée, humaine et simple qui fait la différence.
                </p>
                <Button size="lg" className="magic-button">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactez-nous
                </Button>
              </div>
              <div className="relative">
                <div className="magic-card p-2 overflow-hidden">
                  <Image
                    src="/images/team-working.png"
                    alt="Équipe Recruitment Plus en collaboration"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Target className="inline-block h-4 w-4 mr-2" />
                Notre Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connecter les talents aux opportunités
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Connecter les talents aux meilleures opportunités professionnelles, aider les candidats à trouver un
                emploi passionnant et aider les employeurs à recruter la personne idéale avec un service transparent,
                efficace et humain.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Connecter",
                  description: "Mettre en relation les talents et les opportunités professionnelles.",
                  color: "from-blue-500/20 to-blue-600/20",
                },
                {
                  icon: Shield,
                  title: "Confiance",
                  description: "Bâtir des relations durables fondées sur la confiance et le respect.",
                  color: "from-green-500/20 to-green-600/20",
                },
                {
                  icon: Award,
                  title: "Résultats",
                  description: "Fournir un service transparent, efficace et axé sur les résultats.",
                  color: "from-purple-500/20 to-purple-600/20",
                },
              ].map((value, index) => (
                <div key={index} className="magic-card p-8 text-center group">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="magic-card p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Notre équipe au travail"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                  <Sparkles className="inline-block h-4 w-4 mr-2" />
                  Nos Avantages
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Pourquoi nous choisir
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Notre approche humaine, personnalisée et axée sur les résultats nous distingue. Nous offrons un
                  accompagnement complet, une sélection rigoureuse des candidats et une compréhension profonde des
                  besoins de nos clients.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      icon: Award,
                      title: "Expertise Reconnue",
                      description: "Années d'expérience et connaissance approfondie du marché.",
                    },
                    {
                      icon: Heart,
                      title: "Service Personnalisé",
                      description: "Solutions sur mesure pour des résultats durables.",
                    },
                    {
                      icon: Globe,
                      title: "Portée Mondiale",
                      description: "Recrutement international des meilleurs talents.",
                    },
                  ].map((advantage, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-primary/10 shrink-0">
                        <advantage.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground">{advantage.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
                <Users className="inline-block h-4 w-4 mr-2" />
                Notre Équipe
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Rencontrez notre équipe
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Des professionnels passionnés et expérimentés dédiés à votre succès.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Marie Tremblay", role: "Directrice Générale", initial: "M" },
                { name: "Jean Dupont", role: "Directeur du Recrutement", initial: "J" },
                { name: "Sophie Martin", role: "Responsable International", initial: "S" },
                { name: "Pierre Lavoie", role: "Conseiller RH Senior", initial: "P" },
              ].map((member, index) => (
                <div key={index} className="magic-card p-6 text-center group">
                  <div className="relative h-32 w-32 mx-auto mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-primary">{member.initial}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <Link
                      href="#"
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container relative">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm">
                <Zap className="inline-block h-4 w-4 mr-2" />
                Nos Résultats
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nos chiffres parlent d'eux-mêmes</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Des résultats concrets qui témoignent de notre expertise et de notre engagement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "500+", label: "Entreprises servies", icon: "🏢" },
                { number: "5000+", label: "Placements réussis", icon: "✅" },
                { number: "15+", label: "Années d'expérience", icon: "📅" },
                { number: "98%", label: "Taux de satisfaction", icon: "⭐" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg magic-card"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
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

        {/* Locations Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 backdrop-blur-sm rounded-full text-secondary font-medium text-sm shimmer">
                <MapPin className="inline-block h-4 w-4 mr-2" />
                Nos Bureaux
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Nos succursales
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Présents dans les principales villes du Canada pour mieux vous servir.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  city: "Montréal (Siège social)",
                  address: "123 Rue Principale, Montréal, QC H3Z 2Y7",
                  phone: "+1 (514) 123-4567",
                  email: "montreal@recruitmentplus.ca",
                },
                {
                  city: "Québec",
                  address: "456 Boulevard des Forges, Québec, QC G1K 7P4",
                  phone: "+1 (418) 987-6543",
                  email: "quebec@recruitmentplus.ca",
                },
                {
                  city: "Toronto",
                  address: "789 Bay Street, Toronto, ON M5G 2N8",
                  phone: "+1 (416) 555-7890",
                  email: "toronto@recruitmentplus.ca",
                },
              ].map((location, index) => (
                <div key={index} className="magic-card p-8 group">
                  <h3 className="font-bold text-xl mb-6 text-primary">{location.city}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{location.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{location.phone}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{location.email}</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Voir sur la carte
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Discutons ensemble</h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Contactez notre équipe pour vos besoins spécifiques en recrutement et ressources humaines.
                  </p>

                  <div className="grid gap-8 md:grid-cols-3 mb-8">
                    {[
                      { icon: Phone, title: "Téléphone", info: "+1 (514) 123-4567" },
                      { icon: Mail, title: "Email", info: "info@recruitmentplus.ca" },
                      { icon: MapPin, title: "Adresse", info: "Montréal, Québec, Toronto" },
                    ].map((contact, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                          <contact.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">{contact.title}</h3>
                        <p className="text-sm opacity-90">{contact.info}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-xl bg-white/90 text-primary hover:bg-white transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contactez-nous
                  </Button>
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
