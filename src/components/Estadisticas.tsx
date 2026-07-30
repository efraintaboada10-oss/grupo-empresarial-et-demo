"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Clock } from "lucide-react"
import { estadisticas } from "@/data/empresas"
import SectionWrapper from "./SectionWrapper"

const iconMap = [Building2, Clock]

function ContadorAnimado({ valor, sufijo }: { valor: number; sufijo: string }) {
  return (
    <span className="text-4xl md:text-5xl font-bold text-white">
      {valor}
      {sufijo}
    </span>
  )
}

export default function Estadisticas() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <SectionWrapper className="py-20 md:py-24 bg-zinc-900">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
          {estadisticas.map((stat, index) => {
            const Icon = iconMap[index]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center group"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 text-[var(--accent)]/60 group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/30 group-hover:bg-zinc-800/80 transition-all duration-300">
                  <Icon size={22} />
                </div>
                <ContadorAnimado valor={stat.valor} sufijo={stat.sufijo} />
                <p className="mt-2 text-sm font-medium text-zinc-300">{stat.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.descripcion}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
