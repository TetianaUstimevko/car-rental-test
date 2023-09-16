// import { useState } from "react";

// const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600];

// const makesList = [
// 	"Tesla Golf",
// 	"Mercedes Benz PT Jeep Model S",
// 	"Maserati Land Cruiser",
// 	"Hyundai Wrangler",
// 	"Smart El Camino",
// 	"Kia Spyder",
// 	"Dodge CTS",
// 	"Jeep Prius",
// 	"Kia Countach",
// 	"Polestar Mustang",
// 	"Ford Beetle",
// 	"Lamborghini 2",
// 	"Volvo A8",
// 	"Porsche Model S",
// 	"Tesla Charger",
// 	"Ford Model T",
// 	"Fiat Grand Cherokee",
// 	"BMW Altima",
// 	"BMW Sentra",
// 	"Mazda Explorer",
// 	"Mini Spyder",
// 	"Rolls Royce 1",
// 	"Bentley Explorer",
// 	"Smart Focus",
// 	"Jaguar A8",
// 	"Tesla A8",
// 	"Lamborghini 911",
// 	"BMW Golf",
// 	"Maserati Alpine",
// 	"Aston Martin Charger",
// 	"Fiat XTS",
// 	"Cadillac Volt",
// 	"Ford PT Cruiser",
// 	"Rolls Royce F-150",
// 	"Tesla CTS",
// 	"Bugatti A4",
// 	"Lamborghini Spyder",
// 	"Dodge CX-9",
// 	"Chrysler Impala",
// 	"Toyota Explorer",
// 	"Rolls Royce Expedition",
// ];

// const Filter = ({ onSubmit }) => {
// 	const [chosenBrand, setChosenBrand] = useState("without"); // Устанавливаем значение по умолчанию
// 	const [selectedPrice, setSelectedPrice] = useState("without"); // Устанавливаем значение по умолчанию
// 	const [mileageFrom, setMileageFrom] = useState("");
// 	const [mileageTo, setMileageTo] = useState("");

// 	const onFormSubmit = e => {
// 		e.preventDefault();
// 		// Создаем объект с выбранными параметрами и передаем его в onSubmit
// 		const formData = {
// 			chosenBrand,
// 			selectedPrice,
// 			mileageFrom,
// 			mileageTo,
// 		};
// 		onSubmit(formData);
// 	};

// 	return (
// 		<form onSubmit={onFormSubmit}>
// 			<div>
// 				<label htmlFor="car-select">Car brand</label>
// 				<select
// 					name="cars"
// 					id="car-select"
// 					onChange={e => setChosenBrand(e.target.value)}
// 					value={chosenBrand}
// 				>
// 					<option value="without">All cars</option>
// 					{makesList.map((el, index) => (
// 						<option
// 							key={index}
// 							value={el}
// 						>
// 							{el}
// 						</option>
// 					))}
// 				</select>
// 			</div>
// 			<div>
// 				<label htmlFor="price-select">Price/ 1 hour</label>
// 				<select
// 					name="price"
// 					id="price-select"
// 					onChange={e => setSelectedPrice(e.target.value)}
// 					value={selectedPrice}
// 				>
// 					<option value="without">To $</option>
// 					{prices.map((el, index) => (
// 						<option
// 							key={index}
// 							value={el}
// 						>
// 							{el}
// 						</option>
// 					))}
// 				</select>
// 			</div>
// 			<div>
// 				<label>Car mileage / km</label>
// 				<div>
// 					<div>
// 						<input
// 							type="text"
// 							name="mileageFrom"
// 							id="mileageFrom"
// 							value={mileageFrom}
// 							onChange={e => setMileageFrom(e.target.value)}
// 						/>
// 						<label htmlFor="mileageTo">To</label>
// 						<input
// 							type="text"
// 							name="mileageTo"
// 							id="mileageTo"
// 							value={mileageTo}
// 							onChange={e => setMileageTo(e.target.value)}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<button type="submit">Search</button>
// 		</form>
// 	);
// };

// export default Filter;
