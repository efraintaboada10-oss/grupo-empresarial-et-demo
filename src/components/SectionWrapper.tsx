"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp } from "@/lib/animations"
import SplitText from "./SplitText"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function SectionWrapper({ children, className, id, dark }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900",
        className,
      )}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
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
        <SplitText text={title} />
      </h2>
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
    </div>
  )
}
