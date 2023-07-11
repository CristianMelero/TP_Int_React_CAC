import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { scroller } from "react-scroll";
import Swal from "sweetalert2";

export const ElegirEquipo = ({
	avengers,
	setAvengers,
	data,
	setPaso2,
	setPaso3,
}) => {
	const handleCheckboxAvengerChange = (i) => {
		const updatedAvengers = [...avengers];
		const seleccionados = updatedAvengers.filter(
			(avenger) => avenger.seleccionado,
		);

		if (seleccionados.length < 2 || updatedAvengers[i].seleccionado) {
			updatedAvengers[i].seleccionado = !updatedAvengers[i].seleccionado;
			setAvengers(updatedAvengers);
		}
	};

	const countAvengers = avengers.reduce((accumulator, currentValue) => {
		if (currentValue.seleccionado === true) {
			return accumulator + 1;
		} else {
			return accumulator;
		}
	}, 0);

	const scrollToPaso3 = () => {
		return new Promise((resolve) => {
			setPaso3(true);
			resolve();
		});
	};

	const handleNext = async() => {
		if (countAvengers < 2) {
			Swal.fire({
				text: "¡Tenes que seleccionar tus dos Avengers preferidos!",
			});
		} else {
			setPaso2(false);
			await scrollToPaso3();
			scroller.scrollTo("paso3");

		}
	};

	return (
		<>
		
			<h4>
				Ahora tenés que formar tu equipo, comenzá elegiendo tus 2
				Avengers favoritos:
			</h4>
			<div className="flexBox_TJs">
				{avengers.map((avenger, i) => (
					<div className="tj" key={i}>
						<div className="tj_img">
							<img
								className="imagen_avenger"
								src={data[avenger.numero].Image_Link}
								alt="Imagen Avenger"
								width="100"
							/>
						</div>
						<div className="tj_name_input">
							<label>{data[avenger.numero].Name}</label>
							<input
								type="checkbox"
								name="disable[]"
								id={avenger.numero}
								value={avenger.numero}
								checked={avenger.seleccionado}
								onChange={() => handleCheckboxAvengerChange(i)}
							/>
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
