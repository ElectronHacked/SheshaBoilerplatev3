import React from 'react';
import App from 'next/app';
import { CustomNProgress } from 'components';
import { RestfulProvider } from 'restful-react';
import { BASE_URL } from 'api/utils/constants';
import { RouteProvider, AuthProvider, GlobalProvider, UiProvider } from 'providers';

interface IState {
  headers: { [key: string]: string };
  tokenIsSet: boolean;
}

export default class Main extends App<{}, {}, IState> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      headers: {},
      tokenIsSet: false,
    };
  }

  componentDidMount() {
    this.setRequestHeaders();
  }

  componentWillReceiveProps() {
    if (!this.state.tokenIsSet) {
      this.setRequestHeaders(); // Try to update the the headers until you are successful
    }
  }

  setRequestHeaders() {
    import('utils/requestHeaders').then(({ requestHeaders }) => {
      const headers = requestHeaders();

      this.setState({ headers: requestHeaders(), tokenIsSet: !!headers.Authorization });
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <RestfulProvider
        base={BASE_URL}
        requestOptions={{
          headers: this.state.headers,
        }}
      >
        <GlobalProvider>
          <CustomNProgress />

          <RouteProvider>
            <AuthProvider>
              <UiProvider>
                <Component {...pageProps} />
              </UiProvider>
            </AuthProvider>
          </RouteProvider>
        </GlobalProvider>
      </RestfulProvider>
    );
  }
}
