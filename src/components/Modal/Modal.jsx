import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const PageModal = ({ closeModal, children }) => {
	const modalRoot = document.querySelector("#modal-root");

	if (!modalRoot) {
		throw new Error("#modal-root element not found in the DOM");
	}

	const handleKeyDown = e => {
		if (e.code === "Escape") {
			closeModal();
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [closeModal]);

	const handleBackdropClick = e => {
		if (e.currentTarget === e.target) {
			closeModal();
		}
	};

	return createPortal(
		<div onClick={handleBackdropClick}>
			<div>{children}</div>
		</div>,
		modalRoot,
	);
};

export default PageModal;
