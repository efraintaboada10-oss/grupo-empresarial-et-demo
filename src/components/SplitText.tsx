"use client"

import { motion } from "framer-motion"
import { wordsContainer, wordItem } from "@/lib/animations"

export default function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(" ")
  return (
    <motion.span
      className={className}
      variants={wordsContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      aria-label={text}
      role="text"
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.09em] -mb-[0.09em]"
          aria-hidden
        >
          <motion.span variants={wordItem} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
