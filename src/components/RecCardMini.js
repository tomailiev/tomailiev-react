import { useContext } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageContext from "../context/languageContext";
import { homeCardCSS } from "../styles-js";

const RecCardMini = ({ rec }) => {
    const { language: { buttons } } = useContext(LanguageContext);

    return (
        <Card style={homeCardCSS}>
            <div className="img-restrain">
                <a href={rec.infoUrl} target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={rec.imageUrl} alt="CD cover" />
                </a>
            </div>
            <Card.Body className="card-home">
                <Container fluid>
                    <Row>
                        <Button href={rec.cdUrl} rel="noreferrer" target="_blank" size="sm" variant="outline-dark" className="my-2">
                            {buttons.home.buyCD}
                        </Button>
                        <LinkContainer to="/disco">
                            <Button size="sm" variant="outline-dark">{buttons.home.moreCDs}</Button>
                        </LinkContainer>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    );
};

export default RecCardMini;