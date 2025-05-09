import React, { useState } from "react";
import placeholderImg from "../assets/placeholder.png";

function LazyImage({ src, alt, width, height, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <>
      {!isLoaded && (
        <img
          className={className}
          src={placeholderImg}
          alt={alt}
          width={width}
          height={height}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        // loading="lazy"
        onLoad={handleImageLoad}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
}

export default LazyImage;
