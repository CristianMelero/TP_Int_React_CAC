import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";

export const DropdownTienda = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar light expand="md" className="container">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link to="/" className="text-decoration-none">
								<NavLink className="text-light">Inicio</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/mediosdepago"
								className="text-decoration-none">
								<NavLink className="text-light">
									Medios de pago
								</NavLink>
							</Link>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className="text-light">
								Productos
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>Funko Pop!</DropdownItem>
								<DropdownItem>Muñecos articulados</DropdownItem>
								<DropdownItem>Remeras</DropdownItem>
								<DropdownItem>Gorras</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<Link to="/cart" className=" position-absolute end-0">
							<Icon
								path={mdiCartVariant}
								size={2}
								color={"white"}
							/>
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};
