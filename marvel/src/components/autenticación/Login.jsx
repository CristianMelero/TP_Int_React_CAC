import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth, logInWithEmailAndPassword
} from '../../firebaseConfig/firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";
import "../../styles.css";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);


  return (
    <div className="main">
      <div className="login">
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Dirección de correo electrónico"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Iniciar Sesión
          </button>
          <hr></hr>
            <Link to="/reset">Olvidé la contraseña</Link>
          <br></br>
          <span>
            ¿No tienes cuenta? <Link to="/register">Regístrate</Link> ahora.
          </span>
        </div>
      </div>
    </div>
  );
}