import { doc, getDoc } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { Spinner } from "../Spinner";
import { DropdownTienda } from "./DropdownTienda";
import { ItemCount } from "./ItemCount";
import { CardDetail } from "./CardDetail";

export const ItemDetailContainer = ({ item, onAdd }) => {

	//Vista del detalle del producto
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [detail, setDetail] = useState("");
	const [img, setImg] = useState("");
	const [cargando, setCargando] = useState(true);

	const { id } = useParams();

	const getProductsById = async (id) => {
		setCargando(true);
		const productDoc = await getDoc(doc(db, "products", id));

		if (productDoc.exists()) {
			console.log("funciona");
			setName(productDoc.data().name);
			setPrice(productDoc.data().price);
			setDetail(productDoc.data().detail);
			setImg(productDoc.data().img);
			setCargando(false);
		} else {
			console.log("El producto no existe");
		}
	};

	useEffect(() => {
		getProductsById(id);
	}, []);

	if (cargando) {
		return <Spinner />;
	}

	return (
		<>
			<nav
				className="container-fluid"
				style={{ backgroundColor: "coral" }}>
				<DropdownTienda />
			</nav>
			<div className="container mt-4 mb-4">
				<div className="card text-center ">
					<div
						className="card-header"
						style={{
							fontSize: "1.5rem",
							textTransform: "uppercase",
						}}>
						<strong>{name}</strong>
					</div>
					<div className="card-body d-flex align-items-center justify-content-center">
						<div>
							<img width={"40%"} src={img} alt={name} />
						</div>
						<div>
							<p className="card-text"> {detail} </p>
							<p className="card-text">
								<strong>$ {price} </strong>
							</p>
							<ItemCount
								initial={1}
								stock={item.stock}
								onAdd={onAdd}
							/>
						</div>
					</div>
					<div class="card-footer text-muted">
						<Link
							className="pt-2 mt-3"
							to="/tienda"
							style={{
								color: "#04042f",
								textDecorationLine: "underline",
								fontWeight: "bold",
							}}>
							⇽ Volver
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
