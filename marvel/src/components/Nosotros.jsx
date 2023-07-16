import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Nosotros = () => {
	return (
		<div className="main">
			<h1 className="titulo">¿Quiénes somos?</h1>

			<p className="nosotrosTexto">
				Este proyecto fue creado como trabajo integrador grupal por
				estudiantes del curso{" "}
				<b style={{ color: "brown" }}>Codo a Codo 4.0: React</b>{" "}
				<i>(comisión 23307)</i> instruido por el profesor Gabriel Muñoz,
				en el primer cuatrimestre de 2023.
				<br></br>
				Los desarrolladores que lograron crear esta página son:
			</p>

			<div className="nosotrosCards">
				<Card style={{ width: "20rem" }}>
					<Card.Img
						variant="top"
						src="https://media.licdn.com/dms/image/D4D35AQEB9S-8Ehk-lA/profile-framedphoto-shrink_400_400/0/1677672236035?e=1690081200&v=beta&t=N5MNwIbAvDszSS3HD_7Uj9I_CL9L0_nIkOIFrt5XqaA"
					/>
					<Card.Body>
						<Card.Title>Josefina Sofio Avogadro</Card.Title>
						<Card.Text>
							Diseñadora Multimedial & Comunicación digital e
							interactiva.
						</Card.Text>
						<Link
							to="https://www.linkedin.com/in/josefinasofio/"
							target="_blank">
							<Button variant="danger">LinkedIn</Button>
						</Link>
						<Link to="https://github.com/jsofio">
							<Button variant="danger" target="_blank">
								Github
							</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card style={{ width: "20rem" }}>
					<Card.Img
						variant="top"
						src="https://avatars.githubusercontent.com/u/65016373?v=4"
					/>
					<Card.Body>
						<Card.Title>Cesia Cora</Card.Title>
						<Card.Text>Desarrolladora Web Fullstack</Card.Text>
						<Link
							to="https://linkedin.com/in/cesia-cora"
							target="_blank">
							<Button variant="danger">LinkedIn</Button>
						</Link>
						<Link
							to="https://github.com/cesia-cora"
							target="_blank">
							<Button variant="danger">Github</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card style={{ width: "20rem" }}>
					<Card.Img
						variant="top"
						src="https://avatars.githubusercontent.com/u/112022207?v=4"
						alt="Foto de Cristian Melero"
					/>
					<Card.Body>
						<Card.Title>Cristian Abel Melero</Card.Title>
						<Card.Text>Desarrollador Web Fullstack</Card.Text>
						<Link
							to="https://www.linkedin.com/in/crismelero/"
							target="_blank">
							<Button variant="danger">Linkedin</Button>
						</Link>
						<Link
							to="https://github.com/CristianMelero"
							target="_blank">
							<Button variant="danger">Github</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card style={{ width: "20rem" }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/">
							<Button variant="danger">Enlace</Button>
						</Link>
						<Link to="/">
							<Button variant="danger">Enlace</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card style={{ width: "20rem" }}>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>Nombre</Card.Title>
						<Card.Text>
							Puesto IT, descripción o rol en el proyecto
						</Card.Text>
						<Link to="/">
							<Button variant="danger">Enlace</Button>
						</Link>
						<Link to="/">
							<Button variant="danger">Enlace</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
