import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.imgBox}>
      {images.map(({ id, alt_description, urls }) => {
        return (
          <li key={id}>
            <div>
              <img
                className={s.img}
                src={urls.small}
                alt={alt_description}
                onClick={() => openModal(urls.regular)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
