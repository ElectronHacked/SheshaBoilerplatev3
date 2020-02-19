import { ITableColumn, ICustomFilter } from 'models';

export interface ICustomFilterOptions {
  readonly id: string;
  readonly name: string;
  readonly isApplied?: boolean;
}
