"use client"

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { messages, Lang } from "./messages"

type LangContext = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (path: string) => string
}

const Ctx = createContext<LangContext | null>(null)

function resolve(obj: unknown, path: string): string {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj) as string
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null
    if (saved === "en" || saved === "es") setLangState(saved)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("lang", l)
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "es" ? "en" : "es"
      if (typeof window !== "undefined") localStorage.setItem("lang", next)
      return next
    })
  }, [])

  const t = useCallback((path: string) => {
    const value = resolve(messages[lang], path)
    return typeof value === "string" ? value : path
  }, [lang])

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}