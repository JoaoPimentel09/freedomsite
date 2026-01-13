/**
 * Arquivo de configuração contendo as slugs das variações de páginas
 * Utilize este arquivo para manter consistência nas URLs em toda a aplicação
 */

export const paginasVariacoes = {
  // Páginas principais
  home: "/",
  sobre: "/sobre",
  contato: "/contato",
  freedomwhite: "/freedomwhite",
  telecom: "/telecom",
  energiaSolar: "/energia-solar",
  datacenter: "/datacenter",
  naopare: "/naopare",

  // Páginas de produtos
  produtos: "/produtos",
  baterias: {
    todas: "/produtos/baterias",
    estacionarias: "/produtos/baterias/estacionarias",
    automotivas: "/produtos/baterias/automotivas",
    solares: "/produtos/baterias/solares",
  },

  // Páginas de modelos específicos
  modelos: {
    df300: "/produtos/baterias/df300",
    df500: "/produtos/baterias/df500",
    df700: "/produtos/baterias/df700",
    df1000: "/produtos/baterias/df1000",
    df1500: "/produtos/baterias/df1500",
    df2000: "/produtos/baterias/df2000",
    df2500: "/produtos/baterias/df2500",
    df3000: "/produtos/baterias/df3000",
    df4100: "/produtos/baterias/df4100",
  },

  // Páginas de aplicações
  aplicacoes: {
    nobreaks: "/aplicacoes/nobreaks",
    energiaSolar: "/aplicacoes/energia-solar",
    telecomunicacoes: "/aplicacoes/telecomunicacoes",
    alarmes: "/aplicacoes/alarmes",
    iluminacao: "/aplicacoes/iluminacao",
    datacenter: "/aplicacoes/datacenter",
  },

  // Páginas de suporte
  suporte: "/suporte",
  faq: "/suporte/faq",
  garantia: "/suporte/garantia",

  // Páginas de distribuidores
  distribuidores: "/distribuidores",
  saopaulo: "/distribuidores/sao-paulo",

  // Páginas de blog e conteúdo
  blog: "/blog",

  // Páginas de orçamento e vendas
  orcamento: "/orcamento",
  promocoes: "/promocoes",
}

// Função auxiliar para obter URL completa (caso precise adicionar domínio)
export function getFullUrl(slug: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bateriasfreedom.com.br"
  return `${baseUrl}${slug}`
}

// Exporta por padrão para facilitar importação
export default paginasVariacoes
