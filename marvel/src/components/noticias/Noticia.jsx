import { useState, useEffect } from "react";
import { getDoc, deleteDoc, doc } from "firebase/firestore";
import { useParams, useNavigate, Link } from "react-router-dom";
import { auth, db } from '../../firebaseConfig/firebase.js';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useAuthState } from "react-firebase-hooks/auth";
import "./Noticias.css";

export const Noticia = () => {
  const [user] = useAuthState(auth);

  const [titulo, setTitulo] = useState("")
  const [foto, setFoto] = useState("")
  const [descripcion, setDescripcion] = useState("")

  const { id } = useParams();
  const navigate = useNavigate();

  // Leer noticia
  const getNoticiaById = async (id) => {
    const noticiaDoc = await getDoc(doc(db, 'noticias', id));
    if (noticiaDoc.exists()) {
      setTitulo(noticiaDoc.data().titulo);
      setFoto(noticiaDoc.data().foto);
      setDescripcion(noticiaDoc.data().descripcion);
    } else {
      console.log('La noticia no existe');
    }
  }

  // Borrar noticia
  const deleteNoticia = async (id) => {
    const noticiaDoc = doc(db, 'noticias', id)
    await deleteDoc(noticiaDoc);
    navigate("/")
  }

  useEffect(() => {
    getNoticiaById(id);
  }, [])

  if (user?.email == "administrador@ejemplo.com") {
    var editar_noticia = <Link to={`/edit/${id}`}><Button variant="success">Actualizar</Button></Link>
    var borrar_noticia = <Button variant="danger" onClick={() => { deleteNoticia(id) }}>Borrar</Button>
  } else {
    var editar_noticia = '';
    var borrar_noticia = '';
  }

  return (
    <>
      <div className="main">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/noticias">Noticias</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>{titulo}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="noticia-container">
          <h1 className="titulo">{titulo}</h1>
          <img src={foto} width="1000"></img>
          <p className="noticia-texto">
            {descripcion}
          </p>
        </div>
        <div className="btngroup">
          {editar_noticia}
          {borrar_noticia}
        </div>
      </div>
    </>
  );
}