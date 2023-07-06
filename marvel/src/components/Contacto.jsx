export const Contacto = () => {
	return (
    <>
      <div className="p-3 text-light" style={{backgroundColor:"coral"}}>
        <h1>
          <strong>CONTACTO</strong>
        </h1>
        <p>
          Ingrese los datos personales requeridos y a continuación su consulta.
          La misma será respondida a la brevedad
        </p>
      </div>
      <div className="bg-dark">
        <div className="container" >
          <div className="col-sm-10 col-md-12 col-lg-6">
            <form className="d-flex flex-column">
              <div className="mb-3 mt-4 row text-center">
                <label for="formGroupExampleInput" className="form-label fs-2 text-light">
                  <strong>Nombre y Apellido</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div className="mb-2 text-center">
                <label
                  for="exampleFormControlInput1"
                  className="form-label fs-2 text-light"
                >
                  <strong>E-mail</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-2 text-center">
                <label for="formGroupExampleInput" className="form-label fs-2 text-light">
                  <strong>Teléfono</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div className="mb-2 mt-1">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label"
                ></label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Escriba su consulta..."
                  rows="6"
                ></textarea>
              </div>

              <div className="align-self-end">
                <button
                  type="submit"
                  className="btn bg-secondary text-light m-3 mb-5 fs-5"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
	  <div class="col-sm-12 col-md-12 col-lg-6">
          
        </div>
    </>
  );
};

