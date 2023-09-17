import { BsXLg } from "react-icons/bs";
import s from "./ModalItem.module.css";

const CatalogItemModal = ({ el, city, country, addComma, closeModal }) => {
	const rentalConditions = el.rentalConditions.split("\n");

	const numberFinder = string => {
		const searchNumber = string.split("\n")[0].slice(-2);
		const parsedNumber = parseInt(searchNumber);
		const isNumber = Number.isNaN(parsedNumber);

		if (!isNumber) {
			return parsedNumber;
		}

		return false;
	};

	return (
		<div className={s.modalItemContainer}>
			<button
				className={s.closeModalBtn}
				type="button"
				onClick={closeModal}
				aria-label="Close modal window"
			>
				<BsXLg className={s.closeModalIcon} />
			</button>
			<img
				className={s.modalImg}
				src={el.img}
				alt={`${el.make} ${el.model}, ${el.year}`}
			/>
			<h3 className={s.modalItemTitle}>
				{el.make} <span className={s.modalItemSpan}>{el.model}</span>, {el.year}
			</h3>
			<div className={s.modalItemThumb}>
				<ul className={s.modalItemList}>
					<li className={s.modalItemListItem}>
						<p>{city}</p>
					</li>
					<li className={s.modalItemListItem}>
						<p>{country}</p>
					</li>
					<li className={s.modalItemListItem}>
						<p>id: {el.id}</p>
					</li>
					<li className={s.modalItemListItem}>
						<p>Year: {el.year}</p>
					</li>
					<li className={s.modalItemListItem}>
						<p>Type: {el.type}</p>
					</li>
					<li className={s.modalItemListItem}>
						<p>Fuel Consumption: {el.fuelConsumption}</p>
					</li>
					<li className={s.modalItemListItem}>
						<p>Engine Size: {el.engineSize}</p>
					</li>
				</ul>
				<p className={s.modalItemDescription}>{el.description}</p>
				<div>
					<p className={s.modalItemText}>Accessories and functionalities:</p>
					<ul className={s.modalItemList}>
						{el.functionalities.map((string, index) => (
							<li key={index}>{string}</li>
						))}
						{el.accessories.map((string, index) => (
							<li key={index}>{string}</li>
						))}
					</ul>
				</div>
				<div>
					<p className={s.modalItemText}>Rental Conditions: </p>
					<ul className={s.modalItemRentalList}>
						{rentalConditions.map((condition, index) => {
							const searchAge = numberFinder(condition);

							return (
								<li
									className={s.modalItemRentalItem}
									key={index}
								>
									<p>
										{condition.replace(`${searchAge}`, "")}
										{searchAge && <span>{searchAge}</span>}
									</p>
								</li>
							);
						})}
						<li className={s.modalItemRentalItem}>
							<p>
								Milage: <span>{addComma(el.mileage)}</span>
							</p>
						</li>
						<li c>
							<p>
								Price: <span>{el.rentalPrice}</span>
							</p>
						</li>
					</ul>
				</div>
			</div>

			<button
				className={s.modalItemBtn}
				href="tel:+380730000000"
				rel="noopener"
			>
				Rental car
			</button>
		</div>
	);
};

export default CatalogItemModal;
