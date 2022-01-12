import { Container, Row } from "react-bootstrap";
import './Banner.scss';

const Banner = () => {
    return (
        <Container fluid className="bg-image align-items-center">
            <Row style={{height: '100%'}} className="align-items-center">
                <div className="text-center text-white col-md-4 offset-md-8">
                    <h1>Toma Iliev</h1>
                    <h3>Historical Strings</h3>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;