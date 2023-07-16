import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Album } from "./components/album/Album";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Juego } from "./components/juego/juego1/Juego";
import { LinksInteres } from "./components/LinksInteres";
import { Login } from "./components/autenticación/Login";
import { Register } from "./components/autenticación/Register";
import { Reset } from "./components/autenticación/Reset";
import { MapaSitio } from "./components/MapaSitio";
import { Nosotros } from "./components/Nosotros";
import { Tienda } from "./components/tienda/Tienda";
import { Create } from "./components/noticias/Create";
import { Edit } from "./components/noticias/Edit";
import { Noticia } from "./components/noticias/Noticia";
import { NoticiasAll } from "./components/noticias/NoticiasAll";
import "./styles.css";
import { CartView } from "./components/tienda/CartView";
import { MediosPagos } from "./components/tienda/MediosPagos";
import { ItemDetailContainer } from "./components/tienda/ItemDetailContainer";
import { CharacterDetail } from "./components/album/PersonajeDetalle";
import { PaginaJuego } from "./components/juego/PaginaJuego";
import { OtroJuego } from "./components/juego/juego2/OtroJuego";

function App() {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route path="/album" element={<Album />} />
						<Route path="/character/:characterId" element={<CharacterDetail />} />
						<Route path="/juego" element={<Juego />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/login" element={<Login />} />
						<Route path="/mapa" element={<MapaSitio />} />
						<Route
							path="/links_interes"
							element={<LinksInteres />}
						/>
						<Route path="/tienda" element={<Tienda />} />
						<Route path="/tienda/:categoryId" element={<Tienda />} />
						<Route path="/nosotros" element={<Nosotros />} />
						<Route path="/create" element={<Create />} />
						<Route path="/edit/:id" element={<Edit />} />
						<Route path="/noticias/noticia/:id" element={<Noticia />} />
						<Route path="/noticias" element={<NoticiasAll/>} />
						<Route path="/cart" element={<CartView />} />
						<Route
							path="/detail/:id"
							element={<ItemDetailContainer />}
						/>
						<Route path="/mediosdepago" element={<MediosPagos />} />
						<Route path="/login" element={<Login/>}/>
						<Route path="/register" element={<Register/>}/>
						<Route path="/reset" element={<Reset/>}/>
						<Route path="/paginajuego" element={<PaginaJuego />} />
						<Route path="/juegosecreto" element={<OtroJuego />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;
