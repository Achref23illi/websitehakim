"use client"
import { MapPin, Briefcase, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface JobCardProps {
  title: string
  company: string
  location: string
  type: "Temps plein" | "Temps partiel" | "Contractuel" | "Temporaire"
  salary?: string
  tags?: string[]
  postedDate: string
  onApply: () => void
}

export function JobCard({ title, company, location, type, salary, tags, postedDate, onApply }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-2">{company}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            {type}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {postedDate}
          </div>
        </div>
        {salary && <p className="font-medium mb-4">{salary}</p>}
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onApply} className="w-full">
          Postuler
        </Button>
      </CardFooter>
    </Card>
  )
}
