import { MD5 } from "crypto-js";

const publicKey = `${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}`;
const privateKey = `${process.env.REACT_APP_MARVEL_API_PRIVATE_KEY}`;
const timestamp = new Date().getTime().toString();
const hash = MD5(timestamp + privateKey + publicKey).toString();
const validation = `&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
const API = `https://gateway.marvel.com/v1/public/characters`;

export const get = (path) => {
	return fetch(API + path + validation).then((results) => results.json());
};
