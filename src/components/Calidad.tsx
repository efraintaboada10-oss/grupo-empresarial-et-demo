"use client"

import { motion } from "framer-motion"
import { BadgeCheck, ShieldCheck, Leaf, SearchCheck, Globe2, TrendingUp } from "lucide-react"
import { curtain, fadeUp } from "@/lib/animations"
import { valoresCalidad } from "@/data/empresas"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"
import { useLang } from "@/i18n/LanguageProvider"

const iconMap: Record<string, React.ElementType> = {
  badgeCheck: BadgeCheck,
  shieldCheck: ShieldCheck,
  leaf: Leaf,
  searchCheck: SearchCheck,
  globe2: Globe2,
  trendingUp: TrendingUp,
}

export default function Calidad() {
  const { t } = useLang()
  return (
    <SectionWrapper id="calidad">
      <SectionTitle label={t("calidad.label")} title={t("calidad.title")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valoresCalidad.map((item, index) => {
          const Icon = iconMap[item.icono] || BadgeCheck
          return (
            <motion.div
              key={item.key}
              variants={curtain}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={index}
              className="group rounded-xl border border-zinc-100 bg-zinc-50/50 p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/40 hover:bg-zinc-100/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-200 text-zinc-700 group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent)] transition-colors duration-300">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">{t(`calidad.${item.key}`)}</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{t(`calidad.${item.key}Desc`)}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        custom={1}
        className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 md:p-12 text-center relative"
        style={{ boxShadow: "0 0 0 1px var(--accent-dim)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 font-serif">
          {t("calidad.exportacion")}
        </span>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-zinc-900">
          {t("calidad.presencia")}
        </h3>
        <p className="subtitle mx-auto mt-4 max-w-2xl text-zinc-500 leading-relaxed">
          {t("calidad.presenciaDesc")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[{ name: "Centroamérica", key: "region" }].map((region) => (
            <span
              key={region.name}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-medium text-zinc-600"
            >
              {t(`calidad.${region.key}`)}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
