"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WhatsAppIcon } from "./whatsapp-icon"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { formatPhoneNumber } from "@/utils/format-phone"

interface BatteryDetailsModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  batteryModel: string | null
}

interface BatterySpec {
  model: string
  warranty: string
  c10: string
  c20: string
  c100: string
  length: string
  width: string
  height: string
  weight: string
  floatVoltage: string
  chargeVoltage: string
  image: string
}

export function BatteryDetailsModal({ isOpen, setIsOpen, batteryModel }: BatteryDetailsModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    isCnpj: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const isMobile = useMobile()

  // Estado para controlar a expansão dos detalhes técnicos
  const [showTechDetails, setShowTechDetails] = useState(false)

  const batterySpecs: Record<string, BatterySpec> = {
    DF300: {
      model: "DF300",
      warranty: "24 meses",
      c10: "24",
      c20: "26",
      c100: "30",
      length: "175mm",
      width: "175mm",
      height: "175mm",
      weight: "8.8 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df300.webp",
    },
    DF500: {
      model: "DF500",
      warranty: "24 meses",
      c10: "30",
      c20: "36",
      c100: "40",
      length: "175mm",
      width: "175mm",
      height: "175mm",
      weight: "9.4 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df500.webp",
    },
    DF700: {
      model: "DF700",
      warranty: "24 meses",
      c10: "41",
      c20: "45",
      c100: "50",
      length: "210mm",
      width: "175mm",
      height: "175mm",
      weight: "12,3 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df700.webp",
    },
    DF1000: {
      model: "DF1000",
      warranty: "24 meses",
      c10: "54",
      c20: "60",
      c100: "70",
      length: "244mm",
      width: "175mm",
      height: "175mm",
      weight: "14,7 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df1000.webp",
    },
    DF1500: {
      model: "DF1500",
      warranty: "24 meses",
      c10: "76",
      c20: "80",
      c100: "93",
      length: "330mm",
      width: "172mm",
      height: "240mm",
      weight: "23 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df1500.webp",
    },
    DF2000: {
      model: "DF2000",
      warranty: "24 meses",
      c10: "94",
      c20: "105",
      c100: "115",
      length: "330mm",
      width: "172mm",
      height: "240mm",
      weight: "26 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df2000.webp",
    },
    DF2500: {
      model: "DF2500",
      warranty: "24 meses",
      c10: "130",
      c20: "150",
      c100: "165",
      length: "511mm",
      width: "213mm",
      height: "230mm",
      weight: "44 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df2500.webp",
    },
    DF3000: {
      model: "DF3000",
      warranty: "24 meses",
      c10: "156",
      c20: "170",
      c100: "185",
      length: "511mm",
      width: "213mm",
      height: "230mm",
      weight: "47,6 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df3000.webp",
    },
    DF4100: {
      model: "DF4100",
      warranty: "24 meses",
      c10: "200",
      c20: "225",
      c100: "240",
      length: "530mm",
      width: "280mm",
      height: "246mm",
      weight: "59,9 Kg",
      floatVoltage: "de 13,2 V à 13,8 V @ 25 C",
      chargeVoltage: "de 14,4 V à 15,5 V @ 25 C",
      image: "/images/df4100.webp",
    },
  }

  const currentBattery = batteryModel ? batterySpecs[batteryModel] : null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Apply phone formatting if this is the phone field
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, isCnpj: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Preparar os dados para envio
      const dataToSend = {
        Nome: formData.name,
        Telefone: formData.phone,
        CNPJ: formData.isCnpj === "sim" ? "Sim" : "Não",
        Modelo: currentBattery?.model || "Não especificado",
        Formulário: "Detalhes da Bateria",
      }

      // Enviar os dados para nossa API
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Erro ao enviar formulário")
      }

      // Sucesso no envio
      setSubmitSuccess(true)

      // Resetar o formulário e fechar o diálogo após 1.5 segundos
      setTimeout(() => {
        setFormData({ name: "", phone: "", isCnpj: "" })
        setIsOpen(false)
        setSubmitSuccess(false)
      }, 1500)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!currentBattery) return null

  // Renderizar o botão de orçamento com base no tipo de dispositivo
  const renderSubmitButton = () => {
    // Verificar se estamos na página de energia solar
    const isEnergiaSolarPage = typeof window !== "undefined" && window.location.pathname === "/energia-solar"

    // Se for página de energia solar, sempre mostrar o formulário
    if (isEnergiaSolarPage) {
      return (
        <Button
          type="submit"
          className="w-full bg-[#B33A2F] hover:bg-[#9A2F26] text-white font-bold py-3 px-6 rounded-md flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="font-montserrat">{isSubmitting ? "ENVIANDO..." : "SOLICITAR ORÇAMENTO"}</span>
        </Button>
      )
    }

    // Para outras páginas, manter a lógica original
    if (isMobile) {
      return (
        <Link href="/whatsapp" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            type="button"
            className="w-full bg-[#B33A2F] hover:bg-[#9A2F26] text-white font-bold py-3 px-6 rounded-md flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="font-montserrat">{isSubmitting ? "ENVIANDO..." : "SOLICITAR ORÇAMENTO"}</span>
          </Button>
        </Link>
      )
    }

    return (
      <Button
        type="submit"
        className="w-full bg-[#B33A2F] hover:bg-[#9A2F26] text-white font-bold py-3 px-6 rounded-md flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="font-montserrat">{isSubmitting ? "ENVIANDO..." : "SOLICITAR ORÇAMENTO"}</span>
      </Button>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl font-extrabold text-[#6B1305] font-montserrat">
            {currentBattery.model}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Botão para expandir/recolher detalhes técnicos */}
          <button
            onClick={() => setShowTechDetails(!showTechDetails)}
            className="w-full border border-red-600 text-red-600 rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
          >
            {showTechDetails ? (
              <>
                <ChevronUp className="h-5 w-5" />
                Ocultar especificações técnicas
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5" />
                Ver especificações técnicas completas
              </>
            )}
          </button>

          {/* Detalhes técnicos expandidos */}
          {showTechDetails && (
            <div className="animate-accordion-down flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src={currentBattery.image || "/placeholder.svg"}
                  alt={`Bateria ${currentBattery.model}`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="md:w-2/3">
                <div className="space-y-2">
                  <p>
                    <span className="font-bold">Garantia:</span> {currentBattery.warranty}
                  </p>
                  <p>
                    <span className="font-bold">C10:</span> {currentBattery.c10}
                  </p>
                  <p>
                    <span className="font-bold">C20:</span> {currentBattery.c20}
                  </p>
                  <p>
                    <span className="font-bold">C100:</span> {currentBattery.c100}
                  </p>
                  <p>
                    <span className="font-bold">Comprimento:</span> {currentBattery.length}
                  </p>
                  <p>
                    <span className="font-bold">Largura:</span> {currentBattery.width}
                  </p>
                  <p>
                    <span className="font-bold">Altura:</span> {currentBattery.height}
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> {currentBattery.weight}
                  </p>
                  <p>
                    <span className="font-bold">Tensão de flutuação:</span>
                    <br />
                    {currentBattery.floatVoltage}
                  </p>
                  <p>
                    <span className="font-bold">Tensão de carga/equalização:</span>
                    <br />
                    {currentBattery.chargeVoltage}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Formulário de orçamento */}
          <div className="mt-2">
            <h3 className="text-center font-bold text-lg mb-4">Solicite um orçamento para este modelo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Seu telefone..."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label>A compra será para CNPJ?</Label>
                <RadioGroup value={formData.isCnpj} onValueChange={handleRadioChange} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="cnpj-sim" disabled={isSubmitting} />
                    <Label htmlFor="cnpj-sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="cnpj-nao" disabled={isSubmitting} />
                    <Label htmlFor="cnpj-nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              {submitError && <div className="text-red-600 text-sm text-center">{submitError}</div>}

              {submitSuccess && (
                <div className="text-green-600 text-sm text-center">
                  Recebemos seus dados e em breve vamos entrar em contato!
                </div>
              )}

              {renderSubmitButton()}
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
