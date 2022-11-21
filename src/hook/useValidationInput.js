import { useState } from 'react';

import { emailRegExp, nameRegExp } from '../utils/constants';

const checkValidationErr = (value, params) => {
  for (const key in params) {
    switch (key) {
      case 'required':
        if (value === '') {
          return 'Пропущено обязательное поле';
        }
        break;

      case 'isName':
        if (!value.match(nameRegExp)) {
          return 'Имя может содержать только латиницу, кириллицу, пробел и дефис';
        }
        break;

      case 'isEmail':
        if (!value.match(emailRegExp)) {
          return 'Введенный адрес некорректен';
        }
        break;

      case 'minLength':
        if (value.length < params[key]) {
          return `Минимальная длина не может быть меньше ${params[key]}`;
        }
        break;

      case 'maxLength':
        if (value.length > params[key]) {
          return `Максимальная длина не может быть больше ${params[key]}`;
        }
        break;

      default:
        return '';
    }
  }
};

export const useValidationInput = (initialValue, params) => {
  const [value, setValue] = useState(initialValue);
  const [err, setErr] = useState('');
  const [isValid, setIsValid] = useState(!checkValidationErr(value, params));

  const onChange = (e) => {
    setErr('');

    const inputValue = e.target.value;
    setValue(inputValue);

    const err = checkValidationErr(inputValue, params);

    setIsValid(!err);
    setErr(err);
  };

  return [value, err, isValid, onChange];
};
