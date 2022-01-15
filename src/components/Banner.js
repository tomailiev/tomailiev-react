import { Container, Row } from "react-bootstrap";
import bannerImage from '../imgs/6.jpg';
import backupBannerImage from '../imgs/6666.jpg';

const bannerCSS = {
    height: '75vh',
    background: `url(${bannerImage}) no-repeat center center, url(${backupBannerImage}) no-repeat center center`,
    backgroundSize: 'cover',
    transition: 'all 2s ease-in',
}

const Banner = () => {
    return (
        <Container fluid className="align-items-center" style={bannerCSS}>
            <Row style={{ height: '100%' }} className="align-items-center">
                <div className="text-center text-white col-md-4 offset-md-8">
                    <h1>Toma Iliev</h1>
                    <h3>Historical Strings</h3>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;