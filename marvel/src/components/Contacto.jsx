
export const Contacto = () => {
	return (
    <>
        <div className="p-3 text-light text-center" style={{ backgroundColor: "coral"}}>
            <h1 className="m-4" style={{ fontSize:"55px" }}>
                <strong>CONTACTO</strong>
            </h1 >  
            <p style={{ fontSize:"22px" }}> Ingrese los datos personales requeridos y a continuación su consulta. La misma será respondida a la brevedad.</p>
        </div>
        <form className="row g-3 needs-validation m-4" novalidate>
            <div className="col-md-4">
                <label for="validationCustom01" class="form-label">Nombre y Apellido</label>
                <input type="text" className="form-control" id="validationCustom01"  required/>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label for="validationCustom02" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="validationCustom02" placeholder="name@example.com" required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label for="validationCustom01" class="form-label">Teléfono</label>
                <input type="text" className="form-control" id="validationCustom01"  required/>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            
            <div className="col-md-4">
                <label for="validationCustom04" className="form-label">Seleccione el motivo de su consulta</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elegir...</option>
                    <option>Juegos</option>
                    <option>Tienda</option>
                    <option>Personajes del album</option>
                    <option>Otra</option>
                </select>
                <div className="invalid-feedback">
                    Por favor elige una opción válida.
                </div>
            </div>

            <div className="col-md-4">
            <label for="validationTextarea" className="form-label">Consulta</label>
                <textarea className="form-control" id="validationTextarea" placeholder="Escriba su consulta..." rows={5} required></textarea>
                <div className="invalid-feedback">
                    Por favor ingresa un mensaje.
                </div>
            </div>


            <div className="col-md-4 ">
                <button className="btn btn-dark" type="submit">Enviar</button>
            </div>
</form>
    </>
  );
};

