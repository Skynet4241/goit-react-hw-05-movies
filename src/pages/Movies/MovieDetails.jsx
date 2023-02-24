import { fetchMovieDetails } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'pages/Header/Header';
import { Container } from 'utils/Container';
import { MovieCardWrap, MovieCardInfoWrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <Header />
      <Container>
        <MovieCardWrap>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt={movie.original_title}
            width="300"
            height="450"
          />
          <MovieCardInfoWrap>
            <h2>{movie.original_title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p> {movie.overview}</p>
            <h4>Genres</h4>
            <p>
              {movie.genres
                ? movie.genres.map(item => item.name).join(' ')
                : ''}
            </p>
          </MovieCardInfoWrap>
        </MovieCardWrap>
      </Container>
    </>
  );
};

export default MovieDetails;
