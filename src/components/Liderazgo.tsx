"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Target, Heart } from "lucide-react"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"

const lideres = [
  {
    nombre: "Efrain Taboada Santos",
    cargo: "Fundador y Presidente Ejecutivo",
    desc: "Fundador y Presidente Ejecutivo de Grupo Empresarial ET, conglomerado dominicano integrado por empresas líderes en las industrias ganadera, procesamiento cárnico, refrigeración, logística y comercialización de proteína animal. Bajo su liderazgo, el grupo ha expandido sus operaciones a nivel nacional e internacional, posicionándose como un referente en la industria cárnica de República Dominicana con exportaciones a Centroamérica.",
  },
  {
    nombre: "Rosanna Paulino",
    cargo: "Fundadora y Gerente Administrativa",
    desc: "Fundadora y Gerente Administrativa de Grupo Empresarial ET, responsable de la gestión administrativa y financiera del conglomerado, asegurando la eficiencia operativa y el cumplimiento de los objetivos estratégicos del grupo. Con una amplia experiencia en administración y finanzas empresariales, lidera los procesos de planificación financiera, control de gestión y coordinación entre las distintas empresas del grupo, contribuyendo al crecimiento ordenado y sostenible de la organización.",
  },
]

const valores = [
  {
    icon: Award,
    iconBg: "bg-zinc-900",
    titulo: "Visión",
    desc: "Ser un grupo empresarial referente en la industria cárnica y agropecuaria de la República Dominicana, reconocido por su excelencia operativa, integridad, compromiso social y liderazgo estratégico, construyendo un legado sostenible con impacto humano y financiero.",
  },
  {
    icon: Target,
    iconBg: "bg-zinc-800",
    titulo: "Misión",
    desc: "Producir, procesar y comercializar productos cárnicos e importados de alta calidad, mediante procesos eficientes, éticos y controlados, priorizando la estructura organizativa, el bienestar del equipo, la rentabilidad del negocio, el desarrollo del sector agroindustrial y la sostenibilidad medioambiental.",
  },
  {
    icon: Heart,
    iconBg: "bg-zinc-700",
    titulo: "Valores",
    desc: "Responsabilidad y compromiso. Orden y estructura. Lealtad y respeto. Transparencia financiera. Crecimiento y desarrollo interno. Equidad y mérito. Mejora continua. Orgullo por el trabajo bien hecho.",
  },
]

export default function Liderazgo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <SectionWrapper id="liderazgo">
      <SectionTitle label="Liderazgo" title="Equipo Directivo" />

      <div ref={ref} className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2"
          >
            <div className="aspect-[4/5] w-full rounded-2xl bg-zinc-100 overflow-hidden">
              <img
                src="/images/Imagen Gerentes Administrativos.webp?v=3"
                alt="Equipo Directivo Grupo Empresarial ET"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-8">
            {lideres.map((lider, idx) => (
              <motion.div
                key={lider.nombre}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold text-zinc-900">{lider.nombre}</h3>
                <p className="text-sm font-medium text-zinc-400 mt-0.5">{lider.cargo}</p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{lider.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {valores.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.titulo}
                className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} text-white`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 mb-1">{item.titulo}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
