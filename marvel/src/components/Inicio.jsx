import UncontrolledExample from "./Carousel";
import { Noticias } from "./Noticias";

export const Inicio = () => {
	return (
			<div className="main">
				<UncontrolledExample />
				<h3 className="titulo">Últimas noticias</h3>
				<Noticias />
				<h3 className="titulo">TITULO</h3>
				<br />
				<p className="parrafo">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Aliquam consequuntur quis corporis blanditiis corrupti
					doloremque adipisci cum vitae impedit veritatis deleniti,
					enim vel esse. Quibusdam provident aut totam repellat saepe?
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Aliquam consequuntur quis corporis blanditiis corrupti
					doloremque adipisci cum vitae impedit veritatis deleniti,
					enim vel esse. Quibusdam provident aut totam repellat saepe?
				</p>
				<br />
			</div>
	);
};
