import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    auth, registerWithEmailAndPassword
} from '../../firebaseConfig/firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";
import "../../styles.css";
import "./Register.css";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        registerWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="main">
            <div className="register">
                <div className="register__container">
                    <input
                        type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Dirección de correo electrónico"
                    />
                    <input
                        type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                    />
                    <button className="register__btn" onClick={register}>
                        Registrarse
                    </button>
                    <hr></hr>
                    <span>
                        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link> ahora.
                    </span>
                </div>
            </div>
        </div>
    )
}