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
		<div>
			<button
				type="button"
				onClick={closeModal}
				aria-label="Close modal window"
			>
				{/* <CloseIcon /> */}
			</button>
			<img src={el.img} />
			<h3>
				{el.make} <span>{el.model}</span>, {el.year}
			</h3>
			<div>
				<ul>
					<li>
						<p>{city}</p>
					</li>
					<li>
						<p>{country}</p>
					</li>
					<li>
						<p>id: {el.id}</p>
					</li>
					<li>
						<p>Year: {el.year}</p>
					</li>
					<li>
						<p>Type: {el.type}</p>
					</li>
					<li>
						<p>Fuel Consumption: {el.fuelConsumption}</p>
					</li>
					<li>
						<p>Engine Size: {el.engineSize}</p>
					</li>
				</ul>
				<p>{el.description}</p>
				<div>
					<p>Accessories and functionalities:</p>
					<ul>
						{el.functionalities.map((string, index) => (
							<li key={index}>{string}</li>
						))}
						{el.accessories.map((string, index) => (
							<li key={index}>{string}</li>
						))}
					</ul>
				</div>
				<div>
					<p>Rental Conditions: </p>
					<ul>
						{rentalConditions.map((condition, index) => {
							const searchAge = numberFinder(condition);

							return (
								<li key={index}>
									<p>
										{condition.replace(`${searchAge}`, "")}
										{searchAge && <span>{searchAge}</span>}
									</p>
								</li>
							);
						})}
						<li>
							<p>
								Milage: <span>{addComma(el.mileage)}</span>
							</p>
						</li>
						<li>
							<p>
								Price: <span>{el.rentalPrice}</span>
							</p>
						</li>
					</ul>
				</div>
			</div>

			<button
				href="tel:+380730000000"
				rel="noopener"
			>
				Rental car
			</button>
		</div>
	);
};

export default CatalogItemModal;
