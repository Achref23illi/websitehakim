"use client"

import { JobCard } from "@/components/ui/job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function EmploisPage() {
  // Cette fonction serait normalement connectée à un vrai système de candidature
  const handleApply = () => {
    console.log("Candidature soumise")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12">
          <div className="container">
            <h1 className="section-title text-center">Offres d'emploi</h1>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez les opportunités professionnelles qui correspondent à vos compétences et aspirations.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-md p-4">
              <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="text" placeholder="Titre du poste, compétences ou mots-clés" className="pl-10" />
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="text" placeholder="Ville, province ou code postal" className="pl-10" />
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  RECHERCHER
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              {/* Filters Sidebar */}
              <div className="bg-background p-6 rounded-lg border h-fit">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Filtres</h3>
                  <Filter className="h-5 w-5" />
                </div>

                <div className="space-y-6">
                  {/* Type d'emploi */}
                  <div>
                    <h4 className="font-medium mb-2">Type d'emploi</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="fulltime" className="mr-2" />
                        <label htmlFor="fulltime">Temps plein</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="parttime" className="mr-2" />
                        <label htmlFor="parttime">Temps partiel</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="contract" className="mr-2" />
                        <label htmlFor="contract">Contractuel</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="temporary" className="mr-2" />
                        <label htmlFor="temporary">Temporaire</label>
                      </div>
                    </div>
                  </div>

                  {/* Expérience */}
                  <div>
                    <h4 className="font-medium mb-2">Expérience</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="entry" className="mr-2" />
                        <label htmlFor="entry">Débutant</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="mid" className="mr-2" />
                        <label htmlFor="mid">Intermédiaire</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="senior" className="mr-2" />
                        <label htmlFor="senior">Senior</label>
                      </div>
                    </div>
                  </div>

                  {/* Salaire */}
                  <div>
                    <h4 className="font-medium mb-2">Salaire annuel</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="salary1" className="mr-2" />
                        <label htmlFor="salary1">Moins de 40 000 $</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="salary2" className="mr-2" />
                        <label htmlFor="salary2">40 000 $ - 60 000 $</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="salary3" className="mr-2" />
                        <label htmlFor="salary3">60 000 $ - 80 000 $</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="salary4" className="mr-2" />
                        <label htmlFor="salary4">Plus de 80 000 $</label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Appliquer les filtres</Button>
                </div>
              </div>

              {/* Job Listings */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">128 offres d'emploi trouvées</h2>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm">Trier par:</span>
                    <select className="text-sm border rounded p-1">
                      <option>Plus récent</option>
                      <option>Pertinence</option>
                      <option>Salaire</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <JobCard
                    title="Développeur Full Stack"
                    company="TechCorp Inc."
                    location="Montréal, QC"
                    type="Temps plein"
                    salary="75 000 $ - 95 000 $ par année"
                    tags={["React", "Node.js", "TypeScript", "MongoDB"]}
                    postedDate="Il y a 2 jours"
                    onApply={handleApply}
                  />

                  <JobCard
                    title="Infirmier(ère) clinique"
                    company="Centre Médical Saint-Laurent"
                    location="Québec, QC"
                    type="Temps plein"
                    salary="70 000 $ - 85 000 $ par année"
                    tags={["Soins intensifs", "Expérience 3+ ans", "Bilingue"]}
                    postedDate="Il y a 3 jours"
                    onApply={handleApply}
                  />

                  <JobCard
                    title="Comptable Senior"
                    company="Groupe Financier National"
                    location="Laval, QC"
                    type="Temps plein"
                    salary="65 000 $ - 80 000 $ par année"
                    tags={["CPA", "Fiscalité", "États financiers"]}
                    postedDate="Il y a 1 semaine"
                    onApply={handleApply}
                  />

                  <JobCard
                    title="Ingénieur Civil"
                    company="Constructions Modernes Inc."
                    location="Montréal, QC"
                    type="Contractuel"
                    salary="45 $ - 60 $ de l'heure"
                    tags={["Génie civil", "AutoCAD", "Gestion de projet"]}
                    postedDate="Il y a 5 jours"
                    onApply={handleApply}
                  />

                  <JobCard
                    title="Représentant des ventes"
                    company="Solutions Industrielles"
                    location="Trois-Rivières, QC"
                    type="Temps plein"
                    salary="Base + Commission"
                    tags={["B2B", "Développement d'affaires", "Bilingue"]}
                    postedDate="Il y a 1 jour"
                    onApply={handleApply}
                  />
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Précédent
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <span>...</span>
                    <Button variant="outline" size="sm">
                      10
                    </Button>
                    <Button variant="outline" size="sm">
                      Suivant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
