import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
	return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand>
						<img src="../marvel-comics-logo.png" alt="Logo de Marvel" width="100"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="nav-links">
							<Link to="/" className="link">
								Inicio
							</Link>
							<Link to="/album" className="link">
								Álbum
							</Link>
							<Link to="/juego" className="link">
								Juego
							</Link>
							<Link to="/tienda" className="link">
								Tienda
							</Link>
							<Link to="/nosotros" className="link">
								Nosotros
							</Link>
							<Link
								style={{ color: "coral", fontWeight: "500" }}
								to="/login"
								className="link">
								Iniciar Sesión
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
	);
};
