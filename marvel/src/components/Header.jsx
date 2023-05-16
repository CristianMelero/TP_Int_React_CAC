import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Inicio} from "./Inicio";
import {Album} from "./Album";
import {Login} from "./Login";
import {Juego} from "./Juego";
import {Tienda} from "./Tienda";
import {Nosotros} from "./Nosotros";
import "../css.css";

export const Header = ()=>{

    return(
        <>
    <BrowserRouter>

        <header>
            <nav>
                <Link class="link" to='/'>Inicio</Link>
                <Link class="link" to='/album'>Album</Link>
                <Link class="link" to='/juego'>Juego</Link>
                <Link class="link" to='/tienda'>Tienda</Link>
                <Link class="link" to='/nosotros'>Nosotros</Link>
                <Link class="link" to='/login'>Login</Link>
            </nav>
        </header>

        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Album" element={<Album/>}/>
          <Route path="/Juego" element={<Juego/>}/>
          <Route path="/tienda" element={<Tienda/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

    </BrowserRouter> 
      
        </>    
    )
}

