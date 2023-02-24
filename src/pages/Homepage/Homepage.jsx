import { fetchPopularMovie } from 'components/API/API';
import { Container } from 'utils/Container';
import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { HomepageList, HomepageItem, HomepageLink } from './Homepage.styled';

export const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovie().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <HomepageList>
          {movies.map(film => (
            <HomepageItem key={film.id}>
              <HomepageLink to={`/movies/${film.id}`}>
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
