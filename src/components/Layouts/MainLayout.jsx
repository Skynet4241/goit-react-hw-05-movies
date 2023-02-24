import { Footer } from 'pages/Footer/Footer';
import { Header } from 'pages/Header/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
