import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { CartContext } from "../../context/cartContext.jsx";
import "./OrderForm.css";
import Swal from "sweetalert2";

export const OrderForm = ({ item }) => {
	const { cart, removeAll, totalPrice } = useContext(CartContext);

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		telefono: "",
	});

	//Guardar orden de compra

	const [orderFirebase, setOrderFirebase] = useState({
		id: "",
		complete: false,
	});

	const ordenDeCompra = {
		buyer: { ...userData },
		items: [...cart],
		total: totalPrice(),
		date: new Date(),
	};

	//Guardar orden en firebase

	async function handleSubmit(e) {
		e.preventDefault();

		const ordersCollection = collection(db, "orders");
		const docRef = await addDoc(ordersCollection, ordenDeCompra);
		setOrderFirebase({ id: docRef.id, complete: true });

		setUserData({
			name: "",
			email: "",
			telefono: "",
		});

		removeAll();
	}

	function inputChangeHandler(e) {
		const input = e.target;

		const value = input.value;
		const inputName = input.name;

		let copyUserData = { ...userData };

		copyUserData[inputName] = value;
		setUserData(copyUserData);
	}

	function thanks() {
		Swal.fire(
			`¡Gracias por su compra! Revise su e-mail, le llegarán los datos de su pedido`,
		);
	}

	return (
		<div className="form-container">
			<p
				className="text-light text-center"
				style={{ fontSize: "20px", fontWeight: "bolder" }}>
				¡YA CASI ES TUYO!
			</p>
			<p
				className="text-light text-center mt-3"
				style={{ fontSize: "20px" }}>
				Completa los datos para crear tu orden de compras:
			</p>
			<form
				onSubmit={handleSubmit}
				className="d-grid gap-2  justify-content-md-center mt-4">
				<div className="form-item">
					<label htmlFor="name">Nombre:</label>
					<input
						value={userData.name}
						onChange={inputChangeHandler}
						name="name"
						type="text"
					/>
				</div>
				<div className="form-item">
					<label htmlFor="tel">Teléfono:</label>
					<input
						value={userData.tel}
						onChange={inputChangeHandler}
						name="tel"
						type="text"
					/>
				</div>
				<div className="form-item">
					<label htmlFor="email">Email:</label>
					<input
						value={userData.email}
						onChange={inputChangeHandler}
						name="email"
						type="text"
					/>
				</div>

				<div className="d-grid gap-3 d-md-flex justify-content-md-center mt-3">
					<div>
						<button
							type="submit"
							className="btn btn-light text-secondary"
							style={{ fontWeight: "bold" }}
							onClick={() => thanks(item)}>
							{" "}
							Finalizar compra
						</button>
					</div>
					<button
						className="btn text-light btn-outline-secondary "
						onClick={() => removeAll(item)}>
						{" "}
						Vaciar carrito
					</button>
				</div>
			</form>
		</div>
	);
};
