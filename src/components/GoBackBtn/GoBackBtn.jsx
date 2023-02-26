import { Link } from 'react-router-dom';
import { Button } from './GoBackBtn.styled';

export const GoBackBtn = ({ path }) => {
  return (
    <Link to={path}>
      <Button>Go back</Button>
    </Link>
  );
};
