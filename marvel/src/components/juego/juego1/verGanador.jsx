export const Ganador = ({ imagen_ganador, ganador }) => {
	const result =
		ganador === "usuario"
			? "GANASTE"
			: ganador === "compu"
			? "PERDISTE"
			: "EMPATE";

	const handleButton = () => {
		window.location.reload();
	};

	return (
		<>
			<h1>{result}</h1>
			<div className="imagen_ganador">
				<img src={imagen_ganador} alt="Imagen del ganador" />
				<br />
				<br />
				<br />
				<h2>GAME OVER</h2>
			</div>

			<div className="start">
				<img
					onClick={handleButton}
					src="/img/start.png"
					alt="Botón Start Game"
					width="125"></img>
			</div>
		</>
	);
};
