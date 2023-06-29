import { doc, getDoc } from "firebase/firestore";
//import { ItemDetail } from "./ItemDetail"
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/firebase";

export const ItemDetailContainer = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [detail, setDetail] = useState("");
	const [img, setImg] = useState("");

	const { id } = useParams();

	const getProductsById = async (id) => {

		const productDoc = await getDoc(doc(db, "products", id));

		if (productDoc.exists()) {
            console.log("funciona");
			setName(productDoc.data().name);
			setPrice(productDoc.data().price);
			setDetail(productDoc.data().detail);
			setImg(productDoc.data().img);
		} else {
			console.log("El producto no existe");
		}
	};

	useEffect(() => {
		getProductsById(id);
	}, []);

	return (
		<div>
			{" "}
			DETAIL
			<div class="card text-center">
				<div class="card-header">{name}</div>
				<div class="card-body d-flex">
					<div>
						<img src={img} alt={name} />
					</div>
					<div>
						<h5 class="card-title">{name}</h5>
						<p class="card-text"> {detail} </p>
						<p class="card-text">
							<strong> {price} </strong>
						</p>
						<a href="#" class="btn btn-primary">
							COMPRAR
						</a>
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
	);
};

