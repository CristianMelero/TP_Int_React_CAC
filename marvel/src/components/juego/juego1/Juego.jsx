import { useEffect, useState } from "react";
import "./Juego.css";
import Swal from "sweetalert2";
import { Element } from "react-scroll";

// IMPORTAR EL JSON LOCAL
import data from "../../../utils/marvel.json";

//pasos del juego
import { EquipoCompu } from "./equipoCompu";
import { ElegirEquipo } from "./elegirEquipo";
import { ElegirAtributos } from "./elegirAtributos";
import { Button } from "react-bootstrap";
import { EquipoUsuario } from "./verEquipoUsuario";
import { TarjetasFinales } from "./tarjetasFinales";
import { Ganador } from "./verGanador";

// CREAR LA FUNCION CORRESPONDIENTE AL COMPONENTE JUEGO
export const Juego = () => {
	const [paso1, setPaso1] = useState(false);
	const [paso2, setPaso2] = useState(false);
	const [paso3, setPaso3] = useState(false);
	const [paso4, setPaso4] = useState(false);
	const [paso5, setPaso5] = useState(false);
	const [paso6, setPaso6] = useState(false);

	// PRIMERA INTERACCION CON USUARIO, OBTENER SU NOMBRE
	const [usuario, setUsuario] = useState(null);
	const obtenerNombreUsuario = () => {
		Swal.fire({
			title: "Hoy te convertís en Héroe!",
			text: "¿Cuál es tu nombre de Héroe? Ingresalo acá:",
			input: "text",
		}).then((nombre) => {
			Swal.fire(`Tu nombre de héroe es: ${nombre.value}`);
			setUsuario(nombre.value);
			setPaso1(true);
		});
	};

	// CREAR EL ARRAY CON LOS HEROES CORRESPONDIENTES AL EQUIPO DE LA COMPU
	const [equipoCompu, setEquipoCompu] = useState([]);

	const asignarJugadoresCompu = () => {
		let equipocompu = [0];
		let heroes_repetidos = true;
		while (heroes_repetidos === true) {
			let i;
			for (i = 0; i < 6; i++) {
				equipocompu[i] = Math.round(Math.random() * 27);
			}
			let contador_repetidos = 0;
			equipocompu.forEach((element, i) => {
				let j;
				for (j = equipocompu.length - 1; j >= 0; j--) {
					if (equipocompu[j] === equipocompu[i]) {
						contador_repetidos = contador_repetidos + 1;
					}
				}
			});
			if (contador_repetidos > 6) {
				heroes_repetidos = true;
			} else {
				heroes_repetidos = false;
			}
		}
		setEquipoCompu(equipocompu);
	};

	useEffect(() => {
		obtenerNombreUsuario();
		asignarJugadoresCompu();
	}, []);

	//CREAR ARRAY QUE CAPTE LOS HEROES SELECCIONADOS POR EL USUARIO
	const [avengers, setAvengers] = useState([]);

	useEffect(() => {
		//CREAR EL ARRAY CON LOS HEROES DISPONIBLES
		const newAvengers = [];
		let indice_avengers = 0;
		for (let i = 27; i >= 0; i--) {
			let contador = 0;
			for (let j = 0; j < equipoCompu.length; j++) {
				if (i === equipoCompu[j]) {
					contador += 1;
				}
			}
			if (contador === 0) {
				newAvengers[indice_avengers] = {
					numero: i,
					nombre: data[i].Name,
					seleccionado: false,
				};
				indice_avengers += 1;
			}
		}
		setAvengers(newAvengers);
	}, [equipoCompu]);

	//CREAR ARRAY QUE CAPTE LOS ATRIBUTOS SELECCIONADOS POR EL USUARIO
	const [atributos, setAtributos] = useState([
		{ nombre: "Inteligencia", value: "Intelligence", seleccionado: false },
		{ nombre: "Fuerza", value: "Strenght", seleccionado: false },
		{ nombre: "Velocidad", value: "Speed", seleccionado: false },
		{ nombre: "Resistencia", value: "Durability", seleccionado: false },
		{
			nombre: "Energía proyectada",
			value: "Energy_Projection",
			seleccionado: false,
		},
		{
			nombre: "Habilidad de combate",
			value: "Fighting_Ability",
			seleccionado: false,
		},
	]);

	//CREAR ARRAY QUE UNA LOS HEROES SELECCIONADOS x USUARIO + HEROES AL AZAR
	const [vengadores_usuario_final, setVengadores_usuario_final] = useState(
		[],
	);

	//CREAR UN ARRAY QUE CONTENGA LA TARJETA EQUIPO COMPU
	const [tarjeta_compu, setTarjeta_compu] = useState([]);

	//CREAR UN ARRAY QUE CONTENGA LA TARJETA EQUIPO USUARIO
	const [tarjeta_usuario, setTarjeta_usuario] = useState([]);

	//CREAR UNA VARIABLE QUE REPRESENTE AL GANADOR
	const [ganador, setGanador] = useState();

	//CREAR UNA VARIABLE QUE REPRESENTE A LA IMAGEN DEL GANADOR
	const [imagen_ganador, setImagen_ganador] = useState();

	return (
		<>
			{/*//PINTAR EQUIPO MAQUINA EN PANTALLA*/}
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button variant="outline-dark" onClick={() => setPaso1(!paso1)}>
					<h2>Nuestro equipo</h2>
				</Button>
			</div>

			{paso1 && (
				<Element name="paso1">
					<EquipoCompu
						equipo={equipoCompu}
						setEquipoCompu={setEquipoCompu}
						data={data}
						setPaso1={setPaso1}
						setPaso2={setPaso2}
					/>
				</Element>
			)}

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button variant="outline-dark" onClick={() => setPaso2(!paso2)}>
					<h2>Elegir equipo</h2>
				</Button>
			</div>

			{paso2 && (
				<>
					<Element name="paso2">
						<ElegirEquipo
							data={data}
							avengers={avengers}
							setAvengers={setAvengers}
							setPaso2={setPaso2}
							setPaso3={setPaso3}
						/>
					</Element>
				</>
			)}

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button variant="outline-dark" onClick={() => setPaso3(!paso3)}>
					<h2>Tus atributos</h2>
				</Button>
			</div>

			{paso3 && (
				<Element name="paso3">
					<ElegirAtributos
						atributos={atributos}
						setAtributos={setAtributos}
						setPaso1={setPaso1}
						setPaso2={setPaso2}
						setPaso3={setPaso3}
						setPaso4={setPaso4}
						avengers={avengers}
						equipoCompu={equipoCompu}
						data={data}
						setTarjeta_compu={setTarjeta_compu}
						setTarjeta_usuario={setTarjeta_usuario}
						setVengadores_usuario_final={
							setVengadores_usuario_final
						}
					/>
				</Element>
			)}

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button variant="outline-dark" onClick={() => setPaso4(!paso4)}>
					<h2>Tu equipo</h2>
				</Button>
			</div>

			{paso4 && (
				<Element name="paso4">
					<EquipoUsuario
						data={data}
						usuario={usuario}
						vengadores_usuario_final={vengadores_usuario_final}
						setPaso4={setPaso4}
						setPaso5={setPaso5}
					/>
				</Element>
			)}

			{paso5 && (
				<Element name="paso5">
					<TarjetasFinales
						tarjeta_compu={tarjeta_compu}
						tarjeta_usuario={tarjeta_usuario}
						setPaso4={setPaso4}
						setPaso6={setPaso6}
						setImagen_ganador={setImagen_ganador}
						setGanador={setGanador}
					/>
				</Element>
			)}

			{paso6 && (
				<Element name="paso6">
					<Ganador
						imagen_ganador={imagen_ganador}
						ganador={ganador}
					/>
				</Element>
			)}
		</>
	);
};
