import Button from "react-bootstrap/Button";
import { scroller } from "react-scroll";
import Swal from "sweetalert2";

export const ElegirAtributos = ({
	atributos,
	setAtributos,
	setPaso1,
	setPaso2,
	setPaso3,
	setPaso4,
	avengers,
	equipoCompu,
	data,
	setTarjeta_compu,
	setTarjeta_usuario,
	setVengadores_usuario_final,
}) => {
	//FUNCION PARA CREAR LOS EQUIPOS
	const crearEquipos = () => {
		const countAvengers = avengers.reduce((accumulator, currentValue) => {
			if (currentValue.seleccionado === true) {
				return accumulator + 1;
			} else {
				return accumulator;
			}
		}, 0);

		if (countAvengers < 2) {
			Swal.fire({
				text: "¡Tenes que seleccionar tus dos Avengers preferidos!",
			});
			setPaso2(true);
		} else {
			Swal.fire({ title: "¡Hay equipo!" });

			//CREAR HEROE USUARIO
			let heroe_usuario = [];
			for (let i = 0; i < 6; i++) {
				if (atributos[i].seleccionado) {
					heroe_usuario[i] = 7;
				} else {
					heroe_usuario[i] = Math.round((Math.random() + 1) * 1.25);
				}
			}
			// heroe_usuario.forEach((element, i) => {
			// 	console.log("PoderesHeroeUsuario: " + i + "=" + heroe_usuario[i]);
			// });

			//EQUIPO VENGADORES USUARIO (3 al azar)
			let vengadores_azar_usuario = [0];
			let heroes_repetidos = true;
			while (heroes_repetidos === true) {
				let i;
				for (i = 0; i < 3; i++) {
					vengadores_azar_usuario[i] = Math.round(Math.random() * 27);
				}
				let contador_repetidos = 0;
				vengadores_azar_usuario.forEach((element, i) => {
					//FOR PARA CRUZAR DENTRO MISMO EQUIPO COMPU vengadores_azar_usuario[i]
					for (
						let j = vengadores_azar_usuario.length - 1;
						j >= 0;
						j--
					) {
						if (
							vengadores_azar_usuario[j] ===
							vengadores_azar_usuario[i]
						) {
							contador_repetidos += 1;
						}
					}
					//FOR PARA CRUZAR CON EQUIPO COMPU equipocompu[i]
					for (let j = 0; j < equipoCompu.length; j++) {
						if (equipoCompu[j] === vengadores_azar_usuario[i]) {
							contador_repetidos += 1;
						}
					}
					//METO OTRO FOR PARA CRUZAR CON SELECCIONADOS retenidos[]
					avengers.forEach((avenger) => {
						if (
							avenger.seleccionado &&
							avenger.nombre ===
								data[vengadores_azar_usuario[i]].Name
						) {
							contador_repetidos += 1;
						}
					});
				});
				if (contador_repetidos > 3) {
					heroes_repetidos = true;
				} else {
					heroes_repetidos = false;
				}
			}

			//CALCULO DE PODERES PROMEDIOS DEL EQUIPO COMPUTADORA
			let tarjeta_poderes_compu = [];

			let suma_Intelligence = 0;
			let suma_Strength = 0;
			let suma_Speed = 0;
			let suma_Durability = 0;
			let suma_Energy_Projection = 0;
			let suma_Fighting_Ability = 0;
			equipoCompu.forEach((element, i) => {
				suma_Intelligence =
					suma_Intelligence +
					Number.parseFloat(data[equipoCompu[i]].Intelligence);
				suma_Strength =
					suma_Strength +
					Number.parseFloat(data[equipoCompu[i]].Strength);
				suma_Speed =
					suma_Speed + Number.parseFloat(data[equipoCompu[i]].Speed);
				suma_Durability =
					suma_Durability +
					Number.parseFloat(data[equipoCompu[i]].Durability);
				suma_Energy_Projection =
					suma_Energy_Projection +
					Number.parseFloat(data[equipoCompu[i]].Energy_Projection);
				suma_Fighting_Ability =
					suma_Fighting_Ability +
					Number.parseFloat(data[equipoCompu[i]].Fighting_Ability);
			});

			tarjeta_poderes_compu[0] = (suma_Intelligence / 6).toFixed(2);
			tarjeta_poderes_compu[1] = (suma_Strength / 6).toFixed(2);
			tarjeta_poderes_compu[2] = (suma_Speed / 6).toFixed(2);
			tarjeta_poderes_compu[3] = (suma_Durability / 6).toFixed(2);
			tarjeta_poderes_compu[4] = (suma_Energy_Projection / 6).toFixed(2);
			tarjeta_poderes_compu[5] = (suma_Fighting_Ability / 6).toFixed(2);

			setTarjeta_compu(tarjeta_poderes_compu);

			// CONVERTIR ARRAY DE LOS FAVORITOS DEL USUARIO DE NOMBRE A INDICE DEL JSON
			let retenidos_en_indice_json = [];
			avengers.forEach((avenger, i) => {
				if (avenger.seleccionado) {
					retenidos_en_indice_json.push(avenger.numero);
				}
			});

			// UNIR ARRAY DE LOS FAVORITOS DEL USUARIO CON ARRAY VENGADORES DEL USUARIO AL AZAR
			// vengadores_usuario = los asignados al azar:
			let vengadores_usuario = vengadores_azar_usuario.slice();
			// vengadores_usuario = los asignados al azar + :
			vengadores_usuario[3] = retenidos_en_indice_json[0];
			vengadores_usuario[4] = retenidos_en_indice_json[1];
			setVengadores_usuario_final(vengadores_usuario);

			//CALCULO DE PODERES PROMEDIOS DEL EQUIPO USUARIO
			let tarjeta_poderes_equipo_usuario = [];

			suma_Intelligence = 0;
			suma_Strength = 0;
			suma_Speed = 0;
			suma_Durability = 0;
			suma_Energy_Projection = 0;
			suma_Fighting_Ability = 0;
			vengadores_usuario.forEach((element, i) => {
				suma_Intelligence += Number.parseFloat(
					data[vengadores_usuario[i]].Intelligence,
				);
				suma_Strength += Number.parseFloat(
					data[vengadores_usuario[i]].Strength,
				);
				suma_Speed += Number.parseFloat(
					data[vengadores_usuario[i]].Speed,
				);
				suma_Durability += Number.parseFloat(
					data[vengadores_usuario[i]].Durability,
				);
				suma_Energy_Projection += Number.parseFloat(
					data[vengadores_usuario[i]].Energy_Projection,
				);
				suma_Fighting_Ability =
					suma_Fighting_Ability +
					Number.parseFloat(
						data[vengadores_usuario[i]].Fighting_Ability,
					);
			});

			tarjeta_poderes_equipo_usuario[0] = (
				(suma_Intelligence + heroe_usuario[0]) /
				6
			).toFixed(2);
			tarjeta_poderes_equipo_usuario[1] = (
				(suma_Strength + heroe_usuario[1]) /
				6
			).toFixed(2);
			tarjeta_poderes_equipo_usuario[2] = (
				(suma_Speed + heroe_usuario[2]) /
				6
			).toFixed(2);
			tarjeta_poderes_equipo_usuario[3] = (
				(suma_Durability + heroe_usuario[3]) /
				6
			).toFixed(2);
			tarjeta_poderes_equipo_usuario[4] = (
				(suma_Energy_Projection + heroe_usuario[4]) /
				6
			).toFixed(2);
			tarjeta_poderes_equipo_usuario[5] = (
				(suma_Fighting_Ability + heroe_usuario[5]) /
				6
			).toFixed(2);

			setTarjeta_usuario(tarjeta_poderes_equipo_usuario);
		}
	};

	const handleCheckboxAtributeChange = (i) => {
		const updatedAtributos = [...atributos];
		const seleccionados = updatedAtributos.filter(
			(atributo) => atributo.seleccionado,
		);

		if (seleccionados.length < 2 || updatedAtributos[i].seleccionado) {
			updatedAtributos[i].seleccionado =
				!updatedAtributos[i].seleccionado;
			setAtributos(updatedAtributos);
		}
	};

	const scrollToPaso4 = () => {
		return new Promise((resolve) => {
			setPaso4(true);
			resolve();
		});
	};

	const countAtributos = atributos.reduce((accumulator, currentValue) => {
		if (currentValue.seleccionado === true) {
			return accumulator + 1;
		} else {
			return accumulator;
		}
	}, 0);

	const handleNext = async () => {
		if (countAtributos < 2) {
			Swal.fire({
				text: "¡Tenes que seleccionar tus dos atributos favoritos!",
			});
		} else {
			setPaso1(false);
			setPaso2(false);
			setPaso3(false);
			crearEquipos();
			await scrollToPaso4();
			scroller.scrollTo("paso4");
		}
	};

	return (
		<>
			{/* SECCION PINTAR ATRIBUTOS A SELECCIONAR */}
			<h4>
				Muy bien, 3 Avengers más serán seleccionados al azar para tu
				equipo y el 6to. serás vos. Elegí los dos atributos
				<br />
				que más te gusten, serán los poderes que más te representen y
				los de máximo puntaje en tu tarjeta Advenger.
			</h4>
			<div className="atributos_clickeados">
				{atributos.map((atributo, index) => (
					<div key={index}>
						<input
							name="atributos_clickeados"
							type="checkbox"
							value={atributo.value}
							checked={atributo.seleccionado}
							onChange={() => handleCheckboxAtributeChange(index)}
						/>
						&nbsp;
						<label>{atributo.nombre}</label>
					</div>
				))}
			</div>
			<br />
			<div className="d-grid gap-2">
				<Button variant="warning" onClick={handleNext} type="submit">
					CLICK AQUÍ PARA CREAR TU EQUIPO
				</Button>
			</div>
		</>
	);
};
