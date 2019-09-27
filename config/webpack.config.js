const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '../', dir);

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
  verbose: true,
});

module.exports = {
  entry: './app/index.js',
  target: 'node',
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
  node: {
    __dirname: false,
  },
  resolve: {
    alias: {
      _app: resolve('app'),
      _assets: resolve('app/assets/'),
      _utils: resolve('app/utils/'),
      _hooks: resolve('app/hooks/'),
      _atoms: resolve('app/components/atoms/'),
      _molecules: resolve('app/components/molecules/'),
      _organisms: resolve('app/components/organisms/'),
      _templates: resolve('app/components/templates/'),
      _pages: resolve('app/components/pages/'),
      _environment: resolve('app/components/environment/'),
      _store: resolve('app/store/'),
      _actions: resolve('app/store/actions/'),
      _reducers: resolve('app/store/reducers/'),
      _thunks: resolve('app/store/thunks/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [resolve('app')],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: { optimizationLevel: 7 },
              pngquant: { quality: [0.75, 0.90], speed: 3 },
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'icons/[name].[ext]' },
      },
      {
        test: /\.node/i,
        use: [{ loader: 'node-loader' }, { loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    CleanWebpackPluginConfig,
  ],
  performance: {
    hints: false,
  },
};
