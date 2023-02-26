import { fetchMovieReviews } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(res => setReviews(res.data.results))
      .catch(error => {
        console.log('error');
      });
  }, [movieId]);

  return (
    <>
      <div>
        {reviews?.length === 0 && (
          <p>We don't have any reviews for this movies</p>
        )}
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
