import { fetchPopularMovie } from 'components/API/API';
import { Container } from 'utils/Container';
import { useEffect, useState } from 'react';

export const Homepage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchPopularMovie().then(({ data }) => {
      console.log(data);
      setMovie(data.results);
    });
  }, []);
  return (
    <Container>
      <ul>
        {movie.map(film => (
          <li key={film.id}>
            <h2>{film.title || film.name}</h2>
          </li>
        ))}
      </ul>
    </Container>
  );
};
