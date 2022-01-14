import { Carousel, Container, Image } from "react-bootstrap"
import { useContext, useEffect, useState } from "react";
import { getItems } from "../utils/firebaseDB";
import { getLink } from "../utils/firebaseStorage";
import LoadingContext from "../context/loadingContext";
import Spacer from "./Spacer";

const Gallery = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const [images, setImages] = useState(null);
    const [caps, setCaps] = useState([]);

    const imgCSS = {
        position: 'relative',
        left: '50%',
        top: '50%',
        maxWidth: '100%',
        maxHeight: '100%',
        transform: 'translate(-50%, -50%)',
      }

    useEffect(() => {
        setIsLoading(true);
        getItems('images')
            .then(docs => {
                setCaps(docs.map(x => x.caption));
                return Promise.all(docs.map(({ imageUrl }) => getLink(imageUrl.replace('https://tomailiev.com/pics', 'images'))));
            })
            .then(pics => {
                setImages(pics);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
    }, [setIsLoading]);

    return (
        <Container fluid className="py-2 px-0">
            <Spacer height={5} />
            <h1>Photos</h1>
            <Container fluid className="bg-dark px-0" style={{ height: '100vh'}}>
                {!!images && !isLoading && (
                    <Carousel indicators={false} interval={null}>
                        {images.map((x, i) => (
                            <Carousel.Item key={x} style={{height: '100vh'}}>
                                <Image src={x} style={imgCSS} />
                                <Carousel.Caption>
                                    <p className="text-light bg-dark">{caps[i]}</p>
                                </Carousel.Caption>
                                {/* <div className="text-light">{x.caption}</div> */}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Container>
            <Spacer height={5} />
        </Container >
    );
};

export default Gallery;