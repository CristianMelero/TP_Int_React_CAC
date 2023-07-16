// IMPORTAR EL JSON LOCAL
import data from "../../../utils/marvel.json";
import { useEffect, useState } from "react";
import "./OtroJuego.css";

// CREAR LA FUNCION CORRESPONDIENTE AL COMPONENTE JUEGO
export const OtroJuego = () => {
	//CREAR UNA VARIABLE QUE ASIGNE AL AZAR EL AVENGER 1
	const [avenger1, setAvenger1] = useState("0");

	//CREAR UNA VARIABLE QUE ASIGNE AL AZAR EL AVENGER 1
	const [avenger2, setAvenger2] = useState("0");

	//CREAR UNA VARIABLE QUE ME DE EL NOMBRE DEL GANADOR
	const [ganador, setGanador] = useState("");

	//CREAR UNA VARIABLE QUE ME DE EL EMPATE, SINO ME DA MAL A PURO STRING""
	const [empate, setEmpate] = useState("");

	//CREAR UNA FUNCION QUE ASIGNE VALOR A LA VARIABLE AVENGER 1
	const asignarAvenger1 = () => {
		let avenger1_azar = Math.round(Math.random() * 27);
		setAvenger1(avenger1_azar);
	};
	useEffect(() => {
		asignarAvenger1();
	}, []);

	//CREAR UNA FUNCION QUE ASIGNE VALOR A LA VARIABLE AVENGER 1
	const asignarAvenger2 = () => {
		let repetido = 0;
		let avenger2_azar = Math.round(Math.random() * 27);
		while (repetido === 0) {
			avenger2_azar = Math.round(Math.random() * 27);
			if (avenger2_azar === avenger1) {
				repetido = 0;
			} else {
				repetido = 1;
			}
		}
		setAvenger2(avenger2_azar);
	};
	useEffect(() => {
		asignarAvenger2();
	}, []);

	//CREAR UN ARRAY QUE CONTENGA LA TARJETA AVENGER 1
	const [tarjeta_avenger1, setTarjeta_avenger1] = useState([]);
	//CREAR UN ARRAY QUE CONTENGA LA TARJETA AVENGER 2
	const [tarjeta_avenger2, setTarjeta_avenger2] = useState([]);

	//CREAR UNA FUNCION submitHandler QUE ASIGNE PODERES AL AVENGER 1 Y 2 EN SUS TARJETAS
	const submitHandler = (ev) => {
		ev.preventDefault();
		let poderesA1 = [];
		poderesA1[0] = Number.parseFloat(data[avenger1].Intelligence);
		poderesA1[1] = Number.parseFloat(data[avenger1].Strength);
		poderesA1[2] = Number.parseFloat(data[avenger1].Speed);
		poderesA1[3] = Number.parseFloat(data[avenger1].Durability);
		poderesA1[4] = Number.parseFloat(data[avenger1].Energy_Projection);
		poderesA1[5] = Number.parseFloat(data[avenger1].Fighting_Ability);
		setTarjeta_avenger1(poderesA1);
		let poderesA2 = [];
		poderesA2[0] = Number.parseFloat(data[avenger2].Intelligence);
		poderesA2[1] = Number.parseFloat(data[avenger2].Strength);
		poderesA2[2] = Number.parseFloat(data[avenger2].Speed);
		poderesA2[3] = Number.parseFloat(data[avenger2].Durability);
		poderesA2[4] = Number.parseFloat(data[avenger2].Energy_Projection);
		poderesA2[5] = Number.parseFloat(data[avenger2].Fighting_Ability);
		setTarjeta_avenger2(poderesA2);
		//CRUZAR DATOS PARA OBTENER EL RESULTADO:
		var nombre_ganador = "";
		var ptos_avenger1 = 0;
		var ptos_avenger2 = 0;

		tarjeta_avenger1.forEach((element, i) => {
			if (tarjeta_avenger2[i] > tarjeta_avenger1[i]) {
				ptos_avenger2 = ptos_avenger2 + 1;
			} else {
				ptos_avenger1 = ptos_avenger1 + 1;
			}
		});

		if (ptos_avenger2 > ptos_avenger1) {
			nombre_ganador = data[avenger2].Name;
			setGanador(nombre_ganador);
		} else {
			if (ptos_avenger2 < ptos_avenger1) {
				nombre_ganador = data[avenger1].Name;
				setGanador(nombre_ganador);
			} else {
				nombre_ganador = empate;
				setGanador(nombre_ganador);
			}
		}
	};

	return (
		<>
			<br />
			<br />
			<br />
			<h2>¿Cuál de estos dos Avengers tiene más poderes?</h2>
			<form onSubmit={submitHandler}>
				<div className="cruce_tarjetas_equipos">
					<div className="tarjeta_equipos">
						<div className="tarjetas_equipos_poderes">
							<p>Inteligencia: {tarjeta_avenger1[0]}</p>
							<p>Fuerza: {tarjeta_avenger1[1]}</p>
							<p>Velocidad: {tarjeta_avenger1[2]}</p>
							<p>Resistencia: {tarjeta_avenger1[3]}</p>
							<p>Energía proyectada: {tarjeta_avenger1[4]}</p>
							<p>Habilidad de combate: {tarjeta_avenger1[5]}</p>
						</div>
						<div className="tarjeta_equipos_nombre_imagen">
							<div className="tarjeta_equipos_nombre">
								<h3>{data[avenger1].Name}</h3>
							</div>
							<div className="tarjeta_equipos_imagen">
								<p>
									<img
										className="solo_imagen_compu"
										src={data[avenger1].Image_Link}
										alt="Compu"></img>
								</p>
							</div>
						</div>
					</div>

					<div className="versus">
						<p>
							<img src="/img/versus.png" alt="vs." width="90"></img>
						</p>
					</div>

					<div className="tarjeta_equipos">
						<div className="tarjetas_equipos_poderes">
							<p>Inteligencia: {tarjeta_avenger2[0]}</p>
							<p>Fuerza: {tarjeta_avenger2[1]}</p>
							<p>Velocidad: {tarjeta_avenger2[2]}</p>
							<p>Resistencia: {tarjeta_avenger2[3]}</p>
							<p>Energía proyectada: {tarjeta_avenger2[4]}</p>
							<p>Habilidad de combate: {tarjeta_avenger2[5]}</p>
						</div>
						<div className="tarjeta_equipos_nombre_imagen">
							<div className="tarjeta_equipos_nombre">
								<h3>{data[avenger2].Name}</h3>
							</div>
							<div className="tarjeta_equipos_imagen">
								<p>
									<img
										src={data[avenger2].Image_Link}
										alt="Usuario"></img>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h3>{ganador}</h3>
				</div>
				<div className="start_otro_juego">
					<br />
					<br />
					<button type="submit" onClick={window.scroll(0, 0)}>
						<h4>
							<p>
								<img
									src="/img/start.png"
									alt="Botón Start Game"
									width="100"></img>
							</p>
						</h4>
					</button>
				</div>
			</form>
		</>
	);
};
