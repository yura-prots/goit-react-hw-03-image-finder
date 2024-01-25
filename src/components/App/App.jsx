import { Component } from 'react';

import Searchbar from 'components/Searchbar';
import { Container } from './App.styled';

class App extends Component {
  render() {
    return (
      <Container>
        <Searchbar />
      </Container>
    );
  }
}

export default App;
