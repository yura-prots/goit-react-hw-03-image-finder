import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = () => {
  return (
    <div>
      <Gallery>
        <ImageGalleryItem />
      </Gallery>
    </div>
  );
};

export default ImageGallery;
