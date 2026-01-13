"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw } from "lucide-react"
import { paginasVariacoes } from "@/lib/pageurl_variacoes"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Opcional: log do erro para um serviço de monitoramento
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Efeito de luz vermelha */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 max-w-3xl w-full bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-red-900/30">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <Image src="/images/freedom-logo-new.webp" alt="Freedom Logo" width={200} height={60} className="mb-6" />

            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Ops! Algo deu errado</h1>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Encontramos um problema ao carregar esta página. Nossa equipe já foi notificada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                onClick={() => reset()}
                className="w-full bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full flex items-center gap-2 py-6"
              >
                <RefreshCcw className="h-5 w-5" />
                Tentar novamente
              </Button>

              <Link href={paginasVariacoes.home} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-600/10 rounded-full flex items-center gap-2 py-6"
                >
                  <Home className="h-5 w-5" />
                  Página Inicial
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="/images/freedom-hero1.webp"
                alt="Bateria Freedom"
                width={300}
                height={300}
                className="object-contain"
              />
              <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">Se o problema persistir, entre em contato com nosso suporte técnico.</p>
        </div>
      </div>
    </div>
  )
}
