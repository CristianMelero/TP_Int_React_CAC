import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { get } from "../../utils/MarvelApi";
import { Spinner } from "../Spinner";
import { Buscador } from "./Buscador";
import { Paginacion } from "./Paginacion";
import CharacterNotFound from "./manage404";
import "./Album.css";
import { CharacterCard } from "./CharacterCard";

export const Album = () => {
	const [characters, setCharacters] = useState([]);
	const [totalPages, setTotalPages] = useState(null);
	const [cargando, setCargando] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	let offset = (currentPage - 1) * 20;

	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	const query = useQuery();
	const search = query.get("search");

	useEffect(() => {
		setCargando(true);
		let path;
		if (search) {
			path = `?offset=${offset}&nameStartsWith=` + search;
		} else {
			path = `?offset=${offset}`;
		}
		get(path).then((data) => {
			setCharacters(data.data.results);
			const calculatedTotalPages = Math.ceil(data.data.total / 20); //20 es el limit por default de la API de Marvel
			setTotalPages(calculatedTotalPages);
			setCargando(false);
		});
	}, [currentPage, search]);

	if (cargando) {
		return <Spinner />;
	}

	return (
		<div className="album">
			<div className="d-flex justify-content-around align-items-center p-5">
				<div>
					<h1>
						<b>ÁLBUM</b>
					</h1>
				</div>
				<div>
					<Buscador setCurrentPage={setCurrentPage} />
				</div>
			</div>
			{characters.length !== 0 ? (
				<>
					<Container>
						<Row>
							{characters.map((character) => (
								<Col key={character.id} sm={6} md={4} lg={3}>
									<CharacterCard
										key={character.id}
										character={character}
									/>
								</Col>
							))}
						</Row>
					</Container>
					<Paginacion
						currentPage={currentPage}
						totalPages={totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</>
			) : (
				<CharacterNotFound />
			)}
		</div>
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
