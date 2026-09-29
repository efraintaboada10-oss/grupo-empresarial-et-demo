"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MoreHorizontal } from "lucide-react"
import { useLang } from "@/i18n/LanguageProvider"

const navLinks = [
  { key: "inicio", href: "/#hero" },
  { key: "empresas", href: "/#empresas" },
  { key: "porque", href: "/#por-que" },
  { key: "catalogo", href: "/#catalogo" },
  { key: "cortes", href: "/cortes" },
  { key: "calidad", href: "/#calidad" },
  { key: "contacto", href: "/#contacto" },
]

const overflowLinks = [
  { key: "cadena", href: "/#cadena-valor" },
  { key: "liderazgo", href: "/#liderazgo" },
  { key: "siguenos", href: "/#instagram" },
]

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!moreOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClickOutside)
      document.removeEventListener("keydown", onKey)
    }
  }, [moreOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out bg-zinc-950/40 backdrop-blur-md`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 lg:px-6">
        <a href="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="/logo-full.webp"
            alt="Grupo Empresarial ET"
             className="h-11 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 flex-1 justify-end">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-zinc-300 hover:text-white transition-colors duration-200 font-serif whitespace-nowrap"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              aria-label={t("nav.menuMas")}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              <MoreHorizontal size={20} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/95 py-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl"
                >
                  {overflowLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-[15px] text-zinc-300 transition-colors hover:bg-white/5 hover:text-white font-serif"
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://www.instagram.com/taboadasolucionesganaderas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200 flex-shrink-0"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-1 inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1 text-[12px] font-medium text-zinc-200 hover:bg-white/5 transition-colors flex-shrink-0"
            aria-label={t("nav.cambiarIdioma")}
          >
            <span lang="es">ES</span>
            <span className="text-zinc-500">/</span>
            <span lang="en">EN</span>
            <span className="relative ml-1 inline-flex h-3.5 w-6 items-center rounded-full bg-zinc-700 transition-colors">
              <span
                className={`inline-block h-2.5 w-2.5 transform rounded-full bg-white transition-transform ${
                  lang === "en" ? "translate-x-2.5" : "translate-x-0.5"
                }`}
              />
            </span>
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-white/5 transition-colors"
            aria-label={t("nav.cambiarIdioma")}
          >
            <span lang="es">ES</span>
            <span className="text-zinc-500">/</span>
            <span lang="en">EN</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("nav.cerrarMenu") : t("nav.abrirMenu")}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-1">
              {[...navLinks, ...overflowLinks].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white font-serif"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
