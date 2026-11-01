// Search and AI-answer-engine settings for this app, written by MonstarX's SEO/GEO settings.
//
// Change them in Preview → SEO/GEO or through the authorized builder SEO tools, not here: every save replaces this file. The managed helper
// src/lib/monstarx/seo.ts turns them into the <head> of every page, /robots.txt, /sitemap.xml and /llms.txt.

import type { SeoConfig } from '@/lib/monstarx/seo'

export const seo: SeoConfig = {
  "siteUrl": "",
  "siteName": "Ulah Site Replica",
  "defaultTitle": "Ulah - Diseño web UX, Marketing y Servicios Digitales",
  "titleTemplate": "%s",
  "defaultDescription": "Ulah es una agencia creativa en Europa de asesoría en marca, creación de interfaces digitales y marketing, seas autónomo, pyme o gran empresa.",
  "keywords": [],
  "locale": "en",
  "themeColor": "",
  "image": null,
  "imageAlt": "",
  "twitterSite": "",
  "twitterCard": "summary_large_image",
  "indexable": false,
  "robots": {
    "mode": "allow",
    "disallow": [],
    "aiCrawlers": "allow",
    "custom": ""
  },
  "sitemap": {
    "enabled": true,
    "exclude": [],
    "extra": []
  },
  "llms": {
    "enabled": true,
    "summary": "",
    "notes": ""
  },
  "organization": {
    "name": "Ulah Site Replica",
    "type": "Organization",
    "logo": null,
    "sameAs": [],
    "email": "",
    "phone": "",
    "address": ""
  },
  "verification": {
    "google": "",
    "bing": "",
    "yandex": "",
    "pinterest": ""
  },
  "faq": [],
  "pages": [
    {
      "path": "/",
      "title": "Ulah - Diseño web UX, Marketing y Servicios Digitales",
      "description": "Ulah es una agencia creativa en Europa de asesoría en marca, creación de interfaces digitales y marketing, seas autónomo, pyme o gran empresa."
    },
    {
      "path": "/cotizar-proyecto",
      "title": "Cotizar proyecto - Ulah",
      "description": "Habla con un experto digital y cotiza tu proyecto: diseño web, marketing digital, marca, redes sociales y estrategia digital."
    },
    {
      "path": "/en",
      "title": "Ulah - UX web design, video, SEO and Marketing",
      "description": "Ulah is a creative agency in Europe for brand consulting, digital interfaces and marketing, whether freelancer, SME or large company."
    },
    {
      "path": "/llms.txt"
    },
    {
      "path": "/nosotros",
      "title": "Nosotros - Ulah",
      "description": "Acerca de Ulah: Alberto Costell San Román, consultoría de marca, diseño de interfaces digitales y marketing."
    },
    {
      "path": "/portafolio",
      "title": "Portafolio - Ulah",
      "description": "Portafolio de proyectos Ulah: diseño web y marketing. Conoce nuestro trabajo."
    },
    {
      "path": "/robots.txt"
    },
    {
      "path": "/servicios",
      "title": "Servicios - Ulah",
      "description": "Nuestros servicios: producción audiovisual, marketing digital, diseño web UX/UI, SEO e investigación."
    },
    {
      "path": "/sitemap.xml"
    }
  ],
  "paths": [
    "/",
    "/cotizar-proyecto",
    "/en",
    "/llms.txt",
    "/nosotros",
    "/portafolio",
    "/robots.txt",
    "/servicios",
    "/sitemap.xml"
  ],
  "privatePaths": [
    "/"
  ]
}

export default seo
