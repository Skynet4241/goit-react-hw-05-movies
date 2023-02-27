import { fetchMovieReviews } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(res => setReviews(res.data.results))
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
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
