import { scroller } from "react-scroll";

export const TarjetasFinales = ({
	tarjeta_compu,
	tarjeta_usuario,
	setPaso4,
	setPaso6,
	luchar,
}) => {

	const scrollToPaso6 = () => {
		return new Promise((resolve) => {
			setPaso6(true);
			resolve();
		});
	};


	const handleNext = async () => {
		setPaso4(false);
		luchar();
		await scrollToPaso6();
		scroller.scrollTo("paso6");
	};

	return (
		<>
			<h2>Estas son las tarjetas de poder finales de cada equipo:</h2>
			<div className="cruce_tarjetas_equipos">
				<div className="tarjeta_equipos">
					<div className="tarjetas_equipos_poderes">
						<p>Inteligencia: {tarjeta_compu[0]}</p>
						<p>Fuerza: {tarjeta_compu[1]}</p>
						<p>Velocidad: {tarjeta_compu[2]}</p>
						<p>Resistencia: {tarjeta_compu[3]}</p>
						<p>Energía proyectada: {tarjeta_compu[4]}</p>
						<p>Habilidad de combate: {tarjeta_compu[5]}</p>
					</div>
					<div className="tarjeta_equipos_nombre_imagen">
						<div className="tarjeta_equipos_nombre">
							<h3>EQUIPO COMPU</h3>
						</div>
						<div className="tarjeta_equipos_imagen">
							<img
								className="solo_imagen_compu"
								src="../supercompu.png"
								alt="Compu"></img>
						</div>
					</div>
				</div>

				<div className="versus">
					<img src="../versus.png" alt="vs." width="90"></img>
				</div>

				<div className="tarjeta_equipos">
					<div className="tarjetas_equipos_poderes">
						<p>Inteligencia: {tarjeta_usuario[0]}</p>
						<p>Fuerza: {tarjeta_usuario[1]}</p>
						<p>Velocidad: {tarjeta_usuario[2]}</p>
						<p>Resistencia: {tarjeta_usuario[3]}</p>
						<p>Energía proyectada: {tarjeta_usuario[4]}</p>
						<p>Habilidad de combate: {tarjeta_usuario[5]}</p>
					</div>
					<div className="tarjeta_equipos_nombre_imagen">
						<div className="tarjeta_equipos_nombre">
							<h3>TU EQUIPO</h3>
						</div>
						<div className="tarjeta_equipos_imagen">
							<img src="../usuario.png" alt="Usuario"></img>
						</div>
					</div>
				</div>
			</div>
			<div className="start">
				<img
					onClick={handleNext}
					src="../boton_fight.png"
					alt="Botón luchar"
					width="250px"></img>
			</div>
		</>
	);
};
