import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';
import ToTop from './components/ToTop';


function App() {

  const clickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <CartContextProvider>
    <Browser>
      <Header clickToTop={clickToTop}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobreNosotros" element={<AboutUs />} />
          <Route exact path="/contacto" element={<ContactUs />}/>
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/carrito' element={<Cart />} />
        </Routes>
      <Footer clickToTop={clickToTop}/>
    </Browser>
    </CartContextProvider>
  );
};

export default App;
