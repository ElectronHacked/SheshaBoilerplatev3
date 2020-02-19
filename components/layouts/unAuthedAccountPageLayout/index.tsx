import React, { FC, ReactNode, useContext } from 'react';
import './styles.scss';
import { DesignContext } from 'contexts';
import { Row, Col } from 'antd';

interface IProps {
  className?: string;
  heading?: string;
  hint?: string;
  children?: ReactNode;
}

export const UnAuthedAccountPageLayout: FC<IProps> = ({ className, children, heading, hint }) => {
  const { accountFormCols } = useContext(DesignContext);

  return (
    <div className={`un-authed-account-page-layout ${className}`}>
      <div className="un-authed-account-page-layout-form-container">
        <Row>
          <Col {...accountFormCols}>
            <div className="un-authed-account-page-layout-form">
              <div className="un-authed-account-page-layout-logo">
                <img src="../static/images/app-logo.png" />
              </div>
            </div>

            {heading && <h2 className="un-authed-account-page-layout-heading">{heading}</h2>}

            {hint && <p className="un-authed-account-page-layout-hint">{hint}</p>}

            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UnAuthedAccountPageLayout;
