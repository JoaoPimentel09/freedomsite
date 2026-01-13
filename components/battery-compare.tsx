"use client"
import { Compare } from "@/components/ui/compare"

export default function BatteryCompare() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="/images/freedom-battery.webp"
          secondImage="/images/concorrente-battery.webp"
          firstImageClassName="object-contain"
          secondImageClassname="object-contain scale-90" // Mantendo a escala reduzida para a bateria concorrente
          className="h-[250px] w-[300px] md:h-[400px] md:w-[400px]"
          slideMode="hover"
          autoplay={true}
        />
      </div>
      <div className="max-w-lg space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-red-600">FREEDOM: A ESCOLHA NÚMERO 1 PARA SUA EMPRESA</h3>
        <p className="text-gray-700">
          A Freedom Estacionária é reconhecida como a escolha número 1 para aplicações críticas, graças ao seu ciclo
          profundo verdadeiro, desenvolvido especialmente para suportar descargas constantes e prolongadas sem perda de
          desempenho. Nossa bateria se destaca por ser compatível com inversores solares, controladores MPPT e sistemas
          off-grid.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg">✓</span>
            <span>Tecnologia nacional de padrão industrial</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg">✓</span>
            <span>Durabilidade até 4x maior que baterias convencionais</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg">✓</span>
            <span>Menor taxa de falhas e excelente suporte técnico</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg">✓</span>
            <span>Preferida por profissionais de TI e data centers</span>
          </li>
        </ul>
        <p className="text-gray-700 font-bold italic">"Quem trabalha com confiança, trabalha com Freedom."</p>
      </div>
    </div>
  )
}
