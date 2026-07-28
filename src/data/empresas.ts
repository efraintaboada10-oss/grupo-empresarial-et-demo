export type Empresa = {
  id: string
  nombre: string
  slug: string
  descripcion: string
  descripcionLarga: string
  sector: string
  direccion?: string
  telefono?: string
  email?: string
  color: string
  gradient: string
  palette: {
    primary: string
    secondary?: string
    accent: string
    bg: string
    border: string
    text: string
    textMuted: string
  }
  cortesDestacados?: string[]
  videoUrl?: string
  fotosDestacadas?: { src: string; label: string }[]
}

export const empresas: Empresa[] = [
  {
    id: "cami",
    nombre: "Cami Dominicana",
    slug: "cami-dominicana",
    descripcion: "Planta procesadora de productos cárnicos con estándares internacionales. Procesamos carne bovina, porcina y avícola para el mercado local y de exportación.",
    descripcionLarga:
      "Planta procesadora especializada en la transformación y comercialización de productos y subproductos cárnicos. Con certificaciones sanitarias internacionales, Cami Dominicana procesa carne bovina, porcina y avícola bajo los más altos estándares de calidad e inocuidad alimentaria, sirviendo al mercado dominicano y de exportación.",
    sector: "Procesamiento",
    direccion: "Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-zinc-800 to-zinc-900",
    gradient: "from-zinc-900/10 to-black/10",
    palette: {
      primary: "#dc2626",
      accent: "#dc2626",
      bg: "from-red-50/40 to-red-50/0",
      border: "border-red-200",
      text: "text-red-700",
      textMuted: "text-red-600/70",
    },
    cortesDestacados: ["Filete", "Churrasco", "Costilla (Short Ribs)", "Picaña", "Molida de 1ra", "Rabo"],
  },
  {
    id: "taboada-ganadera",
    nombre: "Taboada Soluciones Ganaderas",
    slug: "taboada-soluciones-ganaderas",
    descripcion: "Producción ganadera, genética y desarrollo pecuario. Implementamos biotecnología reproductiva para mejorar la productividad del hato nacional.",
    descripcionLarga:
      "Empresa dedicada a la producción ganadera, mejoramiento genético y desarrollo pecuario. Implementamos biotecnologías reproductivas de vanguardia y programas de cría selectiva para elevar la productividad y calidad del hato nacional, contribuyendo al fortalecimiento del sector ganadero dominicano.",
    sector: "Ganadería",
    direccion: "Finca Efrain Taboada, Carr. Villa Mella-Yamasa",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-zinc-700 to-zinc-900",
    gradient: "from-zinc-800/10 to-black/10",
    videoUrl: "/videos/taboada-ganadera.mp4",
    fotosDestacadas: [
      { src: "/images/ejemplares/MR TUKO 665-3.png", label: "Mr. Tuko 665-3" },
      { src: "/images/ejemplares/MISS TUKO TITA 530-5.png", label: "Miss Tuko Tita 530-5" },
      { src: "/images/ejemplares/COYOTE 6561.png", label: "Coyote 6561" },
      { src: "/images/ejemplares/MISS CAMAGUEY 253-4.png", label: "Miss Camagüey 253-4" },
    ],
    palette: {
      primary: "#5d3a1f",
      secondary: "#4a4a4a",
      accent: "#5d3a1f",
      bg: "from-amber-50/40 to-amber-50/0",
      border: "border-amber-200",
      text: "text-amber-800",
      textMuted: "text-amber-700/70",
    },
  },
  {
    id: "taboada-carnicos",
    nombre: "Taboada Productos Cárnicos",
    slug: "taboada-productos-carnicos",
    descripcion: "Comercialización nacional e internacional de carnes con operaciones en Centroamérica. Importamos y exportamos proteína animal bajo estrictos controles sanitarios.",
    descripcionLarga:
      "Empresa líder en la comercialización y distribución de productos cárnicos en el mercado dominicano y de Centroamérica. Con operaciones de importación y exportación que abarcan la región centroamericana, garantizamos el suministro de proteína animal de alta calidad, manteniendo estrictos controles de trazabilidad y cadena de frío.",
    sector: "Comercialización",
    direccion: "Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-zinc-600 to-zinc-800",
    gradient: "from-zinc-700/10 to-black/10",
    fotosDestacadas: [
      { src: "/images/cortes/imported/Filete de res importado.jpeg", label: "Filete de res Importado" },
      { src: "/images/cortes/imported/FM Premium (Importado).jpeg", label: "FM Premium (Importado)" },
      { src: "/images/cortes/imported/Rabo de res importada.jpeg", label: "Rabo de res Importada" },
      { src: "/images/cortes/imported/Chuleta de cerdo importada.jpeg", label: "Chuleta de cerdo Importada" },
      { src: "/images/cortes/imported/Pierna de cerdo importada.jpeg", label: "Pierna de cerdo Importada" },
      { src: "/images/cortes/imported/Mondong Panza Importado (Nicaragua).jpeg", label: "Mondongo Panza (Nicaragua)" },
    ],
    palette: {
      primary: "#dc2626",
      secondary: "#1e3a8a",
      accent: "#1e3a8a",
      bg: "from-blue-50/40 to-red-50/0",
      border: "border-blue-200",
      text: "text-blue-800",
      textMuted: "text-blue-700/70",
    },
  },
  {
    id: "friodom",
    nombre: "Fríodom",
    slug: "friodom",
    descripcion: "Soluciones frigoríficas y cadena de frío para la conservación de productos perecederos. Garantizamos la temperatura óptima en cada etapa del almacenamiento.",
    descripcionLarga:
      "Empresa especializada en soluciones frigoríficas y gestión integral de la cadena de frío. Ofrecemos almacenamiento en frío, conservación y congelación de productos perecederos, garantizando la temperatura óptima en cada etapa. Contamos con plataforma de carga y descarga para contenedores de exportación, asegurando que los productos mantengan la cadena de frío desde nuestras cámaras hasta el puerto de destino. Nuestra infraestructura en SMART MG WAREHOUSE está equipada para procesos de consolidación y despacho internacional.",
    sector: "Refrigeración",
    direccion: "SMART MG WAREHOUSE, Autop. Juan Pablo Duarte KM 18, La Guáyiga 10701",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-zinc-500 to-zinc-700",
    gradient: "from-zinc-600/10 to-black/10",
    fotosDestacadas: [
      { src: "/images/friodom/almacen-frio.svg", label: "Almacén en frío" },
      { src: "/images/friodom/camara-frigorifica.svg", label: "Cámaras frigoríficas" },
      { src: "/images/friodom/exportacion.svg", label: "Carga de exportación" },
    ],
    palette: {
      primary: "#0e7490",
      accent: "#0e7490",
      bg: "from-cyan-50/40 to-cyan-50/0",
      border: "border-cyan-200",
      text: "text-cyan-800",
      textMuted: "text-cyan-700/70",
    },
  },
  {
    id: "transporte-palmar",
    nombre: "Transporte El Palmar",
    slug: "transporte-el-palmar",
    descripcion: "Transporte especializado y distribución logística con flota refrigerada propia. Cubrimos rutas nacionales garantizando la cadena de frío hasta el destino final.",
    descripcionLarga:
      "Empresa de transporte y distribución logística especializada en el manejo de productos cárnicos y perecederos. Contamos con una flota moderna de vehículos refrigerados que garantizan la cadena de frío desde nuestro centro de distribución hasta el cliente final, con cobertura nacional y capacidad de distribución metropolitana.",
    sector: "Logística",
    direccion: "Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-neutral-600 to-neutral-800",
    gradient: "from-neutral-600/10 to-black/10",
    fotosDestacadas: [
      { src: "/images/transporte/IMG_7059.jpeg", label: "Camión de carga" },
      { src: "/images/transporte/IMG_7069.jpeg", label: "Flota Cami Dominicana" },
      { src: "/images/transporte/IMG_7070.jpeg", label: "Unidad refrigerada" },
    ],
    palette: {
      primary: "#4d7c0f",
      accent: "#4d7c0f",
      bg: "from-lime-50/40 to-lime-50/0",
      border: "border-lime-200",
      text: "text-lime-800",
      textMuted: "text-lime-700/70",
    },
  },
]

