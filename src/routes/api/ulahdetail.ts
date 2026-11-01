import { createFileRoute } from '@tanstack/react-router'

const URLS = [
  'https://ulah.es/',
  'https://ulah.es/portafolio/',
  'https://ulah.es/servicios/',
  'https://ulah.es/nosotros/',
  'https://ulah.es/cotizar-proyecto/',
  'https://ulah.es/en/',
]

function pickAll(html: string, re: RegExp, max = 80): string[] {
  const out: string[] = []
  let m: RegExpExecArray | null
  const rx = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
  while ((m = rx.exec(html)) !== null && out.length < max) {
    out.push(m[1] ?? m[0])
    if (m[0].length === 0) rx.lastIndex++
  }
  return out
}

export const Route = createFileRoute('/api/ulahdetail')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const idx = Number(url.searchParams.get('i') ?? '0')
        const field = url.searchParams.get('field') ?? 'all'
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
          const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? ''
          const lang = html.match(/<html[^>]*lang=["']([^"']+)/i)?.[1] ?? ''
          const metaDesc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)/i)?.[1] ?? ''
          const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)/i)?.[1] ?? ''
          const og = pickAll(html, /<meta[^>]*property=["'](og:[^"']+)["'][^>]*content=["']([^"']*)["']/gi, 20).slice(0, 20)
          // simpler: grab full og tags
          const ogTags = pickAll(html, /(<meta[^>]*property=["']og:[^>]*>)/gi, 20)
          const twTags = pickAll(html, /(<meta[^>]*name=["']twitter:[^>]*>)/gi, 20)
          const jsonlds = pickAll(html, /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi, 10).map((s) =>
            s.slice(0, 2000),
          )
          const imgs = pickAll(html, /<img[^>]*src=["']([^"']+)["']/gi, 80)
          const videos = pickAll(html, /<video[^>]*>|<source[^>]*src=["']([^"']+)["']/gi, 40)
          const videoSrcs = pickAll(html, /<(?:video|source)[^>]*src=["']([^"']+)["']/gi, 40)
          const cssLinks = pickAll(html, /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi, 40)
          const fontLinks = cssLinks.filter((h) => /font|googleapis|gstatic/i.test(h))
          const inlineBg = pickAll(html, /url\(["']?(https:\/\/ulah\.es\/[^)"']+)["']?\)/gi, 60)
          const allImgs = pickAll(html, /<img[^>]*srcset=["']/gi, 1)
          const realImgs = pickAll(html, /<img[^>]*src=["']([^"']+)["']/gi, 120)
          const srcsets = pickAll(html, /srcset=["']([^"']+)["']/gi, 40).map((s) => s.slice(0, 600))
          const bgInline = [...new Set(inlineBg)].slice(0, 60)
          const elorData = pickAll(html, /data-settings=["']([^"']{0,400})["']/gi, 10)
          if (field === 'full') {
            const out: any[] = []
            for (let k = 0; k < URLS.length; k++) {
              try {
                const r = await fetch(URLS[k], { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36', Accept: 'text/html,application/xhtml+xml' } })
                const h = await r.text()
                const t = h.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? ''
                void t
                out.push({
                  page: URLS[k],
                  title: h.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '',
                  lang: h.match(/<html[^>]*lang=["']([^"']+)/i)?.[1] ?? '',
                  metaDesc: h.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)/i)?.[1]?.slice(0, 400) ?? '',
                  canonical: h.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)/i)?.[1] ?? '',
                  ogTags: pickAll(h, /(<meta[^>]*property=["']og:[^>]*>)/gi, 20),
                  twTags: pickAll(h, /(<meta[^>]*name=["']twitter:[^>]*>)/gi, 20),
                  jsonldCount: pickAll(h, /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi, 10).length,
                  imgs: [...new Set(pickAll(h, /<img[^>]*src=["']([^"']+)["']/gi, 120))].slice(0, 60),
                })
              } catch (e) { out.push({ page: URLS[k], error: String(e) }) }
            }
            return Response.json(out)
          }
          if (field === 'imgs') return Response.json({ target, imgs: realImgs.slice(0, 120), srcsets: srcsets.slice(0, 10), bgInline })
          if (field === 'css') return Response.json({ target, cssLinks: cssLinks.slice(0, 40), fontLinks })
          if (field === 'meta') return Response.json({ target, title, lang, metaDesc, canonical, ogTags, twTags, jsonldCount: jsonlds.length })
          return Response.json({
            target,
            status: res.status,
            len: html.length,
            title,
            lang,
            metaDesc: metaDesc.slice(0, 500),
            canonical,
            ogTags,
            twTags,
            jsonldCount: jsonlds.length,
            jsonld0: (jsonlds[0] ?? '').slice(0, 1500),
            imgs: imgs.slice(0, 60),
            videoSrcs: videoSrcs.slice(0, 20),
            cssLinks: cssLinks.slice(0, 30),
            fontLinks,
            inlineBg: [...new Set(inlineBg)].slice(0, 40),
            // first 3000 chars of body text for structure hints
            head: html.slice(0, 3000),
          })
        } catch (e) {
          return Response.json({ error: String(e), target })
        }
      },
    },
  },
})
