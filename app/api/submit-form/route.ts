import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const telefoneEmpresa = process.env.TELEFONE_EMPRESA

    if (!telefoneEmpresa) {
      return NextResponse.json(
        { success: false, error: "Telefone da empresa não configurado" },
        { status: 500 }
      )
    }

    const nome = formData.Nome || ""
    const telefone = formData.Telefone || ""
    const cnpj = formData.CNPJ || "Não informado"
    const formulario = formData["Formulário"] || "Contato"

    const mensagem = `
Olá! Gostaria de mais informações.

Nome: ${nome}
Telefone: ${telefone}
Compra para CNPJ: ${cnpj}
`

    const whatsappUrl = `https://wa.me/${telefoneEmpresa}?text=${encodeURIComponent(mensagem)}`

    return NextResponse.json({
      success: true,
      whatsapp: whatsappUrl,
    })
  } catch (error) {
    console.error("Erro ao processar envio de formulário:", error)
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar o formulário" },
      { status: 500 }
    )
  }
}
