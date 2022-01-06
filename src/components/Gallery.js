import { Container, Image } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Pagination } from "swiper";

const Gallery = () => {
    return (
        <Container fluid className="py-2">
            <h1>Photos</h1>
            <Container className="bg-dark">
                <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    onSlideChange={() => console.log('slide change')}
                    centeredSlides
                    // autoHeight
                    navigation
                    pagination
                    effect="fade"
                >
                    <SwiperSlide>
                        <Image
                            fluid
                            src="https://tomailiev.com/pics/ver3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            fluid
                            src="https://tomailiev.com/pics/ver3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            fluid
                            src="https://tomailiev.com/pics/ver3.jpg" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            fluid
                            src="https://tomailiev.com/pics/ver3.jpg" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            fluid
                            src="https://tomailiev.com/pics/ver3.jpg" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Container >
    );
};

export default Gallery;