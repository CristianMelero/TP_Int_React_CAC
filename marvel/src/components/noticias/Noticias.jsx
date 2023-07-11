import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap/";
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig/firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";

export const Noticias = () => {
	const [user] = useAuthState(auth);

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

	if (user?.email == "administrador@ejemplo.com") {
        var publicar_noticia = <Link to="/create" className="noticiabtn"><Button variant="warning">Publicar nueva noticia</Button></Link>
    } else {
		var publicar_noticia = ''
	}

	useEffect(() => {
		getNoticias()
	}, [])

	return (
		<>
			<div className="noticiasCard">
				{noticias.slice(0, 4).map((noticia) => (
					<Card style={{ width: '18rem' }} key={noticia.id}>
						<Card.Img src={noticia.foto}></Card.Img>
						<Card.Body>
							<Card.Title>{noticia.titulo}</Card.Title>
							<br></br>
							<Card.Text>{noticia.descripcion.substring(0, 100)}...</Card.Text>
							<Link to={`noticias/noticia/${noticia.id}`}><Button variant="danger">Leer más</Button></Link>
						</Card.Body>
					</Card>
				))}
				<br></br>
			</div>
			{publicar_noticia}
			<br></br>
		</>
	);
};
