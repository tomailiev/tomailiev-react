import { Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import english from '../text/english.json';

const BioMini = () => {
    return (
        <Col md={8} className="fs-4">
            <h3 className="my-3">Bio</h3>
            <p>{english.miniBio}</p>
            <LinkContainer to="/about">
                <Button size="sm" variant="outline-dark">Continue reading &#187;</Button>
            </LinkContainer>
        </Col>
    );
};

export default BioMini;