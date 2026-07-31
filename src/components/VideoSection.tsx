"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Download, FileVideo } from "lucide-react"
import { curtain, fadeUp } from "@/lib/animations"
import SectionWrapper, { SectionTitle } from "./SectionWrapper"

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <SectionWrapper id="multimedia" dark>
      <SectionTitle
        label="Multimedia"
        title="Video Corporativo"
        dark
      />

      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={curtain}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-black shadow-2xl"
        >
          {error ? (
            <div className="aspect-video flex flex-col items-center justify-center gap-4 bg-zinc-900 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                <FileVideo size={28} className="text-zinc-400" />
              </div>
              <p className="text-sm text-zinc-400">
                El video no pudo cargarse.
              </p>
              <a
                href="/assets/Video corporativo.mp4"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
              >
                <Download size={14} />
                Descargar video
              </a>
            </div>
          ) : (
            <div className="relative">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                poster="/images/video-poster.webp"
                controls={playing}
                onError={() => setError(true)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                playsInline
                preload="metadata"
              >
                <source src="/assets/Video corporativo.mp4" type="video/mp4" />
                <source src="/assets/Video para presentacion.mov" type="video/quicktime" />
              </video>

              {!playing && (
                <img
                  src="/images/video-poster.webp"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              )}

              {!playing && (
                <div
                  onClick={handlePlay}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 transition-colors hover:bg-black/20"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-105">
                    <Play size={28} className="ml-1 text-zinc-900" />
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={1}
          className="mt-6 text-center text-sm text-zinc-500"
        >
          Video de presentación corporativa - Grupo Empresarial ET
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
