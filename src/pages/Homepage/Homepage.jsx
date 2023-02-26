import { fetchPopularMovie } from 'components/API/API';
import { Container } from 'utils/Container';
import { useEffect, useState } from 'react';
import {
  HomepageList,
  HomepageItem,
  HomepageLink,
  HomepageTitle,
} from './Homepage.styled';
import { Loader } from 'components/Loader/Loader';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    fetchPopularMovie()
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (status === 'idle' || isLoading) {
    return isLoading && <Loader isLoading={isLoading} />;
  }

  if (status === 'error') {
    return <>There was an error</>;
  }

  return (
    <>
      <Container>
        <HomepageTitle>Top-movies of this week</HomepageTitle>
        <HomepageList>
          {movies.map(film => (
            <HomepageItem key={film.id}>
              <HomepageLink to={`movies/${film.id}`}>
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

export default Homepage;
