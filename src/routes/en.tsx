import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ContactFields, NonSendingNotice, Shell } from '@/components/ulah'

export const Route = createFileRoute('/en')({
  component: HomeEN,
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

function HomeEN() {
  const [sent, setSent] = useState(false)
  useEffect(() => {
    document.documentElement.lang = 'en'
    return () => {
      document.documentElement.lang = 'es'
    }
  }, [])
  return (
    <Shell lang="en">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Design and creativity · Marketing</p>
            <h1 className="ulah-hero-mark mt-4 text-4xl leading-[1.05] md:text-6xl">
              When nothing goes right... <span className="ulah-outline">GO LEFT</span>
            </h1>
            <h2 className="mt-4 text-xl font-semibold md:text-2xl">Strategic Marketing and Professional Creativity to Transform Brands.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/servicios" className="btn-pill btn-dark">Learn More</Link>
              <Link to="/cotizar-proyecto" className="btn-pill btn-yellow">Talk to us!</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <img src="https://ulah.es/wp-content/uploads/2025/01/CA86BCD53A1042C9A970E8B8F3DBDFE5_4F8F9C74CA0B488AAFACF4BF6977E0BB_001-hero_21-9_5120x2194_PS24CUSID0.jpg" alt="Ulah — creativity and marketing" className="aspect-[16/10] w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>
      <section className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">ULAH!</h2>
          <h2 className="mt-1 text-xl font-semibold text-neutral-600">By Alberto Costell</h2>
          <p className="mt-4 text-neutral-700">With a unique combination of marketing direction experience and a specialized team, we offer comprehensive solutions.</p>
          <h3 className="mt-8 text-2xl font-extrabold">Featured Services</h3>
          <div className="mt-4 grid gap-4">
            {[
              { t: 'Audiovisual Production', d: 'We create impactful visual content, from vertical reels to corporate videos, with top-quality production.' },
              { t: 'Digital Marketing', d: 'We design personalized strategies to boost businesses and personal brands.' },
              { t: 'Graphic and Web Design', d: 'Our team develops unique visual identities and effective digital experiences.' },
            ].map((s) => (
              <article key={s.t} className="rounded-2xl border border-neutral-200 p-5">
                <h4 className="font-bold">{s.t}</h4>
                <p className="mt-1 text-sm text-neutral-600">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold">Specialized digital creative and audiovisual expert</h2>
          <h2 className="mt-2 font-semibold text-neutral-600">Trajectory and results that make a difference.</h2>
          <ul className="mt-6 grid gap-4">
            {['+1.5 Billion views per year', '+1200 creative assets per year', '+6 Countries'].map((s) => (
              <li key={s} className="rounded-2xl bg-neutral-950 p-5 text-center font-extrabold text-white">{s}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="ulah-container py-12 md:py-16">
          <h2 className="text-3xl font-extrabold">Our Clients</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {CLIENTS.map((c) => (
              <div key={c} className="flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-4">
                <img src={c} alt="Ulah client" className="max-h-16 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <h2 className="mt-10 text-xl font-bold">Ready to transform your brand? Contact us and let’s design a strategy together to drive your results.</h2>
          <p className="mt-3 text-sm text-neutral-600">Quote my web project in minutes here · Talk to a consultant</p>
          <Link to="/cotizar-proyecto" className="btn-pill btn-dark mt-5">I want a quotation</Link>
        </div>
      </section>
      <section className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500">#OUTSTANDING SERVICE</h2>
          <h2 className="mt-2 text-3xl font-extrabold">Audiovisual production</h2>
          <p className="mt-4 text-neutral-700">Whether it’s a sporting event, an advertising campaign or an artistic project, at our agency we take audiovisual production to another level.</p>
          <h2 className="mt-6 text-xl font-bold">Talk with Us!</h2>
          <p className="mt-1 text-neutral-600">Take a break · ULAH WE DO IT FOR YOU · Let&apos;s dream</p>
        </div>
        <form className="rounded-2xl border border-neutral-200 p-5" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <h2 className="mb-4 text-xl font-bold">Talk with a digital expert · Contact Us</h2>
          <ContactFields lang="en" prefix="en" />
          <button type="submit" className="btn-pill btn-dark mt-4 w-full">Send message</button>
          <NonSendingNotice lang="en" />
          {sent && <p role="status" className="mt-3 text-sm font-semibold text-green-700">Thanks: recorded on this screen only (not sent).</p>}
        </form>
      </section>
    </Shell>
  )
}
