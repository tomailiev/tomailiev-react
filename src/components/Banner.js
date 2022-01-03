import { Container, Row } from "react-bootstrap";
import './Banner.scss';

const Banner = () => {
    return (
        <Container fluid className="h-75 bg-image">
            <Row className="h-100">
                <div className="text-center text-white my-auto col-md-4 offset-md-8">
                    <h1>Toma Iliev</h1>
                    <h3>Historical Strings</h3>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;