import Button from "react-bootstrap/Button";
import { scroller } from "react-scroll";

export const EquipoCompu = ({ data, equipo, setPaso1, setPaso2 }) => {
	const scrollToPaso2 = () => {
		return new Promise((resolve) => {
			setPaso2(true);
			resolve();
		});
	};

	const handleNext = async () => {
		setPaso1(false);
		await scrollToPaso2();
		scroller.scrollTo("paso2");
	};

	return (
		<>
			<h4>Mirá, este será tu rival, nuestro equipo de 6 Avengers:</h4>
			<div className="flexBox_TJs">
				{equipo.map((element, i) => (
					<div className="tj" key={i}>
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
			<div className="d-grid gap-2">
				<Button variant="warning" onClick={handleNext}>
					SIGUIENTE
				</Button>
			</div>
		</>
	);
};
