import CustomLink from '../../CustomLink/CustomLink';

import './SignMenu.css';

const SignMenu = () => {
  return (
    <div className="sign-menu">
      <CustomLink
        type="internal-link"
        extraClass="sign-menu__link"
        to="/registration"
      >
        Регистрация
      </CustomLink>
      <CustomLink type="internal-link" extraClass="sign-menu__btn" to="/login">
        Войти
      </CustomLink>
    </div>
  );
};
export default SignMenu;
