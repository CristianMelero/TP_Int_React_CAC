import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Contacto} from "./Contacto";
import {LinksInteres} from "./LinksInteres";
import {MapaSitio} from "./MapaSitio";
import "../css.css";

export const Footer = ()=>{


    return(
        <>
    <BrowserRouter>

        <Routes>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/mapa" element={<MapaSitio/>}/>
          <Route path="/links" element={<LinksInteres/>}/>
        </Routes>

        <>
            <footer className="footer">
                <Link class="link" to='/contacto'>Contacto</Link> 
                <Link class="link" to='/mapa'>Mapa del Sitio</Link> 
                <Link class="link" to='/links'>Link de Interes</Link> 
            </footer>
        </>

    </BrowserRouter> 
      
        </>
    )
}