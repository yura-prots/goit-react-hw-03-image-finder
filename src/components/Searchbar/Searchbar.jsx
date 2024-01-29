import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLbl,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          const newQuery = e.target.elements.query.value.trim().toLowerCase();

          if (newQuery === '') {
            return toast.warn('Give me some query to search');
          }

          e.target.reset();
          return onSubmit(newQuery);
        }}
      >
        <SearchFormBtn type="submit">
          <SearchFormBtnLbl />
        </SearchFormBtn>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;
