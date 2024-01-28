import { Component } from 'react';
import Modal from 'react-modal';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

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

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, tags } = this.props.imageSource;

    return (
      <GalleryItem onClick={this.openModal}>
        <GalleryImage src={webformatURL} alt={tags} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Gallery Image Modal"
        >
          <button type="button" onClick={this.closeModal}>
            close
          </button>
        </Modal>
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
