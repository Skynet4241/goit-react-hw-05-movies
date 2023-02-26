import { useState } from 'react';
import { Container } from 'utils/Container';
import { FormSearch, SearchFormWrap } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <Container>
        <SearchFormWrap>
          <FormSearch onSubmit={formSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter name of movie..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>

            <button type="submit">Search</button>
          </FormSearch>
        </SearchFormWrap>
      </Container>
    </>
  );
};
