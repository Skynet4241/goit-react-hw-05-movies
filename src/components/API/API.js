import axios from 'axios';

const API_KEY = '2ea2288c6c0027064d0ebdd6a8cc6596';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovie = async () =>
  await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);

export const fetchSearchMovie = async () =>
  await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

export const fetchMovieDetails = async ID =>
  await axios.get(`/movie/${ID}?api_key=${API_KEY}&language=en-US`);

export const fetchMovieCredits = async ID =>
  await axios.get(`/movie/${ID}/credits?api_key=${API_KEY}&language=en-US`);

export const fetchMovieReviews = async ID =>
  await axios.get(
    `/movie/${ID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
