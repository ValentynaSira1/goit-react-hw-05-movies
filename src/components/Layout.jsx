import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader/Loader';
import css from './Layout.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(236, 83, 83);
  }
`;

const Layout = () => {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <StyledLink to="/" className={css.nav_link}>
              Home
            </StyledLink>
          </li>
          <li className={css.nav_item}>
            <StyledLink to="/movies" className={css.nav_link}>
              Movies
            </StyledLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;