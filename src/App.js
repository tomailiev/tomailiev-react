import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Calendar from './components/Calendar';
import Media from './components/Media';
import Discography from './components/Discography';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import EventContext from './context/eventContext';
import { useState } from 'react';
import LoadingContext from './context/loadingContext';
import NavbarThemeContext from './context/navbarThemeContext';

function App() {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [navbarTheme, setNavbarTheme] = useState(null);

  return (
    <div className="App">
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <EventContext.Provider value={{ event, setEvent }} >
          <NavbarThemeContext.Provider value={{ navbarTheme, setNavbarTheme }} >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="photos" element={<Gallery />} />
              <Route path="videos" element={<Media />} />
              <Route path="audios" element={<Media />} />
              <Route path="disco" element={<Discography />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
          </NavbarThemeContext.Provider>
        </EventContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
