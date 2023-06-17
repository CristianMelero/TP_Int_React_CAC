import {DropdownTienda } from "./DropdownTienda"
import "./Tienda.css"


import { ItemsList } from './ItemsList';

export const Tienda = () => {
	return (
    <div className="tienda">
      <div className="tienda-container">
        <b>
          <h1> Marvel Shop</h1>
        </b>
        <p>Los productos de Marvel que estabas buscando</p>
      </div>
      <div>
        <div className=" bg-dark">
              <div >
                <div>
                    <DropdownTienda/>
                </div>

          </div>
        </div>
      </div>
      <ItemsList />
    </div>
  );
};
