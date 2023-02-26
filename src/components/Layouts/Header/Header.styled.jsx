import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  display: flex;
`;
export const HeaderWrap = styled.div`
  display: flex;
  padding: 35px 0;
`;

export const HeaderLink = styled(NavLink)`
  display: block;
  padding: 10px 10px;
  cursor: pointer;
`;
