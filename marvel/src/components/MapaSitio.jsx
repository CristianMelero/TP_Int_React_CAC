import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiTwitch } from '@mdi/js';

export const MapaSitio = () => {
	return (
		<>
		<div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-column">
						<Link to={"/nosotros"} className="text-light text-decoration-none">
							<strong>Nosotros</strong>
						</Link>
                        <Link to={"/contacto"} className="text-light text-decoration-none">
							<strong>Contácto</strong>
						</Link>
						</div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column">
							<Link to={"/album"} className="text-light text-decoration-none">
								<strong>ALBUM</strong>
							</Link>
							<Link to={"/juego"} className="text-light text-decoration-none">
								<strong>JUEGO</strong>
							</Link>
							<Link to={"/tienda"} className="text-light text-decoration-none">
								<strong>TIENDA</strong>
							</Link>
						</div>
                    </div>
                    <div className="col">
						<p className="text-light">
							<strong>Seguinos en las redes</strong>
						</p>
						<div>
							<Icon path={mdiFacebook} size={1} color={"white"} className="m-1" />
							<Icon path={mdiTwitter} size={1} color={"white"} className="m-1" />
							<Icon path={mdiInstagram} size={1} color={"white"} className="m-1" />
							<Icon path={mdiTwitch} size={1} color={"white"} className="m-1" />
						</div>
                    </div>
                </div>
            </div>
		</>
	);
};
