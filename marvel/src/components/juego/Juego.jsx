// IMPORTAR EL JSON LOCAL
import data from "../../utils/marvel.json";
import { useEffect, useState } from "react";
import "./Juego.css"
import { mdiFormatAlignCenter } from "@mdi/js";
import { Link } from "react-router-dom";

// CREAR LA FUNCION CORRESPONDIENTE AL COMPONENTE JUEGO
export const Juego = () => {
	// PRIMERA INTERACCION CON USUARIO, OBTENER SU NOMBRE
	const [usuario, setUsuario] = useState([]);
	const obtenerNombreUsuario = () => {
	window.alert("Hoy te convertís en Héroe!");
	let nombre_usuario=prompt("¿Cuál es tu nombre de Héroe? Ingresalo acá:");
	setUsuario(nombre_usuario);
};

useEffect(() => {
	obtenerNombreUsuario();
}, []);

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

	//                   V A R I A B L E S   useState
	//CREAR ARRAY QUE CAPTE LOS HEROES SELECCIONADOS POR EL USUARIO
	const [avengers_clickeados, setAvengers_clickeados] = useState([]);
	
	//CREAR ARRAY QUE DE LOS NOMBRES DE LOS HEROES SELECCIONADOS POR EL USUARIO
	const [nombres_clickeados, setNombres_clickeados] = useState([]);

	//CREAR ARRAY QUE CAPTE LOS ATRIBUTOS SELECCIONADOS POR EL USUARIO
	const [atributos_clickeados, setAtributos_clickeados] = useState([]);
	
	//CREAR ARRAY QUE DE LOS NOMBRES DE LOS ATRIBUTOS SELECCIONADOS POR EL USUARIO
	const [nombres_atributos_clickeados, setNombres_atributos_clickeados] =
		useState([]);

	//CREAR ARRAY QUE UNA LOS HEROES SELECCIONADOS x USUARIO + HEROES AL AZAR
	const [vengadores_usuario_final, setVengadores_usuario_final] = useState([]);

	//CREAR UNA VARIABLE QUE REPRESENTE AL GANADOR
	const [ganador, setGanador] = useState();

	//CREAR UNA VARIABLE QUE REPRESENTE A LA IMAGEN DEL GANADOR
	const [imagen_ganador, setImagen_ganador] = useState();

	//CREAR UN ARRAY QUE CONTENGA LA TARJETA EQUIPO COMPU
	const [tarjeta_compu, setTarjeta_compu] = useState([]);

	//CREAR UN ARRAY QUE CONTENGA LA TARJETA EQUIPO USUARIO
	const [tarjeta_usuario, setTarjeta_usuario] = useState([]);
	
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

		if(nombres_atributos_clickeados.length>2 || nombres_atributos_clickeados.length<2 || nombres_clickeados.length<2 || nombres_clickeados.length>2){
			window.alert("Tenes que seleccionar 2 Héroes y 2 de tus atributos principales");
			window.location.reload();
		}else{
			window.alert("¡Hay equipo!")
			};

		//CREAR HEROE USUARIO
		let heroe_usuario=[];
		for (let i = 0; i < 6; i++) {
			if (ev.target.atributos_clickeados[i].checked) {
			heroe_usuario[i]=7;
			}else{
				heroe_usuario[i]=Math.round((Math.random()+1)*1.25);
			};
		};		
		heroe_usuario.forEach((element, i) => {
			console.log("PoderesHeroeUsuario: "+i+"="+heroe_usuario[i]);
		});	
		    //EQUIPO VENGADORES USUARIO (3 al azar)
    let vengadores_azar_usuario=[0];
    let heroes_repetidos=true;
    while (heroes_repetidos===true){        
        let i;
        for (i=0;i<3;i++) {
            vengadores_azar_usuario[i]=Math.round(Math.random()*27);
        };
        let contador_repetidos=0;
        vengadores_azar_usuario.forEach((element,i)=>{
				//FOR PARA CRUZAR DENTRO MISMO EQUIPO COMPU vengadores_azar_usuario[i]
            for (let j=(vengadores_azar_usuario.length-1);j>=0;j--) {
                if (vengadores_azar_usuario[j]===vengadores_azar_usuario[i]){
                contador_repetidos=contador_repetidos+1;
                }
            };
            //FOR PARA CRUZAR CON EQUIPO COMPU equipocompu[i]
            for (let j=0;j<equipoCompu.length;j++) {
                if (equipoCompu[j]===vengadores_azar_usuario[i]){
                contador_repetidos=contador_repetidos+1;
                }
            };
            //METO OTRO FOR PARA CRUZAR CON SELECCIONADOS retenidos[]
            for (let j=0;j<nombres_clickeados.length;j++) {
                if (nombres_clickeados[j]===data[vengadores_azar_usuario[i]].Name) {
                    contador_repetidos=contador_repetidos+1;
                }
            };

        });
        if (contador_repetidos>3){
            heroes_repetidos=true;
        }else{
        heroes_repetidos=false;
        };
    };
	
	vengadores_azar_usuario.forEach((element, i) => {
		console.log(data[vengadores_azar_usuario[i]].Name);
	});

	//CALCULO DE PODERES PROMEDIOS DEL EQUIPO COMPUTADORA
    let tarjeta_poderes_compu=[];

    let suma_Intelligence=0;
    let suma_Strength=0;
    let suma_Speed=0;
    let suma_Durability=0;
    let suma_Energy_Projection=0;
    let suma_Fighting_Ability=0;
    equipoCompu.forEach((element,i)=>{
        suma_Intelligence=suma_Intelligence + Number.parseFloat(data[equipoCompu[i]].Intelligence);
        suma_Strength=suma_Strength + Number.parseFloat(data[equipoCompu[i]].Strength);
        suma_Speed=suma_Speed + Number.parseFloat(data[equipoCompu[i]].Speed);
        suma_Durability=suma_Durability + Number.parseFloat(data[equipoCompu[i]].Durability);
        suma_Energy_Projection=suma_Energy_Projection + Number.parseFloat(data[equipoCompu[i]].Energy_Projection);
        suma_Fighting_Ability=suma_Fighting_Ability + Number.parseFloat(data[equipoCompu[i]].Fighting_Ability);
    });

    tarjeta_poderes_compu[0]=(suma_Intelligence/6).toFixed(2);
    tarjeta_poderes_compu[1]=(suma_Strength/6).toFixed(2);
    tarjeta_poderes_compu[2]=(suma_Speed/6).toFixed(2);
    tarjeta_poderes_compu[3]=(suma_Durability/6).toFixed(2);
    tarjeta_poderes_compu[4]=(suma_Energy_Projection/6).toFixed(2);
    tarjeta_poderes_compu[5]=(suma_Fighting_Ability/6).toFixed(2);

    console.log("tarjeta_poderes_compu");
    tarjeta_poderes_compu.forEach((element,i)=>{console.log(tarjeta_poderes_compu[i])});
	setTarjeta_compu(tarjeta_poderes_compu);

	// CONVERTIR ARRAY DE LOS FAVORITOS DEL USUARIO DE NOMBRE A INDICE DEL JSON
    let retenidos_en_indice_json=[];
    let i;
    for (i=0;i<nombres_clickeados.length;i++){
        //primero busco el correspondiente objeto en el json
        let objeto_filtrado = data.filter(element => element.Name == nombres_clickeados[i]);
        //luego tomo el indice de ese objeto
        retenidos_en_indice_json[i]=data.indexOf(objeto_filtrado[0]);
    };
    // UNIR ARRAY DE LOS FAVORITOS DEL USUARIO CON ARRAY VENGADORES DEL USUARIO AL AZAR
    // vengadores_usuario = los asignados al azar:
    let vengadores_usuario=vengadores_azar_usuario.slice();
    // vengadores_usuario = los asignados al azar + :
    vengadores_usuario[3]=retenidos_en_indice_json[0];
    vengadores_usuario[4]=retenidos_en_indice_json[1];
    console.log("vengadores_usuario");
    vengadores_usuario.forEach((element,i)=>{console.log(data[vengadores_usuario[i]].Name)});
	setVengadores_usuario_final(vengadores_usuario);

	//CALCULO DE PODERES PROMEDIOS DEL EQUIPO USUARIO
    let tarjeta_poderes_equipo_usuario=[];

    suma_Intelligence=0;
    suma_Strength=0;
    suma_Speed=0;
    suma_Durability=0;
    suma_Energy_Projection=0;
    suma_Fighting_Ability=0;
    vengadores_usuario.forEach((element,i)=>{
        suma_Intelligence=suma_Intelligence + Number.parseFloat(data[vengadores_usuario[i]].Intelligence);
        suma_Strength=suma_Strength + Number.parseFloat(data[vengadores_usuario[i]].Strength);
        suma_Speed=suma_Speed + Number.parseFloat(data[vengadores_usuario[i]].Speed);
        suma_Durability=suma_Durability + Number.parseFloat(data[vengadores_usuario[i]].Durability);
        suma_Energy_Projection=suma_Energy_Projection + Number.parseFloat(data[vengadores_usuario[i]].Energy_Projection);
        suma_Fighting_Ability=suma_Fighting_Ability + Number.parseFloat(data[vengadores_usuario[i]].Fighting_Ability);
    });

    tarjeta_poderes_equipo_usuario[0]=((suma_Intelligence+heroe_usuario[0])/6).toFixed(2);
    tarjeta_poderes_equipo_usuario[1]=((suma_Strength+heroe_usuario[1])/6).toFixed(2);
    tarjeta_poderes_equipo_usuario[2]=((suma_Speed+heroe_usuario[2])/6).toFixed(2);
    tarjeta_poderes_equipo_usuario[3]=((suma_Durability+heroe_usuario[3])/6).toFixed(2);
    tarjeta_poderes_equipo_usuario[4]=((suma_Energy_Projection+heroe_usuario[4])/6).toFixed(2);
    tarjeta_poderes_equipo_usuario[5]=((suma_Fighting_Ability+heroe_usuario[5])/6).toFixed(2);

    console.log("tarjeta_poderes_equipo_usuario");
    tarjeta_poderes_equipo_usuario.forEach((element,i)=>{console.log(tarjeta_poderes_equipo_usuario[i])});
	setTarjeta_usuario(tarjeta_poderes_equipo_usuario);
	
    //CRUZAR DATOS PARA OBTENER EL RESULTADO:
    var resultado;
    var ptos_usuario=0;
    var ptos_computadora=0;

    tarjeta_poderes_compu.forEach((element,i)=>{
        if(tarjeta_poderes_equipo_usuario[i]>tarjeta_poderes_compu[i]){
            ptos_usuario=ptos_usuario+1;
        }else{
            ptos_computadora=ptos_computadora+1;
        }
     });

    if(ptos_usuario>ptos_computadora){
        resultado=usuario;
		setImagen_ganador("././usuario.png");
    }else{
        if(ptos_usuario<ptos_computadora){
            resultado="compu";
			setImagen_ganador("././supercompu.png");
        }else{
            resultado="empate";
			setImagen_ganador("././empate.png");
		}
    }
	console.log(resultado);
	setGanador(resultado);
};

	return (
		<>
			{/*//PINTAR EQUIPO MAQUINA EN PANTALLA*/}
			<br /><br />
			<h4>Mirá, este será tu rival, nuestro equipo de 6 Avengers:</h4>
			<div className="flexBox_TJs">
			{equipoCompu.map((element) => (
				<div className="tj">
				<div className="tj_img">
					<img
							className="imagen_avenger"
							src={data[element].Image_Link}
							alt="Imagen Avenger"
							width="100	"
					/>
				</div>
					<div className="tj_name_input">
					<p>{data[element].Name}</p>
				</div>
				</div>
			))}
			</div>

			{/*//FORMULARIO*/}
			<form onSubmit={submitHandler}>
				{/* SECCION PINTAR HEROES A SELECCIONAR */}
				<h4>Ahora tenés que formar tu equipo, comenzá elegiendo tus 2 Avengers favoritos:</h4>
				<div className="flexBox_TJs">
				{avengers.map((element, i) => (
					<div className="tj">
					<div className="tj_img">
						<img
							className="imagen_avenger"
							src={data[element].Image_Link}
							alt="Imagen Avenger"
							width="100	"
						/>
					</div>
					<div className="tj_name_input">
						<p>{data[element].Name}</p>
						<input
							name="avengers_clickeados"
							type="checkbox"
							value={element}
						/>
					</div>
					</div>
				))}
				</div>
				{/* SECCION PINTAR ATRIBUTOS A SELECCIONAR */}
				<br /><br />
				<h4>Muy bien, 3 Avengers más serán seleccionados al azar para tu equipo y el 6to. serás vos. Elegí los dos atributos</h4>
				<h4>que más te gusten, serán los poderes que más te representen y los de máximo puntaje en tu tarjeta Advenger.</h4>
				<div className="atributos_clickeados">
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Intelligence"
					/>&nbsp;
					<label>Inteligencia</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Strength"
					/>&nbsp;
					<label>Fuerza</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Speed"
					/>&nbsp;
					<label>Velocidad</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Durability"
					/>&nbsp;
					<label>Resistencia</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Energy_Projection"
					/>&nbsp;
					<label>Energía proyectada</label>
				</div>
				<div>
					<input
						name="atributos_clickeados"
						type="checkbox"
						value="Fighting_Ability"
					/>&nbsp;
					<label>Habilidad de combate</label>
				</div>
				</div>
				<br />
				<button type="submit"><h4>Click acá para continuar</h4></button>

				<br /><br /><br /><br />
				<h4>
					Así quedó tu equipo: 
				</h4>
					<div className="flexBox_TJs">
					<div className="tj">
					<div className="tj_img">
					<img
							className="imagen_avenger"
							src="././usuario.png"
							alt="Imagen Super Usuario"
					/>
					</div>
					<div className="tj_name_input">
					<p>{usuario}</p>
					</div>
					</div>
					{vengadores_usuario_final.map((element) => (
					<div className="tj">
					<div className="tj_img">
					<img
							className="imagen_avenger"
							src={data[element].Image_Link}
							alt="Imagen Avenger"
					/>
					</div>
					<div className="tj_name_input">
					<p>{data[element].Name}</p>
					</div>
					</div>
					))}
					</div>

				<h4>Cada Avenger tiene una tarjeta de poderes, con ellas se hizo una tarjeta única y representativa</h4>
				<h4>por equipo promediando en cada uno de los poderes de sus integrantes.</h4>
				<div className="linea_divisoria"> </div>
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
				<p><img className="solo_imagen_compu" src="../supercompu.png" alt="Compu"></img></p>
				</div>
				</div>
				</div>
				
				<div className="versus">
				<p><img src="../versus.png" alt="vs." width="90"></img></p>
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
				<p><img src="../usuario.png" alt="Usuario"></img></p>
				</div>
				</div>
				</div>
				</div>
				<br /><br />
				<h2>"Pasá el cursor por abajo para descubrir al ganador!</h2>
				
				<div className="imagen_ganador">
					<img
						src={imagen_ganador}
						alt="Imagen Super Usuario"
					/>
					<br /><br /><br />
					<h2>GAME OVER</h2>
				</div>

				<div className="start">
		
				<Link to="/PaginaJuego" onClick="scroll(0, 100);"> 
					<p><img src="../start.png" alt="Botón Start Game" width="125"></img></p>
				</Link>
	
				</div>
								
				
			</form>
		</>
	);
};
