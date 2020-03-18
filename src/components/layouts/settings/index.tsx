import React, { ReactNode, FC } from 'react';
import './styles.scss';
import { Layout as ShaLayout, SettingPanel, SettingGroup, SettingGroupLink, SettingsBody } from 'components';
import { withAuth } from 'hocs';

interface IProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export const SettingsLayout: FC<IProps> = ({ title, description, children }) => {
  return (
    <ShaLayout
      title={`Application Settings`}
      // title={`Settings / ${title}`}
      description="This is the Projects list Page"
      className="settings-layout"
      // showHeading={false}
    >
      <SettingPanel>
        <SettingGroup name="General">
          <SettingGroupLink title="Overview" linkTo="/settings/overview" icon="block" />
          <SettingGroupLink title="Logon" linkTo="/settings/logon" icon="login" />
          <SettingGroupLink title="Email" linkTo="/settings/email" icon="mail" />
          <SettingGroupLink title="SMS" linkTo="/settings/sms" icon="mobile" />
          <SettingGroupLink title="Push Notifications" linkTo="/settings/pushNotifications" icon="notification" />
          <SettingGroupLink title="Scheduled Jobs" linkTo="/settings/scheduledJobs" icon="schedule" />
        </SettingGroup>
      </SettingPanel>

      <SettingsBody title={title} description={description}>
        {children}
      </SettingsBody>
    </ShaLayout>
  );
};

export default withAuth(SettingsLayout);
