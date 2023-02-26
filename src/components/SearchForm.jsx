import { MovieForm, MovieFormWrap } from 'pages/Movie/Movie.styled';
import { useState } from 'react';
import { Container } from 'utils/Container';

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
        <MovieFormWrap>
          <MovieForm onSubmit={formSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter name of cocktail..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>

            <button type="submit">Search</button>
          </MovieForm>
        </MovieFormWrap>
      </Container>
    </>
  );
};
