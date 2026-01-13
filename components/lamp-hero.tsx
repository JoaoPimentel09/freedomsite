"use client"
import { motion } from "motion/react"
import { LampContainer } from "@/components/ui/lamp"
import Image from "next/image"
import ContactFormButton from "@/components/contact-form-button"

export default function LampHero() {
  return (
    <LampContainer className="min-h-[700px] md:min-h-[800px]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full max-w-6xl -translate-y-4 md:-translate-y-16 pt-[60px] md:pt-0">
        <div
          className="md:w-1/2 flex flex-col items-center md:items-start gap-3 md:gap-6"
          style={{ width: "calc(50% + 10px)" }}
        >
          <Image
            src="/images/freedom-logo-new.webp"
            alt="Battery Freedom Logo"
            width={240}
            height={70}
            className="mb-2 md:mb-4"
          />
          {/* Imagem da bateria no mobile (visível apenas em telas pequenas) */}
          <div className="block md:hidden w-full mb-3 md:mb-6">
            <Image
              src="/images/imagem-hero-mobile.webp"
              alt="Bateria Freedom Estacionária"
              width={300}
              height={240}
              className="mx-auto object-contain"
              priority
            />
          </div>
          <motion.h1
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-2 md:mt-4 text-3xl md:text-6xl font-bold tracking-tight text-white"
          >
            Sua operação não pode <span className="text-red-600">parar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white text-base md:text-xl max-w-2xl"
          >
            Mantenha seus sistemas sempre funcionando com as baterias Freedom, a solução definitiva para quem não pode
            parar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-2 md:mt-0"
          >
            <ContactFormButton />
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/freedom-hero1.webp"
            alt="Bateria Estacionária Freedom"
            width={450}
            height={360}
            className="mx-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </LampContainer>
  )
}
