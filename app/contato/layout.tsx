import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato - Baterias Freedom",
  description: "Entre em contato com nossa equipe especializada",
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
