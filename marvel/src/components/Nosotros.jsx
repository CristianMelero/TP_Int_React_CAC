import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Nosotros = () => {
	return (
		<div className="main">
			<h1 className='titulo'>
				¿Quiénes somos?
			</h1>

			<p className="nosotrosTexto">Este proyecto fue creado como trabajo integrador grupal por estudiantes del curso <b style={{ color: 'brown' }}>Codo a Codo 4.0: React</b> <i>(comisión 23307)</i> instruido por el profesor Gabriel Muñoz, en el primer cuatrimestre de 2023.
				<br></br>
				Los desarrolladores que lograron crear esta página son:
			</p>

			<div className="nosotrosCards">
				<Card style={{ width: '20rem' }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '20rem' }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '20rem' }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '20rem' }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '20rem' }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
						<Link to="/"><Button variant="danger">Enlace</Button></Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
