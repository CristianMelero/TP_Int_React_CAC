import { doc, getDoc } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { Spinner } from "../Spinner";
import { DropdownTienda } from "./DropdownTienda";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
	//Vista del detalle del producto
	const [item, setItem] = useState(null)
	const [cargando, setCargando] = useState(true);

	const { id } = useParams();

	const getProductsById = async (id) => {
		setCargando(true);
		const productDoc = await getDoc(doc(db, "products", id));

		if (productDoc.exists()) {
			setItem({...productDoc.data(), id: id});
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
		<nav className="container-fluid" style={{backgroundColor:"coral"}}>
			<DropdownTienda/>
			</nav>
		<div className="container mt-4 mb-4">
			<div className="card text-center ">
				<div
					className="card-header"
					style={{ fontSize: "1.5rem", textTransform: "uppercase" }}>
					<strong>{item.name}</strong>
				</div>
				<div className="card-body d-flex align-items-center justify-content-center">
					<div>
						<img width={"40%"} src={item.img} alt={item.name} />
					</div>
					<div>
						<p className="card-text"> {item.detail} </p>
						<p className="card-text">
							<strong>$ {item.price} </strong>
						</p>

						<ItemCount initial={1} stock={item.stock} item={item}/>
					</div>
				</div>
				<div className="card-footer text-muted">
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
