import { ITableColumn } from 'models';

export interface ICustomFilter {
  readonly id: string;
  readonly name: string;
  readonly columns: ITableColumn[];
  readonly isPrivate: boolean;
  readonly isApplied?: boolean;
}
