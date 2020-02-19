import axios from 'axios';
import { getAccessToken } from 'utils/auth';
import { getLocalizationOrDefault } from '../../utils/localization';
import { getTenantId } from '../../utils/multitenancy';

export const addHeaderToken = () => {
  axios.interceptors.request.use(
    config => {
      if (!config.url.toLowerCase().includes('/token') && !config.headers.Authorization) {
        const tokenObj = getAccessToken();

        if (tokenObj) {
          config.headers.Authorization = `Bearer ${tokenObj.accessToken}`;
        }
      }

      return config;
    },
    error => Promise.reject(error)
  );
};

export const addParameterisedToken = () => {
  // #region  Add a request interceptor
  /**
   * I'm putting this code in this file since it's the first that gets hit, as far as axios is concerned.
   * So, I put any code that might require that we manipulate our axios config in here
   */
  axios.interceptors.request.use(
    (
      config // Below I'm making sure that every request has an access_token parameter so that the user does not have to do that manually
    ) => {
      const token = getAccessToken();
      if (token) {
        config.headers.common['Authorization'] = 'Bearer ' + token.accessToken;
      }

      config.headers.common['.AspNetCore.Culture'] = getLocalizationOrDefault();
      config.headers.common['Abp.TenantId'] = getTenantId();
      // config.headers.common['content-type'] = 'application/json';

      return config;
    },
    error => {
      // Your Interceptor code to do something with request error
      // eslint-disable-next-line no-console
      console.log('axios.interceptors.request error:', error);
      // Return error
      return Promise.reject(error);
    }
  );
  // #endregion
};
