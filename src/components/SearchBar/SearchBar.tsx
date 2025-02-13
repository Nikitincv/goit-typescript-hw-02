import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import s from "./SearchBar.module.css";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("text") as HTMLInputElement;

    const value = input.value;
    if (value === "") {
      return toast.error("This didn't work.");
    }
    onSubmit(value);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <header className={s.header}>
      <form className={s.headerForm} onSubmit={handelSubmit}>
        <button className={s.headerSubmitBtn} type="submit">
          <CiSearch />
        </button>
        <input
          className={s.headerInput}
          name="text"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
