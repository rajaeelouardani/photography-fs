# FlipBook Component

Un composant de livre interactif avec animation de pages qui se tournent, utilisant CSS transforms et Tailwind CSS.

## Utilisation

### Exemple basique

```tsx
import FlipBook from '@/components/FlipBook/FlipBook'

const pages = [
  { id: 1, type: 'cover', image: '/cover.jpg', content: 'Couverture' },
  { id: 2, type: 'page', image: '/page1.jpg', content: 'Page 1' },
  { id: 3, type: 'page', image: '/page2.jpg', content: 'Page 2' },
  { id: 4, type: 'back-cover', image: '/back.jpg', content: 'Quatrième de couverture' },
]

export default function MyPage() {
  return <FlipBook pages={pages} />
}
```

### Utilisation avec PDF

```tsx
import FlipBook from '@/components/FlipBook/FlipBook'

const pages = Array.from({ length: 31 }, (_, i) => ({
  id: i + 1,
  type: i === 0 ? 'cover' : i === 30 ? 'back-cover' : 'page',
  pdfPage: i + 1,
  content: `Page ${i + 1}`,
}))

export default function MyPage() {
  return <FlipBook pages={pages} pdfUrl="/Partie1.pdf" />
}
```

## Props

### FlipBook

- `pages`: Array<PageData> - Tableau des pages du livre
- `pdfUrl?`: string - URL du PDF (optionnel, si vous utilisez des iframes PDF)

### PageData

```typescript
interface PageData {
  id: number
  type: 'cover' | 'page' | 'back-cover'
  image?: string        // URL de l'image (si vous utilisez des images)
  content?: string      // Texte à afficher (fallback)
  pdfPage?: number      // Numéro de page PDF (si vous utilisez un PDF)
}
```

## Fonctionnalités

- ✅ Animation fluide de tournage de pages
- ✅ Navigation par clic sur les bords des pages
- ✅ Navigation au clavier (flèches, espace)
- ✅ Indicateurs visuels de navigation
- ✅ Support des images et PDF
- ✅ Responsive design
- ✅ Mode sombre compatible

## Raccourcis clavier

- `→` ou `Espace`: Page suivante
- `←`: Page précédente

## Conversion PDF vers images

Pour convertir un PDF en images, vous pouvez utiliser une API route Next.js :

```typescript
// pages/api/convert-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { pdfUrl } = req.body
      
      // Utiliser pdf2image ou une autre librairie
      // const convertedPages = await convertPDFToImages(pdfUrl)
      
      res.status(200).json({ 
        success: true, 
        pages: convertedPages 
      })
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: 'Erreur conversion PDF' 
      })
    }
  }
}
```

## Notes

Le composant FlipBook offre une expérience de lecture fluide avec des animations CSS légères et performantes.

