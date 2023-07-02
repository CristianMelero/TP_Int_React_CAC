import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";
import { TotalItems } from "./TotalItems";

export const DropdownTienda = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar light expand="md" className="container">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink
								to="/mediosdepago"
								className="text-light text-decoration-none nav-link">
								Inicio
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								to="/mediosdepago"
								className="text-light text-decoration-none nav-link">
								Medios de pago
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className="text-light">
								Productos
							</DropdownToggle>
							<DropdownMenu>
								<NavLink
									to={`/category/`}
									className="dropdown-item">
									Funko Pop!
								</NavLink>
								<NavLink
									to={`/category/`}
									className="dropdown-item">
									Muñecos articulados
								</NavLink>
								<NavLink
									to={`/category/`}
									className="dropdown-item">
									Remeras
								</NavLink>
								<NavLink
									to={`/category/`}
									className="dropdown-item">
									Gorras
								</NavLink>
							</DropdownMenu>
						</UncontrolledDropdown>
						<Link to="/cart" className=" position-absolute end-0">
							<Icon
								path={mdiCartVariant}
								size={2}
								color={"white"}
							/>
							<TotalItems />
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};
