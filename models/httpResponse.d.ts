import { IResultOf } from './resultOf.d';
import { HttpStatusCodes } from 'enums';

export interface IHttpResponse<T> {
  readonly data: IResultOf<T>;
  readonly message: string;
  readonly status: HttpStatusCodes;
}
