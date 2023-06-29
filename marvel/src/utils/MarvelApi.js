import axios from "axios";
import { MD5 } from "crypto-js";
import { useEffect, useState } from "react";

const MarvelAPI = ({ currentPage }) => {
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState();
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const publicKey = "8770fe34d3812c4e1b5800c8bbfd9ea8";
			const privateKey = "f41e3e8cfd0dda339ddd4d25ea6045596ecefa6b";
			const timestamp = new Date().getTime().toString();
			const hash = MD5(timestamp + privateKey + publicKey).toString();

			const limit = 20; // Cantidad de personajes por solicitud
			let internalOffset = offset;

			let results = [];

			try {
				let response;
				do {
					const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${internalOffset}`;

					response = await axios.get(url);
					const responseData = response.data?.data?.results || [];

					//calculo de total de paginas
					// const totalCharacters = response.data?.data?.total;
					// setTotalPages(Math.ceil(totalCharacters / limit));

					setTotalPages(50) //implementacion temporaria hasta resolver como hacer el calculo excluyendo a los filtrados

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

				// const filteredResults = results.slice(0, 20);
				setData(data.concat(results));
				setOffset(internalOffset);
			} catch (error) {
				console.error("Error en la solicitud:", error);
			}
		};

		fetchData();
	}, [currentPage]);

	return { data, totalPages };
};

export default MarvelAPI;

//CODIGO ORIGINAL
// import axios from "axios";
// import { MD5 } from "crypto-js";
// import React, { useEffect, useState } from "react";

// const MarvelAPI = ({ currentPage }) => {
// 	const [data, setData] = useState(null);
// 	const limit = 20; // Cantidad de personajes por página

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const publicKey = "8770fe34d3812c4e1b5800c8bbfd9ea8";
// 			const privateKey = "f41e3e8cfd0dda339ddd4d25ea6045596ecefa6b";
// 			const timestamp = new Date().getTime().toString();
// 			const hash = MD5(timestamp + privateKey + publicKey).toString();

// 			const offset = (currentPage - 1) * limit;
// 			const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

// 			try {
// 				const response = await axios.get(url);
// 				setData(response.data);
// 			} catch (error) {
// 				console.error("Error en la solicitud:", error);
// 			}
// 		};

// 		fetchData();
// 	}, [currentPage]);

// 	const totalCharacters = data?.data?.total || 0;
// 	const totalPages = Math.ceil(totalCharacters / limit);

// 	return { data, totalPages };
// };

// export default MarvelAPI;
