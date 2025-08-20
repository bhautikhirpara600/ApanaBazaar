import { useState } from "react";

const ImageWithSkeleton = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className} media720:block mt-8 flex justify-evenly space-y-8`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-md" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ImageWithSkeleton;