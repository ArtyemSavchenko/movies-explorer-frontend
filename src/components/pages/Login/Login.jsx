import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from '../../ui/FormInput/FormInput';
import LogoLink from '../../ui/LogoLink/LogoLink';
import FormBtn from '../../ui/FormBtn/FormBtn';
import CustomLink from '../../ui/CustomLink/CustomLink';

import { CurrentUser } from '../../../contexts/CurrentUserContext';

import { usePushNotification } from '../../shared/Notifications/Notifications';
import { authorize, getUser } from '../../../utils/MainApi';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signIn } = useContext(CurrentUser);
  const navigate = useNavigate();
  const pushNotification = usePushNotification();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const { token } = await authorize(email, password);
      localStorage.setItem('jwt', token);

      const user = await getUser();
      signIn(user, () => {
        navigate('/movies');
      });
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
        <FormBtn extraClass="login__submit-btn" isLoading={isSubmitting}>
          Войти
        </FormBtn>
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
