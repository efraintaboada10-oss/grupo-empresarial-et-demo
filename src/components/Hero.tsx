"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import SplitText from "./SplitText"
import { fadeUp } from "@/lib/animations"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight text-balance font-serif">
          <SplitText
            text="Impulsando la industria cárnica de República Dominicana"
            delay={0.15}
          />
        </h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed font-sans"
        >
          Integramos producción ganadera, procesamiento, refrigeración, logística y distribución
          para ofrecer soluciones confiables que fortalecen la industria alimentaria.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={5}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/#contacto"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-200 hover:shadow-lg"
          >
            Contactar
          </a>
          <a
            href="/#empresas"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            Conocer Empresas
          </a>
        </motion.div>
      </div>

      <motion.a
        href="/#empresas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Descubrir</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
