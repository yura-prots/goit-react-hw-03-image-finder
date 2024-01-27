import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import fetchImages from 'api/PixabayAPI';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

import { Container } from './App.styled';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const initialImages = await fetchImages();
      console.log(initialImages);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        <Searchbar />
        <ImageGallery />
        {isLoading && (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        )}
        <Button />
      </Container>
    );
  }
}

export default App;
