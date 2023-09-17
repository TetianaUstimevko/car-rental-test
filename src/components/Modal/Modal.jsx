import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

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
		<div
			className={s.modalOverlay}
			onClick={handleBackdropClick}
		>
			<div className={s.modalThumb}>{children}</div>
		</div>,
		modalRoot,
	);
};

export default PageModal;
