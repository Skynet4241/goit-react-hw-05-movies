import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MovieDetails from 'pages/Movies/MovieDetails';
import { ErrorPage } from '../pages/Error/Error';
import { PAGE_NAMES } from './router/paths';
import { MainLayout } from './Layouts/MainLayout';
import { Homepage } from 'pages/Homepage/Homepage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path={PAGE_NAMES.movies} element={<MovieDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
