import { PAGE_NAMES } from 'components/router/paths';
import { Container } from 'utils/Container';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Container>
      <p>404 page not found</p>
      <Link to={PAGE_NAMES.homepage}> Go to homepage</Link>
    </Container>
  );
};
