import { Button, Card, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const RecCardMini = ({ rec }) => {
    return (
        <Card style={{ width: '16rem' }}>
            <div className="img-restrain">
                <a href={rec.infoUrl} target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={rec.imageUrl} alt="CD cover" />
                </a>
            </div>
            <Card.Body className="card-home">
                <Container fluid>
                    <Row>
                        <Button href={rec.cdUrl} rel="noreferrer" target="_blank" size="sm" variant="outline-dark" className="my-2">
                            Buy CD
                        </Button>
                        <LinkContainer to="/disco">
                            <Button size="sm" variant="outline-dark">More CDs</Button>
                        </LinkContainer>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    );
};

export default RecCardMini;