"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User, Building2, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/LanguageContext"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [accountType, setAccountType] = useState("candidate")
  
  // Form fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreeMarketing, setAgreeMarketing] = useState(false)

  // Mock registration function - would connect to authentication service in production
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Validation
      if (!name || !email || !password) {
        throw new Error(t('register.error_required_fields'))
      }
      
      if (!agreeTerms) {
        throw new Error(t('register.error_terms'))
      }

      // Success notification
      toast({
        title: t('register.success_title'),
        description: t('register.success_message'),
      })

      // Redirect to home page
      router.push("/")
    } catch (error) {
      toast({
        title: t('register.error_title'),
        description: error instanceof Error ? error.message : t('register.error_message'),
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-20 mt-16">
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 floating-element"></div>
      <div
        className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl opacity-50 floating-element"
        style={{ animationDelay: "-3s" }}
      ></div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px] md:w-[500px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shimmer">
            <Sparkles className="inline-block h-4 w-4 mr-2" />
            {t('register.welcome')}
          </div>
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('register.title')}
            </span>
          </h1>
          <p className="text-muted-foreground">
            {t('register.subtitle')}
          </p>
        </div>

        <div className="magic-card p-6 shadow-xl bg-background/70 backdrop-blur-md border border-white/20">
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-4">
              <Label>{t('register.account_type')}</Label>
              <RadioGroup 
                defaultValue="candidate" 
                className="flex justify-center gap-4"
                value={accountType}
                onValueChange={setAccountType}
              >
                <div className="flex items-center space-x-2 w-[200px]">
                  <RadioGroupItem value="candidate" id="candidate" className="peer sr-only" />
                  <Label
                    htmlFor="candidate"
                    className="flex flex-col items-center justify-between w-full rounded-xl border-2 border-muted bg-background/50 backdrop-blur-sm p-5 hover:bg-primary/5 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/10 cursor-pointer transition-all duration-200"
                  >
                    <User className="mb-3 h-7 w-7 text-primary" />
                    <span className="text-sm font-medium">{t('register.candidate')}</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 w-[200px]">
                  <RadioGroupItem value="employer" id="employer" className="peer sr-only" />
                  <Label
                    htmlFor="employer"
                    className="flex flex-col items-center justify-between w-full rounded-xl border-2 border-muted bg-background/50 backdrop-blur-sm p-5 hover:bg-primary/5 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/10 cursor-pointer transition-all duration-200"
                  >
                    <Building2 className="mb-3 h-7 w-7 text-primary" />
                    <span className="text-sm font-medium">{t('register.employer')}</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">{t('register.name_label')}</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder={accountType === "candidate" ? t('register.name_placeholder_candidate') : t('register.name_placeholder_employer')}
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('register.email_label')}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t('register.email_placeholder')}
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('register.password_label')}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t('register.password_placeholder')}
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {t('register.password_requirements')}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  required
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  {t('register.terms_text')}{" "}
                  <Link href="/terms" className="text-primary hover:underline underline-offset-4">
                    {t('register.terms_link')}
                  </Link>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="marketing" 
                  checked={agreeMarketing}
                  onCheckedChange={(checked) => setAgreeMarketing(checked as boolean)}
                />
                <Label htmlFor="marketing" className="text-sm font-normal">
                  {t('register.marketing_text')}
                </Label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full magic-button bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-white font-medium py-2 h-auto text-base"
              disabled={isLoading}
            >
              {isLoading ? t('register.loading') : t('register.submit')}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            {t('register.have_account')}{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              {t('register.login_link')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}