import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoLink from '../../ui/LogoLink/LogoLink';
import FormInput from '../../ui/FormInput/FormInput';
import FormBtn from '../../ui/FormBtn/FormBtn';
import CustomLink from '../../ui/CustomLink/CustomLink';

import { usePushNotification } from '../../shared/Notifications/Notifications';
import { authorize, register } from '../../../utils/MainApi';

import { CurrentUser } from '../../../contexts/CurrentUserContext';

import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signIn } = useContext(CurrentUser);

  const navigate = useNavigate();
  const pushNotification = usePushNotification();

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const user = await register(email, password, name);

      if (user) {
        const { token } = await authorize(email, password);
        localStorage.setItem('jwt', token);

        signIn(user, () => {
          navigate('/movies');
        });
      }
    } catch (err) {
      pushNotification({
        type: 'error',
        text: err.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <FormBtn extraClass="register__submit-btn" isLoading={isSubmitting}>
          Зарегистрироваться
        </FormBtn>
        <p className="register__caption">
          Уже зарегистрированы?{' '}
          <CustomLink
            feature="internal-link"
            appearance="accent"
            extraClass="register__caption-link"
            to="/signin"
          >
            Войти
          </CustomLink>
        </p>
      </form>
    </section>
  );
};

export default Register;
