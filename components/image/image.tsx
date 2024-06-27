import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageProps {
  url: string;
  alt: string;
}

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const ImageComponent: React.FC<ImageProps> = ({ url, alt }) => {
  const [imgSrc, setImgSrc] = useState('/placeholder-book.svg');

  useEffect(() => {
    if (isValidUrl(url)) {
      setImgSrc(url);
    } else {
      setImgSrc('/placeholder-book.svg');
    }
  }, [url]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={200}
      height={200}
      onError={() => setImgSrc('/placeholder-book.svg')}
      className="rounded-lg"
    />
  );
};

export default ImageComponent;
