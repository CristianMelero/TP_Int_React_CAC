import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
	return (
		<Carousel className="itemCarrusel">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://sm.ign.com/t/ign_latam/screenshot/default/avenger-prime-loki-origen-marvel-comics_j9m8.1280.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Descubre al nuevo villano de la saga</h3>
					<p>
						En el próximo lanzamiento un villano aparecerá para modificar las reglas del juego
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.hidefninja.com/community/media/hot-toys-avengers.21542/full?d=1456289603"
					alt="Second slide"
				/>

				<Carousel.Caption className="c2">
					<h3>Nuevos personajes en nuestra tienda online</h3>
					<p>
						Ya están disponibles los coleccionables de Avengers
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capitana-marvel-brie-larson-1544518299.jpeg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Capitana Marvel</h3>
					<p>
						Descubre todo acerca de la última película de Marvel
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default UncontrolledExample;
