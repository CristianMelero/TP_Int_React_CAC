import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Breadcrumb } from "react-bootstrap/";
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig/firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";

export const NoticiasAll = () => {
	const [noticias, setNoticias] = useState([])
	const noticiasCollection = collection(db, 'noticias')

	// Obtener noticias

	const getNoticias = async () => {
		const data = await getDocs(noticiasCollection);
		// console.log(data.doc)
		setNoticias(
			data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id
			}))
		)
		console.log(noticias);
	}

	useEffect(() => {
		getNoticias()
	}, [])

	return (
		<div className="main">
			<Breadcrumb>
				<Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
				<Breadcrumb.Item active>Noticias</Breadcrumb.Item>
			</Breadcrumb>

			<div className="noticiasCard">
				{noticias.map((noticia) => (
					<Card style={{ width: '18rem' }} key={noticia.id}>
						<Card.Img src={noticia.foto}></Card.Img>
						<Card.Body>
							<Card.Title>{noticia.titulo}</Card.Title>
							<br></br>
							<Card.Text>{noticia.descripcion.substring(0, 100)}...</Card.Text>
							<Link to={`noticia/${noticia.id}`}><Button variant="danger">Leer más</Button></Link>
						</Card.Body>
					</Card>
				))}
				<br></br>
			</div>
		</div>
	)
}