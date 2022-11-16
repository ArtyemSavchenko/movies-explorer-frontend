import { useContext, useState } from 'react';

import CustomLink from '../../components/ui/CustomLink/CustomLink';
import ProfileInput from '../../components/ui/ProfileInput/ProfileInput';
import { CurrentUserInfo } from '../../contexts/CurrentUserContext';

import './Profile.css';

const Profile = () => {
  const currentUser = useContext(CurrentUserInfo);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

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
            />
            <ProfileInput
              extraClass="profile__input"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <CustomLink
            extraClass="profile__submit-btn"
            feature="button"
            type="submit"
          >
            Редактировать
          </CustomLink>
        </form>

        <CustomLink
          extraClass="profile__sign-out-btn"
          feature="button"
          appearance="attention"
          type="button"
        >
          Выйти из&nbsp;аккаунта
        </CustomLink>
      </div>
    </section>
  );
};

export default Profile;
