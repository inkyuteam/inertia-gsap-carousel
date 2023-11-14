import { horizontalLoop } from "../../../utils/gsap";
import "./Carousel.scss";
import { useEffect } from "react";
import { gsap } from "gsap";

interface CarouselType {
  images: string[];
}

export const Carousel: React.FC<CarouselType> = ({ images }) => {
  useEffect(() => {
    const boxes: HTMLDivElement[] = gsap.utils.toArray(".carousel-item");
    // const colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

    if (boxes.length > 0) {
      // gsap.set(boxes, {
      //   backgroundColor: gsap.utils.wrap(colors),
      // });
      const loop = horizontalLoop(boxes, { paused: true, draggable: true });
      // boxes.forEach((box, i) =>
      //   box.addEventListener("click", () =>
      //     loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" })
      //   )
      // );
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
