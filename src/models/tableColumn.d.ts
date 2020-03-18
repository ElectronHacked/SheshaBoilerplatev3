import { IndexColumnDataType, IndexColumnFilterOption } from 'shesha';

export interface ITableColumn {
  id?: string;
  accessor: string;
  header: string;
  visible: boolean; // is visible in the table (including columns selector, filter etc.)
  show?: boolean; // is visible on client
  dataType?: IndexColumnDataType;
  allowFilter?: boolean;
  filterOption?: IndexColumnFilterOption;
  filter?: any;
  isFilterable: boolean;

  columnId?: string;
  propertyName?: string;
  filterCaption?: string;
  name?: string;
  caption?: string;
  allowShowHide?: boolean;
}
