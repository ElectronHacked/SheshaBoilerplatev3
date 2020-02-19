export interface ITokenData {
  readonly accessToken: string;
  readonly encryptedAccessToken: string;
  readonly expireInSeconds: 1209599;
  readonly expireOn: string;
  readonly userId: number | string;
}
