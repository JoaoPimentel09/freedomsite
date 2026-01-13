"use client"

import Image from "next/image"
import { WhatsAppIcon } from "./whatsapp-icon"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"

interface ProductCardProps {
  name: string
  model: string
  image: string
  onClick: () => void
}

export function ProductCard({ name, model, image, onClick }: ProductCardProps) {
  const isMobile = useMobile()

  // Verificar se estamos na página de energia solar
  const isEnergiaSolarPage = typeof window !== "undefined" && window.location.pathname === "/energia-solar"

  // Renderizar o botão com base no tipo de dispositivo e página
  const renderButton = () => {
    // Se for página de energia solar, sempre usar o onClick para abrir popup
    if (isEnergiaSolarPage) {
      return (
        <button
          onClick={onClick}
          className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center justify-center gap-2 mt-2 border-b-2 border-red-900 w-full"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="font-montserrat">ORÇAMENTO</span>
        </button>
      )
    }

    // Para outras páginas, manter a lógica original
    if (isMobile) {
      return (
        <Link href="/whatsapp" target="_blank" rel="noopener noreferrer" className="w-full">
          <button
            className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center justify-center gap-2 mt-2 border-b-2 border-red-900 w-full"
            type="button"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="font-montserrat">ORÇAMENTO</span>
          </button>
        </Link>
      )
    }

    return (
      <button
        onClick={onClick}
        className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center justify-center gap-2 mt-2 border-b-2 border-red-900 w-full"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="font-montserrat">ORÇAMENTO</span>
      </button>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center h-full">
      <div className="h-48 flex items-center justify-center mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} ${model}`}
          width={200}
          height={180}
          className="object-contain"
        />
      </div>
      <div className="text-center">
        <h3 className="font-montserrat text-sm uppercase tracking-wider">{name}</h3>
        <p className="text-red-600 text-4xl font-montserrat font-bold">{model}</p>
      </div>
      <p className="text-center my-4 font-exo">Freedom {model} com condições exclusivas para compra em atacado</p>
      {renderButton()}
    </div>
  )
}
