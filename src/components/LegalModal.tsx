"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const legalContent = {
  aviso: {
    titulo: "Aviso Legal",
    contenido: `El presente Aviso Legal regula el uso del sitio web corporativo de Grupo Empresarial ET (en adelante, "EL GRUPO"), integrado por CAMI Dominicana SRL, Taboada Soluciones Ganaderas SRL, Taboada Productos Cárnicos SRL, Fríodom y Transporte El Palmar.

TITULARIDAD
El titular de este sitio web es Grupo Empresarial ET, con dirección en Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este, República Dominicana.

PROPIEDAD INTELECTUAL
Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos y diseño, son propiedad de EL GRUPO o cuentan con la debida autorización para su uso. Queda prohibida la reproducción total o parcial sin autorización expresa.

EXENCIÓN DE RESPONSABILIDAD
EL GRUPO no se hace responsable de los daños o perjuicios derivados del uso de la información contenida en este sitio web. La información se proporciona con fines informativos y puede estar sujeta a cambios sin previo aviso.

ENLACES EXTERNOS
Este sitio puede contener enlaces a sitios web de terceros. EL GRUPO no asume responsabilidad por el contenido, políticas o prácticas de privacidad de dichos sitios.

LEGISLACIÓN APLICABLE
Las presentes condiciones se rigen por la legislación de la República Dominicana.`,
  },
  privacidad: {
    titulo: "Política de Privacidad",
    contenido: `En Grupo Empresarial ET (en adelante, "EL GRUPO") nos comprometemos a proteger la privacidad de los usuarios de nuestro sitio web corporativo.

DATOS RECOPILADOS
A través de los formularios de contacto, recopilamos los siguientes datos personales: nombre, dirección de correo electrónico, empresa de interés y cualquier información adicional que el usuario proporcione voluntariamente en su mensaje.

FINALIDAD DEL TRATAMIENTO
Los datos recopilados se utilizan exclusivamente para atender y dar seguimiento a las solicitudes de información, consultas o comunicaciones iniciadas por el usuario a través de nuestro sitio web.

BASE LEGAL
El tratamiento de sus datos se realiza con su consentimiento expreso, manifestado al enviar el formulario de contacto correspondiente.

DERECHOS DEL USUARIO
El usuario tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de pedidos@camidominicana.com.

PLAZO DE CONSERVACIÓN
Los datos personales se conservarán durante el tiempo necesario para atender la solicitud del usuario y, posteriormente, durante los plazos legales aplicables.

MEDIDAS DE SEGURIDAD
EL GRUPO adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.

MODIFICACIONES
EL GRUPO se reserva el derecho de modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales.`,
  },
}

type TipoDocumento = keyof typeof legalContent

export default function LegalModal({ open, tipo, onClose }: { open: boolean; tipo: TipoDocumento | null; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && tipo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4 pr-8">{legalContent[tipo].titulo}</h2>
            <div className="text-sm text-zinc-600 leading-relaxed whitespace-pre-line space-y-3">
              {legalContent[tipo].contenido}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
