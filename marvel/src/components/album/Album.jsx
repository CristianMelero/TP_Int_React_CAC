import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
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
						<b>Álbum</b>
					</h1>
				</div>
				<div>
					<Buscador setCurrentPage={setCurrentPage} />
				</div>
			</div>
			{characters.length !== 0 ? (
				<>
					<Container>
						<Row className="g-5">
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
