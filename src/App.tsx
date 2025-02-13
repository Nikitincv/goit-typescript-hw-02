import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./service/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small?: string;
  };
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchImages(query, page);
        setImages((query) => [...query, ...results]);
        setTotalPages(total_pages);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);
  const onSubmit = (newQuery: string) => {
    if (newQuery === query) {
      return toast.error("Please,  change query.");
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError("");
  };
  const handelChangePage = () => {
    setPage((page) => page + 1);
    toast.success(`Page changed to ${page + 1}`);
  };
  function openModal(url: string) {
    setModalImage(url);

    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImage={modalImage}
      />
      {page < totalPages && <LoadMoreBtn handelChangePage={handelChangePage} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
    </>
  );
}

export default App;
