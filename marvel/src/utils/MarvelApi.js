import { MD5 } from "crypto-js";

const publicKey = "8770fe34d3812c4e1b5800c8bbfd9ea8";
const privateKey = "f41e3e8cfd0dda339ddd4d25ea6045596ecefa6b";
const timestamp = new Date().getTime().toString();
const hash = MD5(timestamp + privateKey + publicKey).toString();
const API = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

export const get = (path) => {
	return fetch(API + path).then((results) => results.json());
};
