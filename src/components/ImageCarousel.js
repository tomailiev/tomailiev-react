import { Carousel, Image } from "react-bootstrap";
import { imageCarouselCSS } from '../styles-js';

const ImageCarousel = ({ images, caps }) => {

    return (
        <Carousel indicators={false} interval={null}>
            {images.map((x, i) => (
                <Carousel.Item key={x} className="vh-100">
                    <Image loading="lazy" src={x} style={imageCarouselCSS} />
                    <Carousel.Caption>
                        <p className="text-light bg-dark">{caps[i]}</p>
                    </Carousel.Caption>
                    {/* <div className="text-light">{x.caption}</div> */}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;