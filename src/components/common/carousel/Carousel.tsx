import { useEffect } from "react";
import "./Carousel.scss";

interface CarouselType {
  images: string[];
}

export const Carousel: React.FC<CarouselType> = ({ images }) => {
  useEffect(() => {
    
  }, []);
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => {
          return (
            <div className="carousel-item" key={image}>
              <img src={image} alt={`Img ${index}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
