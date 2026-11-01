import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ContactFields, NonSendingNotice, Shell } from '@/components/ulah'

export const Route = createFileRoute('/cotizar-proyecto')({
  component: Cotizar,
})

function Cotizar() {
  const [sent, setSent] = useState(false)
  return (
    <Shell lang="es">
      <section className="ulah-container max-w-3xl py-12 md:py-16">
        <h1 className="text-3xl font-extrabold md:text-5xl">Habla con un experto digital</h1>
        <h2 className="mt-2 text-xl font-semibold text-neutral-600">¡Cotizar ahora!</h2>
        <form className="mt-8 rounded-2xl border border-neutral-200 p-5 md:p-6" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <ContactFields lang="es" prefix="cot" />
          <label className="mt-4 flex items-start gap-2 text-sm">
            <input type="checkbox" required className="mt-1" />
            <span>Acepto la Política de Privacidad y Uso de Datos</span>
          </label>
          <button type="submit" className="btn-pill btn-dark mt-4 w-full">Enviar mensaje</button>
          <NonSendingNotice lang="es" />
          {sent && <p role="status" className="mt-3 text-sm font-semibold text-green-700">Solicitud registrada solo en pantalla (no enviada).</p>}
        </form>
      </section>
    </Shell>
  )
}
