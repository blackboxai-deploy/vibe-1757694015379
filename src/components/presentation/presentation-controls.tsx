'use client';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (slideNumber: number) => void;
}

export function PresentationControls({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onSlideSelect
}: PresentationControlsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 px-6 py-3 flex items-center space-x-4 z-50">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentSlide === 1}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Diapositiva anterior"
      >
        <div className="w-5 h-5 border-l-2 border-b-2 border-gray-600 transform rotate-45"></div>
      </button>

      {/* Slide Indicators */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onSlideSelect(index + 1)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index + 1 
                ? 'bg-blue-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Siguiente diapositiva"
      >
        <div className="w-5 h-5 border-r-2 border-b-2 border-gray-600 transform -rotate-45"></div>
      </button>

      {/* Slide Counter */}
      <div className="text-sm font-medium text-gray-600 px-3 border-l border-gray-200">
        {currentSlide} / {totalSlides}
      </div>
    </div>
  );
}