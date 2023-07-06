import { DropdownTienda } from "./DropdownTienda"



export const MediosPagos = (items)=>{

    return(
        <>
        <div style={{backgroundColor:"coral"}}>
					<DropdownTienda items={ items } />
				</div>
        <div className=" container d-flex flex-column justify-content-center">
            <h2 className="text-center m-3 bg-secondary text-light p-2">Nuestros medios de pago</h2>
                
                <div className="d-flex m-5 justify-content-center">
                    <img src="https://res.cloudinary.com/dcwondno7/image/upload/v1686879166/marvel/image-removebg-preview_tnhspw.png" alt="Medios de pago" width={"40%"} />
                    <div className="m-5">
                        <h5 className="mb-4 mt-4"><strong>💰 Efectivo</strong></h5>
                        <h5><strong> 🪙 Transferencia bancaria</strong> (ALIAS: marvel.tienda)</h5>
                    </div>
                </div>
        </div>
        </>
    )
}