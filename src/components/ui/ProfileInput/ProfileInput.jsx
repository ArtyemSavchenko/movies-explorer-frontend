import { useId } from 'react';

import './ProfileInput.css';

const ProfileInput = ({ label, extraClass = '', ...restProps }) => {
  const id = useId();

  return (
    <div className={`profile-input ${extraClass}`}>
      <input className="profile-input__input" {...restProps} id={id} />
      <label className="profile-input__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default ProfileInput;
