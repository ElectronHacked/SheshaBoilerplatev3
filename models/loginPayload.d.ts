export interface ILoginPayload {
  readonly userNameOrEmailAddress: string;
  readonly password: string;
  readonly url?: string;
  readonly rememberClient?: boolean;
}
