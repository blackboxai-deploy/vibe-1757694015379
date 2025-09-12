'use client';

import { SlideData } from '@/types/presentation';
import { cn } from '@/lib/utils';

interface SlideRendererProps {
  slide: SlideData;
  isActive: boolean;
}

export function SlideRenderer({ slide, isActive }: SlideRendererProps) {
  const renderIcon = (style: string) => {
    switch (style) {
      case 'rules':
        return (
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 border-2 border-blue-600 rounded flex flex-col gap-1 p-1">
              <div className="h-0.5 bg-blue-600 rounded"></div>
              <div className="h-0.5 bg-blue-600 rounded"></div>
              <div className="h-0.5 bg-blue-600 rounded"></div>
            </div>
          </div>
        );
      case 'agility':
        return (
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-green-400"></div>
              </div>
            </div>
          </div>
        );
      case 'transparency':
        return (
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 border-2 border-purple-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        );
      case 'compliance':
        return (
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-2 border-l-2 border-b-2 border-emerald-600 rotate-45"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="text-center flex flex-col items-center justify-center h-full space-y-8">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-8">
                <div className="text-white text-2xl font-bold">SBP</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-blue-600 font-medium">
                  {slide.subtitle}
                </p>
              )}
            </div>
            <div className="space-y-3 text-lg text-gray-700">
              {slide.content.text?.map((text, index) => (
                <p key={index} className="font-medium">{text}</p>
              ))}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xl text-blue-600 font-medium">{slide.subtitle}</p>
              )}
            </div>
            
            {slide.content.visual && (
              <div className="grid gap-6 md:gap-8">
                {slide.content.visual.map((item, index) => (
                  <div key={index} className={cn(
                    "p-6 rounded-lg border-l-4 flex items-start space-x-4",
                    item.type === 'warning' && "bg-red-50 border-red-500",
                    item.type === 'highlight' && "bg-blue-50 border-blue-500",
                    item.type === 'icon' && "bg-gray-50 border-gray-300"
                  )}>
                    {item.style && renderIcon(item.style)}
                    <p className={cn(
                      "text-lg flex-1",
                      item.type === 'warning' && "text-red-800",
                      item.type === 'highlight' && "text-blue-800",
                      item.type === 'icon' && "text-gray-800"
                    )}>
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {slide.content.items && (
              <div className="space-y-4">
                {slide.content.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-800 flex-1">{item}</p>
                  </div>
                ))}
              </div>
            )}

            {slide.content.text && (
              <div className="space-y-4">
                {slide.content.text.map((text, index) => (
                  <p key={index} className="text-lg text-gray-800 leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        );

      case 'table':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {slide.title}
              </h1>
            </div>
            
            {slide.content.table && (
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead className="bg-blue-600">
                    <tr>
                      {slide.content.table.headers.map((header, index) => (
                        <th key={index} className="px-6 py-4 text-left text-lg font-semibold text-white">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {slide.content.table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className={cn(
                            "px-6 py-4 text-gray-900",
                            cellIndex === 0 ? "font-semibold text-blue-700" : "text-gray-800"
                          )}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'diagram':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {slide.title}
              </h1>
            </div>
            
            {slide.content.diagram && slide.content.diagram.steps && (
              <div className="space-y-6">
                {slide.content.diagram.steps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.label}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                    {slide.content.diagram && index < slide.content.diagram.steps.length - 1 && (
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-gray-400"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "w-full h-full p-8 md:p-12 transition-opacity duration-500",
      isActive ? "opacity-100" : "opacity-0"
    )}>
      {renderContent()}
    </div>
  );
}