"use client"

import { useState, useEffect } from 'react'
import FlipBook from './FlipBook'
import { Loader2 } from 'lucide-react'

interface PageData {
  id: number
  type: 'cover' | 'page' | 'back-cover'
  image?: string
  content?: string
  pdfPage?: number
}

export default function FlipBookExample() {
  const [pages, setPages] = useState<PageData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Simuler le chargement des pages du PDF
  useEffect(() => {
    const loadPDFPages = async () => {
      try {
        // Option 1: Utiliser des images converties depuis PDF
        const pdfPages: PageData[] = [
          {
            id: 1,
            type: 'cover',
            image: '/pdfs/cover.jpg',
            content: 'Couverture',
          },
          {
            id: 2,
            type: 'page',
            image: '/pdfs/page1.jpg',
            content: 'Page 1',
          },
          {
            id: 3,
            type: 'page',
            image: '/pdfs/page2.jpg',
            content: 'Page 2',
          },
          {
            id: 4,
            type: 'page',
            image: '/pdfs/page3.jpg',
            content: 'Page 3',
          },
          {
            id: 5,
            type: 'back-cover',
            image: '/pdfs/back-cover.jpg',
            content: 'Quatrième de couverture',
          },
        ]

        // Option 2: Utiliser directement le PDF avec numéros de pages
        // const pdfPages: PageData[] = Array.from({ length: 31 }, (_, i) => ({
        //   id: i + 1,
        //   type: i === 0 ? 'cover' : i === 30 ? 'back-cover' : 'page',
        //   pdfPage: i + 1,
        //   content: `Page ${i + 1}`,
        // }))

        setPages(pdfPages)
      } catch (error) {
        console.error('Erreur chargement PDF:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPDFPages()
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="h-12 w-12 text-amber-600 dark:text-amber-400 animate-spin mb-4" />
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            Chargement du livre...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Mon Livre PDF Interactif
      </h1>
      <FlipBook pages={pages} pdfUrl="/Partie1.pdf" />
    </div>
  )
}

