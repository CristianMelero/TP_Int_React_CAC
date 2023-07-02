import { useNavigate } from "react-router-dom";
import "./Buscador.css";
import { useState } from "react";

export const Buscador = ({ setSearchText }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="buscadorContainer" onSubmit={handleSubmit}>
			<div className="buscadorBox">
				<input
					className="buscadorInput"
					type="text"
					// value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button className="buscadorButton" type="submit">
					Buscar
				</button>
			</div>
		</form>
	);
};
