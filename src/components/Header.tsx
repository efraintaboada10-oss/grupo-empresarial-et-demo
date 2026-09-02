"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLang } from "@/i18n/LanguageProvider"

const navLinks = [
  { key: "inicio", href: "/#hero" },
  { key: "empresas", href: "/#empresas" },
  { key: "porque", href: "/#por-que" },
  { key: "cadena", href: "/#cadena-valor" },
  { key: "liderazgo", href: "/#liderazgo" },
  { key: "catalogo", href: "/#catalogo" },
  { key: "cortes", href: "/cortes" },
  { key: "calidad", href: "/#calidad" },
  { key: "siguenos", href: "/#instagram" },
  { key: "contacto", href: "/#contacto" },
]

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 flex-1 justify-end">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-zinc-300 hover:text-white transition-colors duration-200 font-serif whitespace-nowrap"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <a
            href="https://www.instagram.com/taboadasolucionesganaderas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200 flex-shrink-0"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-1 inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium text-zinc-200 hover:bg-white/5 transition-colors flex-shrink-0"
            aria-label="Cambiar idioma"
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
            aria-label="Cambiar idioma"
          >
            <span lang="es">ES</span>
            <span className="text-zinc-500">/</span>
            <span lang="en">EN</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white font-serif"
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
