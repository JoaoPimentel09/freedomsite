import type React from "react"
import "./globals.css"
import { Montserrat, Exo_2 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

// Load Montserrat font for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-montserrat",
})

// Load Exo 2 font for body text
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-exo2",
})

export const metadata = {
  title: "Baterias Freedom - Distribuidora Oficial de Baterias em São Paulo",
  description:
    "Distribuidora de Baterias Freedom em São Paulo, menor preço em baterias estacionárias Freedom, peça já sua cotação.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MX7HZTGT');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${montserrat.variable} ${exo2.variable} font-exo`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MX7HZTGT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
