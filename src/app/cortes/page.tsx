import type { Metadata } from "next"
import Header from "@/components/Header"
import Cortes from "@/components/Cortes"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Cortes | Galería de Productos",
  description:
    "Explora nuestra galería completa de cortes de carne bovina: Cortes, Vísceras, Cortes con Hueso (CH) y Cortes sin Hueso (SH).",
  openGraph: {
    title: "Cortes | Grupo Empresarial ET",
    description:
      "Galería completa de cortes de carne bovina del Grupo Empresarial ET.",
  },
}

export default function CortesPage() {
  return (
    <>
      <Header />
      <main>
        <Cortes />
      </main>
      <Footer />
    </>
  )
}
