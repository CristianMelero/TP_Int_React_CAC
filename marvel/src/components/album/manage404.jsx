const CharacterNotFound = () => {
	return (
		<div>
			<h1>404 - Character Not Found</h1>
			<img
				src="/img/heroeIncognita.png"
				alt="Héroe desconocido"
				style={{ maxHeight: "300px" }}
			/>{" "}
			<p>
				Lo siento, el personaje que estás buscando no existe en el álbum
				de Marvel.
			</p>
			<p>Asegurate de estar escribiendo el nombre original en inglés.</p>
		</div>
	);
};

export default CharacterNotFound;
