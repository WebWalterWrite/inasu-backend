import { isEmail, isEmpty, isMinChar, isMaxChar, isOnlyLetters } from './fn.validation.';
import err from './errors';

/**
 * @description - Vérifier un champ input de type firstname - lastname
 */
export const isInputName = (field, val, ...rest) => {

  const { min = 2, max = 25 } = rest;

  if (!isEmpty(val))
    return `${err.empty} ${field}`;

  if (!isMinChar(val, min))
    return `${field} ${err.min} ${min} character`;

  if (!isOnlyLetters(val))
    return `${field} ${err.onlyLetters}`;

  if (!isMaxChar(val, max))
    return `${field} ${err.max} ${max} character`;

};

export const isInputEmail = (field, val) => {

  if (!isEmpty(val))
    return `${err.empty} ${field}`;

  if (!isEmail(val))
    return err.email;

};

export const isTextarea = (field, val, ...rest) => {

  const [min = 30, max = 1000] = rest;

  if (!isEmpty(val))
    return `${err.empty} ${field}`;

  if (!isMinChar(val, min))
    return `Your ${field} ${err.min} ${min} characters`;

};
