import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalWindow = ({ isOpen, onClose, largeImage, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Gallery Image Modal"
    >
      <img src={largeImage} alt={tags} />
      <button type="button" onClick={onClose}>
        close
      </button>
    </Modal>
  );
};

export default ModalWindow;