export const cadenaValor = [
  { paso: 1, titulo: "Ganadería", descripcion: "Producción ganadera con genética de alto valor y prácticas sostenibles.", icono: "tractor" },
  { paso: 2, titulo: "Procesamiento", descripcion: "Plantas procesadoras con estándares internacionales de calidad e inocuidad.", icono: "factory" },
  { paso: 3, titulo: "Refrigeración", descripcion: "Soluciones frigoríficas para preservación y cadena de frío.", icono: "snowflake" },
  { paso: 4, titulo: "Logística", descripcion: "Transporte especializado con flota refrigerada y distribución eficiente.", icono: "truck" },
  { paso: 5, titulo: "Comercialización", descripcion: "Comercialización nacional e internacional con alcance global.", icono: "globe" },
  { paso: 6, titulo: "Cliente Final", descripcion: "Productos de calidad que llegan frescos y seguros a su mesa.", icono: "shoppingCart" },
]

export const estadisticas = [
  { valor: 5, sufijo: "", label: "Empresas del Grupo", descripcion: "Empresas integradas verticalmente" },
  { valor: 10, sufijo: "+", label: "Años de Experiencia", descripcion: "Trayectoria y crecimiento sostenido", },
  { valor: 250, sufijo: "+", label: "Colaboradores", descripcion: "Talento humano comprometido", },
]

export const valoresCalidad = [
  {
    titulo: "Calidad Superior",
    descripcion: "Certificaciones y estándares internacionales en cada etapa de producción.",
    icono: "badgeCheck",
  },
  {
    titulo: "Inocuidad Alimentaria",
    descripcion: "Sistema HACCP y rigurosos controles sanitarios en toda la cadena productiva.",
    icono: "shieldCheck",
  },
  {
    titulo: "Seguridad Alimentaria",
    descripcion: "Compromiso con el suministro seguro y confiable de proteína animal para la población.",
    icono: "leaf",
  },
  {
    titulo: "Trazabilidad Total",
    descripcion: "Seguimiento completo desde el origen hasta el consumidor final.",
    icono: "searchCheck",
  },
  {
    titulo: "Exportación con Garantía",
    descripcion: "Cumplimiento de normativas internacionales para mercados exigentes.",
    icono: "globe2",
  },
  {
    titulo: "Mejora Continua",
    descripcion: "Innovación tecnológica y procesos de optimización permanente.",
    icono: "trendingUp",
  },
]

export const contactoInfo = {
  direccion: "Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este, República Dominicana",
  email: "pedidos@camidominicana.com",
  telefono: "+1 (809) 334-1444",
  coordenadas: { lat: 18.5359467, lng: -69.8424165 },
}


