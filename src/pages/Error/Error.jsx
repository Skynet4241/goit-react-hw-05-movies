import { PAGE_NAMES } from 'components/router/paths';
import { Container } from 'utils/Container';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { ErrorWrap } from './Error.styled';

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ErrorWrap>
          <p>404 page not found</p>
          <Link to={PAGE_NAMES.homepage}> Go to homepage</Link>
        </ErrorWrap>
      </Container>
    </>
  );
};
