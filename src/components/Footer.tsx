"use client"

import { useState } from "react"
import { ArrowUp } from "lucide-react"
import { empresas, contactoInfo } from "@/data/empresas"
import LegalModal from "./LegalModal"

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false)
  const [legalType, setLegalType] = useState<"aviso" | "privacidad">("aviso")

  const openLegal = (type: "aviso" | "privacidad") => {
    setLegalType(type)
    setLegalOpen(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="bg-zinc-950 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <img
                src="/logo-full.webp?v=3"
                alt="Grupo Empresarial ET"
                className="h-16 w-auto brightness-110"
              />
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
                Grupo empresarial dominicano integrado por compañías líderes en
                la industria cárnica y ganadera, comprometido con la calidad,
                innovación y el desarrollo del sector agropecuario nacional.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent)]/60" />
                Empresas
              </h4>
              <ul className="space-y-3">
                {empresas.map((emp) => (
                  <li key={emp.id}>
                    <span className="text-sm text-zinc-500">{emp.nombre}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent)]/60" />
                Secciones
              </h4>
              <ul className="space-y-3">
                <li><a href="/#hero" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Inicio</a></li>
                <li><a href="/#cadena-valor" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Cadena de Valor</a></li>
                <li><a href="/#liderazgo" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Liderazgo</a></li>
                <li><a href="/#catalogo" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Catálogo</a></li>
                <li><a href="/cortes" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Cortes</a></li>
                <li><a href="/#calidad" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Calidad</a></li>
                <li><a href="/#contacto" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent)]/60" />
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm text-zinc-500">{contactoInfo.direccion}</span>
                </li>
                <li>
                  <a href={`tel:${contactoInfo.telefono}`} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                    {contactoInfo.telefono}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactoInfo.email}`} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                    {contactoInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Grupo Empresarial ET. Todos los
              derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-xs text-zinc-600">
              <button onClick={() => openLegal("aviso")} className="hover:text-zinc-400 transition-colors">
                Aviso Legal
              </button>
              <button onClick={() => openLegal("privacidad")} className="hover:text-zinc-400 transition-colors">
                Privacidad
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-zinc-500 hover:text-[var(--accent)] transition-colors"
              >
                <ArrowUp size={14} />
                Volver arriba
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        open={legalOpen}
        onClose={() => setLegalOpen(false)}
        tipo={legalType}
      />
    </>
  )
}
