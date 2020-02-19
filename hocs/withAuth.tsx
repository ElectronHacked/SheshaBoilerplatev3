import React, { FC, useContext, useEffect, ComponentType } from 'react';
import { AuthContext, AuthActionsContext } from 'contexts';
import { LOGIN_PAGE_URL, DASHBOARD_PAGE_URL } from 'routes';
import { OverlayLoader } from 'components';
import { useRouter } from 'next/router';
import { RouteActionsContext } from 'providers/route/routeStateContext';

/**
 *
 * @param Component - the component that is passed into the HOC can be either a function component or class component.
 *
 * @see https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
 */

export const withAuth = <P extends object>(Component: ComponentType<P>): FC<P> => (...props) => {
  const { isCheckingAuth, hasCheckedReauth, loginInfo } = useContext(AuthContext);
  const { checkAuth } = useContext(AuthActionsContext);
  const { goingToRoute } = useContext(RouteActionsContext);
  const user = loginInfo && loginInfo.user;

  const router = useRouter();

  const handleGoingToRoute = (shouldRedirect: boolean = false) => {
    const { asPath } = router;

    let redirectUrl = '';
    let nextRoute = '';

    if (asPath !== DASHBOARD_PAGE_URL && !asPath.includes(LOGIN_PAGE_URL)) {
      redirectUrl = `/?redirectUrl=${asPath}`;
      nextRoute = asPath;
    }

    if (shouldRedirect) {
      router.push(`${LOGIN_PAGE_URL}${redirectUrl}`);
    }

    goingToRoute(nextRoute);
  };

  useEffect(() => {
    if (!user) {
      if (!hasCheckedReauth) {
        handleGoingToRoute();

        checkAuth();
      } else {
        handleGoingToRoute(true);
      }
    }
  }, [hasCheckedReauth, isCheckingAuth]);

  return isCheckingAuth || !user ? (
    <OverlayLoader loading={true} loadingText="Initializing..." />
  ) : (
    <Component {...props as P} id={router.query.id} />
  );
};
