import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handelChangePage }) => {
  return (
    <button className={s.loadMoreBtn} onClick={handelChangePage}>
      Load more{" "}
    </button>
  );
};

export default LoadMoreBtn;
