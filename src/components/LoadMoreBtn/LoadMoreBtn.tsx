import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handelChangePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handelChangePage }) => {
  return (
    <button className={s.loadMoreBtn} onClick={handelChangePage}>
      Load more{" "}
    </button>
  );
};

export default LoadMoreBtn;
