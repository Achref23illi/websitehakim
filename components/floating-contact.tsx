"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contact"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs text-white">
          1
        </span>
      </button>

      {/* Contact panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="magic-card w-full max-w-md p-6 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Contactez-nous</h3>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground mb-4">
              Laissez-nous un message et nous vous répondrons dans les plus brefs délais.
            </p>
            <form className="space-y-4">
              <div>
                <Input className="magic-input" placeholder="Votre nom" required />
              </div>
              <div>
                <Input className="magic-input" type="email" placeholder="Votre email" required />
              </div>
              <div>
                <textarea
                  className="magic-input w-full h-24 resize-none"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              <Button className="magic-button w-full">Envoyer</Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
