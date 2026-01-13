"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wifi, Radio, Signal, Server, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import ContactFormButton from "@/components/contact-form-button"
import ProductSection from "@/components/product-section"
import { Particles } from "@/components/ui/particles"
import WhatsAppFloatingButton from "@/components/whatsapp-floating-button"

export default function TelecomPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[700px] md:min-h-[800px] flex items-start md:items-center">
        {/* Only show particles on non-mobile devices */}
        <div className="hidden md:block">
          <Particles className="absolute inset-0" quantity={200} ease={80} color="#c62828" size={0.6} />
        </div>
        <div className="container mx-auto px-4 pt-[60px] pb-6 md:py-20 flex flex-col md:flex-row items-start md:items-center relative z-10">
          <div className="md:w-1/2 space-y-3 md:space-y-6 flex flex-col items-center md:items-start">
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
              <h1 className="text-xl md:text-4xl font-bold text-white">A ESCOLHA DAS MAIORES EMPRESAS DE TELECOM</h1>
            </div>
            <div className="bg-red-600 py-1 md:py-2 px-3 md:px-4 inline-block">
              <h2 className="text-sm md:text-xl font-semibold text-white">
                Baterias para backup de OLTs, torres, rádios, etc..
              </h2>
            </div>
            <p className="text-gray-300 max-w-[650px] text-base md:text-lg leading-relaxed text-center md:text-left">
              Trabalhamos com pronta entrega e condições especiais para empresas com múltiplos pontos de energia
              crítica. Entrega rápida para todo Brasil.
            </p>
            <div className="flex justify-center md:justify-start w-full mt-3 md:mt-4">
              <ContactFormButton />
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
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
          <div className="text-center mb-8">
            <h3 className="text-red-600 font-bold text-lg uppercase font-montserrat">SOLUÇÕES PARA TELECOMUNICAÇÕES</h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 font-montserrat">
              ENERGIA CONTÍNUA PARA SUA INFRAESTRUTURA DE REDE
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 font-exo">
              A Freedom oferece baterias de alta performance e durabilidade para garantir que seus equipamentos de
              telecomunicações permaneçam operacionais mesmo durante quedas de energia.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="md:w-1/2 p-8 flex flex-col items-center">
              <h4 className="font-semibold text-xl mb-6 font-montserrat text-center">
                Ideal para equipamentos de telecom:
              </h4>
              <ul className="space-y-4 max-w-md">
                {[
                  { text: "Torres de transmissão", icon: <Signal className="h-5 w-5 text-white" /> },
                  { text: "OLTs e equipamentos de fibra óptica", icon: <Wifi className="h-5 w-5 text-white" /> },
                  { text: "Rádios e repetidores", icon: <Radio className="h-5 w-5 text-white" /> },
                  { text: "Servidores e data centers", icon: <Server className="h-5 w-5 text-white" /> },
                  { text: "Sistemas de backup críticos", icon: <Clock className="h-5 w-5 text-white" /> },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="bg-red-600 rounded-full p-1 flex-shrink-0">{item.icon}</span>
                    <span className="text-lg font-exo">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ContactFormButton />
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-6 flex items-end justify-center h-full">
              <Image
                src="/images/tecnico-segurando-bateria12.webp"
                alt="Técnico com Bateria Freedom"
                width={450}
                height={450}
                className="object-contain"
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
            <h3 className="text-red-600 font-bold text-lg uppercase font-montserrat">PERGUNTAS FREQUENTES</h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 font-montserrat">
              DÚVIDAS COMUNS SOBRE BATERIAS PARA TELECOM
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 font-exo">
              Respondemos às perguntas mais frequentes sobre nossas baterias para o setor de telecomunicações, ajudando
              você a tomar a melhor decisão para sua infraestrutura.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Qual a autonomia das baterias Freedom para equipamentos de telecom?</AccordionTrigger>
                <AccordionContent>
                  A autonomia varia conforme o modelo e o consumo dos equipamentos. Podemos realizar um dimensionamento
                  personalizado para sua necessidade específica, garantindo o tempo de backup adequado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>As baterias Freedom são adequadas para uso em torres remotas?</AccordionTrigger>
                <AccordionContent>
                  Sim, nossas baterias são ideais para torres remotas, pois oferecem alta durabilidade, baixa manutenção
                  e excelente desempenho em condições adversas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Vocês oferecem suporte técnico para instalação?</AccordionTrigger>
                <AccordionContent>Não oferecemos suporte técnico para instalação.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Qual o prazo de entrega para grandes quantidades?</AccordionTrigger>
                <AccordionContent>
                  Para grandes quantidades, trabalhamos com prazos personalizados. Pedidos efetuados até as 10h podem
                  ser enviados no dia seguinte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  As baterias Freedom são compatíveis com sistemas solares para torres?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, nossas baterias são perfeitamente compatíveis com sistemas de energia solar, ideais para torres
                  em locais remotos onde o fornecimento de energia é limitado.
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
            <p className="font-semibold">Central de vendas para empresas de telecom:</p>
            <a href="tel:041998220358" className="flex items-center justify-center gap-2 mt-2">
              <WhatsAppIcon className="h-5 w-5" />
              (041) 99822-0358
            </a>
          </div>
          <p className="mt-4 text-gray-400">Atendimento especializado para o setor de telecomunicações</p>
        </div>
      </footer>

      {/* Fixed WhatsApp Button - Substituído pelo novo componente */}
      <WhatsAppFloatingButton />
    </main>
  )
}
