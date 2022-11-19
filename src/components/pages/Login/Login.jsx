import { useState } from 'react';


import FormInput from '../../ui/FormInput/FormInput';
import LogoLink from '../../ui/LogoLink/LogoLink';
import FormBtn from '../../ui/FormBtn/FormBtn';
import CustomLink from '../../ui/CustomLink/CustomLink';

import { usePushNotification } from '../../shared/Notifications/Notifications';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pushNotification = usePushNotification();

  //TODO удалить тестовую функцию
  const handleLogin = (e) => {
    e.preventDefault();

    pushNotification({
      type: 'success',
      heading: 'Бинго!',
      text: 'Вы будете перенаправлены (нет)',
    });
  };

  return (
    <section className="login">
      <LogoLink extraClass="login__logo-link" funny />
      <p className="login__title">Рады видеть!</p>
      <form className="login__form" onSubmit={handleLogin}>
        <fieldset className="login__fieldset">
          <FormInput
            extraClass="login__input"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            extraClass="login__input"
            type="password"
            placeholder="Пароль"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <FormBtn extraClass="login__submit-btn">Войти</FormBtn>
        <p className="login__caption">
          Ещё не зарегистрированы?{' '}
          <CustomLink
            feature="internal-link"
            appearance="accent"
            extraClass="login__caption-link"
            to="/signup"
          >
            Регистрация
          </CustomLink>
        </p>
      </form>
    </section>
  );
};

export default Login;
