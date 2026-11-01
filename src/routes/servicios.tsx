import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ContactFields, Gap, NonSendingNotice, Shell } from '@/components/ulah'

export const Route = createFileRoute('/servicios')({
  head: () => ({
    title: 'Servicios - Ulah',
    meta: [
      { name: 'description', content: 'Nuestros servicios: producción audiovisual, marketing digital, diseño web UX/UI, SEO e investigación.' },
      { property: 'og:title', content: 'Servicios - Ulah' },
      { property: 'og:url', content: 'https://ulah.es/servicios/' },
    ],
    links: [{ rel: 'canonical', href: 'https://ulah.es/servicios/' }],
  }),
  component: Servicios,
})

const AV = [
  { t: 'Eventos Deportivos', d: 'Cobertura audiovisual de competiciones y eventos deportivos.' },
  { t: 'Contenido para Redes Sociales', d: 'Videos verticales optimizados para plataformas como Instagram, TikTok y YouTube Shorts.' },
  { t: 'Corporativo y Publicitario', d: 'Videos que impulsan tu marca, mejoran tu reputación y aumentan tus ventas.' },
  { t: 'Documentales y Proyectos Especiales', d: 'Historias que necesitan ser contadas con calidad cinematográfica.' },
  { t: 'Cobertura de Eventos en Vivo', d: 'Producción y edición en tiempo récord para entregas rápidas.' },
]

function Servicios() {
  const [open, setOpen] = useState<number | null>(1)
  const [sent, setSent] = useState(false)
  return (
    <Shell lang="es">
      <section className="ulah-container py-12 md:py-16">
        <h1 className="text-3xl font-extrabold md:text-5xl">Nuestros servicios</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">Servicios destacados: producción audiovisual, marketing digital y diseño gráfico y web.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: 'Producción audiovisual', d: 'Creamos contenido visual impactante, desde reels verticales hasta videos corporativos, con calidad de primer nivel.' },
            { t: 'Marketing digital', d: 'Diseñamos estrategias personalizadas para potenciar negocios y marcas personales.' },
            { t: 'Diseño gráfico y web', d: 'Nuestro equipo desarrolla identidades visuales únicas y experiencias digitales efectivas.' },
          ].map((s) => (
            <article key={s.t} className="rounded-2xl border border-neutral-200 p-5">
              <h2 className="text-lg font-bold">{s.t}</h2>
              <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="ulah-container py-12 md:py-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500">#OUTSTANDING SERVICE</h2>
          <h2 className="mt-2 text-3xl font-extrabold">Producción Audiovisual</h2>
          <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {AV.map((a, k) => (
              <div key={a.t}>
                <button type="button" aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)} className="flex w-full items-center justify-between px-5 py-4 text-left font-bold">
                  <span>{k + 1} · {a.t}</span><span aria-hidden="true">{open === k ? '−' : '+'}</span>
                </button>
                {open === k && <p className="px-5 pb-5 text-sm text-neutral-600">{a.d}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ulah-container py-12 md:py-16">
        <h2 className="text-3xl font-extrabold">Otros servicios</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          <li className="rounded-2xl border border-neutral-200 p-5"><h3 className="font-bold">Investigación</h3><p className="mt-2 text-sm text-neutral-600">Proveemos un análisis estratégico y profundo del mercado para identificar oportunidades clave que impulsen el éxito de tu negocio o marca personal.</p></li>
          <li className="rounded-2xl border border-neutral-200 p-5"><h3 className="font-bold">Diseño web UX/UI</h3><p className="mt-2 text-sm text-neutral-600">Diseñamos páginas web de alta gama, optimizadas para ofrecer una experiencia premium que refleje tu nivel de éxito y profesionalismo.</p></li>
          <li className="rounded-2xl border border-neutral-200 p-5"><h3 className="font-bold">Posicionamiento SEO</h3><p className="mt-2 text-sm text-neutral-600">Posicionamiento SEO y resto de servicios.<Gap label="resto de la lista de otros servicios (extracción truncada)" /></p></li>
        </ul>
        <h2 className="mt-10 text-xl font-bold">¿Listo para transformar tu marca? Contáctanos y diseñemos juntos una estrategia que impulse tus resultados.</h2>
        <form className="mt-6 rounded-2xl border border-neutral-200 p-5" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <ContactFields lang="es" prefix="serv" />
          <button type="submit" className="btn-pill btn-dark mt-4">Enviar mensaje</button>
          <NonSendingNotice lang="es" />
          {sent && <p role="status" className="mt-3 text-sm font-semibold text-green-700">Mensaje registrado solo en pantalla (no enviado).</p>}
        </form>
        <p className="mt-6 text-sm"><Link to="/cotizar-proyecto" className="underline">Contacto</Link> · +34 678 42 94 39 · info@ulah.es</p>
      </section>
    </Shell>
  )
}
