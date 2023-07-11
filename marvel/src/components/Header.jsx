import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { auth, logout } from '../firebaseConfig/firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";

export const Header = () => {
	const [user, loading] = useAuthState(auth);

	if (user) {
		var button = <Button variant="outline-warning" onClick={() => { logout() }}>Log out</Button>
	} else {
		var button = <Link style={{ color: "coral", fontWeight: "500", textDecoration: 'none' }}
		to="/login">
		Iniciar Sesión</Link>
	}

	useEffect(() => {}, [user, loading])

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand>
					<img src="/img/marvel-comics-logo.png" alt="Logo de Marvel" width="100"></img>
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
						<Link to="/paginajuego" className="link">
							Juego
						</Link>
						<Link to="/tienda" className="link">
							Tienda
						</Link>
						<Link to="/nosotros" className="link">
							Nosotros
						</Link>
						<Link className="link">
							{button}
						</Link>
						<Link className="link">{user?.email}</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
