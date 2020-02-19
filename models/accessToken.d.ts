export interface IAccessToken {
  accessToken: string;
  expireInSeconds: number;
  expireOn: string;
  encryptedAccessToken: string;
  userId: number | string;
}
