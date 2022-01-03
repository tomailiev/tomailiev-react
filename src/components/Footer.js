import { Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="panel-footer bg-dark border-top text-light">
            <Container fluid>
                <Row className="justify-content-center">
                    <Container>
                        <a href="https://www.facebook.com/iliev.toma" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square fa-2x"></i></a>
                        <a href="https://www.youtube.com/channel/UC9bg9ykO9gwWp-3D5jKpFSA/channels?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube-square fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/toma-iliev-b29564121" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
                    </Container>
                </Row>
                <Row className="justify-content-center">
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <span className="font-weight-bold"> tomailiev.com</span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;