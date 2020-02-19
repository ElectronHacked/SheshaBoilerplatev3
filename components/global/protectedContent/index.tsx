import React, { FC, ReactNode, useContext } from 'react';
import { AuthContext } from 'contexts';

interface IProps {
    permissionName: string;
    children?: ReactNode;
}

export const ProtectedContent: FC<IProps> = ({ permissionName, children }) => {
    const { loginInfo } = useContext(AuthContext);
    const grantedPermissions = loginInfo?.user?.grantedPermissions || [];
    const hasRights = grantedPermissions.indexOf(permissionName) > 0;
    return hasRights
        ? <React.Fragment>{children}</React.Fragment>
        : null;
  };
  
export default ProtectedContent;