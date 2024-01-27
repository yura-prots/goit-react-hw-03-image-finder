import { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

import { Container } from './App.styled';
import fetchImages from 'api/PixabayAPI';

class App extends Component {
  async componentDidMount() {
    try {
      const initialImages = await fetchImages();
      console.log(initialImages);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery />
        <Button />
      </Container>
    );
  }
}

export default App;
