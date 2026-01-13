"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { ContactForm } from "./contact-form"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"

export default function ContactFormButton() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  // Verificar se estamos na página de energia solar
  const isEnergiaSolarPage = typeof window !== "undefined" && window.location.pathname === "/energia-solar"

  // Se for página de energia solar, sempre abrir o popup
  if (isEnergiaSolarPage) {
    return (
      <>
        <Button
          className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[22px] md:text-[26px] font-bold py-[12px] md:py-[16px] px-6 md:px-10 rounded-[30px] shadow-md flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-4 border-b-4 border-red-900 h-[56px] md:h-[64px] pulse-animation font-montserrat"
          onClick={() => setIsOpen(true)}
        >
          <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
          ORÇAMENTO
        </Button>
        <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    )
  }

  // Se for dispositivo móvel em outras páginas, usar um link para WhatsApp
  if (isMobile) {
    return (
      <Link href="/whatsapp" target="_blank" rel="noopener noreferrer">
        <Button
          className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[22px] md:text-[26px] font-bold py-[12px] md:py-[16px] px-6 md:px-10 rounded-[30px] shadow-md flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-4 border-b-4 border-red-900 h-[56px] md:h-[64px] pulse-animation font-montserrat"
          type="button"
        >
          <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
          ORÇAMENTO
        </Button>
      </Link>
    )
  }

  // Se for desktop em outras páginas, manter o comportamento atual
  return (
    <>
      <Button
        className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[22px] md:text-[26px] font-bold py-[12px] md:py-[16px] px-6 md:px-10 rounded-[30px] shadow-md flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-4 border-b-4 border-red-900 h-[56px] md:h-[64px] pulse-animation font-montserrat"
        onClick={() => setIsOpen(true)}
      >
        <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
        ORÇAMENTO
      </Button>
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
