import { IAccessToken, IPasswordValidation } from 'models';

import { Subtract } from 'utility-types';
import { ACCESS_TOKEN_NAME } from 'app-constants';
import { LOGIN_PAGE_URL } from 'routes';

// Fields to remove from the AuthContext
interface IUnnecessaryTokenFields {
  encryptedAccessToken: string;
  userId: number | string;
}

type IncomingTokenType = Subtract<IAccessToken, IUnnecessaryTokenFields>;

export const saveUserToken = ({ accessToken, expireInSeconds, expireOn }: IncomingTokenType) => {
  const token: IncomingTokenType = {
    accessToken,
    expireInSeconds,
    expireOn,
  };

  localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(token));

  return token;
};

export const getAccessToken = (): IAccessToken | null => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);

  if (token) {
    const deserializedToken = JSON.parse(token) as IAccessToken;

    if (hasTokenExpired(deserializedToken.expireOn)) {
      removeAccessToken();

      return null;
    }
    return deserializedToken;
  }

  return null;
};

export const getAccessTokenParam = (): string => {
  try {
    const tokenObj = getAccessToken();

    if (tokenObj) {
      return `access_token=${tokenObj.accessToken}`;
    }
    return '';
  } catch (error) {
    return '';
  }
};

export const withAccessTokenParam = (url: string) => {
  const accessTokenParam = getAccessTokenParam();
  if (!accessTokenParam) return url;

  return url.includes('?') ? `${url}&${accessTokenParam}` : `${url}/?${accessTokenParam}`;
};

export const removeAccessToken = () => {
  try {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    localStorage.clear();
    window.location.href = LOGIN_PAGE_URL;
    return true;
  } catch (error) {
    return false;
  }
};

export const hasTokenExpired = (date: string): boolean => {
  return new Date(date) < new Date();
};

/**
 * Check if the password is valid and strong.
 *  A strong password must
 *    - contain at least 1 lowercase alphabetical character
 *    - contain at least 1 uppercase alphabetical character
 *    - contain at least 1 numeric character
 *    - contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
 *    - be eight characters or longer
 * @param password - the password to validate
 */
export const isStrongPassword = (password: string) => {
  const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

  return passwordRegex.test(password);
};

/**
 *
 * @param password
 */
export const getPasswordValidations = (password: string): IPasswordValidation => {
  if (!Boolean(password)) return {};

  return {
    hasLowerCaseChar: new RegExp('^.*[a-z]').test(password),
    hasUpperCaseChar: new RegExp('^.*[A-Z]').test(password),
    hasNumericChar: new RegExp('^.*[0-9]').test(password),
    hasSpecialChar: new RegExp('^.*[!@#$%^&*]').test(password),
    hasEightChars: password.length >= 8,
  };
};
