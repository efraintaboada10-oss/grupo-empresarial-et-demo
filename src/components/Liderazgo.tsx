"use client"

import { motion } from "framer-motion"
import { Award, Target, Heart } from "lucide-react"
import { curtain, fadeUp } from "@/lib/animations"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"
import { useLang } from "@/i18n/LanguageProvider"

const lideres = [
  {
    key: "efrain",
    nombre: "Efrain Taboada Santos",
    cargo: "Fundador y Presidente Ejecutivo",
    desc: "Fundador y Presidente Ejecutivo de Grupo Empresarial ET, conglomerado dominicano integrado por empresas líderes en las industrias ganadera, procesamiento cárnico, refrigeración, logística y comercialización de proteína animal. Bajo su liderazgo, el grupo ha expandido sus operaciones a nivel nacional e internacional, posicionándose como un referente en la industria cárnica de República Dominicana con exportaciones a Centroamérica.",
  },
  {
    key: "rosanna",
    nombre: "Rosanna Paulino",
    cargo: "Fundadora y Gerente Administrativa",
    desc: "Fundadora y Gerente Administrativa de Grupo Empresarial ET, responsable de la gestión administrativa y financiera del conglomerado, asegurando la eficiencia operativa y el cumplimiento de los objetivos estratégicos del grupo. Con una amplia experiencia en administración y finanzas empresariales, lidera los procesos de planificación financiera, control de gestión y coordinación entre las distintas empresas del grupo, contribuyendo al crecimiento ordenado y sostenible de la organización.",
  },
]

const valores = [
  {
    key: "mision",
    icon: Target,
    iconBg: "bg-zinc-800",
    titulo: "Misión",
    desc: "Producir, procesar y comercializar productos cárnicos e importados de alta calidad, mediante procesos eficientes, éticos y controlados, priorizando la estructura organizativa, el bienestar del equipo, la rentabilidad del negocio, el desarrollo del sector agroindustrial y la sostenibilidad medioambiental.",
  },
  {
    key: "vision",
    icon: Award,
    iconBg: "bg-zinc-900",
    titulo: "Visión",
    desc: "Ser un grupo empresarial referente en la industria cárnica y agropecuaria de la República Dominicana, reconocido por su excelencia operativa, integridad, compromiso social y liderazgo estratégico, construyendo un legado sostenible con impacto humano y financiero.",
  },
  {
    key: "valores",
    icon: Heart,
    iconBg: "bg-zinc-700",
    titulo: "Valores",
    desc: "Responsabilidad y compromiso. Orden y estructura. Lealtad y respeto. Transparencia financiera. Crecimiento y desarrollo interno. Equidad y mérito. Mejora continua. Orgullo por el trabajo bien hecho.",
  },
]

export default function Liderazgo() {
  const { t } = useLang()
  return (
    <SectionWrapper id="liderazgo">
      <SectionTitle label={t("liderazgo.label")} title={t("liderazgo.title")} />

      <div className="space-y-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center"
        >
          <motion.div
            variants={curtain}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
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
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                custom={idx}
              >
                <h3 className="text-xl font-bold text-zinc-900">{lider.nombre}</h3>
                <p className="text-sm font-medium text-zinc-400 mt-0.5">{t(`liderazgo.${lider.key}Cargo`)}</p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{t(`liderazgo.${lider.key}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={2}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {valores.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.key}
                className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} text-white`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 mb-1">{t(`liderazgo.${item.key}`)}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{t(`liderazgo.${item.key}Desc`)}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
