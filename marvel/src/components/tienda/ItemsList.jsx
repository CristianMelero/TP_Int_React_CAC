import { CardDetail } from "./CardDetail";
import "./ItemsList.css";

export const ItemsList = ({items}) => {

	return (
		<ul className="itemsGrid container" style={{marginBottom: "0"}}>
			{items.map((item) => (
				<CardDetail key={item.id} item={item} />
			))}
		</ul>
	);
};
