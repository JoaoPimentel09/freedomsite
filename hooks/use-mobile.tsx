"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar se é um dispositivo móvel
    const checkIfMobile = () => {
      // Verificar largura da tela (consideramos dispositivos com menos de 768px como móveis)
      const isMobileByWidth = window.innerWidth < 768

      // Verificar user agent para detectar dispositivos móveis
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Consideramos móvel se qualquer uma das condições for verdadeira
      setIsMobile(isMobileByWidth || isMobileByAgent)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento da janela
    window.addEventListener("resize", checkIfMobile)

    // Limpar listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return isMobile
}
