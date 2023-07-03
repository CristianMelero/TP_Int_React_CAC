import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebaseConfig/firebase.js";
import "../../styles.css";
import "./Reset.css";

export const Reset = () => {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="main">
            <div className="reset">
                <div className="reset__container">
                    <input
                        type="text"
                        className="reset__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Dirección de correo electrónico"
                    />
                    <button
                        className="reset__btn"
                        onClick={() => sendPasswordReset(email)}
                    >
                        Enviar contraseña de recuperación
                    </button>
                    <hr></hr>
                    <span>
                        ¿No tienes cuenta? <Link to="/register">Regístrate</Link> ahora.
                    </span>
                </div>
            </div>
        </div>
    )
}