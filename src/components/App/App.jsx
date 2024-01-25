import { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

import { Container } from './App.styled';

class App extends Component {
  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery />
      </Container>
    );
  }
}

export default App;
