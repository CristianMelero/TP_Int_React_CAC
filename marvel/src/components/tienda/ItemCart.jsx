import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Icon from "@mdi/react";
import { mdiCloseBox } from "@mdi/js";
//import "./ItemCart.css"

export const ItemCart = ({ item, quantity }) => {
	const { removeItem } = useContext(CartContext);
	return (
		<>
			<tbody>
				<tr scope="row">
					<th className="col-3">
						<div className="d-flex align-items-center ">
							<img width={"40%"} src={item.img} alt={item.name} />
							<p className="p-3">{item.name}</p>
						</div>
					</th>
					<td className="col-2 ">{item.quantity}</td>
					<td className="col-2 ">$ {item.price}</td>
					<td className="col-2"> $ {item.quantity * item.price}</td>
					<td>
						<button
							onClick={() => removeItem(item)}
							className="btn">
							<Icon path={mdiCloseBox} size={1} color={"red"} />
						</button>
					</td>
				</tr>
			</tbody>
		</>
	);
};
