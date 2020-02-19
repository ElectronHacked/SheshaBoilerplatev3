import React, { FC } from 'react';
import NProgress from 'nprogress';
import './styles.scss';
import Router from 'next/router';

interface IProps {}

export const CustomNProgress: FC<IProps> = () => {
  const startProgress = () => NProgress.start();
  const stopProgress = (timer: NodeJS.Timeout) => {
    clearTimeout(timer);
    NProgress.done();
  };

  const showProgressBar = delay => {
    const timer = setTimeout(startProgress, delay);
    Router.events.on('routeChangeComplete', () => stopProgress(timer));
    Router.events.on('routeChangeError', () => stopProgress(timer));
  };

  Router.events.on('routeChangeStart', () => showProgressBar(10));
  return <React.Fragment />;
};

export default CustomNProgress;
