import { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props.imageSource;

    return (
      <GalleryItem>
        <GalleryImage src={webformatURL} alt={tags} />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
