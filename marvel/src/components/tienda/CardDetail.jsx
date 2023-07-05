import "./CardDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext.jsx";
import { ItemCount } from "./ItemCount";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export const CardDetail = ({ item }) => {
	const { addToCart } = useContext(CartContext);
	const [countCart, setCountCart] = useState([]);

	//Suma de item
	const onAdd = (quantity) => {
		addToCart(item, quantity);
		setCountCart(quantity);
		Swal.fire({
			position: "center",
			icon: "success",
			title: `${quantity} ${item.name} agregados al carrito`,
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<div className="p-2 container">
			<div
				className="card text-center bg-dark "
				style={{ width: "18rem" }}>
				<img
					src={item.img}
					className="imgCardcard-img-top p-4 rounded mx-auto d-block"
					alt={item.name}
					style={{ maxHeight: "345px", width: "auto" }}
				/>
				<div className="card-body">
					<h3 className="card-title nameCard text-light">
						{item.name}
					</h3>
					<h5 className="priceCard text-light">${item.price}</h5>

					<ItemCount initial={1} stock={item.stock} onAdd={onAdd} />

					<NavLink
						to={`/detail/${item.id}`}
						className=" mt-4"
						style={{
							width: "13rem",
							fontSize: "22px",
							color: "#ffff",
							textDecorationLine: "underline",
						}}
						onAdd={onAdd}
						item={item}>
						Ver detalles
					</NavLink>
				</div>
			</div>
		</div>
	);
};
