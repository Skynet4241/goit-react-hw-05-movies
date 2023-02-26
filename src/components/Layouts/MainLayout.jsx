import { Footer } from 'components/Layouts/Footer/Footer';
import { Header } from 'components/Layouts/Header/Header';
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
