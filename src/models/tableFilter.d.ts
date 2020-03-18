import { IndexColumnFilterOption } from 'shesha';
export interface ITableFilter {
  readonly columnId: string;
  readonly filterOption: IndexColumnFilterOption;
  readonly filter: any;
}
