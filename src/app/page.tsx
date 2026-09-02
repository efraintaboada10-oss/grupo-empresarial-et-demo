import Header from "@/components/Header"
import Hero from "@/components/Hero"
import VideoSection from "@/components/VideoSection"
import EmpresasGrid from "@/components/EmpresasGrid"
import CadenaValor from "@/components/CadenaValor"
import PorQueNosotros from "@/components/PorQueNosotros"
import Estadisticas from "@/components/Estadisticas"
import Liderazgo from "@/components/Liderazgo"
import Catalogo from "@/components/Catalogo"
import Calidad from "@/components/Calidad"
import InstagramFeed from "@/components/InstagramFeed"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmpresasGrid />
        <PorQueNosotros />
        <VideoSection />
        <CadenaValor />
        <Estadisticas />
        <Liderazgo />
        <Catalogo />
        <Calidad />
        <InstagramFeed />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
