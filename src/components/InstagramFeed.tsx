"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { useLang } from "@/i18n/LanguageProvider"

export default function InstagramFeed() {
  const { t } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="instagram" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 font-serif">
            {t("instagram.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 font-serif">
            @taboadasolucionesganaderas
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </motion.div>

        {mounted && (
          <div className="elfsight-app-3865488b-d9f9-49bd-b8fa-007cb35b2f7a" data-elfsight-app-lazy />
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/taboadasolucionesganaderas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-700 transition-all duration-300 hover:bg-zinc-50 hover:border-zinc-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            {t("instagram.seguir")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
