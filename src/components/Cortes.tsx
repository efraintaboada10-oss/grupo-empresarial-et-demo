"use client"

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, ArrowLeft, Search, LayoutGrid, Columns2, ChevronLeft, ChevronRight, Send } from "lucide-react"
import { curtain } from "@/lib/animations"

const redirectMap: Record<string, string> = {}
import cortesData from "@/data/cortes.json"

const ITEMS_PER_PAGE = 20

const categoryOrder = [
  "Cortes",
  "Cortes con Hueso (CH)",
  "Cortes sin Hueso (SH)",
  "Vísceras",
  "Aves",
  "Cerdo",
  "Cortes de Res Importados",
  "Vísceras Importadas",
]

const NOGAL_FILES = new Set([
  "corte-2.webp", "corte-5.webp", "corte-6.webp", "corte-7.webp", "corte-9.webp",
  "corte-10.webp", "corte-16.webp", "corte-17.webp", "corte-18.webp", "corte-19.webp",
  "corte-21.webp", "corte-23.webp", "corte-25.webp", "corte-27.webp", "corte-31.webp",
  "corte-33.webp", "corte-35.webp", "corte-37.webp", "corte-39.webp", "corte-43.webp",
  "corte-45.webp", "corte-46.webp", "corte-47.webp", "corte-48.webp", "corte-52.webp",
  "corte-54.webp", "corte-55.webp", "corte-60.webp", "corte-62.webp", "corte-63.webp",
  "corte-64.webp", "corte-66.webp", "corte-69.webp", "corte-71.webp", "corte-73.webp",
  "corte-76.webp", "corte-79.webp", "corte-89.webp", "corte-92.webp", "corte-93.webp",
  "corte-95.webp", "corte-97.webp", "corte-99.webp", "corte-100.webp", "corte-110.webp",
  "corte-111.webp",
])

function ImageCard({ src, alt, onClick, showLabel = true }: { src: string; alt: string; onClick: () => void; showLabel?: boolean }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200 hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-dim)] focus:outline-none focus:ring-2 focus:ring-zinc-400 text-left w-full"
    >
      <div className="aspect-square overflow-hidden bg-zinc-100 relative">
        {!loaded && !failed && (
          <div className="absolute inset-0 bg-zinc-200 animate-pulse" />
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        {failed && !loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
            <span className="text-xs text-zinc-400">{alt}</span>
          </div>
        )}
      </div>
      <div className="px-3 py-2.5 bg-white border-t border-zinc-100 flex-1 flex flex-col justify-center gap-0.5">
        {showLabel && (
          <p className="text-xs font-medium text-zinc-700 leading-tight line-clamp-2">
            {alt}
          </p>
        )}
      </div>
    </button>
  )
}

