import { useState, useEffect } from "react";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from '../../firebaseConfig/firebase.js';

export const Edit = () => {
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [foto, setFoto] = useState("")

    const navigate = useNavigate()

    const { id } = useParams();

    const updateNoticia = async (e) => {
        e.preventDefault();
        const noticiaDoc = doc(db, 'noticias', id);
        const data = {
            titulo: titulo,
            foto: foto,
            descripcion: descripcion,
        }
        await updateDoc(noticiaDoc, data);
        navigate("/")
    }

    const getNoticiaById = async (id) => {
        const noticiaDoc = await getDoc(doc(db, 'noticias', id));
        if (noticiaDoc.exists()) {
            setTitulo(noticiaDoc.data().titulo);
            setFoto(noticiaDoc.data().foto);
            setDescripcion(noticiaDoc.data().descripcion);
        } else {
            console.log('La noticia no existe.');
        }
    }

    useEffect(() => {
        getNoticiaById(id);
    }, [])

    return (
        <>
            <div class="main">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/noticias">Noticias</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Editar noticia</Breadcrumb.Item>
                </Breadcrumb>

                <div className="container containerNoticia">
                    <div className="row">
                        <div className="col">
                            <h1 className="titulo">Editar noticia</h1>
                            <Form onSubmit={updateNoticia}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Título:</Form.Label>
                                    <Form.Control
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mb-3">
                                    <Form.Label>Imagen URL:</Form.Label>
                                    <Form.Control
                                        value={foto}
                                        onChange={(e) => setFoto(e.target.value)}
                                        type="text"
                                    />
                                </div>

                                <div className="mb-3">
                                    <Form.Label className="form-label">Descripción:</Form.Label>
                                    <Form.Control as="textarea"
                                        contentEditable="true"
                                        rows={10}
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    />
                                </div>

                                <Button variant="success" type="submit" onClick={() => { updateNoticia(id) }}>
                                    Actualizar
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}