import { Carousel, Container, Image } from "react-bootstrap"
import { useContext, useEffect, useState } from "react";
import { getItems } from "../utils/firebaseDB";
import getStorageUrl from "../utils/firebaseStorage";
import LoadingContext from "../context/loadingContext";

const Gallery = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const [images, setImages] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        getStorageUrl('images')
            .then(docs => {
                setImages(docs);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
        // getItems('images', ['fb', '!=', false])
        //     .then(docs => {
        //         setImages(docs);
        //     })
    }, []);

    return (
        <Container fluid className="py-2">
            <h1>Photos</h1>
            <Container fluid className="bg-dark" style={{ height: '100vh', width: '100%', }}>
                <Carousel indicators={false} fade>
                    {images && !isLoading && images.map(x => (
                        <Carousel.Item key={x}>
                            <Image src={x} />
                            {/* <div className="text-light">{x.caption}</div> */}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Container >
    );
};

export default Gallery;