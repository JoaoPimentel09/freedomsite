import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Obter a URL do webhook das variáveis de ambiente
    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL não configurada" }, { status: 500 })
    }

    // Enviar os dados para o webhook externo
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Erro ao enviar para webhook externo: ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao processar webhook:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}
