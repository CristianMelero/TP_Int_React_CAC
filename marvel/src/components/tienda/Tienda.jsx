import { useState } from "react";
import { DropdownTienda } from "./DropdownTienda";
import { ItemsList } from "./ItemsList";
import "./Tienda.css";

export const Tienda = () => {
	const [selectedCategory, setSelectedCategory] = useState("");

	const selectCategory = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className="tienda">
			<div className="tienda-container">
				<b>
					<h1> Marvel Shop</h1>
				</b>
				<p>Los productos de Marvel que estabas buscando</p>
			</div>
			<div>
				<div className=" bg-dark">
					<DropdownTienda selectCategory={selectCategory} />
				</div>
			</div>
			<ItemsList categoryId={selectedCategory} />
		</div>
	);
};
