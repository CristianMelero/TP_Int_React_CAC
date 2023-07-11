import Button from "react-bootstrap/Button";
import { scroller } from "react-scroll";

export const EquipoUsuario = ({
	data,
	usuario,
	vengadores_usuario_final,
	setPaso4,
	setPaso5,
}) => {

	const scrollToPaso5 = () => {
		return new Promise((resolve) => {
			setPaso5(true);
			resolve();
		});
	};

	const handleNext = async () => {
		await scrollToPaso5();
		scroller.scrollTo("paso5");
	};

	return (
		<>
			<h4>Así quedó tu equipo:</h4>
			<div className="flexBox_TJs">
				<div className="tj">
					<div className="tj_img">
						<img
							className="imagen_avenger"
							src="/img/usuario.png"
							alt="Imagen Super Usuario"
						/>
					</div>
					<div className="tj_name_input">
						<p>{usuario}</p>
					</div>
				</div>
				{vengadores_usuario_final.map((element, i) => (
					<div className="tj" key={i}>
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

			<h4>
				Cada Avenger tiene una tarjeta de poderes, con ellas se hizo una
				tarjeta única y representativa por equipo promediando en cada
				uno de los poderes de sus integrantes.
			</h4>

			<div className="d-grid gap-2">
				<Button variant="warning" onClick={handleNext}>
					VER TARJETAS FINALES
				</Button>
			</div>
		</>
	);
};
