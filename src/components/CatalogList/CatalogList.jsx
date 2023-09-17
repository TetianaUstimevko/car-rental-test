import CatalogItem from "components/CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";

const CatalogList = ({ data }) => {
	return (
		<ul className={s.catalogList}>
			{data &&
				data.map(el => (
					<CatalogItem
						key={el.id}
						car={el}
					/>
				))}
		</ul>
	);
};

export default CatalogList;
