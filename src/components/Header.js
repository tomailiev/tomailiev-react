import flag_en from '../imgs/gb.svg';
import flag_bg from '../imgs/bg.svg';
import { useContext, useState } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageContext from "../context/languageContext";
import NavbarThemeContext from "../context/navbarThemeContext";

const Header = () => {
    const { navbarTheme } = useContext(NavbarThemeContext);
    const { language: { navs }, setLanguage, code } = useContext(LanguageContext);
    const [navbarBG, setNavbarBG] = useState(null);

    const imageCss = {
        position: 'relative',
        left: '50%',
        top: '22%',
        width: '20px',
        maxWidth: '100%',
        maxHeight: '100%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer'
    }


    function toggleNavbarBG(expanded) {
        expanded
            ? setNavbarBG(navbarTheme ? 'dark' : 'light')
            : setNavbarBG(null);
    }

    function toggleLanguage() {
        setLanguage(prev => prev === 'en' ? 'bg' : 'en');
    }

    return (
        <header className="text-capitalize text-white snaptarget" style={{ position: 'absolute', left: 0, top: 0, minWidth: '100%', zIndex: 700 }}>
            <Navbar onToggle={toggleNavbarBG} bg={navbarBG} variant={navbarTheme || 'light'} expand="lg" collapseOnSelect className="text-white">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>{navs.brand}</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" label="Toggle navigation" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-md-end">
                        <Nav>
                            <LinkContainer className="p-3" to="/">
                                <Nav.Link>{navs.home}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="p-3" to="about">
                                <Nav.Link>{navs.about}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="p-3" to="calendar">
                                <Nav.Link>{navs.calendar}</Nav.Link>
                            </LinkContainer>
                            <NavDropdown className="p-2" title={navs.media} id="navbarScrollingDropdown">
                                <LinkContainer to="photos">
                                    <NavDropdown.Item>{navs.photos}</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="audios">
                                    <NavDropdown.Item>{navs.audio}</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="videos">
                                    <NavDropdown.Item>{navs.video}</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer className="p-3" to="disco">
                                <Nav.Link>{navs.disco}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="p-3" to="contact">
                                <Nav.Link>{navs.contact}</Nav.Link>
                            </LinkContainer>
                            <Nav.Item onClick={toggleLanguage} className="p-3">
                                <Image src={code === 'en' ? flag_bg : flag_en} style={imageCss} />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;