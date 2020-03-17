import React, { FC, ReactNode } from 'react';
import { useAuth } from 'providers/auth';

interface IProps {
  permissionName: string;
  children?: ReactNode;
}

export const ProtectedContent: FC<IProps> = ({ permissionName, children }) => {
  const { loginInfo } = useAuth();
  const grantedPermissions = loginInfo?.grantedPermissions || [];
  const hasRights = grantedPermissions.indexOf(permissionName as any) > 0;
  return hasRights ? <React.Fragment>{children}</React.Fragment> : null;
};

export default ProtectedContent;
