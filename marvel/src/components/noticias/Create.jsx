import { useState } from "react";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase.js";
import "./Noticias.css";

export const Create = () => {
    const [titulo, setTitulo] = useState("")
    const [foto, setFoto] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const navigate = useNavigate()

    const noticiasCollection = collection(db, "noticias")

    const crearNoticia = async (e) => {
        e.preventDefault()
        await addDoc(noticiasCollection, {
            titulo: titulo,
            foto: foto,
            descripcion: descripcion,
        })
        navigate("/")
    }

    return (
        <div class="main">
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/noticias">Noticias</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Crear noticia</Breadcrumb.Item>
            </Breadcrumb>

            <br></br>
            <div className="container containerNoticia">
                <div className="row">
                    <div className="col">
                        <h1 className="titulo">Publicar noticia</h1>
                        <br></br>
                        <Form onSubmit={crearNoticia}>
                            <div className="mb-3">
                                <Form.Label className="form-label">Título: </Form.Label>
                                <Form.Control
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    className="form-control"
                                    type="text" />
                            </div>

                            <div className="mb-3">
                                <Form.Label>Imagen URL:</Form.Label>
                                <Form.Control
                                    value={foto}
                                    onChange={(e) => setFoto(e.target.value)}
                                    type="text"></Form.Control>
                            </div>

                            <div className="mb-3">
                                <Form.Label className="form-label">Descripción: </Form.Label>
                                <Form.Control as="textarea" rows={10}
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="btn btn-warning">Publicar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}