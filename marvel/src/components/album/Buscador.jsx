import { useNavigate } from "react-router-dom";
import "./Buscador.css";
import { useState } from "react";

export const Buscador = ({setCurrentPage}) => {
	const [searchText, setSearchText] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`?search=${searchText}`);
		setCurrentPage(1);
	};

	return (
		<form className="buscadorContainer" onSubmit={handleSubmit}>
			<div className="buscadorBox">
				<input
					className="buscadorInput"
					type="text"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button className="buscadorButton" type="submit">
					BUSCAR
				</button>
			</div>
		</form>
	);
};
