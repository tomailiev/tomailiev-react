import { Carousel, Container, Image } from "react-bootstrap"
import { useContext, useEffect, useState } from "react";
import { getItems } from "../utils/firebaseDB";
import { getStorageUrl, getLink } from "../utils/firebaseStorage";
import LoadingContext from "../context/loadingContext";

const Gallery = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const [images, setImages] = useState(null);
    const [caps, setCaps] = useState([]);


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
        <Container fluid className="py-2">
            <h1>Photos</h1>
            <Container fluid className="bg-dark" style={{ height: '100vh', width: '100%', }}>
                {!!images && !isLoading && <Carousel indicators={false} interval={null} fade>
                    {images.map((x, i) => (
                        <Carousel.Item key={x}>
                            <Image src={x} />
                            <Carousel.Caption>
                                <p className="text-light">{caps[i]}</p>
                            </Carousel.Caption>
                            {/* <div className="text-light">{x.caption}</div> */}
                        </Carousel.Item>
                    ))}
                </Carousel>}
            </Container>
        </Container >
    );
};

export default Gallery;