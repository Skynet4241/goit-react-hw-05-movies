import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Homepage } from '../pages/Homepage';
import { ErrorPage } from '../pages/Error';
import { PAGE_NAMES } from './router/paths';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<Homepage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
