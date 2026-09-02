"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send, Sparkles, Check } from "lucide-react"
import { fadeUp } from "@/lib/animations"
import { contactoInfo } from "@/data/empresas"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"
import { useLang } from "@/i18n/LanguageProvider"

const inputBase = [
  "w-full",
  "bg-transparent",
  "border-b border-zinc-700",
  "px-0 py-3",
  "text-sm text-white",
  "placeholder:text-zinc-500",
  "transition-all duration-300",
  "focus:border-white focus:outline-none focus:ring-0",
  "autofill:bg-transparent",
  "[-webkit-autofill]:bg-transparent",
  "[-webkit-autofill]:text-white",
  "[-webkit-autofill]:shadow-[0_0_0_1000px_transparent_inset]",
  "[-webkit-text-fill-color]:white",
].join(" ")

const labelBase = [
  "block text-xs font-medium tracking-wider uppercase",
  "text-zinc-500",
  "mb-1",
].join(" ")

export default function Contacto() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    setError("")
    try {
      const res = await fetch("https://formspree.io/f/xwvddlja", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) setSubmitted(true)
      else setError("No se pudo enviar el mensaje. Inténtelo nuevamente o escríbanos a pedidos@camidominicana.com.")
    } catch {
      setError("Error de conexión. Verifique su internet e inténtelo nuevamente.")
    }
  }

  return (
    <SectionWrapper id="contacto" dark>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent" />

      <div className="relative z-10">
        <SectionTitle label={t("contacto.label")} title={t("contacto.title")} dark />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10">
              <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Sparkles size={12} className="text-white" />
                </span>
                {t("contacto.enviarMensaje")}
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-6">
                    <Check size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{t("contacto.mensajeRecibido")}</h4>
                  <p className="mt-2 text-sm text-zinc-400 max-w-xs">
                    {t("contacto.gracias")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                      {error}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className={labelBase}>{t("contacto.nombre")}</label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        onFocus={() => setFocused("nombre")}
                        onBlur={() => setFocused(null)}
                        className={inputBase}
                        placeholder={t("contacto.placeholderNombre")}
                      />
                      <div className={`h-px bg-white transition-transform duration-300 ${focused === "nombre" ? "scale-x-100" : "scale-x-0"}`} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelBase}>{t("contacto.correo")}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className={inputBase}
                        placeholder={t("contacto.placeholderCorreo")}
                      />
                      <div className={`h-px bg-white transition-transform duration-300 ${focused === "email" ? "scale-x-100" : "scale-x-0"}`} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className={labelBase}>{t("contacto.mensaje")}</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      onFocus={() => setFocused("mensaje")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} resize-none`}
                      placeholder={t("contacto.placeholderMensaje")}
                    />
                    <div className={`h-px bg-white transition-transform duration-300 ${focused === "mensaje" ? "scale-x-100" : "scale-x-0"}`} />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-zinc-900 overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Send size={14} />
                      {t("contacto.enviar")}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400">
                {t("contacto.infoContacto")}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-zinc-400 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)] transition-all duration-300">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contacto.direccion")}</p>
                    <p className="mt-1 text-sm text-zinc-300 leading-relaxed">{contactoInfo.direccion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-zinc-400 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)] transition-all duration-300">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contacto.telefono")}</p>
                    <p className="mt-1 text-sm text-zinc-300">{contactoInfo.telefono}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-zinc-400 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)] transition-all duration-300">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contacto.correoLabel")}</p>
                    <p className="mt-1 text-sm text-zinc-300">{contactoInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.905120161735!2d-69.8449914!3d18.5359467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf860e9d445669%3A0x59b39357db6cb6c3!2sCami%20Dominicana%20S.R.L.!5e0!3m2!1ses!2sdo!4v1"
                  style={{ width: "100%", height: "100%", border: 0, minHeight: "200px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Grupo Empresarial ET"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
