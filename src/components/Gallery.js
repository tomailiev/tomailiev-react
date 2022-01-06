import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Gallery = () => {
    return (
        <Container className="container-fluid py-2">
            <h1>Photos</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide1</SwiperSlide>
                <SwiperSlide>Slide2</SwiperSlide>
                <SwiperSlide>Slide3</SwiperSlide>
                <SwiperSlide>Slide4</SwiperSlide>
                <SwiperSlide>Slide5</SwiperSlide>
            </Swiper>
        </Container >
    );
};

export default Gallery;