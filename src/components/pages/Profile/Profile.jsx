import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomLink from '../../ui/CustomLink/CustomLink';
import ProfileInput from '../../ui/ProfileInput/ProfileInput';

import { CurrentUser } from '../../../contexts/CurrentUserContext';

import { useValidationInput } from '../../../hook/useValidationInput';

import './Profile.css';

const Profile = () => {
  const { user, signOut } = useContext(CurrentUser);

  const [name, nameErr, nameIsValid, onChangeName] = useValidationInput(
    user.name,
    {
      required: true,
      isName: true,
      minLength: 2,
      maxLength: 30,
    }
  );
  const [email, emailErr, emailIsValid, onChangeEmail] = useValidationInput(
    user.email,
    {
      required: true,
      isEmail: true,
    }
  );

  const [isDataChanged, setIsDataChanged] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const [isFirstEditing, setIsFirstEditing] = useState(true);

  useEffect(() => {
    if (nameIsValid && emailIsValid && isDataChanged) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [nameIsValid, emailIsValid, isDataChanged]);

  useEffect(() => {
    if (name !== user.name || email !== user.email) {
      setIsFirstEditing(false);
      setIsDataChanged(true);
    } else {
      setIsDataChanged(false);
    }
  }, [name, email, user]);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(navigate('/'));
  };

  return (
    <section className="profile">
      <div className="profile__content">
        <p className="profile__heading">Привет, {user.name}!</p>

        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <ProfileInput
              extraClass="profile__input"
              label="Имя"
              type="text"
              value={name}
              onChange={onChangeName}
              required
              minLength="2"
              maxLength="30"
            />
            <ProfileInput
              extraClass="profile__input"
              label="E-mail"
              type="email"
              value={email}
              onChange={onChangeEmail}
              required
            />

            <p
              className={`profile__err-text${
                !isDataChanged && !isFirstEditing
                  ? ' profile__err-text_visible'
                  : ''
              }`}
            >
              Новые данные совпадают со старыми
            </p>
            <p
              className={`profile__err-text${
                !nameIsValid ? ' profile__err-text_visible' : ''
              }`}
            >
              {nameErr}
            </p>
            <p
              className={`profile__err-text${
                !emailIsValid ? ' profile__err-text_visible' : ''
              }`}
            >
              {emailErr}
            </p>
          </fieldset>

          <CustomLink
            extraClass="profile__submit-btn"
            feature="button"
            type="submit"
            disabled={!isValidForm}
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
