"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function SectionWrapper({ children, className, id, dark }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionTitle({ label, title, dark }: { label: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-16 md:mb-20 text-center">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 font-serif">
        {label}
      </span>
      <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight font-serif", dark ? "text-white" : "text-zinc-900")}>
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
    </div>
  )
}
