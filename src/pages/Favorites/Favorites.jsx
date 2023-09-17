import CatalogList from "components/CatalogList/CatalogList";
import { useGetFavoritesQuery } from "redux/carsOperation";
import s from "./Favorites.module.css";

const Favorites = () => {
	const { data = [] } = useGetFavoritesQuery();

	return (
		<>
			<h1>Favorites</h1>
			{data.length === 0 ? (
				<p className={s.favoritesText}>You have not added any cars to your favorites list.</p>
			) : (
				<CatalogList data={data} />
			)}
		</>
	);
};

export default Favorites;
