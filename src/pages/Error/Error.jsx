import { PAGE_NAMES } from 'components/router/paths';
import { Container } from 'utils/Container';
import { ErrorWrap, ErrorImg, ErrorText, ErrorLink } from './Error.styled';

export const ErrorPage = () => {
  return (
    <>
      <Container>
        <ErrorWrap>
          <ErrorImg
            src="data:image/png;base64,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"
            alt="error"
            width="240"
            height="240"
          ></ErrorImg>
          <ErrorText>404 page not found</ErrorText>
          <ErrorLink to={PAGE_NAMES.homepage}> Go to homepage</ErrorLink>
        </ErrorWrap>
      </Container>
    </>
  );
};

export default ErrorPage;
