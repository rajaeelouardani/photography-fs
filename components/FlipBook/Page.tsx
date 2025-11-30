"use client"

import { useState } from 'react'

interface PageData {
  id: number
  type: 'cover' | 'page' | 'back-cover'
  image?: string
  content?: string
  pdfPage?: number
}

interface PageProps {
  page: PageData
  index: number
  currentPage: number
  isAnimating: boolean
  onClick: (direction: 'next' | 'prev') => void
  isCover: boolean
  isBackCover: boolean
  pdfUrl?: string
  totalPages: number
}

const Page = ({
  page,
  index,
  currentPage,
  isAnimating,
  onClick,
  isCover,
  isBackCover,
  pdfUrl,
  totalPages,
}: PageProps) => {
  const [imageError, setImageError] = useState(false)
  
  const isActive = index === currentPage
  const isNext = index === currentPage + 1
  const isPrevious = index === currentPage - 1

  const getPageClass = () => {
    if (isCover) return 'bg-amber-900 text-yellow-400'
    if (isBackCover) return 'bg-amber-900 text-white'
    return 'bg-white'
  }

  const getTransform = () => {
    if (isActive) return 'translateX(0%)'
    if (isNext) return 'translateX(100%)'
    if (isPrevious) return 'translateX(-100%)'
    if (index < currentPage) return 'translateX(-100%)'
    return 'translateX(100%)'
  }

  const getZIndex = () => {
    return totalPages - index
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const isRightSide = clickX > rect.width / 2

    if (isRightSide && index < currentPage) return // Page déjà tournée

    if (isRightSide && isActive) {
      onClick('next')
    } else if (!isRightSide && (isActive || isNext)) {
      onClick('prev')
    }
  }

  return (
    <div
      className={`
        absolute w-[45%] h-full rounded-md shadow-lg
        transition-transform duration-[600ms] ease-out
        cursor-pointer transform-gpu
        ${getPageClass()}
      `}
      onClick={handleClick}
      style={{
        transform: getTransform(),
        zIndex: getZIndex(),
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-md">
        {page.image && !imageError ? (
          <img
            src={page.image}
            alt={page.content || `Page ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
            onError={() => setImageError(true)}
          />
        ) : pdfUrl && page.pdfPage ? (
          <iframe
            src={`${pdfUrl}#page=${page.pdfPage}&zoom=page-width`}
            className="w-full h-full border-0 rounded-md"
            style={{ pointerEvents: 'none' }}
            title={`Page ${page.pdfPage}`}
          />
        ) : (
          <div className="p-8 text-center text-lg">
            {page.content || `Page ${index + 1}`}
          </div>
        )}
      </div>

      {/* Indicateurs de navigation */}
      {isActive && (
        <>
          {index < totalPages - 1 && (
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2
                         bg-black/50 text-white px-2 py-3 rounded cursor-pointer
                         hover:bg-black/70 transition-colors z-20"
              onClick={(e) => {
                e.stopPropagation()
                onClick('next')
              }}
            >
              ▶
            </div>
          )}
          {index > 0 && (
            <div
              className="absolute top-1/2 left-4 transform -translate-y-1/2
                         bg-black/50 text-white px-2 py-3 rounded cursor-pointer
                         hover:bg-black/70 transition-colors z-20"
              onClick={(e) => {
                e.stopPropagation()
                onClick('prev')
              }}
            >
              ◀
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Page

