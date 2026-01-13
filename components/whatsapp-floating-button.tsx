"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { ContactForm } from "./contact-form"

export default function WhatsAppFloatingButton() {
  const isMobile = useMobile()
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  // Verificar se estamos na página de energia solar
  const isEnergiaSolarPage = typeof window !== "undefined" && window.location.pathname === "/energia-solar"

  // Se for página de energia solar, sempre abrir o popup
  if (isEnergiaSolarPage) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsContactFormOpen(true)}
          className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-md border-b-4 border-red-900 pulse-animation"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </Button>
        <ContactForm isOpen={isContactFormOpen} setIsOpen={setIsContactFormOpen} />
      </div>
    )
  }

  // Se for dispositivo móvel em outras páginas, usar um link para WhatsApp
  if (isMobile) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/whatsapp" target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-md border-b-4 border-red-900 pulse-animation"
            type="button"
          >
            <WhatsAppIcon className="h-8 w-8" />
          </Button>
        </Link>
      </div>
    )
  }

  // Se for desktop em outras páginas, abrir o formulário de contato
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsContactFormOpen(true)}
        className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-md border-b-4 border-red-900 pulse-animation"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </Button>
      <ContactForm isOpen={isContactFormOpen} setIsOpen={setIsContactFormOpen} />
    </div>
  )
}
