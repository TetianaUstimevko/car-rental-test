import s from "./BtnLoadMore.module.css";

const BtnLoadMore = ({ onClick }) => {
	return (
		<button
			className={s.btnLoadMore}
			type="button"
			onClick={onClick}
		>
			Load more
		</button>
	);
};

export default BtnLoadMore;
