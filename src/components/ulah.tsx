import { useState, type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

export const LOGO_URL = 'https://ulah.es/wp-content/uploads/2022/04/Ulah-Agencia-Logo.png'

export const NAV_ES = [
  { label: 'Servicios', to: '/servicios' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Blog', to: '/nosotros' },
  { label: 'Contacto', to: '/cotizar-proyecto' },
]

export const NAV_EN = [
  { label: 'Services', to: '/en' },
  { label: 'Portfolio', to: '/portafolio' },
  { label: 'About Us', to: '/nosotros' },
  { label: 'Blog', to: '/nosotros' },
  { label: 'Contact Us', to: '/cotizar-proyecto' },
]

export function Header({ lang }: { lang: 'es' | 'en' }) {
  const [open, setOpen] = useState(false)
  const nav = lang === 'es' ? NAV_ES : NAV_EN
  const quote = lang === 'es' ? 'Quiero un presupuesto' : 'I want a quotation'
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="ulah-container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to={lang === 'es' ? '/' : '/en'} className="flex items-center gap-2" aria-label="Ulah inicio">
          <img src={LOGO_URL} alt="Ulah" className="h-8 w-auto md:h-10" loading="eager" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} className="text-sm font-medium text-neutral-800 hover:text-black">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/" className={`text-sm font-semibold ${lang === 'es' ? 'text-black' : 'text-neutral-400'}`}>
            ES
          </Link>
          <span className="text-neutral-300">|</span>
          <Link to="/en" className={`text-sm font-semibold ${lang === 'en' ? 'text-black' : 'text-neutral-400'}`}>
            EN
          </Link>
          <Link to="/cotizar-proyecto" className="btn-pill btn-dark !px-5 !py-2.5 text-sm">
            {quote}
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-neutral-200 bg-white px-5 py-4 lg:hidden" aria-label="Móvil">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.label}>
                <Link to={n.to} className="block rounded-lg px-2 py-2.5 text-base font-medium hover:bg-neutral-100" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-3 px-2 py-2">
              <Link to="/" className="text-sm font-semibold">ES</Link>
              <Link to="/en" className="text-sm font-semibold">EN</Link>
            </li>
            <li>
              <Link to="/cotizar-proyecto" className="btn-pill btn-dark mt-2 w-full text-sm" onClick={() => setOpen(false)}>
                {quote}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export function Footer({ lang }: { lang: 'es' | 'en' }) {
  const servicesLabel = lang === 'es' ? 'Servicios' : 'Services'
  const moreLabel = lang === 'es' ? 'Más información' : 'More information'
  const contactLabel = lang === 'es' ? 'Contacto' : 'Contact Us'
  const attentionLabel = lang === 'es' ? 'Atención' : 'Support'
  const whereLabel = lang === 'es' ? 'Dónde estamos' : 'Where We Are?'
  return (
    <footer className="mt-0 bg-neutral-950 text-neutral-200">
      <div className="ulah-container grid gap-10 py-12 md:grid-cols-4 md:py-16">
        <div>
          <img src={LOGO_URL} alt="Ulah" className="h-9 w-auto brightness-0 invert" loading="lazy" />
          <p className="mt-4 text-sm text-neutral-400">
            {lang === 'es'
              ? 'Agencia creativa en Europa de asesoría en marca, interfaces digitales y marketing.'
              : 'Creative agency in Europe for brand consulting, digital interfaces and marketing.'}
          </p>
          <div className="mt-4 flex gap-4 text-sm font-semibold">
            <a href="https://www.facebook.com/ulah" target="_blank" rel="noreferrer">Facebook-f</a>
            <a href="https://www.instagram.com/ulah" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/ulah" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{servicesLabel}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/servicios" className="hover:text-white">Producción audiovisual</Link></li>
            <li><Link to="/servicios" className="hover:text-white">Marketing digital</Link></li>
            <li><Link to="/servicios" className="hover:text-white">Diseño gráfico y web</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{moreLabel}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/cotizar-proyecto" className="hover:text-white">{contactLabel}</Link></li>
            <li><span className="text-neutral-400">Aviso Legal</span></li>
            <li><span className="text-neutral-400">Política de Privacidad</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{attentionLabel}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="tel:+34678429439" className="hover:text-white">+34 678 42 94 39</a></li>
            <li><a href="mailto:info@ulah.es" className="hover:text-white">info@ulah.es</a></li>
          </ul>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-white">{whereLabel}</h3>
          <p className="mt-2 text-sm text-neutral-400">Calle Chantada 14<br />28029 Madrid - Madrid</p>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="ulah-container flex flex-col gap-2 py-5 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© Ulah — Reproducción con fines de fidelidad. Imágenes enlazadas desde ulah.es (hotlink).</p>
          <p>Aviso Legal · Política de Privacidad</p>
        </div>
      </div>
    </footer>
  )
}

export function Shell({ lang, children }: { lang: 'es' | 'en'; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </div>
  )
}

export function Gap({ label }: { label: string }) {
  return (
    <span className="mx-1 inline-block rounded bg-yellow-100 px-2 py-0.5 align-baseline text-xs font-semibold text-yellow-900 ring-1 ring-yellow-300">
      [falta por recuperar: {label}]
    </span>
  )
}

export function NonSendingNotice({ lang }: { lang: 'es' | 'en' }) {
  return (
    <p role="note" className="mt-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      {lang === 'es'
        ? 'Este formulario es una reproducción visual y todavía no envía datos a ningún destino.'
        : 'This form is a visual reproduction and does not send data anywhere yet.'}
    </p>
  )
}

export function ContactFields({ lang, prefix }: { lang: 'es' | 'en'; prefix: string }) {
  const t = (es: string, en: string) => (lang === 'es' ? es : en)
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="block text-sm font-medium">
        {t('Nombre', 'Name')}
        <input name={`${prefix}-nombre`} required autoComplete="given-name" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium">
        {t('Apellidos', 'Last name')}
        <input name={`${prefix}-apellidos`} required autoComplete="family-name" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium">
        Email
        <input name={`${prefix}-email`} type="email" required autoComplete="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium">
        {t('Teléfono', 'Phone')}
        <input name={`${prefix}-tel`} type="tel" autoComplete="tel" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium md:col-span-2">
        {t('Motivo de contacto', 'Contact reason')}
        <select name={`${prefix}-motivo`} className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5">
          <option>{t('Motivo de contacto', 'Contact reason')}</option>
          <option>{t('Diseño web', 'Web design')}</option>
          <option>{t('Marketing digital', 'Digital marketing')}</option>
          <option>{t('Diseño de marca', 'Brand design')}</option>
          <option>{t('Redes sociales', 'Social media')}</option>
          <option>{t('Estrategia digital', 'Digital strategy')}</option>
          <option>{t('Otras solicitudes', 'Other requests')}</option>
        </select>
      </label>
      <label className="block text-sm font-medium md:col-span-2">
        {t('Mensaje', 'Message')}
        <textarea name={`${prefix}-mensaje`} rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5" />
      </label>
    </div>
  )
}
