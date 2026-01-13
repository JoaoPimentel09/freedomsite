"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import Image from "next/image"

export default function WhatsAppRedirect() {
  // Modificar o tempo de contagem regressiva de 4 para 5 segundos
  const [countdown, setCountdown] = useState(5)

  // Atualizar o link do WhatsApp com o novo texto especificado
  const whatsappLink =
    "https://wa.me/5541998220358?text=Tenho%20CNPJ%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20Baterias%20Freedom%0A(Contato%20via%20site)%20"

  useEffect(() => {
    // Iniciar contagem regressiva
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    // Atualizar o tempo de redirecionamento de 4000 para 5000 milissegundos
    // Redirecionar após 5 segundos
    const redirect = setTimeout(() => {
      // Redirecionar na mesma guia, não em uma nova
      window.location.href = whatsappLink
    }, 5000)

    // Limpar timers quando o componente for desmontado
    return () => {
      clearInterval(timer)
      clearTimeout(redirect)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Efeito de luz vermelha */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 max-w-md w-full bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-red-900/30 text-center">
        <Image
          src="/images/freedom-logo-new.webp"
          alt="Freedom Logo"
          width={200}
          height={60}
          className="mx-auto mb-6"
        />

        <div className="relative mb-8">
          <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={80} height={80} className="mx-auto" />
          <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl -z-10" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-4">Estamos te conectando ao sistema do WhatsApp!</h1>

        <p className="text-gray-400 mb-6">Você será redirecionado em {countdown} segundos...</p>

        <div className="flex justify-center">
          <Loader2 className="h-12 w-12 text-green-500 animate-spin" />
        </div>
      </div>
    </div>
  )
}
