import flag_en from '../imgs/gb.svg';
import flag_bg from '../imgs/bg.svg';
import { useContext, useState } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageContext from "../context/languageContext";
import NavbarThemeContext from "../context/navbarThemeContext";
import { headerCSS, imageBGCSS, navbarCSS } from '../styles-js';

const Header = () => {
    const { navbarTheme } = useContext(NavbarThemeContext);
    const { language: { navs }, setLanguage, code } = useContext(LanguageContext);
    const [navbarBG, setNavbarBG] = useState(null);

    function toggleNavbarBG(expanded) {
        expanded
            ? setNavbarBG(navbarTheme ? 'dark' : 'light')
            : setTimeout(() => {
                setNavbarBG(null);
            }, 300);
    }

    function toggleLanguage() {
        setLanguage(prev => prev === 'en' ? 'bg' : 'en');
    }

    return (
        <header className="text-capitalize text-white snaptarget" style={headerCSS}>
            <Navbar onToggle={toggleNavbarBG} bg={navbarBG} variant={navbarTheme || 'light'} expand="lg" collapseOnSelect className="text-white" style={navbarBG && navbarCSS}>
                <Container fluid>
                    {navbarBG
                        ? <Navbar.Brand>{navs.brand}</Navbar.Brand>
                        : <LinkContainer to="/">
                            <Navbar.Brand>{navs.brand}</Navbar.Brand>
                        </LinkContainer>}
                    <Navbar.Toggle aria-controls="navbarSupportedContent" label="Toggle navigation" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-md-end" >
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
                            <NavDropdown className="px-3 py-2" title={navs.media}>
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
                                <Image src={code === 'en' ? flag_bg : flag_en} style={imageBGCSS} />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;