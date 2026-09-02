export type Empresa = {
  id: string
  nombre: string
  nombreEn?: string
  slug: string
  descripcion: string
  descripcionEn?: string
  descripcionLarga: string
  descripcionLargaEn?: string
  sector: string
  sectorEn?: string
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
  fotosDestacadas?: { src: string; label: string; labelEn?: string }[]
  servicios?: string[]
  serviciosEn?: string[]
}

export const empresas: Empresa[] = [
  {
    id: "cami",
    nombre: "Cami Dominicana",
    nombreEn: "Cami Dominicana",
    slug: "cami-dominicana",
    descripcion: "Planta procesadora de productos cárnicos con estándares internacionales. Procesamos carne bovina, porcina y avícola para el mercado local y de exportación.",
    descripcionEn:
      "Meat products processing plant with international standards. We process beef, pork and poultry for the local and export market.",
    descripcionLarga:
      "Planta procesadora especializada en la transformación y comercialización de productos y subproductos cárnicos. Con certificaciones sanitarias internacionales, Cami Dominicana procesa carne bovina, porcina y avícola bajo los más altos estándares de calidad e inocuidad alimentaria, sirviendo al mercado dominicano y de exportación.",
    descripcionLargaEn:
      "Processing plant specialized in the transformation and commercialization of meat products and by-products. With international sanitary certifications, Cami Dominicana processes beef, pork and poultry under the highest food quality and safety standards, serving the Dominican and export markets.",
    sector: "Procesamiento",
    sectorEn: "Processing",
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
    nombreEn: "Taboada Livestock Solutions",
    slug: "taboada-soluciones-ganaderas",
    descripcion: "Producción ganadera, genética y desarrollo pecuario. Implementamos biotecnología reproductiva para mejorar la productividad del hato nacional.",
    descripcionEn:
      "Livestock production, genetics and animal development. We implement reproductive biotechnology to improve the productivity of the national herd.",
    descripcionLarga:
      "Empresa dedicada a la producción ganadera, mejoramiento genético y desarrollo pecuario. Implementamos biotecnologías reproductivas de vanguardia y programas de cría selectiva para elevar la productividad y calidad del hato nacional, contribuyendo al fortalecimiento del sector ganadero dominicano.",
    descripcionLargaEn:
      "Company dedicated to livestock production, genetic improvement and animal development. We implement cutting-edge reproductive biotechnologies and selective breeding programs to raise the productivity and quality of the national herd, contributing to the strengthening of the Dominican livestock sector.",
    sector: "Ganadería",
    sectorEn: "Livestock Farming",
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
    nombreEn: "Taboada Meat Products",
    slug: "taboada-productos-carnicos",
    descripcion: "Comercialización nacional e internacional de carnes con operaciones en Centroamérica. Importamos y exportamos proteína animal bajo estrictos controles sanitarios.",
    descripcionEn:
      "National and international meat trading with operations in Central America. We import and export animal protein under strict sanitary controls.",
    descripcionLarga:
      "Empresa líder en la comercialización y distribución de productos cárnicos en el mercado dominicano y de Centroamérica. Con operaciones de importación y exportación que abarcan la región centroamericana, garantizamos el suministro de proteína animal de alta calidad, manteniendo estrictos controles de trazabilidad y cadena de frío.",
    descripcionLargaEn:
      "Leading company in the trading and distribution of meat products in the Dominican and Central American market. With import and export operations spanning the Central American region, we guarantee the supply of high-quality animal protein, maintaining strict traceability and cold chain controls.",
    sector: "Comercialización",
    sectorEn: "Trading",
    direccion: "Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-zinc-600 to-zinc-800",
    gradient: "from-zinc-700/10 to-black/10",
    fotosDestacadas: [
      { src: "/images/cortes/imported/Filete_de_res_importado_nogal_premium.webp", label: "Filete de res Importado", labelEn: "Imported Beef Tenderloin" },
      { src: "/images/cortes/imported/FM_Premium_Importado_nogal_premium.webp", label: "FM Premium (Importado)", labelEn: "Imported Premium Filet Mignon" },
      { src: "/images/cortes/imported/Rabo_de_res_importada_nogal_premium.webp", label: "Rabo de res Importada", labelEn: "Imported Beef Oxtail" },
      { src: "/images/cortes/imported/Chuleta_de_cerdo_importada_nogal_premium.webp", label: "Chuleta de cerdo Importada", labelEn: "Imported Pork Chop" },
      { src: "/images/cortes/imported/Pierna_de_cerdo_importada_nogal_premium.webp", label: "Pierna de cerdo Importada", labelEn: "Imported Pork Leg" },
      { src: "/images/cortes/imported/Higado_de_res_importado_nogal_premium.webp", label: "Hígado de res Importado", labelEn: "Imported Beef Liver" },
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
    nombre: "Soluciones Frigoríficas Fríodom",
    nombreEn: "Fríodom Cold Storage Solutions",
    slug: "friodom",
    descripcion: "Soluciones frigoríficas y cadena de frío para la conservación de productos perecederos. Garantizamos la temperatura óptima en cada etapa del almacenamiento.",
    descripcionEn:
      "Cold storage and cold chain solutions for the preservation of perishable products. We guarantee the optimal temperature at every stage of storage.",
    descripcionLarga:
      "Empresa especializada en soluciones frigoríficas y gestión integral de la cadena de frío. Ofrecemos almacenamiento en frío, conservación y congelación de productos perecederos, garantizando la temperatura óptima en cada etapa. Contamos con plataforma de carga y descarga para contenedores de exportación, asegurando que los productos mantengan la cadena de frío desde nuestras cámaras hasta el puerto de destino. Nuestra infraestructura en SMART MG WAREHOUSE está equipada para procesos de consolidación y despacho internacional.",
    descripcionLargaEn:
      "Company specialized in cold storage solutions and comprehensive cold chain management. We offer cold storage, preservation and freezing of perishable products, guaranteeing the optimal temperature at every stage. We have a loading and unloading platform for export containers, ensuring products maintain the cold chain from our chambers to the destination port. Our SMART MG WAREHOUSE infrastructure is equipped for consolidation and international dispatch processes.",
    sector: "Refrigeración",
    sectorEn: "Cold Storage",
    direccion: "SMART MG WAREHOUSE, Autop. Juan Pablo Duarte KM 18, La Guáyiga 10701",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-zinc-500 to-zinc-700",
    gradient: "from-zinc-600/10 to-black/10",
    fotosDestacadas: [
      { src: "/images/friodom/IMG_7322.jpeg", label: "Almacén Fríodom", labelEn: "Fríodom Warehouse" },
      { src: "/images/friodom/IMG_7323.jpeg", label: "Cámaras frigoríficas", labelEn: "Refrigeration chambers" },
      { src: "/images/friodom/IMG_7324.jpeg", label: "Infraestructura SMART MG WAREHOUSE", labelEn: "SMART MG WAREHOUSE infrastructure" },
      { src: "/images/friodom/Almacen Friodom.webp", label: "Instalaciones Fríodom", labelEn: "Fríodom facilities" },
    ],
    servicios: [
      "Almacenamiento",
      "Conservación",
      "Carga de contenedores para exportación",
      "Consolidación internacional",
      "Cadena de frío",
      "Plataforma SMART MG WAREHOUSE",
    ],
    serviciosEn: [
      "Storage",
      "Preservation",
      "Container loading for export",
      "International consolidation",
      "Cold chain",
      "SMART MG WAREHOUSE platform",
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
    nombreEn: "El Palmar Transport",
    slug: "transporte-el-palmar",
    descripcion: "Transporte de ganado y distribución logística con flota propia. Cubrimos rutas nacionales con unidades especializadas para el transporte de ganado en pie.",
    descripcionEn:
      "Livestock transport and logistics distribution with our own fleet. We cover national routes with specialized units for the transport of live livestock.",
    descripcionLarga:
      "Empresa dedicada al transporte de ganado en pie con flota propia. Contamos con unidades especializadas y modernas que garantizan el bienestar animal y la seguridad en cada trayecto, con cobertura nacional y experiencia en el manejo ganadero.",
    descripcionLargaEn:
      "Company dedicated to the transport of live livestock with its own fleet. We have specialized, modern units that guarantee animal welfare and safety on every trip, with national coverage and experience in livestock handling.",
    sector: "Transporte Ganadero",
    sectorEn: "Livestock Transport",
    direccion: "Calle Camino de la Barca, No. 96, Cancino Adentro, Santo Domingo Este",
    telefono: "809-334-1444",
    email: "etaboada@camidominicana.com",
    color: "from-neutral-600 to-neutral-800",
    gradient: "from-neutral-600/10 to-black/10",
    fotosDestacadas: [
      { src: "/images/transporte/IMG_7059.jpeg", label: "Camión de carga", labelEn: "Cargo truck" },
      { src: "/images/transporte/Unidad de carga.png", label: "Unidad de carga", labelEn: "Loading unit" },
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
  { paso: 1, stepKey: "ganaderia", titulo: "Ganadería", descripcion: "Producción ganadera con genética de alto valor y prácticas sostenibles.", icono: "tractor" },
  { paso: 2, stepKey: "procesamiento", titulo: "Procesamiento", descripcion: "Plantas procesadoras con estándares internacionales de calidad e inocuidad.", icono: "factory" },
  { paso: 3, stepKey: "refrigeracion", titulo: "Refrigeración", descripcion: "Soluciones frigoríficas para preservación y cadena de frío.", icono: "snowflake" },
  { paso: 4, stepKey: "logistica", titulo: "Logística", descripcion: "Transporte especializado con flota refrigerada y distribución eficiente.", icono: "truck" },
  { paso: 5, stepKey: "comercializacion", titulo: "Comercialización", descripcion: "Comercialización nacional e internacional con alcance global.", icono: "globe" },
  { paso: 6, stepKey: "cliente", titulo: "Cliente Final", descripcion: "Productos de calidad que llegan frescos y seguros a su mesa.", icono: "shoppingCart" },
]

export const estadisticas = [
  { valor: 5, sufijo: "", label: "Empresas del Grupo", descripcion: "Empresas integradas verticalmente" },
  { valor: 10, sufijo: "+", label: "Años de Experiencia", descripcion: "Trayectoria y crecimiento sostenido", },
]

export const valoresCalidad = [
  {
    key: "calidadSuperior",
    titulo: "Calidad Superior",
    descripcion: "Certificaciones y estándares internacionales en cada etapa de producción.",
    icono: "badgeCheck",
  },
  {
    key: "inocuidad",
    titulo: "Inocuidad Alimentaria",
    descripcion: "Sistema HACCP y rigurosos controles sanitarios en toda la cadena productiva.",
    icono: "shieldCheck",
  },
  {
    key: "seguridad",
    titulo: "Seguridad Alimentaria",
    descripcion: "Compromiso con el suministro seguro y confiable de proteína animal para la población.",
    icono: "leaf",
  },
  {
    key: "trazabilidad",
    titulo: "Trazabilidad Total",
    descripcion: "Seguimiento completo desde el origen hasta el consumidor final.",
    icono: "searchCheck",
  },
  {
    key: "exportacionGarantia",
    titulo: "Exportación con Garantía",
    descripcion: "Cumplimiento de normativas internacionales para mercados exigentes.",
    icono: "globe2",
  },
  {
    key: "mejora",
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


