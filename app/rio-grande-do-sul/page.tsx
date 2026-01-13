"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import ContactFormButton from "@/components/contact-form-button"
import ProductSection from "@/components/product-section"
import { Particles } from "@/components/ui/particles"
import WhatsAppFloatingButton from "@/components/whatsapp-floating-button"

export default function RioGrandeDoSulPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[700px] md:min-h-[800px] flex items-start md:items-center">
        {/* Only show particles on non-mobile devices */}
        <div className="hidden md:block">
          <Particles className="absolute inset-0" quantity={200} ease={80} color="#c62828" size={0.6} />
        </div>
        <div className="container mx-auto px-4 pt-[60px] pb-6 md:py-20 flex flex-col md:flex-row items-start md:items-center relative z-10">
          {/* Modificar a div que contém o logo para centralizar no mobile: */}
          <div className="md:w-1/2 space-y-3 md:space-y-6 flex flex-col items-center md:items-start">
            {/* Centralizar a imagem do logo no mobile: */}
            <Image
              src="/images/freedom-logo-new.webp"
              alt="Battery Freedom Logo"
              width={272}
              height={80}
              className="mb-2 md:mb-4 mx-auto md:mx-0"
            />

            {/* Imagem da bateria no mobile (visível apenas em telas pequenas) */}
            <div className="block md:hidden w-full mb-3 md:mb-6">
              <Image
                src="/images/imagem-hero-mobile.webp"
                alt="Bateria Freedom Estacionária"
                width={216}
                height={146}
                className="mx-auto object-contain"
                priority
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-lg md:text-3xl font-bold text-white">DISTRIBUIDORA DE</h2>
              <h1 className="text-xl md:text-4xl font-bold text-red-600">BATERIAS FREEDOM</h1>
              <h2 className="text-lg md:text-3xl font-bold text-white">COM MENOR PREÇO NO RIO GRANDE DO SUL</h2>
            </div>
            <div className="bg-red-600 py-1 md:py-2 px-3 md:px-4 inline-block">
              <h3 className="text-sm md:text-xl font-semibold text-white">AUMENTE OS LUCROS DE SUA EMPRESA</h3>
            </div>
            {/* Centralizar o texto descritivo no mobile: */}
            <p className="text-gray-300 max-w-[650px] text-base md:text-lg leading-relaxed text-center md:text-left">
              Revenda a melhor solução em Baterias Estacionárias do Brasil no Rio Grande do Sul,
              <br className="hidden md:block" />
              com descontos progressivos e envio no dia seguinte.
            </p>
            {/* Centralizar o botão de contato no mobile (já deve estar centralizado pelo flex): */}
            <div className="flex justify-center md:justify-start w-full mt-3 md:mt-4">
              <ContactFormButton />
            </div>
          </div>

          {/* Imagem da bateria em telas médias e grandes (oculta em telas pequenas) */}
          <div className="hidden md:block md:w-1/2 animate-float">
            <Image
              src="/images/freedom-hero1.webp"
              alt="Bateria Estacionária Freedom"
              width={500}
              height={400}
              className="mx-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-bold text-lg uppercase">A MELHOR BATERIA ESTACIONÁRIA DO BRASIL</h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">A BATERIA IDEAL PARA NOBREAK E ENERGIA SOLAR</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A Freedom foi eleita, duas vezes, a melhor linha de baterias estacionárias do Brasil. Ela oferece até 4
              vezes mais durabilidade e vem acompanhada de uma garantia de 2 anos
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-sm">
              <h4 className="font-semibold text-xl mb-6">Freedom é a escolha certa para:</h4>
              <ul className="space-y-4">
                {[
                  "Nobreaks e UPS",
                  "Energia Solar",
                  "Telecomunicações",
                  "Alarmes e Monitoramento",
                  "Iluminação de emergência",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="bg-red-600 rounded-full p-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ContactFormButton />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/batteries-collection.png"
                alt="Battery Freedom Collection"
                width={507}
                height={438}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Linha Completa */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-bold text-lg uppercase font-montserrat">LINHA COMPLETA</h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white font-montserrat">
              CONHEÇA NOSSA LINHA DE BATERIAS
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4 font-exo">
              Clique em "saber mais" para consultar as especificações técnicas de nossas baterias. Solicite um orçamento
              personalizado para sua empresa com condições especiais.
            </p>
          </div>
          <ProductSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-bold text-lg uppercase">PERGUNTAS FREQUENTES</h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">CONSULTE NOSSO FAQ E TIRE SUAS DÚVIDAS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Nesta seção, reunimos as dúvidas mais frequentes sobre nossos serviços, produtos e procedimentos. O
              objetivo do FAQ é facilitar o seu acesso às informações essenciais, ajudando você a tomar decisões rápidas
              e esclarecer qualquer questão de forma prática.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como podemos fazer um pedido?</AccordionTrigger>
                <AccordionContent>Qualquer CNPJ poderá comprar através de nosso Whatsapp</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Como funcionam os descontos?</AccordionTrigger>
                <AccordionContent>Descontos são progressivos conforme a quantidade orçada</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>A distribuidora fica no Rio Grande do Sul?</AccordionTrigger>
                <AccordionContent>
                  Temos distribuição em Curitiba e São Paulo e enviamos seu pedido para o Rio Grande do Sul no mesmo
                  dia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Tem quantidade mínima para compra?</AccordionTrigger>
                <AccordionContent>Não, desde que tenha CNPJ você pode comprar qualquer quantidade</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Quem fará a Entrega?</AccordionTrigger>
                <AccordionContent>
                  Por trás deste produto está uma empresa com mais de 10 anos de experiência no mercado, especializada
                  em distribuição e atendimento ao cliente em todo o Brasil. Com operação logística estruturada, sede
                  administrativa no sul do país e filial estratégica em São Paulo, essa empresa se destaca pelo
                  compromisso com a qualidade, agilidade nas entregas e suporte atencioso. Cada etapa, desde a seleção
                  dos fornecedores até o pós-venda, é pensada para garantir segurança e satisfação total em sua compra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-white">Conheça a</p>
          <a href="https://www.youtube.com/watch?v=wVNAu2Wsk_c&" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/sol-logo.png"
              alt="SOL Distribuidora Logo"
              width={265}
              height={65}
              className="mx-auto mb-4"
            />
          </a>
          <p className="text-gray-400">CNPJ: 00.338.610/0002-80</p>
          <div className="mt-4">
            <p className="font-semibold">Central de vendas:</p>
            <a href="tel:041998220358" className="flex items-center justify-center gap-2 mt-2">
              <WhatsAppIcon className="h-5 w-5" />
              (041) 99822-0358
            </a>
          </div>
          <p className="mt-4 text-gray-400">Distribuição para o Rio Grande do Sul</p>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <WhatsAppFloatingButton />
    </main>
  )
}
