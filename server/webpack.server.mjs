import externals from 'webpack-node-externals';
import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.mjs';
const __dirname = path.resolve();
const config = {
  mode: 'production',
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [externals()],
};

export default merge(baseConfig, config);