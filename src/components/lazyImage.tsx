import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";

type LazyImageProps = {
  src: string;
  alt: string;
  placeholder?: string;
};

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  opacity: 0,
  filter: "blur(10px)",
  transition: "opacity 0.5s ease-in-out, filter 0.5s ease-in-out",

  "&.loaded": {
    opacity: 1,
    filter: "blur(0)",
  },
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  objectFit: "cover",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
  "&:active": {
    transform: "scale(0.95)",
    transition: "transform 0.1s ease-in-out",
  },
}));

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, placeholder }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <StyledImage
      ref={imgRef}
      src={isVisible ? src : placeholder || ""}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={isLoaded ? "loaded" : ""}
      loading="lazy"
    />
  );
};

export default LazyImage;
