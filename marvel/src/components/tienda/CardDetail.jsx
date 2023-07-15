import "./CardDetail.css";
import { ItemCount } from "./ItemCount";
import { NavLink } from "react-router-dom";

export const CardDetail = ({ item }) => {

	return (
		<div className="p-2 container">
			<div
				className="card text-center bg-dark "
				style={{ width: "18rem" }}>
				<img
					src={item.img}
					className="imgCardcard-img-top p-4 rounded mx-auto d-block"
					alt={item.name}
					style={{ height: "345px", width: "auto" }}
				/>
				<div className="card-body">
					<h3 className="card-title nameCard text-light">
						{item.name}
					</h3>
					<h5 className="priceCard text-light">${item.price}</h5>

					<ItemCount initial={1} stock={item.stock} item={item} />

					<NavLink
						to={`/detail/${item.id}`}
						className=" mt-4"
						style={{
							width: "13rem",
							fontSize: "22px",
							color: "#ffff",
							textDecorationLine: "underline",
						}}
						>
						Ver detalles
					</NavLink>
				</div>
			</div>
		</div>
	);
};
