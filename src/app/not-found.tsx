import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6">
      <span className="inline-block rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-300">
        Error 404
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-center text-base text-zinc-500">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/25"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
