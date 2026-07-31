import type { Variants } from "framer-motion"

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const curtain: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  show: (i: number = 0) => ({
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, delay: i * 0.08, ease: EASE },
  }),
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

export const wordsContainer: Variants = {
  hidden: {},
  show: (i: number = 0) => ({
    transition: { staggerChildren: 0.07, delayChildren: i },
  }),
}

export const wordItem: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: EASE } },
}
