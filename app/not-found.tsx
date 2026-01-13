import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

// Página 404 simplificada
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
        <p className="mb-6">A página que você está procurando não existe.</p>
        <Link href="/">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Home className="h-5 w-5 mr-2" />
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  )
}
