import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageContext from "../context/languageContext";

const BioMini = () => {
    const { language: { titles, buttons, miniBio, special } } = useContext(LanguageContext);

    return (
        <Col md={8} className="fs-4">
            <h3 className="my-3">{titles.home.bio}</h3>
            {special && <p>{special.text}<a href={special.href} target="blank" >{special.link}</a>{special.text_end}</p>}
            <p>{miniBio}</p>
            <LinkContainer to="/about">
                <Button size="sm" variant="outline-dark">{buttons.home.bio} &#187;</Button>
            </LinkContainer>
        </Col>
    );
};

export default BioMini;