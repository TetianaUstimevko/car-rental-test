import { useState, useEffect } from "react";
import { useGetCarsQuery, useGetCarsByBrandQuery } from "redux/carsOperation";
import Filter from "components/Filter/Filter";
import CatalogList from "components/CatalogList/CatalogList";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";

const Catalog = () => {
	const [page, setPage] = useState(1);
	const [carsList, setCarsList] = useState([]);
	const [filteredCars, setFilteredCars] = useState([]);
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [brand, setBrand] = useState("without");

	const { data = [] } = useGetCarsQuery({ page, limit: 8 });
	const { data: filter = [] } = useGetCarsByBrandQuery({
		page,
		limit: 8,
		brand,
	});

	useEffect(() => {
		if (filter && filter.length > 0) {
			setFilteredCars([...filter]);
			setCarsList([]);
			return;
		}
	}, [filter, isFirstRender]);

	useEffect(() => {
		if (isFirstRender) {
			return setIsFirstRender(false);
		}

		if (data && data.length > 0) {
			setCarsList(prevState => [...prevState, ...data]);
			return;
		}
	}, [data, isFirstRender]);

	useEffect(() => {
		const list = document.querySelector("ul");
		const lastImage = list.lastElementChild;

		if (carsList.length > 8) {
			const { height: cardHeight } = lastImage.getBoundingClientRect();

			window.scrollBy({
				top: cardHeight * 1,
				behavior: "smooth",
			});
		}
	}, [carsList]);

	const loadMoreBtnClick = () => {
		setPage(prevPage => prevPage + 1);
	};

	const onFilterSubmit = brand => {
		if (brand === "without") {
			setFilteredCars([]);
			setCarsList([...data]);
			return;
		}

		setPage(1);
		setCarsList([]);
		setBrand(brand);
	};

	const primaryArray = filteredCars.length === 0 ? carsList : filteredCars;

	const isLoadMoreShown = data.length > 7 && carsList.length > 7;

	return (
		<>
			<h1 className="visually-hidden">Catalog</h1>
			<Filter onSubmit={onFilterSubmit} />
			<CatalogList data={primaryArray} />
			{isLoadMoreShown && <BtnLoadMore onClick={loadMoreBtnClick} />}
		</>
	);
};

export default Catalog;
