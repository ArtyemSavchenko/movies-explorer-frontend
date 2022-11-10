import CustomLink from '../CustomLink/CustomLink';

import './NavBar.css';

const NavBar = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className="sign-menu">
        <CustomLink
          type="internal-link"
          extraClass="sign-menu__link focus-effect"
          to="/registration"
        >
          Регистрация
        </CustomLink>
        <CustomLink
          type="internal-link"
          extraClass="sign-menu__btn"
          to="/login"
        >
          Войти
        </CustomLink>
      </div>
    )
  } else {
    return (
      <div className="nav-bar">is logged in</div>
    )
  }
};
export default NavBar;
