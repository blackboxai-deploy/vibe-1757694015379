'use client';

import { useState, useEffect } from 'react';
import { slides } from '@/data/slides';
import { SlideRenderer } from './slide-renderer';
import { PresentationControls } from './presentation-controls';

export function PresentationContainer() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          handlePrevious();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(1);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(slides.length);
          break;
        case 'F11':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) {
            event.preventDefault();
            exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen]);

  const handleNext = () => {
    if (currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSlideSelect = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const currentSlideData = slides.find(slide => slide.id === currentSlide);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SBP</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Reglamento Interno de Negocios
              </h1>
              <p className="text-sm text-gray-600">
                Sociedad de Beneficencia de Puno
              </p>
            </div>
          </div>
          <button
            onClick={toggleFullscreen}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            title="Modo presentación (F11)"
          >
            Pantalla Completa
          </button>
        </div>
      </div>

      {/* Main Slide Container */}
      <div className="absolute inset-0 pt-20 pb-20">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-6xl h-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {currentSlideData && (
              <SlideRenderer 
                slide={currentSlideData} 
                isActive={true}
              />
            )}
          </div>
        </div>
      </div>

      {/* Presentation Controls */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSlideSelect={handleSlideSelect}
      />

      {/* Help Text */}
      <div className="absolute bottom-6 left-6 text-sm text-gray-500 space-y-1">
        <p>← → : Navegar diapositivas</p>
        <p>F11: Pantalla completa</p>
        <p>Espacio: Siguiente diapositiva</p>
      </div>
    </div>
  );
}