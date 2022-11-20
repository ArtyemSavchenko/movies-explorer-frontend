import { useState } from 'react';

import LogoLink from '../../ui/LogoLink/LogoLink';
import FormInput from '../../ui/FormInput/FormInput';
import FormBtn from '../../ui/FormBtn/FormBtn';
import CustomLink from '../../ui/CustomLink/CustomLink';

import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <section className="register">
      <LogoLink extraClass="register__logo-link" funny />
      <p className="register__title">Добро пожаловать!</p>
      <form className="register__form" onSubmit={handleRegister}>
        <fieldset className="register__fieldset">
          <FormInput
            extraClass="register__input"
            type="text"
            placeholder="Имя"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength="2"
            maxLength="30"
          />
          <FormInput
            extraClass="register__input"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            extraClass="register__input"
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <FormBtn extraClass="register__submit-btn">Зарегистрироваться</FormBtn>
        <p className="register__caption">
          Уже зарегистрированы?{' '}
          <CustomLink feature="internal-link" appearance="accent" extraClass="register__caption-link" to='/signin'>
            Войти
          </CustomLink>
        </p>
      </form>
    </section>
  );
};

export default Register;