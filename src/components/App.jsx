import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { ErrorPage } from '../pages/Error/Error';
import { PAGE_NAMES } from './router/paths';
import { MainLayout } from './Layouts/MainLayout';
import { Movie } from 'pages/Movie/Movie';
import Homepage from 'pages/Homepage/Homepage';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path={PAGE_NAMES.movies} element={<Movie />} />
          <Route path={PAGE_NAMES.movies_ID} element={<MovieDetails />}>
            <Route path={PAGE_NAMES.cast} element={<Cast />} />
            <Route path={PAGE_NAMES.reviews} element={<Reviews />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
