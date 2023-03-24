import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Browser>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobreNosotros" element={<AboutUs />} />
          <Route exact path="/contacto" element={<ContactUs />}/>
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />}/>
        </Routes>
      <Footer />
    </Browser>
  );
};

export default App;
