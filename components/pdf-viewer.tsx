"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  ZoomIn,
  ZoomOut,
  Download,
  Maximize,
  Minimize,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
} from "lucide-react"
import { getTranslation, type Language } from "@/lib/i18n"

interface PDFViewerProps {
  pdfUrl: string
  title?: string
  className?: string
  showControls?: boolean
  currentLang?: Language
}

export default function PDFViewer({
  pdfUrl,
  title,
  className = "",
  showControls = true,
  currentLang = "fr",
}: PDFViewerProps) {
  const defaultTitle = getTranslation(currentLang, "pdf.document")
  const displayTitle = title || defaultTitle
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50))
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = title || "document.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleFullscreen = () => {
    if (!isFullscreen && containerRef.current) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
      updateIframePage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
      updateIframePage(currentPage - 1)
    }
  }

  const updateIframePage = (page: number) => {
    if (iframeRef.current) {
      iframeRef.current.src = `${pdfUrl}#page=${page}&zoom=${zoom}`
    }
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
    // Essayer d'obtenir le nombre total de pages depuis l'iframe
    // Note: Cela peut ne pas fonctionner selon le navigateur et les paramètres CORS
    try {
      if (iframeRef.current?.contentWindow) {
        // Cette méthode peut ne pas fonctionner à cause des restrictions CORS
        // Vous devrez peut-être utiliser une bibliothèque PDF.js pour obtenir le nombre de pages
      }
    } catch (e) {
      // Ignorer les erreurs CORS
    }
  }

  // Gestion du changement de zoom
  const pdfUrlWithZoom = `${pdfUrl}#page=${currentPage}&zoom=${zoom}`

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {/* En-tête avec titre et contrôles */}
      {showControls && (
        <div className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate max-w-xs">
                {displayTitle}
              </h3>
            </div>

          <div className="flex items-center gap-2">
            {/* Navigation des pages */}
            <div className="flex items-center gap-1 px-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-xs text-gray-600 dark:text-gray-400 px-2">
                {currentPage}
                {totalPages > 0 && ` ${getTranslation(currentLang, "pdf.of")} ${totalPages}`}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNextPage}
                disabled={totalPages > 0 && currentPage >= totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Zoom */}
            <div className="flex items-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="h-8 w-8 p-0"
                title="Zoom arrière"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[3rem] text-center">
                {zoom}%
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="h-8 w-8 p-0"
                title="Zoom avant"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Télécharger */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="h-8 w-8 p-0"
              title={getTranslation(currentLang, "pdf.download")}
            >
              <Download className="h-4 w-4" />
            </Button>

            {/* Plein écran */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFullscreen}
              className="h-8 w-8 p-0"
              title={isFullscreen ? getTranslation(currentLang, "pdf.exitFullscreen") : getTranslation(currentLang, "pdf.fullscreen")}
            >
              {isFullscreen ? (
                <Minimize className="h-4 w-4" />
              ) : (
                <Maximize className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Zone de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-20">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 text-amber-600 dark:text-amber-400 animate-spin" />
            <p className="text-gray-800 dark:text-gray-200 font-semibold">
              {getTranslation(currentLang, "pdf.loading")}
            </p>
          </div>
        </div>
      )}

      {/* Iframe PDF */}
      <div
        className={`w-full overflow-auto ${showControls ? "h-[calc(100%-3rem)] mt-12" : "h-full"}`}
      >
        <iframe
          ref={iframeRef}
          src={pdfUrlWithZoom}
          className="w-full h-full border-0"
          title={title}
          onLoad={handleIframeLoad}
        />
      </div>

      {/* Barre de navigation en bas (optionnelle) */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center justify-center gap-4 z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {getTranslation(currentLang, "pdf.previous")}
          </Button>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {getTranslation(currentLang, "pdf.page")} {currentPage}
            {totalPages > 0 && ` ${getTranslation(currentLang, "pdf.of")} ${totalPages}`}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={totalPages > 0 && currentPage >= totalPages}
          >
            {getTranslation(currentLang, "pdf.next")}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  )
}

