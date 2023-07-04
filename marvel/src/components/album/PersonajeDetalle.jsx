import { get } from "../../utils/MarvelApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterNotFound from "./manage404";
import { Spinner } from "../Spinner";

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
		<div>
			<img src={imgURL} alt={character.name} className="col" />
			<div className="characterDetalle">
				<p className="item">
					<strong>Nombre: </strong>
					{character.name}
				</p>
				{character.description !== '' ? (
					<p>
						<strong>Descripción: </strong>
						{character.description}
					</p>
				) : (
					<></>
				)}
				<p>
					<strong>Comics: </strong>
					{character.comics.items
						.map((comic) => comic.name)
						.join(", ")}
				</p>
			</div>
		</div>
	);
};
