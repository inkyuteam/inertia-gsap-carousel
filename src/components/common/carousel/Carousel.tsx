import { horizontalLoop } from "../../../utils/gsap";
import "./Carousel.scss";
import { useEffect } from "react";
import { gsap } from "gsap";

interface ConfigType {}

interface CarouselType {
  images: string[];
  config?: ConfigType;
}

export const Carousel: React.FC<CarouselType> = ({ images, config }) => {
  useEffect(() => {
    const boxes: HTMLDivElement[] = gsap.utils.toArray(".carousel-item");

    if (boxes.length > 0) {
      const loop = horizontalLoop(boxes, { paused: true, draggable: true });
      console.log("loop: ", loop);
    }
  }, [images]);

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
