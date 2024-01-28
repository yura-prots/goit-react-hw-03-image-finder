import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import fetchImages from 'api/PixabayAPI';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

import { Container } from './App.styled';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const searchQuery = query.split('/')[1];
        const response = await fetchImages(searchQuery, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
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
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
      </Container>
    );
  }
}

export default App;
