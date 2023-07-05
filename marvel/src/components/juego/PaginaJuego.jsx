import { Header } from "../../components/Header";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Juego } from "./Juego";
import "./PaginaJuego.css"



export const PaginaJuego = () => {

	// <BrowserRouter>
	// <Header />
	// 	<Routes>
	// 		<Route path="/juego" element={<Juego />} />
	// 	</Routes>
	// </BrowserRouter>

	return (
		<>
		<div className="logoMarvel">
		<p><img src="../logoMarvel.png" alt="Logo Marvel" width="250"></img></p>
		</div>
		<div className="imagenJuego">
		<p><img src="../imagenJuego.png" alt="Botón Start Game" width="1000"></img></p>
		</div>
		<div className="instrucciones">
		<p><img src="../instrucciones.png" alt="Botón Start Game" width="200"></img></p>
		</div>
		<div className="equipos">
		<div className=".tuEquipo">
		<h2>¡Tu equipo!</h2>
		<p><img src="../heroe_usuarioTJ.png" alt="Héroe" width="200"></img></p>
		<p><img src="../ironman_TJ.png" alt="Iron Man" width="200"></img></p>
		<p><img src="../thor_TJ.png" alt="Thor" width="200"></img></p>
		</div>
		<div className=".versus">
		<p><img src="../versus.png" alt="vs." width="150"></img></p>
		</div>
		<div className=".elNuestro">
		<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡El nuestro!</h1><br />
		<p><img src="../heroe_azar.png" alt="vs." width="200"></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../heroe_azar.png" alt="vs." width="200"></img></p>
		<p><img src="../heroe_azar.png" alt="vs." width="200"></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../heroe_azar.png" alt="vs." width="200"></img></p>
		<p><img src="../heroe_azar.png" alt="vs." width="200"></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../heroe_azar.png" alt="vs." width="200"></img></p>
		</div>
		</div>
		<Nav>
			<Link to="/juego">
				<img src="../start.png" alt="Botón Start Game" width="125"></img>
			</Link>
		</Nav>


		</>
	);
};