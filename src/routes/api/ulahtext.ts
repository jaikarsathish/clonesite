import { createFileRoute } from '@tanstack/react-router'

const URLS = [
  'https://ulah.es/',
  'https://ulah.es/portafolio/',
  'https://ulah.es/servicios/',
  'https://ulah.es/nosotros/',
  'https://ulah.es/cotizar-proyecto/',
  'https://ulah.es/en/',
]

function stripTags(s: string): string {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&(nbsp|amp|lt|gt|quot|#39|#8217|#8220|#8221|#8211|#8212);/g, (m) => {
      const map: Record<string, string> = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", '#8217': '’', '#8220': '“', '#8221': '”', '#8211': '–', '#8212': '—' }
      const k = m.slice(1, -1)
      return map[k] ?? m
    })
    .replace(/\s+/g, ' ')
    .trim()
}

export const Route = createFileRoute('/api/ulahtext')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const idx = Number(url.searchParams.get('i') ?? '0')
        const from = Number(url.searchParams.get('from') ?? '0')
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
          const blocks: { tag: string; text: string }[] = []
          // 1) real headings h1-h6 in order
          const reH = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1\s*>/gi
          let m: RegExpExecArray | null
          while ((m = reH.exec(html)) !== null && blocks.length < 500) {
            const tag = m[1].toLowerCase()
            const text = stripTags(m[2]).slice(0, 400)
            if (!text || text.length < 2) continue
            blocks.push({ tag, text })
          }
          // 2) elementor button labels + link labels (nav/cta/form options)
          const reB = /class=["'][^"']*elementor-button-text[^"']*["'][^>]*>([\s\S]*?)<\//gi
          while ((m = reB.exec(html)) !== null && blocks.length < 800) {
            const text = stripTags(m[1]).slice(0, 200)
            if (!text) continue
            blocks.push({ tag: 'cta', text })
          }
          const re = /<(p|a|button|li|option)[^>]*>([\s\S]*?)<\/\1\s*>/gi
          while ((m = re.exec(html)) !== null && blocks.length < 2000) {
            const tag = m[1].toLowerCase()
            const text = stripTags(m[2]).slice(0, 400)
            if (!text || text.length < 2) continue
            // skip nav/script junk
            if (/elementor|wordpress|wp-content|cookie|javascript/i.test(text) && text.length < 40) continue
            blocks.push({ tag, text })
          }
          // dedupe consecutive identical
          const dedup = blocks.filter((b, k) => k === 0 || b.text !== blocks[k - 1].text || b.tag !== blocks[k - 1].tag)
          return Response.json({ target, total: dedup.length, blocks: dedup.slice(from, from + 120) })
        } catch (e) {
          return Response.json({ error: String(e), target })
        }
      },
    },
  },
})
