"use client"

import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ControlsProps {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
  isAnimating: boolean
}

const Controls = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  isAnimating,
}: ControlsProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <Button
        onClick={onPrev}
        disabled={currentPage === 0 || isAnimating}
        variant="outline"
        size="lg"
        className="disabled:opacity-50"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Précédent
      </Button>

      <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <BookOpen className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Page {currentPage + 1} / {totalPages}
        </span>
      </div>

      <Button
        onClick={onNext}
        disabled={currentPage >= totalPages - 1 || isAnimating}
        variant="outline"
        size="lg"
        className="disabled:opacity-50"
      >
        Suivant
        <ChevronRight className="h-5 w-5 ml-2" />
      </Button>
    </div>
  )
}

export default Controls

