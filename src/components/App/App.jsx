import { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

import { Container } from './App.styled';

class App extends Component {
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
