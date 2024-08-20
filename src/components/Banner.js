import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import LanguageContext from "../context/languageContext";
import { bannerCSS } from '../styles-js';

const Banner = () => {
    const { language: { titles }, code } = useContext(LanguageContext);

    return (
        <Container fluid className="align-items-center" style={{...bannerCSS, background: bannerCSS.background[code]}}>
            <Row className="align-items-center h-100">
                <div className="text-center text-white col-md-4 offset-md-8">
                    <h1>{titles.home.main}</h1>
                    <h3>{titles.home.sub}</h3>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;