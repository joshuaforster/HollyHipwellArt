// src/CustomComponents/sliderImages.tsx
import React from 'react';

interface SliderProps {
  firstImage: { imageUrl: string };
  secondImage: { imageUrl: string };
  onPrevious: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
}

const Slider: React.FC<SliderProps> = ({
  firstImage,
  secondImage,
  onPrevious,
  onNext,
  isFullscreen,
  setIsFullscreen,
}) => {
  return (
    <div className="relative">
      <img
        src={firstImage.imageUrl}
        alt=""
        className={`w-full h-full object-cover ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
        onClick={() => setIsFullscreen(!isFullscreen)}
      />
      {isFullscreen && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={onPrevious} className="bg-white rounded-full p-2">
            Prev
          </button>
          <button onClick={onNext} className="bg-white rounded-full p-2">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
