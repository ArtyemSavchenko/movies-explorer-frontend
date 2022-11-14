import CustomLink from '../../ui/CustomLink/CustomLink';

import './SignMenu.css';

const SignMenu = () => {
  return (
    <div className="sign-menu">
      <CustomLink type="internal-link" extraClass="sign-menu__link" to="signup">
        Регистрация
      </CustomLink>
      <CustomLink type="internal-link" extraClass="sign-menu__btn" to="signin">
        Войти
      </CustomLink>
    </div>
  );
};

export default SignMenu;
