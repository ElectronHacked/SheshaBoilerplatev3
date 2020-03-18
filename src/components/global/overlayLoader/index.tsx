import React, { SFC } from 'react';
// @ts-ignore
import styles from 'styles/_variables.scss';
import './styles.scss';
import loaderHelper, { SpinnerStyles } from './utils';

interface IProps {
  loadingText?: string;
  color?: string;
  loading?: boolean;
  style?: SpinnerStyles;
}

export const OverlayLoader: SFC<IProps> = ({
  color = styles.primaryColor,
  style = 'PulseLoader',
  loading = false,
  loadingText = 'Loading...',
}) => {
  const Loader = loaderHelper(style);

  if (!loading) {
    return null;
  }

  return (
    <div className="overlay-loader">
      <div className="body">
        <div className="loading-container">
          <Loader color={color} />
        </div>
        <p className="text">{loadingText}</p>
      </div>
    </div>
  );
};

export default OverlayLoader;
