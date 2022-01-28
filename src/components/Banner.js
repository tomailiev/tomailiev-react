import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import LanguageContext from "../context/languageContext";
import bannerImage from '../imgs/6.jpg';
import backupBannerImage from '../imgs/6666.jpg';

const bannerCSS = {
    height: '75vh',
    background: `url(${bannerImage}) no-repeat center center, url(${backupBannerImage}) no-repeat center center`,
    backgroundSize: 'cover',
    transition: 'all 2s ease-in',
}

const Banner = () => {
    const { language: { titles } } = useContext(LanguageContext);

    return (
        <Container fluid className="align-items-center" style={bannerCSS}>
            <Row style={{ height: '100%' }} className="align-items-center">
                <div className="text-center text-white col-md-4 offset-md-8">
                    <h1>{titles.home.main}</h1>
                    <h3>{titles.home.sub}</h3>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;