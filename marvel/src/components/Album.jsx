import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MarvelAPI from "../utils/MarvelApi";

export const Album = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, totalPages } = MarvelAPI({ currentPage, setCurrentPage });

	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const filteredCharacters = data?.data?.results?.filter(
		(character) =>
			character.thumbnail &&
			!character.thumbnail.path.includes("image_not_available"),
	);

	if (!data) {
		return <div>Cargando...</div>;
	}

	return (
		<>
			<div className="main">
				<h1>
					<b>ALBUM</b>
				</h1>
			</div>
			<Container>
				<Row>
					{filteredCharacters.map((character) => (
						<Col key={character.id} sm={6} md={4} lg={3}>
							<Card>
								<Card.Img
									variant="top"
									src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
								/>
								<Card.Body>
									<Card.Title>{character.name}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<div>
				Actualmente estás en la página {currentPage} de {totalPages}
			</div>
			<div className="pagination">
				<button onClick={previousPage} disabled={currentPage === 1}>
					Anterior
				</button>
				<button
					onClick={nextPage}
					disabled={currentPage === data.data.total / 20}>
					Siguiente
				</button>
			</div>
		</>
	);
};
