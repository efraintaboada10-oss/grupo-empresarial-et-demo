"use client"

import { useState } from "react"
import { ArrowUp } from "lucide-react"
import { empresas, contactoInfo } from "@/data/empresas"
import LegalModal from "./LegalModal"
import { useLang } from "@/i18n/LanguageProvider"

export default function Footer() {
  const { t, lang } = useLang()
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
                src="/logo-full.webp"
                alt="Grupo Empresarial ET"
                className="h-16 w-auto brightness-110"
              />
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
                {t("footer.descripcion")}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent)]/60" />
                {t("footer.empresas")}
              </h4>
              <ul className="space-y-3">
                {empresas.map((emp) => (
                  <li key={emp.id}>
                    <button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent("openEmpresa", { detail: emp.id }))
                        document.getElementById("empresas")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 text-left"
                    >
                      {lang === "en" && emp.nombreEn ? emp.nombreEn : emp.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent)]/60" />
                {t("footer.secciones")}
              </h4>
              <ul className="space-y-3">
                <li><a href="/#hero" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.inicio")}</a></li>
                <li><a href="/#cadena-valor" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.cadena")}</a></li>
                <li><a href="/#liderazgo" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.liderazgo")}</a></li>
                <li><a href="/#catalogo" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.catalogo")}</a></li>
                <li><a href="/cortes" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.cortes")}</a></li>
                <li><a href="/#calidad" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.calidad")}</a></li>
                <li><a href="/#contacto" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{t("nav.contacto")}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent)]/60" />
                {t("footer.contacto")}
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
                <li>
                  <a href="https://www.instagram.com/taboadasolucionesganaderas/" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 inline-flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    @taboadasolucionesganaderas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Grupo Empresarial ET. {t("footer.derechos")}
            </p>
            <div className="flex items-center gap-6 text-xs text-zinc-600">
              <button onClick={() => openLegal("aviso")} className="hover:text-zinc-400 transition-colors">
                {t("footer.aviso")}
              </button>
              <button onClick={() => openLegal("privacidad")} className="hover:text-zinc-400 transition-colors">
                {t("footer.privacidad")}
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-zinc-500 hover:text-[var(--accent)] transition-colors"
              >
                <ArrowUp size={14} />
                {t("footer.volverArriba")}
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
