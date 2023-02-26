import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomepageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
`;

export const HomepageItem = styled.li`
  display: flex;
`;

export const HomepageTitle = styled.h1`
  display: flex;
  justify-content: center;
`;

export const HomepageLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
`;
