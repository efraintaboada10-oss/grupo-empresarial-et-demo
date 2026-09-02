"use client"

import { motion } from "framer-motion"
import { FileText, Download, Beef, Package, Heart, Grid3X3 } from "lucide-react"
import { curtain, fadeUp } from "@/lib/animations"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"
import { useLang } from "@/i18n/LanguageProvider"

const categorias = [
  { icon: Beef, key: "cortes", link: "/cortes?categoria=Cortes" },
  { icon: Grid3X3, key: "ch", link: "/cortes?categoria=Cortes con Hueso (CH)" },
  { icon: Package, key: "sh", link: "/cortes?categoria=Cortes sin Hueso (SH)" },
  { icon: Heart, key: "visceras", link: "/cortes?categoria=V%C3%ADsceras" },
]

export default function Catalogo() {
  const { t } = useLang()
  return (
    <SectionWrapper id="catalogo">
      <SectionTitle label={t("catalogo.label")} title={t("catalogo.title")} />

      <div className="space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.a
                key={cat.key}
                href={cat.link}
                variants={curtain}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                custom={idx}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-white group-hover:bg-zinc-700 transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{t(`catalogo.${cat.key}`)}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{t(`catalogo.${cat.key}Desc`)}</p>
              </motion.a>
            )
          })}
        </div>



        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={1}
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-12 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-white">
            <FileText size={28} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
            {t("catalogo.completoTitulo")}
          </h3>
          <p className="subtitle mx-auto mt-4 max-w-xl text-zinc-500 leading-relaxed">
            {t("catalogo.completoDesc")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/assets/Cami - Catalogo Productos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/25"
            >
              <Download size={16} />
              {t("catalogo.descargar")}
            </a>
            <a
              href="/cortes"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-lg"
            >
              <Grid3X3 size={16} />
              {t("catalogo.verGalería")}
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
