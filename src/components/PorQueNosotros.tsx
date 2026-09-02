"use client"

import { motion } from "framer-motion"
import { Shield, Truck, Factory, Award, Leaf, Users } from "lucide-react"
import { fadeUp } from "@/lib/animations"
import { useLang } from "@/i18n/LanguageProvider"

const razones = [
  { icon: Factory, key: "cadenaIntegrada", titulo: "Cadena Integrada", desc: "Control total desde la ganadería hasta la distribución. Cada etapa bajo un mismo estándar de calidad." },
  { icon: Shield, key: "certificaciones", titulo: "Certificaciones Internacionales", desc: "Cumplimos con normativas sanitarias y de inocuidad exigidas para mercados locales y de exportación." },
  { icon: Truck, key: "flotaPropia", titulo: "Flota Propia", desc: "Transporte especializado con unidades refrigeradas y de ganado en pie. Cadena de frío garantizada." },
  { icon: Award, key: "experiencia", titulo: "+10 Años de Experiencia", desc: "Trayectoria demostrada en la industria cárnica dominicana con crecimiento sostenido." },
  { icon: Leaf, key: "compromiso", titulo: "Compromiso con la Calidad", desc: "Procesos eficientes, éticos y controlados en cada producto que llega al consumidor final." },
  { icon: Users, key: "equipoHumano", titulo: "Equipo Humano", desc: "Profesionales comprometidos con la mejora continua y el orgullo por el trabajo bien hecho." },
]

export default function PorQueNosotros() {
  const { t } = useLang()
  return (
    <section id="por-que" className="relative py-20 md:py-28 bg-zinc-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 font-serif">
            {t("porque.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 font-serif">
            {t("porque.title")}
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {razones.map((r, i) => (
            <motion.div
              key={r.titulo}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-100"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                <r.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-zinc-900">{t(`porque.${r.key}`)}</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{t(`porque.${r.key}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
