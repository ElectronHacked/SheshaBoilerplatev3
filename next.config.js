require('./config/polyfills');

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const path = require('path');
const sassExtract = require('sass-extract');

const withConfig = nextRuntimeDotenv({
  public: ['ETHEKWINIBACKEND_URL'],
});

// Where your antd-custom.less file lives
// const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './styles/themes/index.less'), 'utf8'));

const theme = sassExtract.renderSync(
  {
    file: './styles/_variables.scss',
  },
  {
    plugins: [
      {
        plugin: 'sass-extract-js',
        options: {
          camelCase: false,
        },
      },
    ],
  }
);

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  // eslint-disable-next-line node/no-deprecated-api
  require.extensions['.less'] = file => {};
}

module.exports = withConfig(
  withPlugins(
    [
      [withCSS],
      [
        withLess,
        {
          lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: theme.vars, // make your antd custom effective
          },
        },
      ],
      [withSass],
      [withImages],
      [withConfig],
      [withBundleAnalyzer],
    ],
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html',
        },
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style.*?/;
          const origExternals = [...config.externals];

          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles) || request.match(/restful-react/)) return callback();

              if (typeof origExternals[0] === 'function') {
                origExternals[0](context, request, callback);
              } else {
                callback();
              }
            },
            ...(typeof origExternals[0] === 'function' ? [] : origExternals),
          ];

          config.module.rules.unshift({
            test: antStyles,
            use: 'null-loader',
          });
        }

        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty',
        };
        // Added aliases
        config.resolve.alias = {
          ...config.resolve.alias,
          '@root': path.join(__dirname),
          config: path.resolve(__dirname, 'lib/config.shim'),
        };

        return config;
      },
    }
  )
);
