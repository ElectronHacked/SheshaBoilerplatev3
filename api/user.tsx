/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateUserDto = {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive?: boolean;
  roleNames?: string | null[] | null;
  password: string;
} | null;

export type UserDto = {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive?: boolean;
  fullName?: string | null;
  lastLoginTime?: string | null;
  creationTime?: string;
  roleNames?: string | null[] | null;
  id?: number;
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

export type UserDtoAjaxResponse = {
  result?: UserDto;
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

export type RoleDto = {
  name: string;
  displayName: string;
  normalizedName?: string | null;
  description?: string | null;
  grantedPermissions?: string | null[] | null;
  id?: number;
} | null;

export type RoleDtoListResultDto = {
  items?: RoleDto[] | null;
} | null;

export type RoleDtoListResultDtoAjaxResponse = {
  result?: RoleDtoListResultDto;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type ChangeUserLanguageDto = {
  languageName: string;
} | null;

export type ResetPasswordSendOtpResponse = {
  operationId?: string;
} | null;

export type ResetPasswordSendOtpResponseAjaxResponse = {
  result?: ResetPasswordSendOtpResponse;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type ResetPasswordVerifyOtpInput = {
  mobileNo: string;
  operationId?: string;
  pin?: string | null;
} | null;

export type ResetPasswordVerifyOtpResponse = {
  token?: string | null;
  username?: string | null;
  isSuccess?: boolean;
  errorMessage?: string | null;
} | null;

export type ResetPasswordVerifyOtpResponseAjaxResponse = {
  result?: ResetPasswordVerifyOtpResponse;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type ResetPasswordUsingTokenInput = {
  username: string;
  token: string;
  newPassword: string;
} | null;

export type BooleanAjaxResponse = {
  result?: boolean;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type ChangePasswordDto = {
  currentPassword: string;
  newPassword: string;
} | null;

export type ResetPasswordDto = {
  adminPassword: string;
  userId: number;
  newPassword: string;
} | null;

export type AbpUserAuthConfigDto = {
  allPermissions?: {
    [key: string]: string | null;
  } | null;
  grantedPermissions?: {
    [key: string]: string | null;
  } | null;
} | null;

export type AbpUserAuthConfigDtoAjaxResponse = {
  result?: AbpUserAuthConfigDto;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type UserDtoPagedResultDto = {
  totalCount?: number;
  items?: UserDto[] | null;
} | null;

export type UserDtoPagedResultDtoAjaxResponse = {
  result?: UserDtoPagedResultDto;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type UserCreateProps = Omit<
  MutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto>,
  'path' | 'verb'
>;

export const UserCreate = (props: UserCreateProps) => (
  <Mutate<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto>
    verb="POST"
    path={`/api/services/app/User/Create`}
    {...props}
  />
);

export type UseUserCreateProps = Omit<UseMutateProps<UserDtoAjaxResponse, void, CreateUserDto>, 'path' | 'verb'>;

export const useUserCreate = (props: UseUserCreateProps) =>
  useMutate<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto>('POST', `/api/services/app/User/Create`, props);

export type UserUpdateProps = Omit<MutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto>, 'path' | 'verb'>;

export const UserUpdate = (props: UserUpdateProps) => (
  <Mutate<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto>
    verb="PUT"
    path={`/api/services/app/User/Update`}
    {...props}
  />
);

export type UseUserUpdateProps = Omit<UseMutateProps<UserDtoAjaxResponse, void, UserDto>, 'path' | 'verb'>;

export const useUserUpdate = (props: UseUserUpdateProps) =>
  useMutate<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto>('PUT', `/api/services/app/User/Update`, props);

export interface UserDeleteQueryParams {
  Id?: number;
}

export type UserDeleteProps = Omit<MutateProps<void, unknown, UserDeleteQueryParams, void>, 'path' | 'verb'>;

export const UserDelete = (props: UserDeleteProps) => (
  <Mutate<void, unknown, UserDeleteQueryParams, void> verb="DELETE" path={`/api/services/app/User/Delete`} {...props} />
);

export type UseUserDeleteProps = Omit<UseMutateProps<void, UserDeleteQueryParams, void>, 'path' | 'verb'>;

export const useUserDelete = (props: UseUserDeleteProps) =>
  useMutate<void, unknown, UserDeleteQueryParams, void>('DELETE', `/api/services/app/User/Delete`, props);

export type UserGetRolesProps = Omit<GetProps<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void>, 'path'>;

export const UserGetRoles = (props: UserGetRolesProps) => (
  <Get<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void> path={`/api/services/app/User/GetRoles`} {...props} />
);

export type UseUserGetRolesProps = Omit<UseGetProps<RoleDtoListResultDtoAjaxResponse, void>, 'path'>;

export const useUserGetRoles = (props: UseUserGetRolesProps) =>
  useGet<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void>(`/api/services/app/User/GetRoles`, props);

export type UserChangeLanguageProps = Omit<MutateProps<void, unknown, void, ChangeUserLanguageDto>, 'path' | 'verb'>;

export const UserChangeLanguage = (props: UserChangeLanguageProps) => (
  <Mutate<void, unknown, void, ChangeUserLanguageDto>
    verb="POST"
    path={`/api/services/app/User/ChangeLanguage`}
    {...props}
  />
);

export type UseUserChangeLanguageProps = Omit<UseMutateProps<void, void, ChangeUserLanguageDto>, 'path' | 'verb'>;

export const useUserChangeLanguage = (props: UseUserChangeLanguageProps) =>
  useMutate<void, unknown, void, ChangeUserLanguageDto>('POST', `/api/services/app/User/ChangeLanguage`, props);

export interface UserResetPasswordSendOtpQueryParams {
  mobileNo?: string | null;
}

export type UserResetPasswordSendOtpProps = Omit<
  MutateProps<ResetPasswordSendOtpResponseAjaxResponse, AjaxResponseBase, UserResetPasswordSendOtpQueryParams, void>,
  'path' | 'verb'
>;

export const UserResetPasswordSendOtp = (props: UserResetPasswordSendOtpProps) => (
  <Mutate<ResetPasswordSendOtpResponseAjaxResponse, AjaxResponseBase, UserResetPasswordSendOtpQueryParams, void>
    verb="POST"
    path={`/api/services/app/User/ResetPasswordSendOtp`}
    {...props}
  />
);

export type UseUserResetPasswordSendOtpProps = Omit<
  UseMutateProps<ResetPasswordSendOtpResponseAjaxResponse, UserResetPasswordSendOtpQueryParams, void>,
  'path' | 'verb'
>;

export const useUserResetPasswordSendOtp = (props: UseUserResetPasswordSendOtpProps) =>
  useMutate<ResetPasswordSendOtpResponseAjaxResponse, AjaxResponseBase, UserResetPasswordSendOtpQueryParams, void>(
    'POST',
    `/api/services/app/User/ResetPasswordSendOtp`,
    props
  );

export type UserResetPasswordVerifyOtpProps = Omit<
  MutateProps<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput>,
  'path' | 'verb'
>;

export const UserResetPasswordVerifyOtp = (props: UserResetPasswordVerifyOtpProps) => (
  <Mutate<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput>
    verb="POST"
    path={`/api/services/app/User/ResetPasswordVerifyOtp`}
    {...props}
  />
);

export type UseUserResetPasswordVerifyOtpProps = Omit<
  UseMutateProps<ResetPasswordVerifyOtpResponseAjaxResponse, void, ResetPasswordVerifyOtpInput>,
  'path' | 'verb'
>;

export const useUserResetPasswordVerifyOtp = (props: UseUserResetPasswordVerifyOtpProps) =>
  useMutate<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput>(
    'POST',
    `/api/services/app/User/ResetPasswordVerifyOtp`,
    props
  );

export type UserResetPasswordUsingTokenProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput>,
  'path' | 'verb'
>;

export const UserResetPasswordUsingToken = (props: UserResetPasswordUsingTokenProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput>
    verb="POST"
    path={`/api/services/app/User/ResetPasswordUsingToken`}
    {...props}
  />
);

export type UseUserResetPasswordUsingTokenProps = Omit<
  UseMutateProps<BooleanAjaxResponse, void, ResetPasswordUsingTokenInput>,
  'path' | 'verb'
>;

export const useUserResetPasswordUsingToken = (props: UseUserResetPasswordUsingTokenProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput>(
    'POST',
    `/api/services/app/User/ResetPasswordUsingToken`,
    props
  );

export type UserChangePasswordProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto>,
  'path' | 'verb'
>;

export const UserChangePassword = (props: UserChangePasswordProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto>
    verb="POST"
    path={`/api/services/app/User/ChangePassword`}
    {...props}
  />
);

export type UseUserChangePasswordProps = Omit<
  UseMutateProps<BooleanAjaxResponse, void, ChangePasswordDto>,
  'path' | 'verb'
>;

export const useUserChangePassword = (props: UseUserChangePasswordProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto>(
    'POST',
    `/api/services/app/User/ChangePassword`,
    props
  );

export type UserResetPasswordProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto>,
  'path' | 'verb'
>;

export const UserResetPassword = (props: UserResetPasswordProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto>
    verb="POST"
    path={`/api/services/app/User/ResetPassword`}
    {...props}
  />
);

export type UseUserResetPasswordProps = Omit<
  UseMutateProps<BooleanAjaxResponse, void, ResetPasswordDto>,
  'path' | 'verb'
>;

export const useUserResetPassword = (props: UseUserResetPasswordProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto>(
    'POST',
    `/api/services/app/User/ResetPassword`,
    props
  );

export type UserGetUserAuthConfigProps = Omit<
  GetProps<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void>,
  'path'
>;

export const UserGetUserAuthConfig = (props: UserGetUserAuthConfigProps) => (
  <Get<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void>
    path={`/api/services/app/User/GetUserAuthConfig`}
    {...props}
  />
);

export type UseUserGetUserAuthConfigProps = Omit<UseGetProps<AbpUserAuthConfigDtoAjaxResponse, void>, 'path'>;

export const useUserGetUserAuthConfig = (props: UseUserGetUserAuthConfigProps) =>
  useGet<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void>(`/api/services/app/User/GetUserAuthConfig`, props);

export interface UserGetQueryParams {
  Id?: number;
}

export type UserGetProps = Omit<GetProps<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams>, 'path'>;

export const UserGet = (props: UserGetProps) => (
  <Get<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams> path={`/api/services/app/User/Get`} {...props} />
);

export type UseUserGetProps = Omit<UseGetProps<UserDtoAjaxResponse, UserGetQueryParams>, 'path'>;

export const useUserGet = (props: UseUserGetProps) =>
  useGet<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams>(`/api/services/app/User/Get`, props);

export interface UserGetAllQueryParams {
  Keyword?: string | null;
  IsActive?: boolean | null;
  SkipCount?: number;
  MaxResultCount?: number;
}

export type UserGetAllProps = Omit<
  GetProps<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams>,
  'path'
>;

export const UserGetAll = (props: UserGetAllProps) => (
  <Get<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams>
    path={`/api/services/app/User/GetAll`}
    {...props}
  />
);

export type UseUserGetAllProps = Omit<UseGetProps<UserDtoPagedResultDtoAjaxResponse, UserGetAllQueryParams>, 'path'>;

export const useUserGetAll = (props: UseUserGetAllProps) =>
  useGet<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams>(
    `/api/services/app/User/GetAll`,
    props
  );
