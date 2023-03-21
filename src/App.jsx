import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {

  return (
    <Browser>
      <Header />
        <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SobreNosotros" element={<AboutUs />} />

        </Routes>

      <Footer />
    </Browser>
  )
};

export default App;
