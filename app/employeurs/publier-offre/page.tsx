"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
  CalendarIcon, User, Briefcase, MapPin, Send, 
  Eye, Save, FileText, PlusCircle, CheckCircle2, 
  Clock, Award, ListChecks, CreditCard, Sparkles
} from "lucide-react"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useRouter } from "next/navigation"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter 
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PublierOffrePage() {
  const { t, locale } = useLanguage()
  const router = useRouter()
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [formStep, setFormStep] = useState(1)
  const totalSteps = 3

  // Form validation schema
  const formSchema = z.object({
    jobTitle: z.string().min(1, { message: t('employers.post_job.validation.title_required') }),
    company: z.string().min(1, { message: t('employers.post_job.validation.company_required') }),
    location: z.string().min(1, { message: t('employers.post_job.validation.location_required') }),
    jobType: z.string().min(1, { message: t('employers.post_job.validation.job_type_required') }),
    description: z.string()
      .min(100, { message: t('employers.post_job.validation.description_min') })
      .min(1, { message: t('employers.post_job.validation.description_required') }),
    requirements: z.string().optional(),
    benefits: z.string().optional(),
    contactEmail: z.string()
      .min(1, { message: t('employers.post_job.validation.email_required') })
      .email({ message: t('employers.post_job.validation.email_invalid') }),
    applicationDeadline: z.date().optional(),
    salary: z.string().optional(),
  })

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      company: "",
      location: "",
      jobType: "",
      description: "",
      requirements: "",
      benefits: "",
      contactEmail: "",
      salary: "",
    },
    mode: "onChange",
  })

  // Track form completion progress
  const watchedFields = form.watch()
  const calculateProgress = () => {
    const requiredFields = ['jobTitle', 'company', 'location', 'jobType', 'description', 'contactEmail']
    const filledFields = requiredFields.filter(field => watchedFields[field as keyof typeof watchedFields])
    return Math.round((filledFields.length / requiredFields.length) * 100)
  }

  // Get completion percentage
  const progressPercentage = calculateProgress()

  // Add tag to list
  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  // Remove tag from list
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  // Handle key press in tag input
  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag()
    }
  }

  // Handle form step navigation
  const nextStep = () => {
    if (formStep < totalSteps) {
      setFormStep(formStep + 1)
      // Scroll to top of form
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1)
      // Scroll to top of form
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // This would normally submit to an API
    console.log({ ...values, tags })
    
    // Show success toast
    toast({
      title: t('employers.post_job.success.title'),
      description: t('employers.post_job.success.message'),
      duration: 5000,
    })
    
    // Redirect to employer dashboard or job listing
    // router.push('/employeurs/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Enhanced Design */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          {/* Background with animated gradient and pattern - reduced opacity */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-background/90 to-primary/15 z-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23031F28' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse" style={{ animationDuration: '10s' }} />
          </div>

          <div className="container relative z-10">
            <div className="text-center mb-8">
              <Badge variant="outline" className="px-4 py-1 mb-4 border-primary/50 bg-primary/5 text-primary font-medium">
                {locale === 'fr' ? 'Espace Employeur' : 'Employer Area'}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('employers.post_job.title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('employers.post_job.subtitle')}
              </p>
            </div>

            {/* Progress indicator */}
            <div className="max-w-3xl mx-auto mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{locale === 'fr' ? 'Progression' : 'Progress'}</span>
                <span className="text-sm font-medium">{progressPercentage}%</span>
              </div>
              <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              
              {/* Step indicator */}
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center">
                  {Array.from({length: totalSteps}).map((_, index) => (
                    <div key={index} className="flex items-center">
                      <button
                        onClick={() => setFormStep(index + 1)}
                        className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200",
                          formStep === index + 1 
                            ? "border-primary bg-primary text-white" 
                            : formStep > index + 1
                              ? "border-primary/50 bg-primary/10 text-primary" 
                              : "border-muted-foreground/30 bg-background text-muted-foreground"
                        )}
                      >
                        {formStep > index + 1 ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </button>
                      {index < totalSteps - 1 && (
                        <div 
                          className={cn(
                            "w-10 h-1 mx-1",
                            index < formStep - 1 
                              ? "bg-primary" 
                              : "bg-muted-foreground/30"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="max-w-3xl mx-auto bg-background/90 backdrop-blur-xl shadow-xl border border-white/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl">
                  {formStep === 1 && (
                    <>
                      <FileText className="mr-2 h-6 w-6 text-primary" />
                      {locale === 'fr' ? 'Informations générales' : 'General Information'}
                    </>
                  )}
                  {formStep === 2 && (
                    <>
                      <ListChecks className="mr-2 h-6 w-6 text-primary" />
                      {locale === 'fr' ? 'Détails du poste' : 'Job Details'}
                    </>
                  )}
                  {formStep === 3 && (
                    <>
                      <Send className="mr-2 h-6 w-6 text-primary" />
                      {locale === 'fr' ? 'Informations de candidature' : 'Application Information'}
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {formStep === 1 && (locale === 'fr' ? 'Commençons par les informations essentielles de votre offre d\'emploi' : 'Let\'s start with the essential information for your job posting')}
                  {formStep === 2 && (locale === 'fr' ? 'Ajoutez plus de détails pour attirer les meilleurs candidats' : 'Add more details to attract the best candidates')}
                  {formStep === 3 && (locale === 'fr' ? 'Finalisez votre offre avec les informations de candidature' : 'Finalize your posting with application information')}
                </CardDescription>
                <Separator className="mt-4" />
              </CardHeader>

              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Step 1: Basic Job Information */}
                    {formStep === 1 && (
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <Briefcase className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.job_title')}
                                <Badge variant="outline" className="ml-2 px-2 py-0 text-[10px] border-red-500/50 text-red-500">
                                  {locale === 'fr' ? 'Requis' : 'Required'}
                                </Badge>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={t('employers.post_job.form.job_title_placeholder')} 
                                  className="bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {locale === 'fr' ? 'Soyez précis pour attirer les bons candidats' : 'Be specific to attract the right candidates'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <User className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.company')}
                                <Badge variant="outline" className="ml-2 px-2 py-0 text-[10px] border-red-500/50 text-red-500">
                                  {locale === 'fr' ? 'Requis' : 'Required'}
                                </Badge>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={t('employers.post_job.form.company_placeholder')} 
                                  className="bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center text-base">
                                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                                  {t('employers.post_job.form.location')}
                                  <Badge variant="outline" className="ml-2 px-2 py-0 text-[10px] border-red-500/50 text-red-500">
                                    {locale === 'fr' ? 'Requis' : 'Required'}
                                  </Badge>
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder={t('employers.post_job.form.location_placeholder')} 
                                    className="bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="jobType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center text-base">
                                  <Clock className="mr-2 h-4 w-4 text-primary" />
                                  {t('employers.post_job.form.job_type')}
                                  <Badge variant="outline" className="ml-2 px-2 py-0 text-[10px] border-red-500/50 text-red-500">
                                    {locale === 'fr' ? 'Requis' : 'Required'}
                                  </Badge>
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50">
                                      <SelectValue placeholder={t('employers.post_job.form.job_type')} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value={locale === 'fr' ? "Temps plein" : "Full-time"}>
                                      {locale === 'fr' ? "Temps plein" : "Full-time"}
                                    </SelectItem>
                                    <SelectItem value={locale === 'fr' ? "Temps partiel" : "Part-time"}>
                                      {locale === 'fr' ? "Temps partiel" : "Part-time"}
                                    </SelectItem>
                                    <SelectItem value={locale === 'fr' ? "Contractuel" : "Contract"}>
                                      {locale === 'fr' ? "Contractuel" : "Contract"}
                                    </SelectItem>
                                    <SelectItem value={locale === 'fr' ? "Temporaire" : "Temporary"}>
                                      {locale === 'fr' ? "Temporaire" : "Temporary"}
                                    </SelectItem>
                                    <SelectItem value={locale === 'fr' ? "Freelance" : "Freelance"}>
                                      {locale === 'fr' ? "Freelance" : "Freelance"}
                                    </SelectItem>
                                    <SelectItem value={locale === 'fr' ? "Stage" : "Internship"}>
                                      {locale === 'fr' ? "Stage" : "Internship"}
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="salary"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <CreditCard className="mr-2 h-4 w-4 text-primary" />
                                {locale === 'fr' ? 'Salaire (optionnel)' : 'Salary (optional)'}
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={locale === 'fr' ? 'ex: 45 000 € - 60 000 € par an' : 'e.g. $45,000 - $60,000 per year'} 
                                  className="bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {locale === 'fr' ? 'Les offres avec salaire reçoivent 40% plus de candidatures' : 'Job postings with salary info get 40% more applications'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Step 2: Detailed Job Information */}
                    {formStep === 2 && (
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <FileText className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.job_description')}
                                <Badge variant="outline" className="ml-2 px-2 py-0 text-[10px] border-red-500/50 text-red-500">
                                  {locale === 'fr' ? 'Requis' : 'Required'}
                                </Badge>
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder={t('employers.post_job.form.job_description_placeholder')} 
                                  className="min-h-40 bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {locale === 'fr' 
                                  ? 'Minimum 100 caractères. Décrivez les responsabilités et le contexte du poste.' 
                                  : 'Minimum 100 characters. Describe the responsibilities and context of the position.'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="requirements"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <ListChecks className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.requirements')}
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder={t('employers.post_job.form.requirements_placeholder')} 
                                  className="min-h-32 bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {locale === 'fr' 
                                  ? 'Listez les compétences, qualifications et expérience requises (une par ligne)' 
                                  : 'List the required skills, qualifications and experience (one per line)'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="benefits"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <Award className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.benefits')}
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder={t('employers.post_job.form.benefits_placeholder')} 
                                  className="min-h-32 bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {locale === 'fr' 
                                  ? 'Mettez en valeur les avantages qui rendent votre entreprise attractive (une par ligne)' 
                                  : 'Highlight the benefits that make your company attractive (one per line)'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="space-y-2">
                          <FormLabel className="flex items-center text-base">
                            <Sparkles className="mr-2 h-4 w-4 text-primary" />
                            {t('employers.post_job.form.tags')}
                          </FormLabel>
                          <div className="bg-background/50 backdrop-blur-sm border border-input/50 rounded-md p-3">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {tags.length > 0 ? (
                                tags.map(tag => (
                                  <Badge 
                                    key={tag} 
                                    variant="secondary"
                                    className="px-3 py-1 gap-1 bg-primary/10 hover:bg-primary/20 text-primary"
                                  >
                                    {tag}
                                    <button 
                                      type="button" 
                                      onClick={() => removeTag(tag)}
                                      className="ml-1 rounded-full h-4 w-4 inline-flex items-center justify-center text-xs hover:bg-primary/30"
                                    >
                                      ×
                                    </button>
                                  </Badge>
                                ))
                              ) : (
                                <p className="text-sm text-muted-foreground italic">
                                  {locale === 'fr' ? 'Aucun tag ajouté pour l\'instant' : 'No tags added yet'}
                                </p>
                              )}
                            </div>
                            <div className="flex">
                              <Input
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                                placeholder={t('employers.post_job.form.tags_placeholder')}
                                className="bg-background/80 border-input/30 focus-visible:ring-primary/50"
                              />
                              <Button 
                                type="button" 
                                variant="outline" 
                                size="sm"
                                onClick={addTag}
                                className="ml-2"
                              >
                                <PlusCircle className="h-4 w-4 mr-1" />
                                {locale === 'fr' ? 'Ajouter' : 'Add'}
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {locale === 'fr' 
                                ? "Appuyez sur Entrée ou virgule pour ajouter un tag, ou cliquez sur le bouton Ajouter" 
                                : "Press Enter or comma to add a tag, or click the Add button"}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Application Information */}
                    {formStep === 3 && (
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="contactEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-base">
                                <Send className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.contact_email')}
                                <Badge variant="outline" className="ml-2 px-2 py-0 text-[10px] border-red-500/50 text-red-500">
                                  {locale === 'fr' ? 'Requis' : 'Required'}
                                </Badge>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={t('employers.post_job.form.contact_email_placeholder')} 
                                  className="bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50"
                                  type="email"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {locale === 'fr' 
                                  ? 'Les candidatures seront envoyées à cette adresse email' 
                                  : 'Applications will be sent to this email address'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="applicationDeadline"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="flex items-center text-base">
                                <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                                {t('employers.post_job.form.application_deadline')}
                              </FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-normal bg-background/50 backdrop-blur-sm border-input/50 focus-visible:ring-primary/50",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {field.value ? (
                                        format(field.value, "PPP", { locale: locale === 'fr' ? fr : enUS })
                                      ) : (
                                        <span>{locale === 'fr' ? 'Sélectionner une date' : 'Select a date'}</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription>
                                {locale === 'fr' 
                                  ? 'Laisser vide si l\'offre n\'a pas de date limite' 
                                  : 'Leave empty if the job posting has no deadline'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                          <h3 className="font-medium text-primary flex items-center mb-2">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            {locale === 'fr' ? 'Récapitulatif de votre offre' : 'Job posting summary'}
                          </h3>
                          <ul className="space-y-2">
                            {watchedFields.jobTitle && (
                              <li className="text-sm flex">
                                <span className="font-medium min-w-32">{locale === 'fr' ? 'Poste:' : 'Position:'}</span>
                                <span>{watchedFields.jobTitle}</span>
                              </li>
                            )}
                            {watchedFields.company && (
                              <li className="text-sm flex">
                                <span className="font-medium min-w-32">{locale === 'fr' ? 'Entreprise:' : 'Company:'}</span>
                                <span>{watchedFields.company}</span>
                              </li>
                            )}
                            {watchedFields.location && (
                              <li className="text-sm flex">
                                <span className="font-medium min-w-32">{locale === 'fr' ? 'Localisation:' : 'Location:'}</span>
                                <span>{watchedFields.location}</span>
                              </li>
                            )}
                            {watchedFields.jobType && (
                              <li className="text-sm flex">
                                <span className="font-medium min-w-32">{locale === 'fr' ? 'Type:' : 'Type:'}</span>
                                <span>{watchedFields.jobType}</span>
                              </li>
                            )}
                            {watchedFields.salary && (
                              <li className="text-sm flex">
                                <span className="font-medium min-w-32">{locale === 'fr' ? 'Salaire:' : 'Salary:'}</span>
                                <span>{watchedFields.salary}</span>
                              </li>
                            )}
                            {tags.length > 0 && (
                              <li className="text-sm flex">
                                <span className="font-medium min-w-32">{locale === 'fr' ? 'Tags:' : 'Tags:'}</span>
                                <div className="flex flex-wrap gap-1">
                                  {tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                  ))}
                                </div>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="pt-4">
                      <Separator className="mb-6" />
                      
                      <div className="flex flex-wrap gap-4 justify-between">
                        <div className="flex flex-wrap gap-3">
                          {formStep > 1 ? (
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={prevStep}
                              className="gap-2"
                            >
                              {locale === 'fr' ? 'Précédent' : 'Previous'}
                            </Button>
                          ) : (
                            <Button type="button" variant="outline" className="gap-2">
                              <Save className="h-4 w-4" />
                              {t('employers.post_job.form.save_draft')}
                            </Button>
                          )}
                          
                          <Button type="button" variant="secondary" className="gap-2">
                            <Eye className="h-4 w-4" />
                            {t('employers.post_job.form.preview')}
                          </Button>
                        </div>
                        
                        {formStep < totalSteps ? (
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            className="gap-2 bg-primary hover:bg-primary/90 text-white"
                          >
                            {locale === 'fr' ? 'Continuer' : 'Continue'}
                          </Button>
                        ) : (
                          <Button type="submit" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-white">
                            <Send className="h-4 w-4" />
                            {t('employers.post_job.form.submit')}
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}