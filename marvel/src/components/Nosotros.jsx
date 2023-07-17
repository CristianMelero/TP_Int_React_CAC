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
			<Card style={{ width: "16rem" }}>
					<Card.Img
						variant="top"
						src="https://avatars.githubusercontent.com/u/100171302?v=4"
						alt="Foto de Cele Rodriguez"
					/>
					<Card.Body>
						<Card.Title>Celeste Rodriguez</Card.Title>
						<Card.Text>Desarrolladora Web Fullstack</Card.Text>
						<Link
							to="https://www.linkedin.com/in/maria-celeste-rodriguez-petela-983b67234/"
							target="_blank">
							<Button variant="danger">LinkedIn</Button>
						</Link>
						<Link
							to="https://github.com/celerrodriguez"
							target="_blank">
							<Button variant="danger">Github</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "16rem" }}>
					<Card.Img
						variant="top"
						src="https://avatars.githubusercontent.com/u/65016373?v=4"
						alt="Foto de Cesia Cora"
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
				<Card style={{ width: "16rem" }}>
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
				<Card style={{ width: "16rem" }}>
					<Card.Img
						variant="top"
						src="https://media.licdn.com/dms/image/C4E03AQEZ-CanEV1CHw/profile-displayphoto-shrink_200_200/0/1530110483980?e=1695254400&v=beta&t=kiPP9GRY29Creui6jo89D4BI56QlC55KKfyK8YsCJ6o"
						alt="Foto de Jhosselyn Cortez"
					/>
					<Card.Body>
						<Card.Title>Jhosselyn Cortez</Card.Title>
						<Card.Text>
						Desarrolladora Web Fullstack
						</Card.Text>
						<Link
							to="linkedin.com/in/jhosselyn-cortez-cruz-/"
							target="_blank">
							<Button variant="danger">LinkedIn</Button>
						</Link>
						<Link to="https://github.com/JhosselynCC">
							<Button variant="danger" target="_blank">
								Github
							</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "16rem" }}>
					<Card.Img
						variant="top"
						src="https://avatars.githubusercontent.com/u/49765163?v=4"
						alt="Foto de Josefina Sofio"
					/>
					<Card.Body>
						<Card.Title>Josefina Sofio Avogadro</Card.Title>
						<Card.Text>
						Desarrolladora Web Fullstack
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
				<Card style={{ width: "16rem" }}>
					<Card.Img variant="top" src="https://media.licdn.com/dms/image/C4D03AQHXXa4vXGj44A/profile-displayphoto-shrink_200_200/0/1641812774092?e=1695254400&v=beta&t=TztcexsuL3lWfQmddLijNGH83v6thwap7gAhZhbCVVE"
					alt="Foto de Nicolás Bilic"
					/>
					<Card.Body>
						<Card.Title>Nicolás Bilic</Card.Title>
						<Card.Text>
							Desarrollador Web Fullstrack
						</Card.Text>
						<Link to="https://www.linkedin.com/in/nicolasbilic/">
							<Button variant="danger">LinkedIn</Button>
						</Link>
						<Link to="https://github.com/facuvalenico">
							<Button variant="danger">Github</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
