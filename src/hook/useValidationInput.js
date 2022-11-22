import { useState } from 'react';

import { EMAIL_REG_EXP, NAME_REG_EXP } from '../utils/constants';

const checkValidationErr = (value, params, errors) => {
  for (const key in params) {
    switch (key) {
      case 'required':
        if (value === '') {
          return errors?.required || 'Пропущено обязательное поле';
        }
        break;

      case 'isName':
        if (!value.match(NAME_REG_EXP)) {
          return 'Имя может содержать только латиницу, кириллицу, пробел и дефис';
        }
        break;

      case 'isEmail':
        if (!value.match(EMAIL_REG_EXP)) {
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

export const useValidationInput = (initialValue, params, errors) => {
  const [value, setValue] = useState(initialValue);
  const [err, setErr] = useState('');
  const [isValid, setIsValid] = useState(!checkValidationErr(value, params));

  const onChange = (e) => {
    setErr('');

    const inputValue = e.target.value;
    setValue(inputValue);

    const err = checkValidationErr(inputValue, params, errors);

    setIsValid(!err);
    setErr(err);
  };

  return [value, err, isValid, onChange];
};
