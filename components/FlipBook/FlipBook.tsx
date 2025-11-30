"use client"

import { useState, useRef, useEffect } from 'react'
import Page from './Page'
import Controls from './Controls'

interface PageData {
  id: number
  type: 'cover' | 'page' | 'back-cover'
  image?: string
  content?: string
  pdfPage?: number
}

interface FlipBookProps {
  pages: PageData[]
  pdfUrl?: string
}

const FlipBook = ({ pages, pdfUrl }: FlipBookProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const bookRef = useRef<HTMLDivElement>(null)

  const nextPage = () => {
    if (isAnimating || currentPage >= pages.length - 1) return
    setIsAnimating(true)
    setCurrentPage((prev) => prev + 1)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevPage = () => {
    if (isAnimating || currentPage <= 0) return
    setIsAnimating(true)
    setCurrentPage((prev) => prev - 1)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handlePageClick = (direction: 'next' | 'prev') => {
    if (direction === 'next') nextPage()
    else prevPage()
  }

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextPage()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevPage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, isAnimating])

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      <Controls
        currentPage={currentPage}
        totalPages={pages.length}
        onNext={nextPage}
        onPrev={prevPage}
        isAnimating={isAnimating}
      />

      <div
        ref={bookRef}
        className="relative w-full h-[600px] perspective-2000 flex justify-center"
        style={{
          perspective: '2000px',
        }}
      >
        {pages.map((page, index) => (
          <Page
            key={page.id}
            page={page}
            index={index}
            currentPage={currentPage}
            isAnimating={isAnimating}
            onClick={handlePageClick}
            isCover={page.type === 'cover'}
            isBackCover={page.type === 'back-cover'}
            pdfUrl={pdfUrl}
            totalPages={pages.length}
          />
        ))}
      </div>
    </div>
  )
}

export default FlipBook

