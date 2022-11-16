import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomLink from '../../components/ui/CustomLink/CustomLink';
import ProfileInput from '../../components/ui/ProfileInput/ProfileInput';

import { CurrentUserInfo } from '../../contexts/CurrentUserContext';

import './Profile.css';

const Profile = () => {
  const currentUser = useContext(CurrentUserInfo);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const [isDirty, setIsDirty] = useState(false);
  const [firstEditing, setFirstEditing] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
      setFirstEditing(false);
    }
  }, [name, email, currentUser]);

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <section className="profile">
      <div className="profile__content">
        <p className="profile__heading">Привет, {currentUser.name}!</p>

        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <ProfileInput
              extraClass="profile__input"
              label="Имя"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength="2"
              maxLength="30"
            />
            <ProfileInput
              extraClass="profile__input"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <p
              className={`profile__err-text${
                isDirty && !firstEditing ? ' profile__err-text_visible' : ''
              }`}
            >
              Новые данные совпадают со старыми
            </p>
            <p
              className={`profile__err-text${
                false ? ' profile__err-text_visible' : ''
              }`}
            >
              {'ошибки имени'}
            </p>
            <p
              className={`profile__err-text${
                false ? ' profile__err-text_visible' : ''
              }`}
            >
              {'ошибки почты'}
            </p>
          </fieldset>

          <CustomLink
            extraClass="profile__submit-btn"
            feature="button"
            type="submit"
            disabled={isDirty}
          >
            Редактировать
          </CustomLink>
        </form>

        <CustomLink
          extraClass="profile__sign-out-btn"
          feature="button"
          appearance="attention"
          type="button"
          onClick={handleSignOut}
        >
          Выйти из&nbsp;аккаунта
        </CustomLink>
      </div>
    </section>
  );
};

export default Profile;
