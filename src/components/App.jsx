import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Homepage } from '../pages/Homepage/Homepage';
import MovieDetails from 'pages/Movies/MovieDetails';
import { ErrorPage } from '../pages/Error/Error';
import { PAGE_NAMES } from './router/paths';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<Homepage />}></Route>
        <Route path={PAGE_NAMES.movies} element={<MovieDetails />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
