import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Album } from "./components/Album";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Juego } from "./components/Juego";
import { LinksInteres } from "./components/LinksInteres";
import { Login } from "./components/Login";
import { MapaSitio } from "./components/MapaSitio";
import { Nosotros } from "./components/Nosotros";
import { Tienda } from "./components/Tienda";
import "./styles.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/album" element={<Album />} />
					<Route path="/juego" element={<Juego />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/login" element={<Login />} />
					<Route path="/mapa" element={<MapaSitio />} />
					<Route path="/links_interes" element={<LinksInteres />} />
					<Route path="/tienda" element={<Tienda />} />
					<Route path="/nosotros" element={<Nosotros />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
