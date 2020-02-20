import React, {FC} from 'react';
import { Layout } from 'components';
import './styles.scss';

interface IProps {};

export const Account: FC<IProps> = () => (
  <Layout title="Account" description="This is the Account Page">
    <div className="account-page">
      <p>
        This is the <strong>Account</strong> page
      </p>
    </div>
  </Layout>
);

export default Account;
