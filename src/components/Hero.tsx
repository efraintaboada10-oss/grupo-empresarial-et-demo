"use client"

import { motion } from "framer-motion"
import SplitText from "./SplitText"
import { fadeUp } from "@/lib/animations"
import { useLang } from "@/i18n/LanguageProvider"

export default function Hero() {
  const { t } = useLang()
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-tight text-balance font-serif">
          <SplitText
            text={t("hero.title")}
            delay={0.15}
          />
        </h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-zinc-900 leading-relaxed font-sans"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          className="mx-auto mt-6 sm:mt-8 max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"
        >
          <div className="rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">{t("hero.vision")}</p>
            <p className="text-xs text-zinc-600 leading-relaxed">{t("hero.visionText")}</p>
          </div>
          <div className="rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">{t("hero.mision")}</p>
            <p className="text-xs text-zinc-600 leading-relaxed">{t("hero.misionText")}</p>
          </div>
          <div className="rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">{t("hero.valores")}</p>
            <p className="text-xs text-zinc-600 leading-relaxed">{t("hero.valoresText")}</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={4}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="/cortes"
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 sm:px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-black hover:shadow-lg"
          >
            {t("hero.verCatalogo")}
          </a>
          <a
            href="/#contacto"
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-7 sm:px-8 text-sm font-medium text-zinc-700 transition-all duration-300 hover:bg-zinc-50"
          >
            {t("hero.contactar")}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />


    </section>
  )
}
