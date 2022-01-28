import { Carousel, Image } from "react-bootstrap";

const ImageCarousel = ({ images, caps }) => {

    const imgCSS = {
        position: 'relative',
        left: '50%',
        top: '50%',
        maxWidth: '100%',
        maxHeight: '100%',
        transform: 'translate(-50%, -50%)',
    }

    return (
        <Carousel indicators={false} interval={null}>
            {images.map((x, i) => (
                <Carousel.Item key={x} style={{ height: '100vh' }}>
                    <Image loading="lazy" src={x} style={imgCSS} />
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