import React, { FC, ReactNode } from 'react';
import { useAuth } from 'providers/auth';

interface IProps {
  permissionName: string;
  children?: ReactNode;
}

export const ProtectedContent: FC<IProps> = ({ permissionName, children }) => {
  const { loginInfo } = useAuth();
  const grantedPermissions = loginInfo?.user?.grantedPermissions || [];
  const hasRights = grantedPermissions.indexOf(permissionName) > 0;
  return hasRights ? <React.Fragment>{children}</React.Fragment> : null;
};

export default ProtectedContent;
