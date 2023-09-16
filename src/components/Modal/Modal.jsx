import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const PageModal = ({ closeModal, children }) => {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.code === "Escape") {
				closeModal();
			}
		};

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
