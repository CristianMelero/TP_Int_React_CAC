import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-links">
                <Link class="link" to='/contacto'>Contacto</Link>
                <Link class="link" to='/mapa'>Mapa del Sitio</Link>
                <Link class="link" to='/links_interes'>Enlace de interés</Link>
                </div>
                &copy; Copyright 2023
            </footer>
        </>
    )
}