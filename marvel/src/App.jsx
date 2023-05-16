import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio, Album, Contacto, Juego, Login,
MapaSitio, Nosotros, LinksInteres, Tienda } from './components/index.js';
import './styles.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/album" element={<Album/>}></Route>
          <Route path="/juego" element={<Juego/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/mapa" element={<MapaSitio/>}></Route>
          <Route path="/links_interes" element={<LinksInteres/>}></Route>
          <Route path="/tienda" element={<Tienda/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

