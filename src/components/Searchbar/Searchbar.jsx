import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLbl,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = () => {
  return (
    <div>
      <Header>
        <SearchForm>
          <SearchFormBtn type="submit">
            <SearchFormBtnLbl>Search</SearchFormBtnLbl>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    </div>
  );
};

export default Searchbar;
