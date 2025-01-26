import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.mjs';
const __dirname = path.resolve();

const config = {
  mode: 'production',
  entry: './src/client/client.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

export default merge(baseConfig, config);