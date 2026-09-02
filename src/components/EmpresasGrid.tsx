"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Phone, Mail, ChevronRight, ZoomIn } from "lucide-react"
import { curtain } from "@/lib/animations"

import { empresas } from "@/data/empresas"
import cortesData from "@/data/cortes.json"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"
import { useLang } from "@/i18n/LanguageProvider"

const logos: Record<string, string> = {
  cami: "/images/Logo Cami Dominicana.webp",
  "taboada-ganadera": "/images/Logo Taboada Soluciones Ganaderas.webp",
  "taboada-carnicos": "/images/Logo Taboada Productos Carnicos.webp",
  friodom: "/images/Logo Friodom.webp",
  "transporte-palmar": "/images/Logo Transporte El Palmar.webp",
}

export default function EmpresasGrid() {
  const { t, lang } = useLang()
  const [selected, setSelected] = useState<typeof empresas[0] | null>(null)
  const [zoomedCorte, setZoomedCorte] = useState<{ name: string; file: string } | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail
      const emp = empresas.find((e) => e.id === id)
      if (emp) setSelected(emp)
    }
    window.addEventListener("openEmpresa", handler)
    return () => window.removeEventListener("openEmpresa", handler)
  }, [])

  const first3 = empresas.slice(0, 3)
  const last2 = empresas.slice(3)

  const cortesByName = useMemo(() => {
    const map = new Map<string, { File: string; Description: string; NameEn?: string }>()
    for (const c of cortesData as Array<{ Name: string; NameEn?: string; File: string; Description: string; imported: boolean }>) {
      map.set(c.Name, { File: c.File, Description: c.Description, NameEn: c.NameEn })
    }
    return map
  }, [])

  const Card = ({ empresa, idx, startDelay }: { empresa: typeof empresas[0]; idx: number; startDelay: number }) => {
    const logoSrc = logos[empresa.id] || "/logo-full.webp"
    return (
      <motion.button
        onClick={() => setSelected(empresa)}
        variants={curtain}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        custom={startDelay + idx}
        className="group relative rounded-2xl border border-zinc-200 bg-white transition-all duration-500 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 overflow-hidden text-left w-full"
      >
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${empresa.gradient}`} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 p-8">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 p-3 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[var(--accent)]/30 group-hover:shadow-[var(--accent-dim)]">
            <img
              src={logoSrc}
              alt={empresa.nombre}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
<h3 className="text-xl font-semibold text-zinc-900">{lang === "en" && empresa.nombreEn ? empresa.nombreEn : empresa.nombre}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 line-clamp-3">
            {lang === "en" && empresa.descripcionEn ? empresa.descripcionEn : empresa.descripcion}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">
            {t("empresas.verMas")} <ChevronRight size={12} />
          </span>
        </div>
      </motion.button>
    )
  }

  return (
    <>
      <SectionWrapper id="empresas">
        <SectionTitle label={t("empresas.label")} title={t("empresas.title")} />

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {first3.map((empresa, idx) => (
              <Card key={empresa.id} empresa={empresa} idx={idx} startDelay={0} />
            ))}
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {last2.map((empresa, idx) => (
              <Card key={empresa.id} empresa={empresa} idx={idx} startDelay={3} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-xl rounded-2xl border ${selected.palette.border} bg-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto`}
            >
              <div className={`relative h-2 w-full bg-gradient-to-r ${selected.palette.secondary ? `from-[${selected.palette.primary}] via-[${selected.palette.primary}] to-[${selected.palette.secondary}]` : `from-[${selected.palette.primary}] to-[${selected.palette.primary}]`}`} style={{
                background: selected.palette.secondary
                  ? `linear-gradient(to right, ${selected.palette.primary}, ${selected.palette.secondary})`
                  : selected.palette.primary
              }} />

              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm ${selected.palette.textMuted} hover:bg-white ${selected.palette.text} transition-all z-10`}
aria-label={t("empresas.cerrar")}
              >
                <X size={18} />
              </button>

              <div className={`bg-gradient-to-b ${selected.palette.bg} p-8`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border ${selected.palette.border} bg-white p-3 shadow-sm`}>
                    <img
                      src={logos[selected.id] || "/logo-full.webp"}
                      alt={selected.nombre}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${selected.palette.text} font-serif`}>{lang === "en" && selected.nombreEn ? selected.nombreEn : selected.nombre}</h3>
                    <span className={`text-xs font-medium uppercase tracking-wider ${selected.id === "taboada-carnicos" ? "text-red-600" : selected.palette.textMuted}`}>{lang === "en" && selected.sectorEn ? selected.sectorEn : selected.sector}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {lang === "en" && selected.descripcionLargaEn ? selected.descripcionLargaEn : selected.descripcionLarga}
                </p>

                {selected.videoUrl && (
                  <div className="mt-6">
                    <p className={`text-xs font-semibold ${selected.palette.text} uppercase tracking-wider mb-3`}>
                      {t("empresas.video")}
                    </p>
                    <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-sm">
                      <video
                        className="aspect-video w-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        poster={logos[selected.id] || "/images/video-poster.webp"}
                      >
                        <source src={selected.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                )}

                {selected.fotosDestacadas && selected.fotosDestacadas.length > 0 && (
                  <div className={`mt-6 border-t ${selected.palette.border} pt-6`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-xs font-semibold ${selected.palette.text} uppercase tracking-wider`}>
                        {selected.id === "taboada-ganadera" ? t("empresas.fotosEjemplares") : selected.id === "taboada-carnicos" ? t("empresas.fotosProductos") : selected.id === "transporte-palmar" ? t("empresas.fotosFlota") : selected.id === "friodom" ? t("empresas.fotosAlmacen") : t("empresas.fotosPublicas")}
                      </h4>
                      {selected.id === "taboada-carnicos" && (
                        <a
                          href="/cortes"
                          onClick={() => setSelected(null)}
                          className={`inline-flex items-center gap-1 text-xs font-medium ${selected.palette.text} hover:underline transition-colors`}
                        >
                          Ver más <ChevronRight size={12} />
                        </a>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {selected.fotosDestacadas.map((foto) => {
                        const objectClass =
                          foto.src.includes("IMG_7070") ? "object-cover object-left" :
                          "object-cover object-center"
                        return (
                          <button
                            key={foto.src}
                            type="button"
                            onClick={() => setZoomedCorte({ name: lang === "en" && foto.labelEn ? foto.labelEn : foto.label, file: foto.src })}
                            className="group/foto text-left"
                          >
                            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 border border-zinc-200">
                              <img
                                src={foto.src}
                                alt={lang === "en" && foto.labelEn ? foto.labelEn : foto.label}
                                className={`h-full w-full ${objectClass} transition-transform duration-300 group-hover/foto:scale-110`}
                                loading="lazy"
                              />
                            </div>
                            <p className="mt-1.5 text-xs text-zinc-600 text-center">{lang === "en" && foto.labelEn ? foto.labelEn : foto.label}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {selected.servicios && selected.servicios.length > 0 && (
                  <div className={`mt-6 border-t ${selected.palette.border} pt-6`}>
                    <h4 className={`text-xs font-semibold ${selected.palette.text} uppercase tracking-wider mb-3`}>{t("empresas.servicios")}</h4>
                    <ul className="space-y-2">
                      {selected.servicios.map((s, si) => (
                        <li key={si} className="flex items-center gap-2 text-sm text-zinc-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                          {lang === "en" && selected.serviciosEn?.[si] ? selected.serviciosEn[si] : s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selected.cortesDestacados && selected.cortesDestacados.length > 0 && (
                  <div className={`mt-6 border-t ${selected.palette.border} pt-6`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-xs font-semibold ${selected.palette.text} uppercase tracking-wider`}>{t("empresas.catalogodest")}</h4>
                      <a
                        href="/cortes"
                        onClick={() => setSelected(null)}
                        className={`inline-flex items-center gap-1 text-xs font-medium ${selected.palette.text} hover:underline transition-colors`}
                      >
                        {t("empresas.verMas")} <ChevronRight size={12} />
                      </a>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {selected.cortesDestacados.map((name) => {
                        const corte = cortesByName.get(name)
                        if (!corte) return null
                        return (
                          <button
                            key={name}
                            type="button"
                            onClick={() => setZoomedCorte({ name: lang === "en" && corte.NameEn ? corte.NameEn : name, file: corte.File })}
                            className="group/corte text-left"
                          >
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-100 border border-zinc-200">
                              <img
                                src={`/images/cortes/${corte.File}`}
                                alt={lang === "en" && corte.NameEn ? corte.NameEn : name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover/corte:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/corte:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn size={20} className="text-white opacity-0 group-hover/corte:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="mt-1.5 text-xs text-zinc-600 text-center line-clamp-1">{lang === "en" && corte.NameEn ? corte.NameEn : name}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className={`mt-6 space-y-3 border-t ${selected.palette.border} pt-6`}>
                  {selected.direccion && (
                    <div className="flex items-start gap-3 text-sm text-zinc-500">
                      <MapPin size={16} className={`mt-0.5 shrink-0 ${selected.palette.text}`} />
                      <span>{selected.direccion}</span>
                    </div>
                  )}
                  {selected.telefono && (
                    <div className="flex items-center gap-3 text-sm text-zinc-500">
                      <Phone size={16} className={`shrink-0 ${selected.palette.text}`} />
                      <a href={`tel:${selected.telefono}`} className="hover:underline hover:opacity-75 transition-all">{selected.telefono}</a>
                    </div>
                  )}
                  {selected.email && (
                    <div className="flex items-center gap-3 text-sm text-zinc-500">
                      <Mail size={16} className={`shrink-0 ${selected.palette.text}`} />
                      <a href={`mailto:${selected.email}`} className="hover:underline hover:opacity-75 transition-all">{selected.email}</a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedCorte && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setZoomedCorte(null)}
          >
            <button
              onClick={() => setZoomedCorte(null)}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all z-10"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <img
                src={zoomedCorte.file.startsWith("/") ? zoomedCorte.file : `/images/cortes/${zoomedCorte.file}`}
                alt={zoomedCorte.name}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="mt-3 text-center text-base font-medium text-white">{zoomedCorte.name}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}