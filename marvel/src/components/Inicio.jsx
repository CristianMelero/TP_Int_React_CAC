import UncontrolledExample from "./Carousel";
import { Noticias } from "./noticias/Noticias";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Inicio = () => {
	return (
			<div className="main">
				<UncontrolledExample />
				<h3 className="titulo">Últimas noticias</h3>
				<Link to="/noticias"><Button variant="danger" style={{ marginLeft: '2%' }}>Ver todas las noticias</Button></Link>
				<Noticias />
			</div>
	);
};
