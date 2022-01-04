import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="text-capitalize snaptarget">
            <Navbar expand="lg" bg="light">
                <Container>
                    <Navbar.Brand href="#">Toma Iliev</Navbar.Brand>
                    <Navbar.Toggle type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-md-end">
                        <Nav>
                            <LinkContainer to="/">
                                <Nav.Link>home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>about</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="#/upcoming">calendar</Nav.Link>
                            <NavDropdown title="media" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#/gallery">photos</NavDropdown.Item>
                                <NavDropdown.Item href="#/audio">audio</NavDropdown.Item>
                                <NavDropdown.Item href="#/video">video</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#/disco">discography</Nav.Link>
                            <Nav.Link href="#/contact">contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;