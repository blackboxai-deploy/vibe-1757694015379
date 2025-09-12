'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (slideNumber: number) => void;
}

export function Navigation({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onSlideSelect 
}: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Previous Button */}
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentSlide === 1}
          className="flex items-center space-x-2"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-6 border-t-transparent border-b-transparent border-r-gray-600"></div>
          </div>
          <span>Anterior</span>
        </Button>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => onSlideSelect(index + 1)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                currentSlide === index + 1
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 font-medium">
            {currentSlide} / {totalSlides}
          </span>
          
          {/* Next Button */}
          <Button
            variant="outline"
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            className="flex items-center space-x-2"
          >
            <span>Siguiente</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-gray-600"></div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}