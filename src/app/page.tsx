import Header from "@/components/Header"
import Hero from "@/components/Hero"
import VideoSection from "@/components/VideoSection"
import EmpresasGrid from "@/components/EmpresasGrid"
import CadenaValor from "@/components/CadenaValor"
import Estadisticas from "@/components/Estadisticas"
import Liderazgo from "@/components/Liderazgo"
import Catalogo from "@/components/Catalogo"
import Calidad from "@/components/Calidad"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmpresasGrid />
        <VideoSection />
        <CadenaValor />
        <Estadisticas />
        <Liderazgo />
        <Catalogo />
        <Calidad />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
