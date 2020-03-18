/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GuidNullableEntityWithDisplayNameDto = {
  displayText?: string | null;
  id?: string | null;
} | null;

export type GuidEntityWithDisplayNameDto = {
  displayText?: string | null;
  id?: string;
} | null;

export type CreateShaRoleAppointedPersonDto = {
  roleId?: string;
  person?: GuidNullableEntityWithDisplayNameDto;
  regions?: GuidEntityWithDisplayNameDto[] | null;
} | null;

export type ShaRoleAppointedPersonDto = {
  roleId?: string;
  person?: GuidNullableEntityWithDisplayNameDto;
  regions?: GuidEntityWithDisplayNameDto[] | null;
  id?: string;
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

export type ShaRoleAppointedPersonDtoAjaxResponse = {
  result?: ShaRoleAppointedPersonDto;
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

export type GuidEntityDto = {
  id?: string;
} | null;

export type ShaRoleAppointedPersonDtoPagedResultDto = {
  totalCount?: number;
  items?: ShaRoleAppointedPersonDto[] | null;
} | null;

export type ShaRoleAppointedPersonDtoPagedResultDtoAjaxResponse = {
  result?: ShaRoleAppointedPersonDtoPagedResultDto;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type ShaRoleAppointedPersonCreateProps = Omit<
  MutateProps<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, void, CreateShaRoleAppointedPersonDto>,
  'path' | 'verb'
>;

export const ShaRoleAppointedPersonCreate = (props: ShaRoleAppointedPersonCreateProps) => (
  <Mutate<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, void, CreateShaRoleAppointedPersonDto>
    verb="POST"
    path={`/api/services/app/ShaRoleAppointedPerson/Create`}
    {...props}
  />
);

export type UseShaRoleAppointedPersonCreateProps = Omit<
  UseMutateProps<ShaRoleAppointedPersonDtoAjaxResponse, void, CreateShaRoleAppointedPersonDto>,
  'path' | 'verb'
>;

export const useShaRoleAppointedPersonCreate = (props: UseShaRoleAppointedPersonCreateProps) =>
  useMutate<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, void, CreateShaRoleAppointedPersonDto>(
    'POST',
    `/api/services/app/ShaRoleAppointedPerson/Create`,
    props
  );

export type ShaRoleAppointedPersonUpdateProps = Omit<
  MutateProps<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, void, ShaRoleAppointedPersonDto>,
  'path' | 'verb'
>;

export const ShaRoleAppointedPersonUpdate = (props: ShaRoleAppointedPersonUpdateProps) => (
  <Mutate<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, void, ShaRoleAppointedPersonDto>
    verb="PUT"
    path={`/api/services/app/ShaRoleAppointedPerson/Update`}
    {...props}
  />
);

export type UseShaRoleAppointedPersonUpdateProps = Omit<
  UseMutateProps<ShaRoleAppointedPersonDtoAjaxResponse, void, ShaRoleAppointedPersonDto>,
  'path' | 'verb'
>;

export const useShaRoleAppointedPersonUpdate = (props: UseShaRoleAppointedPersonUpdateProps) =>
  useMutate<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, void, ShaRoleAppointedPersonDto>(
    'PUT',
    `/api/services/app/ShaRoleAppointedPerson/Update`,
    props
  );

export type ShaRoleAppointedPersonDeleteProps = Omit<MutateProps<void, unknown, void, GuidEntityDto>, 'path' | 'verb'>;

export const ShaRoleAppointedPersonDelete = (props: ShaRoleAppointedPersonDeleteProps) => (
  <Mutate<void, unknown, void, GuidEntityDto>
    verb="POST"
    path={`/api/services/app/ShaRoleAppointedPerson/Delete`}
    {...props}
  />
);

export type UseShaRoleAppointedPersonDeleteProps = Omit<UseMutateProps<void, void, GuidEntityDto>, 'path' | 'verb'>;

export const useShaRoleAppointedPersonDelete = (props: UseShaRoleAppointedPersonDeleteProps) =>
  useMutate<void, unknown, void, GuidEntityDto>('POST', `/api/services/app/ShaRoleAppointedPerson/Delete`, props);

export interface ShaRoleAppointedPersonGetQueryParams {
  Id?: string;
}

export type ShaRoleAppointedPersonGetProps = Omit<
  GetProps<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, ShaRoleAppointedPersonGetQueryParams>,
  'path'
>;

export const ShaRoleAppointedPersonGet = (props: ShaRoleAppointedPersonGetProps) => (
  <Get<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, ShaRoleAppointedPersonGetQueryParams>
    path={`/api/services/app/ShaRoleAppointedPerson/Get`}
    {...props}
  />
);

export type UseShaRoleAppointedPersonGetProps = Omit<
  UseGetProps<ShaRoleAppointedPersonDtoAjaxResponse, ShaRoleAppointedPersonGetQueryParams>,
  'path'
>;

export const useShaRoleAppointedPersonGet = (props: UseShaRoleAppointedPersonGetProps) =>
  useGet<ShaRoleAppointedPersonDtoAjaxResponse, AjaxResponseBase, ShaRoleAppointedPersonGetQueryParams>(
    `/api/services/app/ShaRoleAppointedPerson/Get`,
    props
  );

export interface ShaRoleAppointedPersonGetAllQueryParams {
  Keyword?: string | null;
  SkipCount?: number;
  MaxResultCount?: number;
}

export type ShaRoleAppointedPersonGetAllProps = Omit<
  GetProps<
    ShaRoleAppointedPersonDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ShaRoleAppointedPersonGetAllQueryParams
  >,
  'path'
>;

export const ShaRoleAppointedPersonGetAll = (props: ShaRoleAppointedPersonGetAllProps) => (
  <Get<ShaRoleAppointedPersonDtoPagedResultDtoAjaxResponse, AjaxResponseBase, ShaRoleAppointedPersonGetAllQueryParams>
    path={`/api/services/app/ShaRoleAppointedPerson/GetAll`}
    {...props}
  />
);

export type UseShaRoleAppointedPersonGetAllProps = Omit<
  UseGetProps<ShaRoleAppointedPersonDtoPagedResultDtoAjaxResponse, ShaRoleAppointedPersonGetAllQueryParams>,
  'path'
>;

export const useShaRoleAppointedPersonGetAll = (props: UseShaRoleAppointedPersonGetAllProps) =>
  useGet<
    ShaRoleAppointedPersonDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ShaRoleAppointedPersonGetAllQueryParams
  >(`/api/services/app/ShaRoleAppointedPerson/GetAll`, props);