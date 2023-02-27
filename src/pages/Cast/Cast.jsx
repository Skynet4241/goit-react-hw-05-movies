import { fetchMovieCredits } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCredits(movieId)
      .then(res => setCast(res.data.cast))
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <ul>
          {cast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  width={100}
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Cast;
