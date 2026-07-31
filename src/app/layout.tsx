import type { Metadata } from "next"
import { Outfit, Spectral } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/PageTransition"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
})

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Grupo Empresarial ET | Líder en la Industria Cárnica de República Dominicana",
    template: "%s | Grupo Empresarial ET",
  },
  description:
    "Grupo Empresarial ET es un conglomerado dominicano integrado por empresas líderes en ganadería, procesamiento cárnico, refrigeración, logística y comercialización. Calidad e innovación al servicio del sector agropecuario nacional e internacional.",
  keywords: [
    "Grupo Empresarial ET",
    "industria cárnica República Dominicana",
    "Cami Dominicana",
    "Taboada Productos Cárnicos",
    "Taboada Soluciones Ganaderas",
    "Fríodom",
    "Transporte El Palmar",
    "carne dominicana",
    "exportación carne Centroamérica",
    "ganadería República Dominicana",
    "procesadora de carne",
    "cadena de frío",
    "logística refrigerada",
  ],
  authors: [{ name: "Grupo Empresarial ET" }],
  creator: "Grupo Empresarial ET",
  publisher: "Grupo Empresarial ET",
  metadataBase: new URL("https://grupoempresarialet.com"),
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: "Grupo Empresarial ET",
    title: "Grupo Empresarial ET | Líder en la Industria Cárnica de República Dominicana",
    description:
      "Conglomerado dominicano integrado por empresas líderes en ganadería, procesamiento cárnico, refrigeración, logística y comercialización.",
    url: "https://grupoempresarialet.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo Empresarial ET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Empresarial ET | Industria Cárnica RD",
    description:
      "Conglomerado dominicano líder en ganadería, procesamiento cárnico, refrigeración, logística y comercialización.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.webp",
    apple: "/logo-full.webp",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Empresarial ET",
  url: "https://grupoempresarialet.com",
  logo: "https://grupoempresarialet.com/logo-full.webp",
  description:
    "Conglomerado dominicano integrado por empresas líderes en ganadería, procesamiento cárnico, refrigeración, logística y comercialización de productos cárnicos.",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Efrain Taboada Santos",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Camino de la Barca, No. 96, Cancino Adentro",
    addressLocality: "Santo Domingo Este",
    addressCountry: "DO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-809-334-1444",
    contactType: "customer service",
    email: "pedidos@camidominicana.com",
  },
  subOrganization: [
    { "@type": "Organization", name: "Cami Dominicana SRL" },
    { "@type": "Organization", name: "Taboada Soluciones Ganaderas SRL" },
    { "@type": "Organization", name: "Taboada Productos Cárnicos SRL" },
    { "@type": "Organization", name: "Fríodom SRL" },
    { "@type": "Organization", name: "Transporte El Palmar SRL" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${spectral.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#09090b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white font-sans">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
