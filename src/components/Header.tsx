"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "/#hero" },
  { label: "Empresas", href: "/#empresas" },
  { label: "Cadena de Valor", href: "/#cadena-valor" },
  { label: "Liderazgo", href: "/#liderazgo" },
  { label: "Catálogo", href: "/#catalogo" },
  { label: "Cortes", href: "/cortes" },
  { label: "Calidad", href: "/#calidad" },
  { label: "Contacto", href: "/#contacto" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/logo-full.webp?v=3"
            alt="Grupo Empresarial ET"
             className="h-14 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-serif"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contacto"
            className="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-all duration-200 font-serif"
          >
            Contactar
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white font-serif"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-all duration-200 font-serif"
              >
                Contactar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
