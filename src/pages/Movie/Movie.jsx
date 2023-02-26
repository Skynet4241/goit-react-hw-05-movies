import { fetchSearchMovie } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm';
import {
  HomepageItem,
  HomepageLink,
  HomepageList,
} from 'pages/Homepage/Homepage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'utils/Container';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    if (query === null) {
      setIsLoading(false);
      return;
    }
    fetchSearchMovie(query)
      .then(({ data }) => setMovies(data.results))

      .catch(error => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  if (status === 'idle' || isLoading) {
    return isLoading && <Loader isLoading={isLoading} />;
  }

  if (status === 'error') {
    return <>There was an error</>;
  }
  return (
    <>
      <Container>
        <SearchForm onSubmit={handleFormSubmit} />
        <HomepageList>
          {movies.map(film => (
            <HomepageItem key={film.id}>
              <HomepageLink to={`${film.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
                  alt={film.title || film.name}
                  width="180"
                  height="250"
                />
                {film.title || film.name}
              </HomepageLink>
            </HomepageItem>
          ))}
        </HomepageList>
      </Container>
    </>
  );
};
