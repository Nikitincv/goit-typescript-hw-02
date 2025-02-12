import Modal from "react-modal";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const ImageModal = ({ modalIsOpen, closeModal, modalImage }) => {
  return (
    <div className={s.imageModalBox}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          className={s.imageModal}
          src={modalImage}
          alt="modalImage"
          width="70%"
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
