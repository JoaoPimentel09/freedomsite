"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function VerificarRotas() {
  const [resultados, setResultados] = useState<Record<string, boolean>>({})
  const [browserInfo, setBrowserInfo] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  const rotas = ["/", "/freedomwhite", "/telecom", "/energia-solar", "/datacenter", "/naopare"]

  useEffect(() => {
    // Marcar que estamos no cliente
    setIsClient(true)

    // Este código só será executado no navegador após a montagem do componente
    const verificarRotas = async () => {
      const resultados: Record<string, boolean> = {}

      for (const rota of rotas) {
        try {
          const resposta = await fetch(rota, { method: "HEAD" })
          resultados[rota] = resposta.ok
        } catch (erro) {
          resultados[rota] = false
        }
      }

      setResultados(resultados)
    }

    // Capturar informações do navegador de forma segura
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      setBrowserInfo({
        userAgent: navigator?.userAgent || "Não disponível",
        url: window?.location?.href || "Não disponível",
        pathname: window?.location?.pathname || "Não disponível",
      })
    }

    verificarRotas()
  }, [])

  // Renderização condicional para evitar problemas de hidratação
  if (!isClient) {
    return <div className="p-8">Carregando verificador de rotas...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Verificação de Rotas</h1>

      <div className="grid gap-4">
        {rotas.map((rota) => (
          <div key={rota} className="border p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">{rota}</span>

              {resultados[rota] !== undefined ? (
                <span
                  className={`px-2 py-1 rounded ${resultados[rota] ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {resultados[rota] ? "Funcionando" : "Com problema"}
                </span>
              ) : (
                <span className="px-2 py-1 rounded bg-gray-100">Verificando...</span>
              )}
            </div>

            <div className="mt-2">
              <Link href={rota} className="text-blue-600 hover:underline">
                Acessar página
              </Link>
            </div>
          </div>
        ))}
      </div>

      {browserInfo && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="font-semibold mb-2">Informações do navegador:</h2>
          <pre className="text-xs overflow-auto">{JSON.stringify(browserInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
