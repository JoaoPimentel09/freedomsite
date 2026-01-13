import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Obter dados do formulário
    const formData = await request.json()
    console.log("Dados recebidos do formulário:", JSON.stringify(formData, null, 2))

    // Obter variáveis de ambiente do servidor
    const webhookUrl = process.env.WEBHOOK_URL
    const telefoneEmpresa = process.env.TELEFONE_EMPRESA || "Não disponível"

    console.log("WEBHOOK_URL configurada:", webhookUrl ? "Sim" : "Não")
    console.log("TELEFONE_EMPRESA:", telefoneEmpresa)

    if (!webhookUrl) {
      console.error("WEBHOOK_URL não está configurada")
      return NextResponse.json({ success: false, error: "Configuração de webhook ausente" }, { status: 500 })
    }

    // Formatar os dados sem os dois pontos após os nomes dos campos
    const dataToSend = {
      Nome: formData.Nome || "",
      Telefone: formData.Telefone || "",
      "Telefone da Empresa": telefoneEmpresa,
    }

    // Adicionar outros campos que possam existir no formData, mantendo o formato sem os dois pontos
    Object.keys(formData).forEach((key) => {
      if (!["Nome", "Telefone"].includes(key)) {
        // Para campos que não são Nome ou Telefone, adicionar sem os dois pontos
        if (key === "CNPJ") {
          dataToSend["CNPJ"] = formData[key]
        } else if (key === "Modelo") {
          dataToSend["Modelo"] = formData[key]
        } else if (key === "Formulário") {
          dataToSend["Formulário"] = formData[key]
        } else {
          // Para outros campos, adicionar sem os dois pontos
          dataToSend[key] = formData[key]
        }
      }
    })

    console.log("Dados formatados para envio:", JSON.stringify(dataToSend, null, 2))
    console.log("URL do webhook:", webhookUrl)

    // Enviar para o webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })

    console.log("Status da resposta do webhook:", response.status)
    console.log("Headers da resposta:", Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Erro desconhecido")
      console.error(`Erro ao enviar para webhook: ${response.status} - ${errorText}`)
      return NextResponse.json(
        { success: false, error: `Erro ao enviar para webhook: ${response.status} - ${errorText}` },
        { status: 500 },
      )
    }

    const responseData = await response.text()
    console.log("Resposta do webhook:", responseData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao processar envio de formulário:", error)
    return NextResponse.json({ success: false, error: "Erro interno ao processar o formulário" }, { status: 500 })
  }
}
