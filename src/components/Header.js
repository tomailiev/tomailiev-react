import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header className="text-capitalize text-white snaptarget">
            <Navbar variant="dark" expand="lg" style={{position: 'absolute', left: 0, top: 0, minWidth: '100%'}} className="text-white">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>Toma Iliev</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" label="Toggle navigation" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-md-end">
                        <Nav>
                            <LinkContainer className="p-3" to="/">
                                <Nav.Link>home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="p-3" to="about">
                                <Nav.Link>about</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="p-3" to="calendar">
                                <Nav.Link>calendar</Nav.Link>
                            </LinkContainer>
                            <NavDropdown className="p-2" title="media" id="navbarScrollingDropdown">
                                <LinkContainer to="photos">
                                    <NavDropdown.Item>photos</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to="audios">
                                    <NavDropdown.Item>audio</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="videos">
                                    <NavDropdown.Item>video</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer className="p-3" to="disco">
                                <Nav.Link>discography</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="p-3" to="contact">
                                <Nav.Link>contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;