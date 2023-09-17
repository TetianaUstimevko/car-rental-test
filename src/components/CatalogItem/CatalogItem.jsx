// CatalogItem.jsx
import { useState, useEffect } from "react";
import {
	useGetFavoritesQuery,
	useAddToFavoritesMutation,
	useRemoveFromFavoritesMutation,
} from "redux/carsOperation";
import { useLocation } from "react-router-dom";
import PageModal from "components/Modal/Modal";
import CatalogItemModal from "components/Modal/ModalItem";
import { BsHeartFill } from "react-icons/bs";
import s from "./Catalogitem.module.css";

const CatalogItem = ({ car }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const { data = [] } = useGetFavoritesQuery();
	const [addToFavorites] = useAddToFavoritesMutation();
	const [removeFromFavorites] = useRemoveFromFavoritesMutation();

	const location = useLocation();

	const isFavorite = data.find(favorite => favorite._id === car.id);

	const checkLocation = location.pathname === "/favorites";

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isModalOpen]);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const addCommaToNumber = number => {
		return number.toLocaleString("en-US");
	};

	const favoriteItemToggle = favorite => {
		if (checkLocation) {
			removeFromFavorites(favorite.id);
			return;
		}

		if (isFavorite) {
			removeFromFavorites(isFavorite.id);
			return;
		}

		if (!isFavorite) {
			addToFavorites({ ...favorite, _id: favorite.id });
			return;
		}
	};

	const address = car.address.split(",");
	const city = address[1];
	const country = address[2];

	const isIconBlue = isFavorite || checkLocation;

	return (
		<>
			<li className={s.carItem}>
				<div>
					<div className={s.imgCarItemContainer}>
						<img
							className={s.imgCarItem}
							src={car.img}
							alt={`${car.make} ${car.model}`}
						/>
					</div>
					<button
						type="button"
						onClick={() => favoriteItemToggle(car)}
						style={{
							fill: isIconBlue && "#3470ff",
						}}
						className={s.carItemBtn}
					>
						<BsHeartFill className={s.carItemIcon} />
					</button>
					<div className={s.carInfoContainer}>
						<h2 className={s.carInfoTitle}>
							{car.make} <span className={s.carInfoSpan}>{car.model}</span>, {car.year}
						</h2>
						<p className={s.carPrice}>{car.rentalPrice}</p>
					</div>
					<ul className={s.carList}>
						<li className={s.carListItem}>
							<p>{city}</p>
						</li>
						<li className={s.carListItem}>
							<p>{country}</p>
						</li>
						<li className={s.carListItem}>
							<p> {car.rentalCompany}</p>
						</li>
						<li className={s.carListItem}>
							<p>{car.type}</p>
						</li>
						<li className={s.carListItem}>
							<p>{car.make}</p>
						</li>
						<li className={s.carListItem}>
							<p>{addCommaToNumber(car.mileage)}</p>
						</li>
						<li className={s.carListItem}>
							<p>{car.accessories[2]}</p>
						</li>
					</ul>
				</div>
				<button
					type="button"
					onClick={openModal}
					className={s.carBtnLearnMore}
				>
					Learn more
				</button>
			</li>
			{isModalOpen && (
				<PageModal closeModal={closeModal}>
					<CatalogItemModal
						el={car}
						city={city}
						country={country}
						closeModal={closeModal}
						addComma={addCommaToNumber}
					/>
				</PageModal>
			)}
		</>
	);
};

export default CatalogItem;
