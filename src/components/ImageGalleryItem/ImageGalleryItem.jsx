import { Component } from 'react';

import ModalWindow from 'components/ModalWindow';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

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
    const { webformatURL, tags, largeImageURL } = this.props.imageSource;

    return (
      <GalleryItem>
        <GalleryImage src={webformatURL} alt={tags} onClick={this.openModal} />
        <ModalWindow
          isOpen={isModalOpen}
          onClose={this.closeModal}
          largeImage={largeImageURL}
          tags={tags}
        />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
