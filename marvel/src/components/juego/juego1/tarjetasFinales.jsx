import { scroller } from "react-scroll";

export const TarjetasFinales = ({
	tarjeta_compu,
	tarjeta_usuario,
	setImagen_ganador,
	setGanador,
	setPaso4,
	setPaso6,
}) => {

		//FUNCION PARA DEFINIR EL GANADOR
		const luchar = () => {
			//CRUZAR DATOS PARA OBTENER EL RESULTADO:
			var resultado;
			var ptos_usuario = 0;
			var ptos_computadora = 0;
	
			tarjeta_compu.forEach((element, i) => {
				if (tarjeta_usuario[i] > tarjeta_compu[i]) {
					ptos_usuario += 1;
				} else {
					ptos_computadora += 1;
				}
			});
	
			if (ptos_usuario > ptos_computadora) {
				resultado = "usuario";
				setImagen_ganador("/img/usuario.png");
			} else {
				if (ptos_usuario < ptos_computadora) {
					resultado = "compu";
					setImagen_ganador("/img/supercompu.png");
				} else {
					resultado = "empate";
					setImagen_ganador("/img/empate.png");
				}
			}
			// console.log(resultado);
			setGanador(resultado);
		};

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
								src="/img/supercompu.png"
								alt="Compu"></img>
						</div>
					</div>
				</div>

				<div className="versus">
					<img src="/img/versus.png" alt="vs." width="90"></img>
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
							<img src="/img/usuario.png" alt="Usuario"></img>
						</div>
					</div>
				</div>
			</div>
			<div className="start">
				<img
					onClick={handleNext}
					src="/img/boton_fight.png"
					alt="Botón luchar"
					width="250px"></img>
			</div>
		</>
	);
};
