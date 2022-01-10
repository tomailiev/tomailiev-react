import { Container, Image } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Pagination } from "swiper";
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
        <Container className="py-2">
            <h1>Photos</h1>
            <Container className="bg-dark">
                <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    onSlideChange={() => console.log('slide change')}
                    centeredSlides
                    navigation
                    pagination
                >
                    {images && !isLoading && images.map(x => (
                        <SwiperSlide key={x}>
                            <Image
                                fluid
                                src={x} />
                            {/* <div className="text-light">{x.caption}</div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Container >
    );
};

export default Gallery;