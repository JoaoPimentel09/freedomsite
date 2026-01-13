"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { formatPhoneNumber } from "@/utils/format-phone"

export function ContactForm({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    isCnpj: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [phoneError, setPhoneError] = useState<string | null>(null) // New state for phone validation error

  const validatePhone = (phone: string) => {
    // Remove non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, "")
    if (digitsOnly.length < 8 || digitsOnly.length > 11) {
      // Assuming 8 to 11 digits for valid phone numbers in Brazil (including DDD)
      setPhoneError("Por favor, insira um telefone válido (8 a 11 dígitos).")
      return false
    }
    setPhoneError(null)
    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const formattedValue = formatPhoneNumber(value)
      setFormData((prev) => ({ ...prev, [name]: formattedValue }))
      validatePhone(formattedValue) // Validate on change
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, isCnpj: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null) // Clear previous submission errors

    // Perform final validation before submission
    const isPhoneValid = validatePhone(formData.phone)
    if (!isPhoneValid || !formData.name || !formData.isCnpj) {
      setSubmitError("Por favor, preencha todos os campos corretamente.")
      return
    }

    setIsSubmitting(true)

    try {
      // Preparar os dados para envio
      const dataToSend = {
        Nome: formData.name,
        Telefone: formData.phone,
        CNPJ: formData.isCnpj === "sim" ? "Sim" : "Não",
        Formulário: "Contato Geral",
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

      // Sucesso no envio → redirecionar para WhatsApp
      if (result.whatsapp) {
        window.location.href = result.whatsapp
        return
      }

      // Fallback (caso não venha o link)
      setSubmitSuccess(true)
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

  const isFormInvalid = !formData.name || !formData.phone || !formData.isCnpj || !!phoneError

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Entramos em contato com você imediatamente</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center mb-4">
          <Image src="/images/freedom-logo-new.webp" alt="Freedom Logo" width={200} height={60} />
        </div>
        <p className="text-center text-sm text-gray-500 mb-4">
          Como você está em um computador deixe seu dados que nosso sistema irá entrar em contato imediatamente.
        </p>
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
              aria-invalid={!!phoneError}
              aria-describedby="phone-error"
            />
            {phoneError && (
              <p id="phone-error" className="text-red-600 text-sm mt-1">
                {phoneError}
              </p>
            )}
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

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            disabled={isSubmitting || isFormInvalid}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⟳</span> Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
