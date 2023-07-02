import axios from "axios";
import { MD5 } from "crypto-js";
import { useEffect, useState } from "react";

const publicKey = "8770fe34d3812c4e1b5800c8bbfd9ea8";
const privateKey = "f41e3e8cfd0dda339ddd4d25ea6045596ecefa6b";
const timestamp = new Date().getTime().toString();
const hash = MD5(timestamp + privateKey + publicKey).toString();
const limit = 20; // Cantidad de personajes por solicitud
const API = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;

const MarvelAPI = ({ currentPage, searchText }) => {
	const [data, setData] = useState([]);
	// const [totalPages, setTotalPages] = useState(); //reactivar esto si se soluciona lo de las pags
	const [offset, setOffset] = useState(0);
	const totalPages = 50 //implementacion temporaria hasta resolver como hacer el calculo excluyendo a los filtrados

	useEffect(() => {
		const fetchData = async () => {
			let internalOffset = offset;

			let results = [];

			try {
				let response;
				do {
					let url = API + `&offset=${internalOffset}`;

					if (searchText) {
						const searchParam = `&nameStartsWith=${encodeURIComponent(searchText)}`;
						url += searchParam;
					  }			

					response = await axios.get(url);
					const responseData = response.data?.data?.results || [];

					//CALCULO TOTAL DE PAGINAS
					// const totalCharacters = response.data?.data?.total;
					// setTotalPages(Math.ceil(totalCharacters / limit));

					const filteredData = responseData.filter(
						(character) =>
							character.thumbnail &&
							!character.thumbnail.path.includes(
								"image_not_available",
							) &&
							!character.thumbnail.path.includes("4c002e0305708"),
					);

					results = results.concat(filteredData);
					internalOffset += limit;
				} while (results.length < 20);

				setData(data.concat(results));
				setOffset(internalOffset);
			} catch (error) {
				console.error("Error en la solicitud:", error);
			}
		};

		fetchData();
	}, [currentPage, searchText]);

	return { data, totalPages };
};

export default MarvelAPI;

