import { ITokenData } from 'models';

const USER_TOKEN = 'USER_TOKEN';

class TokenManager {
  constructor() {}
  saveUserToken({ accessToken }: ITokenData) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_TOKEN, JSON.stringify({ accessToken }));
    }
  }

  removeToken() {
    if (typeof window !== 'undefined') {
      // localStorage.removeItem(USER_TOKEN);
    }
  }

  token(): ITokenData | null {
    return {
      accessToken: '',
      //token_type: '',
      expireInSeconds: 1209599,
      //userName: '',
      userId: '',
      encryptedAccessToken: '',
      expireOn: ''
      //requireChangePassword: 'false',
      //'.issued': '',
      //'.expires': '',
    };
    // if (typeof window === 'undefined') {
    //   return {
    //     access_token: '',
    //     token_type: '',
    //     expires_in: 1209599,
    //     userName: '',
    //     userId: '',
    //     requireChangePassword: 'false',
    //     '.issued': '',
    //     '.expires': '',
    //   };
    // }

    // const userTokenData = localStorage.getItem(USER_TOKEN);

    // if (userTokenData) {
    //   try {
    //     return JSON.parse(userTokenData) as ITokenData;
    //   } catch (error) {}
    // }

    // return null;
  }
}

export default TokenManager;