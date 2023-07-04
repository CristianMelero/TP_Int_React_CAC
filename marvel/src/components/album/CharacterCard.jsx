import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const CharacterCard = ({ character }) => {
	const imgURL = `${character.thumbnail.path}.${character.thumbnail.extension}`;

	return (
		<Card style={{ width: "15rem" }} className="mb-4 text-center bg-dark">
			<Link to={`/character/${character.id}` }>
				<Card.Img
					variant="top"
					src={imgURL}
					alt={character.name}
					style={{ maxHeight: "300px" }}
				/>
				<Card.Body>
					<Card.Title>{character.name}</Card.Title>
				</Card.Body>
			</Link>
		</Card>
	);
};
