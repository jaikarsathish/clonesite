import { Link, createFileRoute } from '@tanstack/react-router'
import { Gap, Shell } from '@/components/ulah'

export const Route = createFileRoute('/nosotros')({
  component: Nosotros,
})

function Nosotros() {
  return (
    <Shell lang="es">
      <section className="ulah-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h1 className="text-3xl font-extrabold md:text-5xl">Acerca de Ulah!</h1>
          <p className="mt-4 text-neutral-700">
            Alberto Costell San Román es un experto en consultoría de marca, diseño de interfaces digitales y desarrollo de
            herramientas de gestión de marketing, con más de una década de experiencia trabajando en proyectos de alto impacto. Su carrera com
            <Gap label="final de la biografía (texto truncado en la extracción)" />
          </p>
          <p className="mt-4 text-neutral-700">
            Ideamos nuevas marcas y productos digitales e innovamos y transformamos los ya existentes. Nuestro trabajo simplifica
            los negocios, inspira nuevos comportamientos y satisface las necesidades de las personas. Obtenga más información sobre
            cómo asociarse con nosotros, póngase en contacto.
          </p>
          <Link to="/cotizar-proyecto" className="btn-pill btn-yellow mt-6">¡Habla conmigo!</Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <img src="https://ulah.es/wp-content/uploads/2025/01/Alberto-Costell.jpg" alt="Alberto Costell San Román" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="ulah-container py-12 md:py-16">
          <h2 className="text-3xl font-extrabold">Creando valor duradero</h2>
          <p className="mt-4 max-w-3xl text-neutral-700">
            Damos a las empresas un trato justo para obtener ventaja para su próxima
            <Gap label="final del párrafo de valor (texto truncado en la extracción)" />
          </p>
        </div>
      </section>
    </Shell>
  )
}
