import { createFileRoute } from '@tanstack/react-router'

const URLS = [
  'https://ulah.es/',
  'https://ulah.es/portafolio/',
  'https://ulah.es/servicios/',
  'https://ulah.es/nosotros/',
  'https://ulah.es/cotizar-proyecto/',
  'https://ulah.es/en/',
]

export const Route = createFileRoute('/api/ulahfetch')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const idx = Number(url.searchParams.get('i') ?? '0')
        const target = URLS[idx] ?? URLS[0]
        try {
          const res = await fetch(target, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
              Accept: 'text/html,application/xhtml+xml',
            },
          })
          const html = await res.text()
          // Return the raw HTML (truncated to 400k chars) as text for inspection
          return new Response(html.slice(0, 400000), {
            status: 200,
            headers: { 'content-type': 'text/html; charset=utf-8' },
          })
        } catch (e) {
          return Response.json({ error: String(e), target })
        }
      },
    },
  },
})
