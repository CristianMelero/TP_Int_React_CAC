import { useState, useEffect } from "react";
import { getDoc, deleteDoc, doc } from "firebase/firestore";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from '../firebaseConfig/firebase.js';
import Button from 'react-bootstrap/Button';

export const Noticia = () => {
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

  return (
    <>
      <div class="main">
        <div class="noticia-container">
          <h1 class="titulo">{titulo}</h1>
          <img src={foto} width="1000"></img>
          <p class="noticia-texto">
            {descripcion}
          </p>
        </div>
        <div className="btngroup">
          <Link to={`/edit/${id}`}><Button variant="success">Actualizar</Button></Link>
          <Button variant="danger" onClick={() => { deleteNoticia(id) }}>Borrar</Button>
        </div>
      </div>
    </>
  );
}