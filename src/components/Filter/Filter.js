import { useState } from "react";

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
	const [chosenBrand, setChosenBrand] = useState(); // Устанавливаем значение по умолчанию

	const onFormSubmit = e => {
		e.preventDefault();
		// Создаем объект с выбранными параметрами и передаем его в onSubmit
		onSubmit(chosenBrand.target.value);
		return;
	};

	return (
		<form>
			<div>
				<label htmlFor="car-select">Car brand</label>
				<select
					name="cars"
					id="car-select"
					onChange={setChosenBrand}
				>
					<option value="without">All cars</option>
					{makesList.map((el, index) => (
						<option
							key={index}
							value={el}
						>
							{el}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor="price-select">Price/ 1 hour</label>
				<select
					name="price"
					id="price-select"
				>
					<option value="without">To $</option>
					{prices.map((el, index) => (
						<option
							key={index}
							value={el}
						>
							{el}
						</option>
					))}
				</select>
			</div>
			<div>
				<label>Car mileage / km</label>
				<div>
					<div>
						<input
							type="text"
							name="mileageFrom"
							id="mileageFrom"
						/>
						<label htmlFor="mileageFrom">From</label>
					</div>
					<div>
						<input
							type="text"
							name="mileageTo"
							id="mileageTo"
						/>
						<label htmlFor="mileageTo">To</label>
					</div>
				</div>
			</div>
			<button
				type="submit"
				onClick={e => onFormSubmit(e)}
			>
				Search
			</button>
		</form>
	);
};

export default Filter;
