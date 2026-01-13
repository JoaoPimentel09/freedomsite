"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log do erro para um serviço de monitoramento
    console.error(error)
  }, [error])

  return (
    <html lang="pt-BR">
      <body className="font-montserrat">
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
          {/* Efeito de luz vermelha */}
          <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 max-w-2xl w-full bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-red-900/30 text-center">
            <Image
              src="/images/freedom-logo-new.webp"
              alt="Freedom Logo"
              width={200}
              height={60}
              className="mx-auto mb-6"
            />

            <h1 className="text-4xl font-bold text-red-600 mb-4">Erro crítico</h1>
            <p className="text-gray-400 mb-6">Ocorreu um erro inesperado. Nossa equipe técnica foi notificada.</p>

            <Button
              onClick={() => reset()}
              className="mx-auto bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full flex items-center gap-2 py-6 px-8"
            >
              <RefreshCcw className="h-5 w-5" />
              Tentar novamente
            </Button>

            <div className="mt-8 text-gray-500 text-sm">
              <p>Se o problema persistir, por favor entre em contato com nosso suporte.</p>
              <p className="mt-2">Código de referência: {error.digest}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
