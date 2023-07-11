import { Header } from "../../components/Header";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Juego } from "./juego1/Juego";
import "./PaginaJuego.css";

export const PaginaJuego = () => {
	const handleMove = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	  };

	return (
		<>
			<div className="logoMarvel">
				<div>
					<img
						src="../logoMarvel.png"
						alt="Logo Marvel"
						width="250"></img>
				</div>
			</div>
			<div className="imagenJuego">
				<div>
					<img
						src="../imagenJuego.png"
						alt="Botón Start Game"
						width="1000"></img>
				</div>
			</div>
			<div className="instrucciones">
				<div>
					<img
						src="../instrucciones.png"
						alt="Botón Start Game"
						width="200"></img>
				</div>
			</div>
			<div className="equipos">
				<div>
					<h2>&nbsp;&nbsp;¡Tu equipo!</h2>
					<br />
					<div>
						<img
							src="../heroe_usuarioTJ.png"
							alt="Héroe"
							width="200"></img>
					</div>
					<div>
						<img
							src="../ironman_TJ.png"
							alt="Iron Man"
							width="200"></img>
					</div>
					<div>
						<img src="../thor_TJ.png" alt="Thor" width="200"></img>
					</div>
				</div>
				<div className="versus">
					<div>
						<img src="../versus.png" alt="vs." width="150"></img>
					</div>
				</div>
				<div>
					<h2>&nbsp;&nbsp;¡El nuestro!</h2>
					<br />
					<div>
						<img
							src="../heroe_azar.png"
							alt="vs."
							width="200"></img>
					</div>
					<div>
						<img
							src="../heroe_azar.png"
							alt="vs."
							width="200"></img>
					</div>
					<div>
						<img
							src="../heroe_azar.png"
							alt="vs."
							width="200"></img>
					</div>
				</div>
			</div>
			<div className="start">
				<Link to="/juego" onClick={handleMove}>
					<img
						src="../start.png"
						alt="Botón Start Game"
						width="125"></img>
				</Link>
			</div>
		</>
	);
};
