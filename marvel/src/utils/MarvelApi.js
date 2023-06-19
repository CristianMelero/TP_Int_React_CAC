import axios from "axios";
import { MD5 } from "crypto-js";
import React, { useEffect, useState } from "react";

const MarvelAPI = ({ currentPage }) => {
	const [data, setData] = useState(null);
	const limit = 5; // Cantidad de personajes por página

	useEffect(() => {
		const fetchData = async () => {
			const publicKey = "8770fe34d3812c4e1b5800c8bbfd9ea8";
			const privateKey = "f41e3e8cfd0dda339ddd4d25ea6045596ecefa6b";
			const timestamp = new Date().getTime().toString();
			const hash = MD5(timestamp + privateKey + publicKey).toString();

			const offset = (currentPage - 1) * limit;
			const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

			try {
				const response = await axios.get(url);
				setData(response.data);
			} catch (error) {
				console.error("Error en la solicitud:", error);
			}
		};

		fetchData();
	}, [currentPage]);

	const totalCharacters = data?.data?.total || 0;
	const totalPages = Math.ceil(totalCharacters / limit);

	return { data, totalPages };
};

export default MarvelAPI;


// import axios from "axios";
// import { MD5 } from "crypto-js";
// import React, { useEffect, useState } from "react";

// const MarvelAPI = ({ currentPage }) => {
// 	const [data, setData] = useState(null);
// 	const limit = 5; // Cantidad de personajes por página

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
