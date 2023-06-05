import Icon from '@mdi/react';
import { mdiCartVariant } from '@mdi/js';
import "./Tienda.css"

import { Count } from "./Count";
import { Items } from './Items';

export const Tienda = () => {
	return (
		<div className="tienda">
			<div className='tienda-container'>
				<b>
					<h1><Icon path={mdiCartVariant} size={4} /> Marvel Shop</h1>
				</b>
				<p>Los productos de Marvel que estabas buscando</p>
			</div>
			<Items/>
		</div>
	);
};
