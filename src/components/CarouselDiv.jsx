import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselDiv = () => {
  return (
    <Carousel>
      <div>
        <img src="https://picsum.photos/250/250" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/250/250" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/250/250" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselDiv;
