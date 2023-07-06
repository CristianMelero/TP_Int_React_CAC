import { get } from "../../utils/MarvelApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterNotFound from "./manage404";
import { Spinner } from "../Spinner";
import "./PersonajeDetalle.css";
import Button from "react-bootstrap/Button";

export const CharacterDetail = () => {
	const { characterId } = useParams();
	const [character, setCharacter] = useState();

    useEffect(() => {
		get(`/${characterId}?`).then((data) => {
			setCharacter(data.data.results[0]);
			console.log(character);
		});
	}, [characterId]);

	if (!character) {
        return <Spinner />
	}

	const imgURL = `${character.thumbnail.path}.${character.thumbnail.extension}`;

	return (
		<div className="main bg-album">
			<img src={imgURL} alt={character.name} className="col characterImg" />
			<div className="characterDetalle">
				<p className="item">
					<strong>Nombre: </strong>
					{character.name}
				</p>
				<hr></hr>
				{character.description !== '' ? (
					<p>
						<strong>Descripción: </strong>
						{character.description}
					</p>
				) : (
					<></>
				)}
				<hr></hr>
				<p>
					<strong>Comics: </strong>
					{character.comics.items
						.map((comic) => comic.name)
						.join(", ")}
				</p>
			</div>
			<Link to="/album" className="regresarBtn"><Button variant="warning">Regresar al álbum</Button></Link>
		</div>
	);
};
