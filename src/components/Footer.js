import { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import LanguageContext from "../context/languageContext";
import { footerCSS } from "../styles-js";
import Spacer from "./Spacer";

const Footer = () => {
    const {language: {footer}} = useContext(LanguageContext);
    return (
        <>
            <Spacer height={5} />
            <footer className="panel-footer bg-dark text-light" style={footerCSS}>
                <Container fluid>
                    <Row className="justify-content-center my-2">
                        <Container className="text-center">
                            <Button variant="dark" href="https://www.facebook.com/iliev.toma" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></Button>
                            <Button variant="dark" href="https://www.youtube.com/channel/UC9bg9ykO9gwWp-3D5jKpFSA/channels?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square fa-2x"></i></Button>
                            <Button variant="dark" href="https://www.linkedin.com/in/toma-iliev-b29564121" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></Button>
                        </Container>
                    </Row>
                    <Row className="justify-content-center">
                        <div className="footer-copyright text-center py-3">{footer.copy}
                            <span className="font-weight-bold">{footer.bold}</span>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;