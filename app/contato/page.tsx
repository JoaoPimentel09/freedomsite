"use client"

import { useEffect, useState } from "react"
import { Loader2, MessageCircle, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function ContatoPage() {
  const [countdown, setCountdown] = useState(10)
  const [currentStep, setCurrentStep] = useState(0)

  const whatsappLink =
    "https://wa.me/5541998220358?text=Tenho%20CNPJ%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20Baterias%20Freedom%0A(Contato%20via%20site)%20"

  const steps = [
    "Conectando ao sistema...",
    "Verificando disponibilidade...",
    "Localizando especialista...",
    "Preparando atendimento...",
    "Conectando ao WhatsApp...",
  ]

  useEffect(() => {
    // Animação dos passos
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 2000)

    // Contagem regressiva
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    // Redirecionamento após 10 segundos
    const redirect = setTimeout(() => {
      window.location.href = whatsappLink
    }, 10000)

    // Limpar timers quando o componente for desmontado
    return () => {
      clearInterval(stepTimer)
      clearInterval(countdownTimer)
      clearTimeout(redirect)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black flex flex-col items-center justify-center p-4">
      {/* Efeito de luz verde */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-transparent opacity-50" />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-lg w-full bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-500/30 text-center">
        {/* Logo */}
        <Image
          src="/images/freedom-logo-new.webp"
          alt="Freedom Logo"
          width={200}
          height={60}
          className="mx-auto mb-6"
        />

        {/* Ícone do WhatsApp com animação */}
        <div className="relative mb-8">
          <div className="relative">
            <Image
              src="/images/whatsapp-icon.png"
              alt="WhatsApp"
              width={80}
              height={80}
              className="mx-auto animate-bounce"
            />
            <div className="absolute -inset-4 bg-green-500/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -inset-8 bg-green-400/20 rounded-full blur-2xl animate-ping" />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-2xl font-bold text-white mb-2">Atendimento Especializado</h1>
        <p className="text-green-400 font-semibold mb-6">Sistema Oficial WhatsApp Business</p>

        {/* Status do processo */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-green-500/20">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                {index < currentStep ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : index === currentStep ? (
                  <Loader2 className="h-5 w-5 text-green-400 animate-spin flex-shrink-0" />
                ) : (
                  <div className="h-5 w-5 border-2 border-gray-600 rounded-full flex-shrink-0" />
                )}
                <span className={`text-sm ${index <= currentStep ? "text-white" : "text-gray-500"}`}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mensagem de status */}
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <MessageCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-400 font-medium">Status: Conectando</span>
          </div>
          <p className="text-gray-300 text-sm">
            Nosso especialista em baterias Freedom está sendo conectado ao seu atendimento
          </p>
        </div>

        {/* Contagem regressiva */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Redirecionamento automático em:</p>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
            <span className="text-2xl font-bold text-white">{countdown}</span>
          </div>
          <p className="text-sm text-gray-500">Aguarde enquanto preparamos seu atendimento personalizado</p>
        </div>

        {/* Botão manual (opcional) */}
        <button
          onClick={() => (window.location.href = whatsappLink)}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Conectar Agora</span>
        </button>
      </div>

      {/* Informações adicionais */}
      <div className="mt-6 text-center text-gray-400 text-sm max-w-md">
        <p>
          🔒 Conexão segura e criptografada
          <br />⚡ Atendimento especializado em baterias
          <br />📱 Suporte técnico profissional
        </p>
      </div>
    </div>
  )
}
