import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  imageSource: { webformatURL, largeImageURL, tags },
}) => {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
