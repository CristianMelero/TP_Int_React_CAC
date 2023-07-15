import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext.jsx";
import Icon from "@mdi/react";
import {
	mdiCartVariant,
	mdiCartOff,
	mdiCartArrowRight,
	mdiDeleteEmpty,
} from "@mdi/js";
import { ItemCart } from "./ItemCart.jsx";
import { Link } from "react-router-dom";
import { OrderForm } from "./OrderForm.jsx";

export const CartView = () => {
	const { cart, totalProducts, totalPrice, removeAll } =
		useContext(CartContext);

	return (
		<div>
			<div
				className="d-flex justify-content-center m-5"
				style={{ backgroundColor: "coral" }}>
				<Icon path={mdiCartVariant} size={2} color={"white"} />
				<h2 className="text-center text-light "> Carrito</h2>
			</div>
			{totalProducts() === 0 ? (
				<>
					<p
						className="text-secondary text-center m-5 "
						style={{ fontSize: "32px", paddingLeft: "5px" }}>
						<Icon path={mdiCartOff} size={3} /> El carrito está
						vacío
					</p>
					<Link
						to="/tienda"
						className="d-grid gap-2 col-2 mx-auto text-decoration-none mb-4">
						<button type="reset" className="btn btn-secondary ">
							Ir a comprar
						</button>
					</Link>
				</>
			) : (
				<div className="container ">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-12  mb-3">
							<table className="table table-responsive table-borderless">
								{cart.map((item) => (
									<ItemCart key={item.id} item={item} />
								))}
								<thead>
									<tr>
										<th scope="col">Producto</th>
										<th scope="col">Cant.</th>
										<th scope="col">Precio</th>
										<th scope="col">Total</th>
									</tr>
								</thead>
							</table>
							<div className="pb-5">
								<h5 className="d-grid gap-2 d-md-flex justify-content-center mb-5 ">
									<strong>Total: $ {totalPrice()} </strong>
								</h5>
								<div className="position-relative">
									<Link
										to="/tienda"
										className="position-absolute bottom-0 start-50 translate-middle-x text-secondary">
										<a>
											<Icon
												path={mdiCartArrowRight}
												size={1}
											/>
											Continuar comprando
										</a>
									</Link>
									<button
										className="btn btn-secondary position-absolute mt-2 start-50 btn-sm translate-middle-x "
										style={{ width: "8rem" }}
										onClick={() => removeAll()}>
										<Icon path={mdiDeleteEmpty} size={1} />
										Vaciar Carrito
									</button>
								</div>
							</div>
						</div>

						<div className="col-lg-5 col-md-12">
							<OrderForm />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
