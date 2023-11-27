import { Container, Image, Row } from "react-bootstrap";
import BioFull from "./BioFull";
import Blockquote from "./Blockquote";
import Spacer from "./Spacer";
import bioImage from '../imgs/toma_sq.webp';
import { useContext } from "react";
import LanguageContext from "../context/languageContext";

const About = () => {
    const { language: { fullBio, titles, blockquotes } } = useContext(LanguageContext);

    return (
        <div className="text-dark py-5 bg-light">
            <Spacer height={4} />
            <Container>
                <h1 className="py-2">{titles.about}</h1>
                <Row>
                    <BioFull text={fullBio} />
                    <div className="col-lg-4">
                        <Image
                            fluid
                            src={bioImage}
                            className="d-md-block p-3 border aside" />
                        {blockquotes.map((x, i) => <Blockquote blockquote={x} key={i} />)}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;