export default function Cortes() {
  const [activeCategory, setActiveCategory] = useState<string>("Todas")
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [search, setSearch] = useState("")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [layout, setLayout] = useState<"grid" | "horizontal">("grid")
  const [tab, setTab] = useState<"galeria" | "catalogo">("galeria")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get("categoria")
    if (cat) {
      const cats = new Set(cortesData.map((item) => item.Category))
      if (cats.has(cat)) {
        setActiveCategory(cat)
        setTab("catalogo")
      }
    }
  }, [])

  const sourceItems = useMemo(() => {
    if (tab === "galeria") return cortesData.filter((item) => NOGAL_FILES.has(item.File))
    return cortesData
  }, [tab])

  const allImages = useMemo(() => {
    return cortesData.map((item) => ({
      src: `/images/cortes/${item.File}`,
      name: item.Name,
      desc: item.Description,
    }))
  }, [])

  const categories = useMemo(() => {
    const cats = new Set(sourceItems.map((item) => item.Category))
    return ["Todas", ...categoryOrder.filter((c) => cats.has(c))]
  }, [sourceItems])

  const filtered = useMemo(() => {
    let result = sourceItems
    if (activeCategory !== "Todas" && tab === "catalogo") result = result.filter((item) => item.Category === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter((item) => item.Name.toLowerCase().includes(q))
    }
    return result
  }, [sourceItems, activeCategory, search])

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount])
  const hasMore = visibleCount < filtered.length

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filtered.length))
  }, [filtered.length])

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(ITEMS_PER_PAGE)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setVisibleCount(ITEMS_PER_PAGE)
    setActiveCategory("Todas")
  }, [])

  const handleTabChange = useCallback((next: "galeria" | "catalogo") => {
    setTab(next)
    setSelectedIndex(null)
    setVisibleCount(ITEMS_PER_PAGE)
  }, [])

  const allCortes = useMemo(() => {
    const exactExclude = new Set(["Mondongo", "Picaña", "Picaña Nacional", "Banda de Macho"])
    const exclude = ["Frontal", "Terneros", "Ossobuco SH"]
    return cortesData
      .map((c) => {
        const name = c.Name
        return redirectMap[name] || name
      })
      .filter((name, i, arr) => arr.indexOf(name) === i)
      .filter((name) => !exactExclude.has(name) && !exclude.some((e) => name.includes(e)))
  }, [])

  const [cotizar, setCotizar] = useState<{
    nombre: string
    email: string
    mensaje: string
    enviando: boolean
    enviado: boolean
    error: string
    cortes: string[]
  }>({ nombre: "", email: "", mensaje: "", enviando: false, enviado: false, error: "", cortes: [] })

  const resetCotizar = useCallback(() => {
    setCotizar({ nombre: "", email: "", mensaje: "", enviando: false, enviado: false, error: "", cortes: [] })
  }, [])

  const handleCotizarSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCotizar((p) => ({ ...p, enviando: true, error: "" }))
    const data = new FormData()
    data.append("nombre", cotizar.nombre)
    data.append("email", cotizar.email)
    cotizar.cortes.forEach((c, i) => data.append(`corte_${i + 1}`, c))
    data.append("mensaje", cotizar.mensaje)
    try {
      const res = await fetch("https://formspree.io/f/xwvddlja", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) setCotizar((p) => ({ ...p, enviando: false, enviado: true }))
      else setCotizar((p) => ({ ...p, enviando: false, error: "No se pudo enviar la solicitud. Inténtelo nuevamente o escríbanos a pedidos@camidominicana.com." }))
    } catch {
      setCotizar((p) => ({ ...p, enviando: false, error: "Error de conexión. Verifique su internet e inténtelo nuevamente." }))
    }
  }

  const [corteInput, setCorteInput] = useState("")
  const [showCorteSuggestions, setShowCorteSuggestions] = useState(false)

  const [showCotizar, setShowCotizar] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showCotizar) {
        if (e.key === "Escape") {
          setShowCotizar(false)
          setSelectedIndex(null)
        }
        return
      }
      if (selectedIndex === null) return
      if (e.key === "Escape") {
        setSelectedIndex(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null || prev <= 0) return prev
          return prev - 1
        })
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null || prev >= filtered.length - 1) return prev
          return prev + 1
        })
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, filtered.length, showCotizar])

  return (
    <section className="min-h-screen bg-white pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </a>

        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white font-serif">
            Galería de Cortes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl font-serif">
            Nuestros Productos
          </h2>
          <p className="subtitle font-serif mx-auto mt-4 max-w-2xl text-base text-zinc-500">
            Explora nuestra galería de cortes seleccionados y consulta el catálogo para cotizar cada corte exacto.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1">
            <button
              onClick={() => handleTabChange("galeria")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                tab === "galeria"
                  ? "bg-zinc-900 text-white shadow-md"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Galería
            </button>
            <button
              onClick={() => handleTabChange("catalogo")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                tab === "catalogo"
                  ? "bg-zinc-900 text-white shadow-md"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Catálogo
              <span className="ml-1.5 text-[10px] opacity-60">
                ({cortesData.length})
              </span>
            </button>
          </div>
        </div>

        {tab === "galeria" && (
          <p className="-mt-4 mb-8 text-center text-sm text-zinc-500">
            ¿Quieres cotizar?{" "}
            <button
              onClick={() => handleTabChange("catalogo")}
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Consulta el catálogo con los nombres exactos de cada corte
            </button>
          </p>
        )}

        {tab === "catalogo" && (
          <div className="relative mx-auto mb-6 max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Buscar corte por nombre..."
              className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-100"
            />
          </div>
        )}

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {tab === "catalogo" && (
            <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white shadow-md"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
                {cat !== "Todas" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({cortesData.filter((i) => i.Category === cat).length})
                  </span>
                )}
              </button>
            ))}
            </div>
          )}
          <div className="flex items-center gap-1 rounded-lg border border-zinc-200 p-0.5">
            <button
              onClick={() => setLayout("grid")}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all ${
                layout === "grid"
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <LayoutGrid size={14} />
              Cuadrícula
            </button>
            <button
              onClick={() => setLayout("horizontal")}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all ${
                layout === "horizontal"
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <Columns2 size={14} />
              Horizontal
            </button>
          </div>
        </div>

        {layout === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visible.map((item, idx) => {
              const globalIdx = filtered.indexOf(item)
              return (
                <motion.div
                  key={item.File}
                  layout
                  variants={curtain}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={idx}
                >
                  <ImageCard
                    src={`/images/cortes/${tab === "galeria" ? "nogal/" : ""}${item.File}`}
                    alt={item.Name}
                    showLabel={tab === "catalogo"}
                    onClick={() => setSelectedIndex(globalIdx)}
                  />
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4 min-w-max">
              {visible.map((item, idx) => {
                const globalIdx = filtered.indexOf(item)
                return (
                  <motion.div
                    key={item.File}
                    layout
                    variants={curtain}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={idx}
                    className="flex-shrink-0 w-56 sm:w-64"
                  >
                    <ImageCard
                      src={`/images/cortes/${tab === "galeria" ? "nogal/" : ""}${item.File}`}
                      alt={item.Name}
                      showLabel={tab === "catalogo"}
                      onClick={() => setSelectedIndex(globalIdx)}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/25"
            >
              <ChevronDown size={16} />
              Cargar más ({filtered.length - visibleCount} restantes)
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-zinc-400 py-20">
            {search.trim() ? "No se encontraron cortes con ese nombre." : "No hay cortes en esta categoría."}
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && filtered[selectedIndex] && !showCotizar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white/80 hover:bg-black/80 hover:text-white transition-all"
              aria-label="Cerrar"
            >
              <X size={22} />
            </button>

            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev !== null ? prev - 1 : null))
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white/80 hover:bg-black/80 hover:text-white transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {selectedIndex < filtered.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev !== null ? prev + 1 : null))
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white/80 hover:bg-black/80 hover:text-white transition-all"
                aria-label="Siguiente"
              >
                <ChevronRight size={22} />
              </button>
            )}

            <motion.div
              key={filtered[selectedIndex].File}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center max-w-full max-h-full"
            >
              <img
                src={`/images/cortes/${tab === "galeria" ? "nogal/" : ""}${filtered[selectedIndex].File}`}
                alt={filtered[selectedIndex].Name}
                className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-2xl object-contain"
              />
              {tab === "catalogo" && (
                <div className="mt-4 text-center">
                <p className="text-base font-medium text-white">
                  {filtered[selectedIndex].Name}
                </p>
                {filtered[selectedIndex].Description && (
                  <p className="mt-1 text-sm text-white/60 max-w-md">
                    {filtered[selectedIndex].Description}
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    resetCotizar()
                    setCotizar((p) => ({ ...p, cortes: [filtered[selectedIndex].Name] }))
                    setShowCotizar(true)
                  }}
                  className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-white hover:brightness-110 transition-all"
                >
                  Pedir Cotización
                </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCotizar && selectedIndex !== null && filtered[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => { setShowCotizar(false); setSelectedIndex(null) }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-white/5 bg-zinc-900 p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => { setShowCotizar(false); setSelectedIndex(null) }}
                className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>

              <h3 className="text-lg font-semibold text-white font-serif">Solicitar Cotización</h3>

              {cotizar.enviado ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-4">
                    <Send size={20} className="text-white" />
                  </div>
                  <p className="text-white font-medium">Solicitud enviada</p>
                  <p className="mt-1 text-sm text-zinc-400 max-w-xs">
                    Le contactaremos pronto con su cotización.
                  </p>
                  <button
                    onClick={() => { setShowCotizar(false); setSelectedIndex(null) }}
                    className="mt-6 text-sm text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCotizarSubmit} className="mt-6 space-y-5">
                  {cotizar.error && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                      {cotizar.error}
                    </p>
                  )}
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-zinc-500 mb-1">Nombre *</label>
                    <input
                      type="text"
                      required
                      value={cotizar.nombre}
                      onChange={(e) => setCotizar((p) => ({ ...p, nombre: e.target.value }))}
                      className="w-full bg-transparent border-b border-zinc-700 px-0 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-white focus:outline-none transition-colors"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-zinc-500 mb-1">Correo *</label>
                    <input
                      type="email"
                      required
                      value={cotizar.email}
                      onChange={(e) => setCotizar((p) => ({ ...p, email: e.target.value }))}
                      className="w-full bg-transparent border-b border-zinc-700 px-0 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-white focus:outline-none transition-colors"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-zinc-500 mb-1">Cortes *</label>
                    <div className="flex flex-wrap gap-1.5 min-h-[28px] mb-2">
                      {cotizar.cortes.map((c, i) => (
                        <span key={i} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white">
                          {c}
                          <button
                            type="button"
                            onClick={() => setCotizar((p) => ({ ...p, cortes: p.cortes.filter((_, j) => j !== i) }))}
                            className="text-zinc-400 hover:text-white transition-colors"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="flex gap-1">
                        <input
                          type="text"
                          value={corteInput}
                          onChange={(e) => { setCorteInput(e.target.value); setShowCorteSuggestions(true) }}
                          onFocus={() => setShowCorteSuggestions(true)}
                          className="flex-1 bg-transparent border-b border-zinc-700 px-0 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-white focus:outline-none transition-colors"
                          placeholder="Buscar y agregar corte..."
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const match = allCortes.find((c) => c.toLowerCase() === corteInput.toLowerCase().trim())
                            if (match && !cotizar.cortes.includes(match)) {
                              setCotizar((p) => ({ ...p, cortes: [...p.cortes, match] }))
                              setCorteInput("")
                            }
                          }}
                          disabled={!corteInput.trim()}
                          className="inline-flex shrink-0 items-center justify-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-all disabled:opacity-30"
                        >
                          + Agregar
                        </button>
                      </div>
                      {showCorteSuggestions && corteInput.trim() && (
                        <div className="absolute z-10 w-full mt-1 max-h-48 overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900 py-1 shadow-xl">
                          {(() => {
                            const suggestions = allCortes.filter((c) => {
                              const matchesName = c.toLowerCase().includes(corteInput.toLowerCase())
                              const matchesRedirect = Object.keys(redirectMap).some((k) => k.toLowerCase().includes(corteInput.toLowerCase()) && redirectMap[k] === c)
                              return (matchesName || matchesRedirect) && !cotizar.cortes.includes(c)
                            })
                            return suggestions.slice(0, 10).map((c) => (
                              <button
                                key={c}
                                type="button"
                                onClick={() => {
                                  setCotizar((p) => ({ ...p, cortes: [...p.cortes, c] }))
                                  setCorteInput("")
                                  setShowCorteSuggestions(false)
                                }}
                                className="w-full px-3 py-2 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                              >
                                {c}
                              </button>
                            ))
                          })()}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-zinc-500 mb-1">Mensaje</label>
                    <textarea
                      rows={3}
                      value={cotizar.mensaje}
                      onChange={(e) => setCotizar((p) => ({ ...p, mensaje: e.target.value }))}
                      className="w-full bg-transparent border-b border-zinc-700 px-0 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-white focus:outline-none transition-colors resize-none"
                      placeholder="Detalles adicionales..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={cotizar.enviando}
                    className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-sm font-medium text-white hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    {cotizar.enviando ? "Enviando..." : "Enviar Solicitud"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
