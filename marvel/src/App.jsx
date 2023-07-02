import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Album } from "./components/album/Album";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Juego } from "./components/Juego";
import { LinksInteres } from "./components/LinksInteres";
import { Login } from "./components/Login";
import { MapaSitio } from "./components/MapaSitio";
import { Nosotros } from "./components/Nosotros";
import { Tienda } from "./components/tienda/Tienda";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";
import { Noticia } from "./components/Noticia";
import "./styles.css";
import { CartView } from "./components/tienda/CartView";
import { MediosPagos } from "./components/tienda/MediosPagos";
import { ItemDetailContainer } from "./components/tienda/ItemDetailContainer";

function App() {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route path="/album" element={<Album />} />
						<Route path="/juego" element={<Juego />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/login" element={<Login />} />
						<Route path="/mapa" element={<MapaSitio />} />
						<Route
							path="/links_interes"
							element={<LinksInteres />}
						/>
						<Route path="/tienda" element={<Tienda />} />
						<Route path="/nosotros" element={<Nosotros />} />
						<Route path="/create" element={<Create />} />
						<Route path="/edit/:id" element={<Edit />} />
						<Route path="/noticia/:id" element={<Noticia />} />
						<Route path="/noticia/:id" element={<Noticia />} />
						<Route path="/cart" element={<CartView />} />
						<Route
							path="/detail/:id"
							element={<ItemDetailContainer />}
						/>
						<Route path="/mediosdepago" element={<MediosPagos />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;
