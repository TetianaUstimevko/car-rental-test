import { useState } from "react";
import s from "./Filter.module.css";
import Select from "react-select";

import { selectFilter } from "./stylesFilter";

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600];

const makesList = [
	"Buick",
	"Volvo",
	"HUMMER",
	"Subaru",
	"Mitsubishi",
	"Nissan",
	"Lincoln",
	"GMC",
	"Hyundai",
	"MINI",
	"Bentley",
	"Mercedes-Benz",
	"Aston Martin",
	"Pontiac",
	"Lamborghini",
	"Audi",
	"BMW",
	"Chevrolet",
	"Mercedes-Benz",
	"Chrysler",
	"Kia",
	"Land Rover",
];

const Filter = ({ onSubmit }) => {
	const [chosenBrand, setChosenBrand] = useState("");
	const [mileageFrom, setMileageFrom] = useState("");
	const [mileageTo, setMileageTo] = useState("");
	const [chosenPrice, setChosenPrice] = useState("");

	const onFormSubmit = e => {
		e.preventDefault();

		onSubmit({
			brand: chosenBrand,
			price: chosenPrice,
			mileageFrom: mileageFrom,
			mileageTo: mileageTo,
		});
	};

	const brandOptions = makesList.map(el => ({
		label: el,
		value: el,
	}));

	const priceOptions = prices.map(el => ({
		label: el.toString(),
		value: el,
	}));

	return (
		<form
			className={s.filterForm}
			onSubmit={onFormSubmit}
		>
			<div className={s.filterFormThumb}>
				<label
					className={s.filterFormLabel}
					htmlFor="car-select"
				>
					Car brand
				</label>
				<Select
					name="cars"
					id="car-select"
					options={brandOptions}
					onChange={selectedOption => setChosenBrand(selectedOption.value)}
					styles={selectFilter}
					placeholder="Select a brand"
				/>
			</div>
			<div className={s.filterFormThumb}>
				<label
					className={s.filterFormLabel}
					htmlFor="price-select"
				>
					Price/ 1 hour
				</label>
				<Select
					name="price"
					id="price-select"
					options={priceOptions}
					onChange={selectedOption => setChosenPrice(selectedOption.value)}
					styles={selectFilter}
					placeholder="Select a price"
				/>
			</div>
			<div className={s.filterFormThumb}>
				<label className={s.filterFormLabel}>Car mileage / km</label>
				<div className={s.filterFormThumbInput}>
					<div className={s.filterFormInputThumb}>
						<input
							className={s.filterFormInputFrom}
							type="text"
							name="mileageFrom"
							id="mileageFrom"
							value={mileageFrom}
							onChange={e => setMileageFrom(e.target.value)}
						/>
						<label
							className={s.filterFormLabelInput}
							htmlFor="mileageFrom"
						>
							From
						</label>
					</div>
					<div className={s.filterFormInputThumb}>
						<input
							className={s.filterFormInputTo}
							type="text"
							name="mileageTo"
							id="mileageTo"
							value={mileageTo}
							onChange={e => setMileageTo(e.target.value)}
						/>
						<label
							className={s.filterFormLabelInput}
							htmlFor="mileageTo"
						>
							To
						</label>
					</div>
				</div>
			</div>
			<button
				className={s.filterFormBtn}
				type="submit"
			>
				Search
			</button>
		</form>
	);
};

export default Filter;
