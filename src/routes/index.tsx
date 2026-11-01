import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ContactFields, Gap, NonSendingNotice, Shell } from '@/components/ulah'

export const Route = createFileRoute('/')({
  component: HomeES,
})

const CLIENTS = [
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah1.png',
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah2.png',
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah5.png',
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah3.png',
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah6.png',
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah4.png',
  'https://ulah.es/wp-content/uploads/2025/01/Clientes-Ulah7.png',
]

function HomeES() {
  const [sent, setSent] = useState(false)
  return (
    <Shell lang="es">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Diseño y creatividad · Marketing</p>
            <h1 className="ulah-hero-mark mt-4 text-4xl leading-[1.05] md:text-6xl">
              When nothing goes right... <span className="ulah-outline">GO LEFT</span>
            </h1>
            <h2 className="mt-4 text-xl font-semibold md:text-2xl">Marketing estratégico y creatividad profesional para transformar marcas</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/servicios" className="btn-pill btn-dark">Conoce más</Link>
              <Link to="/cotizar-proyecto" className="btn-pill btn-yellow">¡Habla con nosotros!</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link to="/servicios" className="underline">Servicios</Link>
              <a className="underline" href="https://wa.me/34678429439" target="_blank" rel="noreferrer">Whatsapp</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <img src="https://ulah.es/wp-content/uploads/2025/01/CA86BCD53A1042C9A970E8B8F3DBDFE5_4F8F9C74CA0B488AAFACF4BF6977E0BB_001-hero_21-9_5120x2194_PS24CUSID0.jpg" alt="Ulah — creatividad y marketing" className="aspect-[16/10] w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>

      {/* ULAH! */}
      <section className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">ULAH!</h2>
          <h2 className="mt-1 text-xl font-semibold text-neutral-600">Por Alberto Costell</h2>
          <p className="mt-4 text-neutral-700">
            Con una combinación única de experiencia en dirección de marketing y un equipo especializado, ofrecemos soluciones
            <Gap label="final del párrafo de introducción (texto truncado en la extracción)" />
          </p>
          <Link to="/nosotros" className="btn-pill btn-light mt-6">Conoce más</Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <img src="https://ulah.es/wp-content/uploads/2025/01/Alberto-Costell.jpg" alt="Alberto Costell" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="ulah-container py-12 md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">Servicios Destacados</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { t: 'Producción audiovisual', d: 'Creamos contenido visual impactante, desde reels verticales hasta videos corporativos, con calidad de primer nivel.', img: 'https://ulah.es/wp-content/uploads/2022/04/milad-fakurian-jBif-dovsTQ-unsplash.jpeg' },
              { t: 'Marketing digital', d: 'Diseñamos estrategias personalizadas para potenciar negocios y marcas personales.', img: 'https://ulah.es/wp-content/uploads/2022/04/convertkit-L58uwc_d9zY-unsplash.jpeg' },
              { t: 'Diseño gráfico y web', d: 'Nuestro equipo desarrolla identidades visuales únicas y experiencias digitales efectivas.', img: 'https://ulah.es/wp-content/uploads/2022/04/balazs-ketyi-U008D4Jp2CY-unsplash.jpeg' },
            ].map((s) => (
              <article key={s.t} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <img src={s.img} alt={s.t} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
                  <Link to="/servicios" className="mt-4 inline-block text-sm font-semibold underline">Servicios</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ulah-container py-12 md:py-16">
        <h2 className="text-2xl font-extrabold md:text-3xl">Experto digital y en producción audiovisual</h2>
        <h2 className="mt-2 text-lg font-semibold text-neutral-600">Trayectoria y resultados que marcan la diferencia.</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {['+1.5 Billones de visualizaciones al año', '+1200 creatividades al año', '+ 6 Países'].map((s) => (
            <li key={s} className="rounded-2xl bg-neutral-950 p-6 text-center text-xl font-extrabold text-white">{s}</li>
          ))}
        </ul>
      </section>

      {/* Clientes */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="ulah-container py-12 md:py-16">
          <h2 className="text-3xl font-extrabold">Nuestros Clientes</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {CLIENTS.map((c) => (
              <div key={c} className="flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-4">
                <img src={c} alt="Cliente de Ulah" className="max-h-16 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <h2 className="mt-10 text-xl font-bold md:text-2xl">¿Listo para transformar tu marca? Contáctanos y diseñemos juntos una estrategia que impulse tus resultados.</h2>
          <Link to="/cotizar-proyecto" className="btn-pill btn-dark mt-5">Solicita un presupuesto</Link>
        </div>
      </section>

      {/* Outstanding */}
      <section className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500">#OUTSTANDING SERVICE</h2>
          <h2 className="mt-2 text-3xl font-extrabold">Producción Audiovisual</h2>
          <p className="mt-4 text-neutral-700">Ya sea un evento deportivo, una campaña publicitaria o un proyecto artístico, en nuestra agencia llevamos la producción audiovisual a otro nivel.</p>
          <Link to="/servicios" className="btn-pill btn-dark mt-6">Cuéntanos</Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <img src="https://ulah.es/wp-content/uploads/2022/04/Diseño-web-creativo-mejor-agencia-en-España.jpeg" alt="Producción audiovisual Ulah" className="aspect-[16/10] w-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Contacto */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-3xl font-extrabold">Háblanos</h2>
            <h2 className="mt-2 text-xl font-semibold">Tómate un descanso</h2>
            <p className="mt-2 text-lg font-bold">ULAH LO HACE POR TI</p>
            <p className="mt-2 text-neutral-600">Soñemos · Habla con un experto digital</p>
            <h2 className="mt-6 text-xl font-bold">Contáctenos</h2>
            <img src="https://ulah.es/wp-content/uploads/2022/04/Contacto-Ulah.png" alt="Contacto Ulah" className="mt-4 w-full max-w-sm rounded-xl border border-neutral-200 bg-white object-cover" loading="lazy" />
          </div>
          <form className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <ContactFields lang="es" prefix="home" />
            <button type="submit" className="btn-pill btn-dark mt-4 w-full">Enviar mensaje</button>
            <NonSendingNotice lang="es" />
            {sent && <p role="status" className="mt-3 text-sm font-semibold text-green-700">Gracias: hemos registrado tu mensaje solo en esta pantalla (no se ha enviado).</p>}
          </form>
        </div>
      </section>
    </Shell>
  )
}
