import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Calendar from './components/Calendar';
import Media from './components/Media';
import Discography from './components/Discography';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="videos" element={<Media />} />
        <Route path="audios" element={<Media />} />
        <Route path="disco" element={<Discography />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
