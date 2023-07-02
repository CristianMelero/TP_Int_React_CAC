import { doc, getDoc } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { Spinner } from "../Spinner";
// import { ItemCount } from "./ItemCount";
// import { CartContext } from '../../context/cartContext.jsx';
// import Swal from "sweetalert2"

export const ItemDetailContainer = ({ item }) => {
	// const { addToCart } = useContext(CartContext);

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

	// const [countCart, setCountCart] = useState([])

	// const onAdd = (quantity) => {

	//     addToCart(item, quantity);

	//     setCountCart(quantity)
	//     Swal.fire({
	//         position: 'center',
	//         icon: 'success',
	//         title: `${quantity} ${item.name} agregados al carrito`,
	//         showConfirmButton: false,
	//         timer: 1500
	//     })
	// }

	return (
		<div className="container mt-4 mb-4">
			<div className="card text-center ">
				<div
					className="card-header"
					style={{ fontSize: "1.5rem", textTransform: "uppercase" }}>
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
						{/* <ItemCount initial={1} stock={item.stock} onAdd={onAdd()}/>  */}
						<Link to="/cart">
							<button
								className="btn "
								style={{
									color: "#fff",
									backgroundColor: "coral",
								}}>
								COMPRAR
							</button>
						</Link>
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
