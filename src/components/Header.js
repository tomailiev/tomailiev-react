import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header className="text-capitalize snaptarget">
            <Navbar expand="lg" bg="light">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Toma Iliev</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" label="Toggle navigation" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-md-end">
                        <Nav>
                            <LinkContainer to="/">
                                <Nav.Link>home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="about">
                                <Nav.Link>about</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="calendar">
                                <Nav.Link>calendar</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="media" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#/gallery">photos</NavDropdown.Item>
                                <LinkContainer to="audios">
                                    <NavDropdown.Item>audio</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="videos">
                                    <NavDropdown.Item>video</NavDropdown.Item>
                                </LinkContainer>
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