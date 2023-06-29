// IMPORTAR EL JSON LOCAL
import data from "../utils/marvel.json";
import { useEffect, useState } from "react";

// CREAR LA FUNCION CORRESPONDIENTE AL COMPONENTE JUEGO
export const Juego = () => {
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
		asignarJugadoresCompu();
	}, []);

	//CREAR EL ARRAY CON LOS HEROES DISPONIBLES
	let avengers = [];
	let indice_avengers = 0;
	for (let i = 27; i >= 0; i--) {
		let contador = 0;
		for (let j = 0; j < equipoCompu.length; j++) {
			if (i === equipoCompu[j]) {
				contador = contador + 1;
			}
		}
		if (contador === 0) {
			avengers[indice_avengers] = i;
			indice_avengers = indice_avengers + 1;
		}
	}

	//CREAR ARRAY QUE CAPTE LOS HEROES SELECCIONADOS POR EL USUARIO
	const [avengers_clickeados, setAvengers_clickeados] = useState([]);
	//CREAR ARRAY QUE DE LOS NOMBRES DE LOS HEROES SELECCIONADOS POR EL USUARIO
	const [nombres_clickeados, setNombres_clickeados] = useState([]);

	//CREAR ARRAY QUE CAPTE LOS ATRIBUTOS SELECCIONADOS POR EL USUARIO
	const [atributos_clickeados, setAtributos_clickeados] = useState([]);
	//CREAR ARRAY QUE DE LOS NOMBRES DE LOS ATRIBUTOS SELECCIONADOS POR EL USUARIO
	const [nombres_atributos_clickeados, setNombres_atributos_clickeados] =
		useState([]);

	//CODIGO ONSUBMIT
	const submitHandler = (ev) => {
		ev.preventDefault();
		//SECCION CODIGO HEROES SELECCIONADOS
		setAvengers_clickeados(ev.target.avengers_clickeados);
		setNombres_clickeados(nombres_clickeados);
		for (let i = 0; i < 22; i++) {
			if (ev.target.avengers_clickeados[i].checked) {
				nombres_clickeados.push(
					data[ev.target.avengers_clickeados[i].value].Name,
				);
			}
		}
		nombres_clickeados.forEach((element, i) => {
			console.log(nombres_clickeados[i]);
		});
		//SECCION CODIGO ATRIBUTOS SELECCIONADOS
		setAtributos_clickeados(ev.target.atributos_clickeados);
		setNombres_atributos_clickeados(nombres_atributos_clickeados);
		for (let i = 0; i < 6; i++) {
			if (ev.target.atributos_clickeados[i].checked) {
				nombres_atributos_clickeados.push(
					ev.target.atributos_clickeados[i].value,
				);
			}
		}
		nombres_atributos_clickeados.forEach((element, i) => {
			console.log(nombres_atributos_clickeados[i]);
		});
	};

	return (
		<>
			{/*//PINTAR EQUIPO MAQUINA EN PANTALLA*/}
			<h3>Nuestro equipo</h3>
			{equipoCompu.map((element) => (
				<div>
					<p>{data[element].Name}</p>
				</div>
			))}

			{/*//FORMULARIO*/}
			<form onSubmit={submitHandler}>
				{/* SECCION PINTAR HEROES SELECCIONADOS */}
				<h3>Ahora elegí vos:</h3>
				{avengers.map((element, i) => (
					<div>
						<input
							name="avengers_clickeados"
							type="checkbox"
							value={element}
						/>
						<label>{data[element].Name}</label>
					</div>
				))}

				{/* SECCION PINTAR ATRIBUTOS SELECCIONADOS */}
				<h5> Seleccioná tus 2 Atributos más fuertes </h5>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Intelligence"
					/>
					<label>Inteligencia</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Strength"
					/>
					<label>Fuerza</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Speed"
					/>
					<label>Velocidad</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Durability"
					/>
					<label>Resistencia</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Energy_Projection"
					/>
					<label>Energía proyectada</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Fighting_Ability"
					/>
					<label>Habilidad de combate</label>
				</div>

				<button type="submit">Continuar</button>

				<p>
					Elegiste: {nombres_clickeados[0]} y {nombres_clickeados[1]}
				</p>
				<p>
					Elegiste: {nombres_atributos_clickeados[0]} y{" "}
					{nombres_atributos_clickeados[1]}
				</p>
			</form>
		</>
	);
};
