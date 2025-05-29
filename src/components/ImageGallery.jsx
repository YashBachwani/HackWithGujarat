import React, { useState } from 'react';

const ImageGallery = () => {
  const thumbnails = [
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png',
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full max-w-3xl">
        <img
          src={mainImage}
          className="w-full rounded-lg"
          alt="Main"
        />
      </div>

      <div className="grid grid-cols-4 max-w-3xl gap-4">
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80"
            alt={`Thumb ${index + 1}`}
            onClick={() => setMainImage(src)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
