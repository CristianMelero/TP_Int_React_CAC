import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import "./Buscador.css";

export const Buscador = ({setCurrentPage}) => {
	const [searchText, setSearchText] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`?search=${searchText}`);
		setCurrentPage(1);
	};

	return (
		<Form className="buscadorContainer" onSubmit={handleSubmit}>
			<div className="buscadorBox">
				<Form.Control
					className="buscadorInput"
					type="text"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button className="buscadorButton" type="submit">
					Buscar
				</button>
			</div>
		</Form>
	);
};
