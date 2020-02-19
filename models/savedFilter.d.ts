import { ITableColumn } from './tableColumn';

export interface ISavedFilter {
  readonly id: string;
  name: 'Anything';
  columns: ITableColumn[];
  applied: boolean;
}
