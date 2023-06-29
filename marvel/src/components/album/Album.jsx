import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, SplitButton } from "react-bootstrap";
import MarvelAPI from "../../utils/MarvelApi";
import { Spinner } from "../Spinner";

export const Album = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data } = MarvelAPI({ currentPage });
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		if (data) {
			const calculatedTotalPages = Math.ceil(data.length / 20);
			setTotalPages(calculatedTotalPages);
		}
	}, [data]);

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

	if (!data) {
		return <Spinner />;
	}

	const startIndex = (currentPage - 1) * 20;
	const endIndex = startIndex + 20;
	const charactersOnPage = data.slice(startIndex, endIndex);

	return (
		<>
			<Container>
				<h1>
					<b>ÁLBUM</b>
				</h1>
				<Row>
					{charactersOnPage.map((character) => (
						<Col key={character.id} sm={6} md={4} lg={3}>
							<Card>
								<Card.Img
									variant="top"
									src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
									style={{ maxHeight: "300px" }}
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
				Estás en la página {currentPage} de {totalPages}
			</div>
			<div className="pagination">
				<button onClick={previousPage} disabled={currentPage === 1}>
					Anterior
				</button>
				<button
					onClick={nextPage}
					disabled={currentPage === totalPages}>
					Siguiente
				</button>
			</div>
		</>
	);
};

// CODIGO QUE MUESTRA TODO Y MANEJA PAGINACION
// import React, { useState, useEffect } from "react";
// import { Card, Col, Container, Row, SplitButton } from "react-bootstrap";
// import MarvelAPI from "../../utils/MarvelApi";
// import { Spinner } from "../Spinner";

// export const Album = () => {
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const { data } = MarvelAPI();
// 	const [totalPages, setTotalPages] = useState(0);

// 	useEffect(() => {
// 		if (data) {
// 		  const calculatedTotalPages = Math.ceil(data.length / 1);
// 		  setTotalPages(calculatedTotalPages);
// 		}
// 	  }, [data]);

// 	const previousPage = () => {
// 		if (currentPage > 1) {
// 			setCurrentPage(currentPage - 1);
// 		}
// 	};

// 	const nextPage = () => {
// 		if (currentPage < totalPages) {
// 			setCurrentPage(currentPage + 1);
// 		}
// 	};

// 	if (!data) {
// 		return <Spinner />;
// 	}

// 	const startIndex = (currentPage - 1) * 20;
// 	const endIndex = startIndex + 20;
// 	const charactersOnPage = data.slice(startIndex, endIndex);

// 	return (
// 		<>
// 			<Container>
// 				<h1>
// 					<b>ÁLBUM</b>
// 				</h1>
// 				<Row>
// 					{charactersOnPage.map((character) => (
// 						<Col key={character.id} sm={6} md={4} lg={3}>
// 							<Card>
// 								<Card.Img
// 									variant="top"
// 									src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
// 									style={{maxHeight:"300px"}}
// 								/>
// 								<Card.Body>
// 									<Card.Title>{character.name}</Card.Title>
// 								</Card.Body>
// 							</Card>
// 						</Col>
// 					))}
// 				</Row>
// 			</Container>
// 			<div>
// 				Estás en la página {currentPage} de {totalPages}
// 			</div>
// 			<div className="pagination">
// 				<button onClick={previousPage} disabled={currentPage === 1}>
// 					Anterior
// 				</button>
// 				<button
// 					onClick={nextPage}
// 					disabled={currentPage === totalPages }>
// 					Siguiente
// 				</button>
// 			</div>
// 		</>
// 	);
// };
