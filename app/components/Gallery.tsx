'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const images = [
  { src: '/placeholder.svg?height=400&width=600', alt: 'صورة المعرض 1' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'صورة المعرض 2' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'صورة المعرض 3' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'صورة المعرض 4' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'صورة المعرض 5' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'صورة المعرض 6' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          معرض أعمالنا
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-w-16 aspect-h-9 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image
              src={selectedImage || '/placeholder.svg'}
              alt="الصورة المختارة"
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 left-4 text-white hover:text-orange-500"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
