/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ListSortDirectionNullable = number | null;

export type DataTableColumnDto = {
  propertyName?: string | null;
  filterCaption?: string | null;
  name?: string | null;
  caption?: string | null;
  allowShowHide?: boolean;
  dataType?: string | null;
  visible?: boolean;
  isFilterable?: boolean;
  sortable?: boolean;
  defaultSorting?: ListSortDirectionNullable;
} | null;

export type DataTableConfigDto = {
  id?: string | null;
  pageSize?: number;
  columns?: DataTableColumnDto[] | null;
} | null;

export type ValidationErrorInfo = {
  message?: string | null;
  members?: string | null[] | null;
} | null;

export type ErrorInfo = {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
} | null;

export type DataTableConfigDtoAjaxResponse = {
  result?: DataTableConfigDto;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type AjaxResponseBase = {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type ColumnSortingDto = {
  id?: string | null;
  desc?: boolean;
} | null;

export type Object = { [key: string]: any } | null;

export type ColumnFilterDto = {
  columnId?: string | null;
  filterOption?: string | null;
  filter?: Object;
} | null;

export type DataTableGetDataInput = {
  id?: string | null;
  pageSize?: number;
  quickSearch?: string | null;
  currentPage?: number;
  parentEntityId?: string | null;
  sorting?: ColumnSortingDto[] | null;
  filter?: ColumnFilterDto[] | null;
} | null;

export type DataTableData = {
  totalRows?: number;
  totalRowsBeforeFilter?: number;
  totalPages?: number;
  echo?: number;
  rows?:
    | {
        [key: string]: Object;
      }
    | null[]
    | null;
} | null;

export type DataTableDataAjaxResponse = {
  result?: DataTableData;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type FileStreamResultAjaxResponse = {
  result?: string;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export interface DataTableGetConfigurationQueryParams {
  id?: string | null;
}

export type DataTableGetConfigurationProps = Omit<
  GetProps<DataTableConfigDtoAjaxResponse, AjaxResponseBase, DataTableGetConfigurationQueryParams>,
  'path'
>;

export const DataTableGetConfiguration = (props: DataTableGetConfigurationProps) => (
  <Get<DataTableConfigDtoAjaxResponse, AjaxResponseBase, DataTableGetConfigurationQueryParams>
    path={`/api/DataTable/GetConfiguration`}
    {...props}
  />
);

export type UseDataTableGetConfigurationProps = Omit<
  UseGetProps<DataTableConfigDtoAjaxResponse, DataTableGetConfigurationQueryParams>,
  'path'
>;

export const useDataTableGetConfiguration = (props: UseDataTableGetConfigurationProps) =>
  useGet<DataTableConfigDtoAjaxResponse, AjaxResponseBase, DataTableGetConfigurationQueryParams>(
    `/api/DataTable/GetConfiguration`,
    props
  );

export type DataTableGetDataProps = Omit<
  MutateProps<DataTableDataAjaxResponse, AjaxResponseBase, void, DataTableGetDataInput>,
  'path' | 'verb'
>;

export const DataTableGetData = (props: DataTableGetDataProps) => (
  <Mutate<DataTableDataAjaxResponse, AjaxResponseBase, void, DataTableGetDataInput>
    verb="POST"
    path={`/api/DataTable/GetData`}
    {...props}
  />
);

export type UseDataTableGetDataProps = Omit<
  UseMutateProps<DataTableDataAjaxResponse, void, DataTableGetDataInput>,
  'path' | 'verb'
>;

export const useDataTableGetData = (props: UseDataTableGetDataProps) =>
  useMutate<DataTableDataAjaxResponse, AjaxResponseBase, void, DataTableGetDataInput>(
    'POST',
    `/api/DataTable/GetData`,
    props
  );

export type DataTableExportToExcelProps = Omit<
  MutateProps<FileStreamResultAjaxResponse, AjaxResponseBase, void, DataTableGetDataInput>,
  'path' | 'verb'
>;

export const DataTableExportToExcel = (props: DataTableExportToExcelProps) => (
  <Mutate<FileStreamResultAjaxResponse, AjaxResponseBase, void, DataTableGetDataInput>
    verb="POST"
    path={`/api/DataTable/ExportToExcel`}
    {...props}
  />
);

export type UseDataTableExportToExcelProps = Omit<
  UseMutateProps<FileStreamResultAjaxResponse, void, DataTableGetDataInput>,
  'path' | 'verb'
>;

export const useDataTableExportToExcel = (props: UseDataTableExportToExcelProps) =>
  useMutate<FileStreamResultAjaxResponse, AjaxResponseBase, void, DataTableGetDataInput>(
    'POST',
    `/api/DataTable/ExportToExcel`,
    props
  );