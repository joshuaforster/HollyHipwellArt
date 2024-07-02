import React from 'react';

interface SingleImageProps {
  imageUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

const SingleImage: React.FC<SingleImageProps> = ({
  imageUrl,
  onPrevious,
  onNext,
  onClose,
}) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center" onClick={handleClickOutside}>
      <img
        src={imageUrl}
        alt=""
        className="w-4/5 h-4/5 object-contain cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-2xl p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
      >
        &#9664;
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-2xl p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        &#9654;
      </button>
    </div>
  );
};

export default SingleImage;
