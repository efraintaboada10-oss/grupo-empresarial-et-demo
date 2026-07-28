"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tractor, Factory, Snowflake, Truck, Globe, ShoppingCart, ChevronDown } from "lucide-react"
import { cadenaValor } from "@/data/empresas"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"

const iconMap: Record<string, React.ElementType> = {
  tractor: Tractor,
  factory: Factory,
  snowflake: Snowflake,
  truck: Truck,
  globe: Globe,
  shoppingCart: ShoppingCart,
}

export default function CadenaValor() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <SectionWrapper id="cadena-valor" dark>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />

      <div className="relative z-10">
        <SectionTitle
          label="Integración Vertical"
          title="Cadena de Valor"
          dark
        />

        <div ref={ref} className="space-y-6">
          {cadenaValor.map((item, index) => {
            const Icon = iconMap[item.icono] || Truck
            const isLast = index === cadenaValor.length - 1

            return (
              <motion.div
                key={item.paso}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-zinc-900 shadow-xl shadow-black/20 group-hover:border-[var(--accent)]/30 group-hover:shadow-[var(--accent-dim)] transition-all duration-500">
                  <Icon size={24} className="text-white/80 group-hover:text-[var(--accent)] transition-colors duration-500" />
                </div>

                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 font-serif">
                  Paso {item.paso}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">{item.titulo}</h3>
                <p className="mt-2 text-zinc-400 leading-relaxed max-w-md">
                  {item.descripcion}
                </p>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    className="my-4"
                  >
                    <ChevronDown size={20} className="text-zinc-600" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
