"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Download, Beef, Package, Heart, Grid3X3 } from "lucide-react"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"

const categorias = [
  { icon: Beef, nombre: "Cortes", desc: "Selección de cortes de carne bovina para los paladares más exigentes.", link: "/cortes?categoria=Cortes" },
  { icon: Grid3X3, nombre: "Cortes con Hueso (CH)", desc: "Cortes que incluyen hueso, ideales para asados y cocciones lentas.", link: "/cortes?categoria=Cortes con Hueso (CH)" },
  { icon: Package, nombre: "Cortes sin Hueso (SH)", desc: "Cortes deshuesados, prácticos y versátiles para toda ocasión.", link: "/cortes?categoria=Cortes sin Hueso (SH)" },
  { icon: Heart, nombre: "Vísceras", desc: "Variedad de vísceras de res para preparaciones tradicionales.", link: "/cortes?categoria=V%C3%ADsceras" },
]

export default function Catalogo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <SectionWrapper id="catalogo">
      <SectionTitle label="Catálogo" title="Productos Cárnicos" />

      <div ref={ref} className="space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.a
                key={cat.nombre}
                href={cat.link}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-white group-hover:bg-zinc-700 transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{cat.nombre}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{cat.desc}</p>
              </motion.a>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.a
            href="/cortes?categoria=Cortes"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative rounded-xl overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
          >
            <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
              <img
                src="/images/cortes/Toro.png"
                alt="Bovinos"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-900">Bovinos</h3>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                Cortes de carne bovina seleccionados, para los paladares más exigentes.
              </p>
            </div>
          </motion.a>

          <motion.a
            href="/cortes?categoria=Aves"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative rounded-xl overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
          >
            <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
              <img
                src="/images/cortes/Gallo.png"
                alt="Avícola"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-900">Avícola</h3>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                Cortes de pollo importados, alas y pechugas de alta calidad para distribución comercial.
              </p>
            </div>
          </motion.a>

          <motion.a
            href="/cortes?categoria=Cerdo"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative rounded-xl overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
          >
            <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
              <img
                src="/images/cortes/Porcino.png"
                alt="Porcino"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-900">Porcino</h3>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                Cortes de cerdo importados, chuletas, piernas y barrigadas para cocina profesional y tradicional.
              </p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-12 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-white">
            <FileText size={28} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
            Catálogo Completo de Productos
          </h3>
          <p className="subtitle mx-auto mt-4 max-w-xl text-zinc-500 leading-relaxed">
            Descargue nuestro catálogo en PDF con la lista completa de productos, cortes,
            presentaciones y especificaciones técnicas de todas nuestras empresas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/assets/Cami - Catalogo Productos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/25"
            >
              <Download size={16} />
              Descargar Catálogo (PDF)
            </a>
            <a
              href="/cortes"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-lg"
            >
              <Grid3X3 size={16} />
              Ver Galería de Cortes
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
