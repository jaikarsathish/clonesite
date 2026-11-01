import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Shell } from '@/components/ulah'

export const Route = createFileRoute('/portafolio')({
  component: Portafolio,
})

const ITEMS = [
  { t: 'Autoworks Motorsports España', c: 'Diseño web' },
  { t: 'Retail Real State Services', c: 'Diseño web' },
  { t: 'Romeo Monedero', c: 'Diseño web' },
  { t: 'The vetia', c: 'Diseño web' },
  { t: 'Artes Creativas', c: 'Diseño web' },
  { t: 'Porsche club España', c: 'Diseño web' },
  { t: 'Apps Web', c: 'Diseño web' },
  { t: 'BMW Fotografía', c: 'Marketing' },
  { t: 'Vídeos AMG', c: 'Marketing' },
]

function Portafolio() {
  const [tab, setTab] = useState('Todo')
  const shown = ITEMS.filter((i) => tab === 'Todo' || i.c === tab)
  return (
    <Shell lang="es">
      <section className="ulah-container py-12 md:py-16">
        <h1 className="text-3xl font-extrabold md:text-5xl">Portafolio de proyectos</h1>
        <h2 className="mt-2 text-xl font-semibold text-neutral-600">Conoce nuestro trabajo</h2>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar proyectos">
          {['Todo', 'Diseño web', 'Marketing'].map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${tab === t ? 'bg-neutral-950 text-white' : 'border border-neutral-300 bg-white'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => (
            <article key={i.t} className="overflow-hidden rounded-2xl border border-neutral-200">
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-600 p-6 text-center text-lg font-extrabold text-white">
                {i.t}
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="font-bold">{i.t}</h3>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold">{i.c}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-500">Nota de fidelidad: los títulos son los originales; las imágenes de cada proyecto no se pudieron extraer y se muestran como tarjetas de título. <Link to="/cotizar-proyecto" className="underline">Cotizar proyecto</Link></p>
      </section>
    </Shell>
  )
}
