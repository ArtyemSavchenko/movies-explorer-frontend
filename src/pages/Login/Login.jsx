import { useEffect, useState } from 'react';

import LogoLink from '../../components/ui/LogoLink/LogoLink';
import FormInput from '../../components/ui/FormInput/FormInput';
import FormBtn from '../../components/ui/FormBtn/FormBtn';
import CustomLink from '../../components/ui/CustomLink/CustomLink';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    console.log(`email: ${email} ${email.length}, password ${password} ${password.length}`);
  }, [email, password])

  return (
    <section className="login">
      <LogoLink extraClass="login__logo-link" funny />
      <p className="login__title">Рады видеть!</p>
      <form className="login__form" onSubmit={handleRegister}>
        <fieldset className="login__fieldset">
          <FormInput
            extraClass="login__input"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            extraClass="login__input"
            type="password"
            placeholder="Пароль"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <FormBtn extraClass="login__submit-btn">Войти</FormBtn>
        <p className="login__caption">
          Ещё не зарегистрированы?{' '}
          <CustomLink feature="internal-link" appearance="accent" extraClass="login__caption-link" to='/signup'>
            Регистрация
          </CustomLink>
        </p>
      </form>
    </section>
  );
};

export default Login;
